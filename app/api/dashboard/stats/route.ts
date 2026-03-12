import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/app/libs/supabase";

export async function GET() {
    try {
        const { userId } = await auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // 1. Total Trips (Completed + Upcoming)
        const { count: totalTrips } = await supabaseAdmin
            .from("bookings")
            .select("*", { count: "exact", head: true })
            .eq("clerk_user_id", userId)
            .in("status", ["upcoming", "completed"]);

        // 2. Saved Listings (Wishlist count)
        const { count: savedListings } = await supabaseAdmin
            .from("wishlists")
            .select("*", { count: "exact", head: true })
            .eq("clerk_user_id", userId);

        // 3. Upcoming Count
        const { count: upcomingCount } = await supabaseAdmin
            .from("bookings")
            .select("*", { count: "exact", head: true })
            .eq("clerk_user_id", userId)
            .eq("status", "upcoming");

        // 4. Total Spent
        const { data: spentData } = await supabaseAdmin
            .from("bookings")
            .select("total_price")
            .eq("clerk_user_id", userId)
            .in("status", ["upcoming", "completed"]);

        const totalSpent = spentData?.reduce((acc: number, b: { total_price: any }) => acc + Number(b.total_price), 0) || 0;

        return NextResponse.json({
            totalTrips: totalTrips || 0,
            savedListings: savedListings || 0,
            upcomingCount: upcomingCount || 0,
            totalSpent: totalSpent
        });
    } catch (error) {
        console.error("[DASHBOARD_STATS_GET]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
