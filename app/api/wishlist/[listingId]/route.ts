import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/app/libs/supabase";

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ listingId: string }> }
) {
    try {
        const { userId } = await auth();
        const { listingId } = await params;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!listingId) {
            return new NextResponse("Listing ID is required", { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from("wishlists")
            .delete()
            .eq("clerk_user_id", userId)
            .eq("listing_id", listingId);

        if (error) {
            throw error;
        }

        return new NextResponse("Deleted", { status: 200 });
    } catch (error) {
        console.error("[WISHLIST_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
