import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/app/libs/supabase";

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { id } = await params;
        const body = await req.json();
        const { status } = body;

        const { data, error } = await supabaseAdmin
            .from("bookings")
            .update({ status })
            .eq("id", id)
            .eq("clerk_user_id", userId)
            .select()
            .single();

        if (error) {
            throw error;
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("[BOOKING_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
