"use client";

import { useState } from "react";

const notifications = [
    { id: 1, icon: "✅", title: "Booking Confirmed", body: "Your Santorini Villa booking for Apr 12–18 has been confirmed by host Maria K.", time: "2 hours ago", read: false, type: "booking" },
    { id: 2, icon: "💬", title: "New Message from Host", body: "Maria K.: Hello! Just wanted to reach out before your stay. Feel free to message me with any questions.", time: "5 hours ago", read: false, type: "message" },
    { id: 3, icon: "📉", title: "Price Drop Alert", body: "Good news! Paris Romantic Studio dropped 12% ($192/night → $168/night). It's still in your wishlist.", time: "2 days ago", read: false, type: "deal" },
    { id: 4, icon: "⭐", title: "Leave a Review", body: "How was your Bali Treehouse stay? Share your experience to help future guests.", time: "3 days ago", read: true, type: "review" },
    { id: 5, icon: "🎉", title: "You Earned a Travel Credit", body: "Your friend Alex signed up through your referral link! $30 travel credit has been added to your account.", time: "5 days ago", read: true, type: "reward" },
    { id: 6, icon: "🏡", title: "New Listing in Your Area", body: "3 new beachfront villas matching your preferences just listed in Santorini.", time: "1 week ago", read: true, type: "discovery" },
];

const TYPE_COLORS: Record<string, string> = {
    booking: "bg-blue-100",
    message: "bg-violet-100",
    deal: "bg-green-100",
    review: "bg-amber-100",
    reward: "bg-rose-100",
    discovery: "bg-teal-100",
};

export default function NotificationsPage() {
    const [items, setItems] = useState(notifications);

    function markAllRead() {
        setItems((prev) => prev.map((n) => ({ ...n, read: true })));
    }

    function markRead(id: number) {
        setItems((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
    }

    const unreadCount = items.filter((n) => !n.read).length;

    return (
        <div className="max-w-2xl space-y-5">
            {/* Header row */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    {unreadCount > 0 ? <><strong className="text-gray-900">{unreadCount}</strong> unread</> : "All caught up 🎉"}
                </p>
                {unreadCount > 0 && (
                    <button onClick={markAllRead} className="text-sm font-semibold text-rose-500 hover:text-rose-700 transition-colors">
                        Mark all as read
                    </button>
                )}
            </div>

            {items.map((n) => (
                <div
                    key={n.id}
                    onClick={() => markRead(n.id)}
                    className={`bg-white rounded-2xl p-5 border shadow-sm cursor-pointer transition-all hover:shadow-md ${n.read ? "border-gray-100 opacity-75" : "border-rose-100 hover:-translate-y-0.5"
                        }`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-2xl ${TYPE_COLORS[n.type]} flex items-center justify-center text-xl shrink-0`}>
                            {n.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <p className={`font-bold text-sm ${n.read ? "text-gray-600" : "text-gray-900"}`}>{n.title}</p>
                                {!n.read && <span className="w-2 h-2 bg-rose-500 rounded-full shrink-0 mt-1.5" />}
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed mt-1">{n.body}</p>
                            <p className="text-xs text-gray-400 mt-2">{n.time}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
