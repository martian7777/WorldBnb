"use client";

import { useState } from "react";

const savedListings = [
    { id: 1, title: "Cliffside Villa with Infinity Pool", location: "Positano, Italy", price: 320, rating: 4.98, reviews: 214, image: "🇮🇹", category: "Villa" },
    { id: 2, title: "Mountain Cabin with Hot Tub", location: "Banff, Canada", price: 185, rating: 4.92, reviews: 87, image: "🏔️", category: "Cabin" },
    { id: 3, title: "Floating Bungalow Over Water", location: "Maldives", price: 590, rating: 5.0, reviews: 43, image: "🌊", category: "Unique" },
    { id: 4, title: "Art-Deco Apartment — Beach Walk", location: "Miami, USA", price: 230, rating: 4.85, reviews: 156, image: "🌴", category: "Apartment" },
    { id: 5, title: "Castle Suite in the Highlands", location: "Inverness, Scotland", price: 410, rating: 4.95, reviews: 62, image: "🏰", category: "Unique" },
    { id: 6, title: "Zen Garden Guesthouse", location: "Ubud, Bali", price: 140, rating: 4.89, reviews: 198, image: "🌿", category: "Villa" },
];

export default function WishlistPage() {
    const [removed, setRemoved] = useState<number[]>([]);

    const visible = savedListings.filter((l) => !removed.includes(l.id));

    return (
        <div className="space-y-6">
            <p className="text-gray-500 text-sm">{visible.length} saved listing{visible.length !== 1 ? "s" : ""}</p>

            {visible.length === 0 ? (
                <div className="bg-white rounded-2xl p-20 text-center border border-gray-100">
                    <div className="text-6xl mb-4">💔</div>
                    <h3 className="font-black text-slate-900 text-xl mb-2">Your wishlist is empty</h3>
                    <p className="text-gray-500 text-sm mb-6">Save listings you love by tapping the ❤️ icon.</p>
                    <a href="/" className="inline-block bg-[#FF6B4A] text-white font-bold px-6 py-3 rounded-2xl hover:bg-[#E55A3D] transition-all">
                        Browse Listings
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visible.map((listing) => (
                        <div key={listing.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden group">
                            {/* Image placeholder */}
                            <div className="relative h-44 bg-gradient-to-br from-[#FFF0ED] to-pink-50 flex items-center justify-center">
                                <span className="text-6xl">{listing.image}</span>
                                {/* Remove from wishlist */}
                                <button
                                    onClick={() => setRemoved((prev) => [...prev, listing.id])}
                                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#FF6B4A] hover:text-gray-400 shadow-md transition-colors"
                                    aria-label="Remove from wishlist"
                                >
                                    ❤️
                                </button>
                                <span className="absolute top-3 left-3 bg-white text-slate-700 text-xs font-bold px-2.5 py-1 rounded-full">
                                    {listing.category}
                                </span>
                            </div>
                            {/* Info */}
                            <div className="p-5">
                                <h3 className="font-black text-slate-900 text-sm leading-snug mb-1 group-hover:text-[#FF6B4A] transition-colors">{listing.title}</h3>
                                <p className="text-xs text-gray-400 mb-3">{listing.location}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="font-black text-slate-900">${listing.price}</span>
                                        <span className="text-gray-400 text-xs"> / night</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <span className="text-amber-400">★</span>
                                        <span className="font-semibold">{listing.rating}</span>
                                        <span>({listing.reviews})</span>
                                    </div>
                                </div>
                                <button className="w-full mt-4 bg-[#FF6B4A] hover:bg-[#E55A3D] text-white font-bold text-sm py-2.5 rounded-xl transition-all">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
