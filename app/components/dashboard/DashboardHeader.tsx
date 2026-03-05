"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const PAGE_TITLES: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/bookings": "My Bookings",
    "/wishlist": "Wishlist",
    "/notifications": "Notifications",
    "/profile": "My Profile",
    "/settings": "Settings",
};

export default function DashboardHeader() {
    const pathname = usePathname();
    const { user } = useAuth();
    const title = PAGE_TITLES[pathname ?? ""] ?? "Dashboard";

    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-gray-100 px-6 h-16 flex items-center justify-between">
            {/* Page title */}
            <h1 className="text-xl font-black text-gray-900">{title}</h1>

            {/* Right side */}
            <div className="flex items-center gap-3">
                {/* Notification bell */}
                <Link
                    href="/notifications"
                    className="relative w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    aria-label="View notifications"
                >
                    <svg className="w-4.5 h-4.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" width={18} height={18}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                </Link>

                {/* Browse listings */}
                <Link
                    href="/home"
                    className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    Explore
                </Link>

                {/* Avatar with link to profile */}
                <Link href="/profile" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        {user?.name?.[0]?.toUpperCase() ?? "U"}
                    </div>
                    <span className="hidden sm:block text-sm font-semibold text-gray-700">{user?.name?.split(" ")[0] ?? "User"}</span>
                </Link>
            </div>
        </header>
    );
}
