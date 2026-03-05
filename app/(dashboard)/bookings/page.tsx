"use client";

import { useState } from "react";

const allBookings = [
    { id: "BK001", destination: "Santorini, Greece", property: "Cliffside Villa with Sea View", dates: "Apr 12 – Apr 18, 2026", nights: 6, price: "$1,140", status: "upcoming", image: "🏖️", host: "Maria K.", confirmation: "WB-2026-4121" },
    { id: "BK002", destination: "Kyoto, Japan", property: "Traditional Machiya Townhouse", dates: "Jun 3 – Jun 8, 2026", nights: 5, price: "$875", status: "upcoming", image: "🏯", host: "Takashi M.", confirmation: "WB-2026-6032" },
    { id: "BK003", destination: "Bali, Indonesia", property: "Jungle Treehouse with Pool", dates: "Jan 5 – Jan 12, 2026", nights: 7, price: "$1,260", status: "completed", image: "🌴", host: "I Made S.", confirmation: "WB-2026-0105" },
    { id: "BK004", destination: "Paris, France", property: "Romantic Studio — Marais District", dates: "Dec 20 – Dec 26, 2025", nights: 6, price: "$960", status: "completed", image: "🗼", host: "Sophie B.", confirmation: "WB-2025-1220" },
    { id: "BK005", destination: "New York, USA", property: "SoHo Loft with Skyline View", dates: "Nov 1 – Nov 3, 2025", nights: 2, price: "$480", status: "cancelled", image: "🗽", host: "James T.", confirmation: "WB-2025-1101" },
];

const STATUS_STYLES: Record<string, string> = {
    upcoming: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-gray-100 text-gray-500",
};

const FILTERS = ["All", "Upcoming", "Completed", "Cancelled"] as const;
type Filter = (typeof FILTERS)[number];

export default function BookingsPage() {
    const [filter, setFilter] = useState<Filter>("All");

    const filtered = filter === "All"
        ? allBookings
        : allBookings.filter((b) => b.status === filter.toLowerCase());

    return (
        <div className="space-y-6">
            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap">
                {FILTERS.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${filter === f
                                ? "bg-rose-500 text-white shadow-md"
                                : "bg-white border border-gray-200 text-gray-600 hover:border-rose-300"
                            }`}
                    >
                        {f} {f !== "All" && `(${allBookings.filter(b => b.status === f.toLowerCase()).length})`}
                    </button>
                ))}
            </div>

            {/* Booking cards */}
            {filtered.length === 0 ? (
                <div className="bg-white rounded-2xl p-16 text-center border border-gray-100">
                    <div className="text-5xl mb-3">📭</div>
                    <p className="text-gray-500 text-sm">No bookings found.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {filtered.map((b) => (
                        <div key={b.id} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-4xl shrink-0">{b.image}</div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <h3 className="font-black text-gray-900">{b.destination}</h3>
                                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full capitalize ${STATUS_STYLES[b.status]}`}>{b.status}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-1">{b.property}</p>
                                    <p className="text-xs text-gray-400">{b.dates} · {b.nights} nights · Host: {b.host}</p>
                                    <p className="text-xs text-gray-400 font-mono mt-0.5">#{b.confirmation}</p>
                                </div>
                                <div className="shrink-0 text-right">
                                    <div className="text-xl font-black text-gray-900">{b.price}</div>
                                    <div className="text-xs text-gray-400">{b.nights} nights</div>
                                    {b.status === "upcoming" && (
                                        <button className="mt-2 text-xs font-bold text-rose-500 hover:text-rose-700 border border-rose-200 hover:border-rose-400 px-3 py-1 rounded-lg transition-all">
                                            Manage
                                        </button>
                                    )}
                                    {b.status === "completed" && (
                                        <button className="mt-2 text-xs font-bold text-amber-600 hover:text-amber-800 border border-amber-200 hover:border-amber-400 px-3 py-1 rounded-lg transition-all">
                                            ⭐ Review
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
