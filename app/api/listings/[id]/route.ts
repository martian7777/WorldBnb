import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/libs/supabase";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        if (!id) {
            return new NextResponse("Listing ID is required", { status: 400 });
        }

        const { data, error } = await supabaseAdmin
            .from("listings")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                return new NextResponse("Not Found", { status: 404 });
            }
            throw error;
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("[LISTING_GET_ID]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
