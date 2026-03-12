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

        const { error } = await supabaseAdmin
            .from("notifications")
            .update({ is_read: true })
            .eq("id", id)
            .eq("clerk_user_id", userId);

        if (error) {
            throw error;
        }

        return new NextResponse("Success", { status: 200 });
    } catch (error) {
        console.error("[NOTIFICATION_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
