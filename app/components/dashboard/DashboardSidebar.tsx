"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

const navItems = [
    { href: "/dashboard", icon: "🏠", label: "Dashboard" },
    { href: "/bookings", icon: "📅", label: "My Bookings" },
    { href: "/wishlist", icon: "❤️", label: "Wishlist" },
    { href: "/notifications", icon: "🔔", label: "Notifications", badge: 3 },
    { href: "/profile", icon: "👤", label: "Profile" },
    { href: "/settings", icon: "⚙️", label: "Settings" },
];

export default function DashboardSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();

    function handleLogout() {
        logout();
        router.push("/");
    }

    return (
        <aside className="flex flex-col h-full bg-white border-r border-gray-100">
            {/* Logo */}
            <div className="px-6 py-5 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-sm">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                    <span className="text-lg font-black tracking-tight text-rose-500">
                        world<span className="text-gray-900">bnb</span>
                    </span>
                </Link>
            </div>

            {/* User info */}
            <div className="px-4 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3 bg-rose-50 rounded-2xl px-3 py-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {user?.name?.[0]?.toUpperCase() ?? "U"}
                    </div>
                    <div className="min-w-0">
                        <p className="font-bold text-gray-900 text-sm truncate">{user?.name ?? "Guest"}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email ?? ""}</p>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all group relative ${isActive
                                ? "bg-rose-500 text-white shadow-md shadow-rose-200"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            <span className="text-base">{item.icon}</span>
                            <span>{item.label}</span>
                            {item.badge && !isActive && (
                                <span className="ml-auto bg-rose-100 text-rose-600 text-xs font-bold px-1.5 py-0.5 rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom actions */}
            <div className="px-3 py-4 border-t border-gray-100 space-y-1">
                <Link
                    href="/"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
                >
                    <span className="text-base">🔍</span>
                    Browse Listings
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
                >
                    <span className="text-base">🚪</span>
                    Log Out
                </button>
            </div>
        </aside>
    );
}
