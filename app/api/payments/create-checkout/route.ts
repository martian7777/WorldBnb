import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import stripe from "@/app/libs/stripe";
import { supabaseAdmin } from "@/app/libs/supabase";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if (!userId || !user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { listingId, checkIn, checkOut, guests, totalPrice } = body;

        if (!listingId || !checkIn || !checkOut || !guests || !totalPrice) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        // 0. Ensure user profile exists in Supabase (Sync from Clerk)
        const profileData = {
            clerk_user_id: userId,
            email: user.emailAddresses[0].emailAddress,
            full_name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.username || "Guest",
            avatar_url: user.imageUrl,
            updated_at: new Date().toISOString()
        };

        console.log("[CREATE_CHECKOUT] Syncing profile for user:", userId);
        const { error: profileError } = await supabaseAdmin
            .from("profiles")
            .upsert(profileData, { onConflict: 'clerk_user_id' });

        if (profileError) {
            console.error("[PROFILE_SYNC_ERROR]", profileError);
            return new NextResponse(`Profile Sync Error: ${profileError.message}`, { status: 500 });
        }
        console.log("[CREATE_CHECKOUT] Profile synced successfully");

        // 1. Fetch listing details for Stripe line items
        const { data: listing } = await supabaseAdmin
            .from("listings")
            .select("*")
            .eq("id", listingId)
            .single();

        if (!listing) {
            return new NextResponse("Listing not found", { status: 404 });
        }

        // 2. Create a pending booking in Supabase
        const confirmationCode = `WB-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        const { data: booking, error: bookingError } = await supabaseAdmin
            .from("bookings")
            .insert({
                clerk_user_id: userId,
                listing_id: listingId,
                check_in: checkIn,
                check_out: checkOut,
                guests,
                total_price: totalPrice,
                status: 'pending',
                confirmation_code: confirmationCode
            })
            .select()
            .single();

        if (bookingError) throw bookingError;

        // 3. Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: listing.title,
                            description: `Stay at ${listing.location}, ${listing.country}`,
                            images: [listing.image_url.startsWith('http') ? listing.image_url : 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1080'],
                        },
                        unit_amount: Math.round(totalPrice * 100), // Stripe expects cents
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/bookings/success?bookingId=${booking.id}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/wishlist?cancelled=1`,
            metadata: {
                bookingId: booking.id,
                clerkUserId: userId,
            },
        });

        // 4. Update booking with Stripe Session ID
        await supabaseAdmin
            .from("bookings")
            .update({ stripe_session_id: session.id })
            .eq("id", booking.id);

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("[CREATE_CHECKOUT]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
