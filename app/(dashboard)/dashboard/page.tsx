"use client";

import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import StatCard from "@/app/components/dashboard/StatCard";

const stats = [
    { icon: "✈️", label: "Total Trips", value: 12, trend: "2 this year", trendUp: true, accent: "bg-rose-100 text-rose-600" },
    { icon: "❤️", label: "Saved Listings", value: 38, trend: "5 new", trendUp: true, accent: "bg-pink-100 text-pink-600" },
    { icon: "⭐", label: "Avg. Review", value: "4.9", trend: "0.1 up", trendUp: true, accent: "bg-amber-100 text-amber-600" },
    { icon: "💸", label: "Total Spent", value: "$4,280", trend: "vs last year", trendUp: false, accent: "bg-indigo-100 text-indigo-600" },
];

const upcomingTrips = [
    { id: 1, destination: "Santorini, Greece", property: "Cliffside Villa with Sea View", dates: "Apr 12 – Apr 18, 2026", guests: 2, nights: 6, price: "$1,140", image: "🏖️", status: "Confirmed", color: "bg-green-100 text-green-700" },
    { id: 2, destination: "Kyoto, Japan", property: "Traditional Machiya Townhouse", dates: "Jun 3 – Jun 8, 2026", guests: 2, nights: 5, price: "$875", image: "🏯", status: "Pending", color: "bg-amber-100 text-amber-700" },
];

const recentActivity = [
    { icon: "✅", text: "Booking confirmed for Santorini Villa", time: "2 hours ago", accent: "bg-green-100" },
    { icon: "💬", text: "New message from host Maria R.", time: "5 hours ago", accent: "bg-blue-100" },
    { icon: "⭐", text: "You left a review for Bali Treehouse", time: "Yesterday", accent: "bg-amber-100" },
    { icon: "🔔", text: "Price drop alert: Paris Studio –12%", time: "2 days ago", accent: "bg-rose-100" },
];

export default function DashboardPage() {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            {/* Welcome */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-8 text-white">
                <p className="text-rose-200 text-sm font-semibold mb-1">Welcome back</p>
                <h2 className="text-3xl font-black mb-2">Hey, {user?.name?.split(" ")[0] ?? "Traveller"} 👋</h2>
                <p className="text-rose-100 text-sm max-w-sm">
                    You have <strong>2 upcoming trips</strong> and <strong>3 unread notifications</strong>. What would you like to do today?
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                    <Link href="/" className="bg-white text-rose-500 font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-lg transition-all">
                        🔍 Browse Stays
                    </Link>
                    <Link href="/bookings" className="bg-white/20 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-white/30 transition-all border border-white/30">
                        📅 My Bookings
                    </Link>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Trips */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-black text-gray-900 text-lg">Upcoming Trips</h3>
                        <Link href="/bookings" className="text-sm text-rose-500 font-semibold hover:text-rose-700">View All →</Link>
                    </div>
                    <div className="space-y-4">
                        {upcomingTrips.map((trip) => (
                            <div key={trip.id} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center text-3xl shrink-0">{trip.image}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-black text-gray-900 text-sm">{trip.destination}</span>
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trip.color}`}>{trip.status}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 truncate mb-1">{trip.property}</p>
                                        <p className="text-xs text-gray-400">{trip.dates} · {trip.guests} guests · {trip.nights} nights</p>
                                    </div>
                                    <div className="text-sm font-black text-gray-900 shrink-0">{trip.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-black text-gray-900 text-lg">Activity</h3>
                        <Link href="/notifications" className="text-sm text-rose-500 font-semibold hover:text-rose-700">All →</Link>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        {recentActivity.map((item, i) => (
                            <div key={i} className={`flex items-start gap-3 px-5 py-4 ${i < recentActivity.length - 1 ? "border-b border-gray-50" : ""}`}>
                                <div className={`w-8 h-8 rounded-full ${item.accent} flex items-center justify-center text-sm shrink-0`}>{item.icon}</div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-700 font-medium leading-snug">{item.text}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
