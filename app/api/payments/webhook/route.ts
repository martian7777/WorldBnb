import { NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/app/libs/stripe";
import { supabaseAdmin } from "@/app/libs/supabase";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get("Stripe-Signature") as string;

    console.log("[WEBHOOK] Received stripe-signature:", signature ? "present" : "missing");

    if (!process.env.STRIPE_WEBHOOK_SECRET || process.env.STRIPE_WEBHOOK_SECRET === 'whsec_your_webhook_secret') {
        console.error("[WEBHOOK] STRIPE_WEBHOOK_SECRET is not set or is using placeholder!");
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
        console.log("[WEBHOOK] Event constructed successfully:", event.type);
    } catch (error: any) {
        console.error(`[WEBHOOK] Error: ${error.message}`);
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const session = event.data.object as any;

    if (event.type === "checkout.session.completed") {
        const bookingId = session?.metadata?.bookingId;
        const clerkUserId = session?.metadata?.clerkUserId;

        console.log("[WEBHOOK] Processing checkout.session.completed for booking:", bookingId);

        if (!bookingId) {
            console.error("[WEBHOOK] Booking ID not found in session metadata");
            return new NextResponse("Booking ID not found in metadata", { status: 400 });
        }

        // 1. Update booking status to 'upcoming'
        console.log("[WEBHOOK] Updating booking status to 'upcoming'...");
        const { data: booking, error: bookingError } = await supabaseAdmin
            .from("bookings")
            .update({
                status: "upcoming",
                stripe_payment_intent_id: session.payment_intent as string,
            })
            .eq("id", bookingId)
            .select()
            .single();

        if (bookingError) {
            console.error("[WEBHOOK] Error updating booking:", bookingError);
            return new NextResponse("Error updating booking", { status: 500 });
        }

        console.log("[WEBHOOK] Booking updated successfully:", booking.id);

        // 2. Mark listing as sold
        console.log("[WEBHOOK] Marking listing as sold:", booking.listing_id);
        const { error: listingError } = await supabaseAdmin
            .from("listings")
            .update({ is_sold: true })
            .eq("id", booking.listing_id);

        if (listingError) {
            console.error("[WEBHOOK] Error marking listing as sold:", listingError);
        } else {
            console.log("[WEBHOOK] Listing marked as sold successfully");
        }

        // 3. Create notification for user
        console.log("[WEBHOOK] Creating notification for user:", clerkUserId);
        const { error: notificationError } = await supabaseAdmin.from("notifications").insert({
            clerk_user_id: clerkUserId,
            title: "Payment Successful! 🎉",
            body: `Your booking for ${bookingId} has been confirmed.`,
            type: "booking",
            related_booking_id: bookingId,
        });

        if (notificationError) {
            console.error("[WEBHOOK] Error creating notification:", notificationError);
        } else {
            console.log("[WEBHOOK] Notification created successfully");
        }

        console.log(`[WEBHOOK] COMPLETED: Booking ${bookingId} confirmed.`);
    }

    if (event.type === "checkout.session.expired") {
        const bookingId = session?.metadata?.bookingId;
        console.log("[WEBHOOK] Processing checkout.session.expired for booking:", bookingId);
        if (bookingId) {
            await supabaseAdmin
                .from("bookings")
                .update({ status: "cancelled" })
                .eq("id", bookingId);
            console.log("[WEBHOOK] Booking cancelled due to expiration");
        }
    }

    return new NextResponse(null, { status: 200 });
}
