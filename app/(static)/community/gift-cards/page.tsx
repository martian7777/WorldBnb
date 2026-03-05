"use client";

import { useState } from "react";
import PageHero from "@/app/components/static/PageHero";

const amounts = [25, 50, 75, 100, 150, 200];
const designs = [
    { id: "adventure", label: "Adventure", emoji: "🏔️", desc: "For the explorer in your life" },
    { id: "beach", label: "Beach Escape", emoji: "🏖️", desc: "Sun, sand & total relaxation" },
    { id: "romance", label: "Romantic", emoji: "💕", desc: "Perfect for couples" },
    { id: "family", label: "Family Fun", emoji: "👨‍👩‍👧", desc: "Create memories together" },
];

export default function GiftCardsPage() {
    const [selectedAmount, setSelectedAmount] = useState(50);
    const [customAmount, setCustomAmount] = useState("");
    const [selectedDesign, setSelectedDesign] = useState("adventure");

    return (
        <>
            <PageHero
                badge="Community"
                title="WorldBNB Gift Cards"
                subtitle="Give the gift of travel. WorldBNB Gift Cards are redeemable for stays at any of our 500,000+ listings worldwide."
                bgImage="/images/hero-community.png"
                gradient="from-amber-500 to-orange-500"
            />

            {/* Purchase UI */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left: Configuration */}
                        <div className="space-y-8">
                            {/* Amount */}
                            <div>
                                <h3 className="font-black text-gray-900 text-lg mb-4">Choose Amount</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {amounts.map((a) => (
                                        <button
                                            key={a}
                                            onClick={() => { setSelectedAmount(a); setCustomAmount(""); }}
                                            className={`py-3 rounded-xl font-bold text-sm transition-all border-2 ${selectedAmount === a && !customAmount
                                                ? "border-amber-500 bg-amber-50 text-amber-700"
                                                : "border-gray-200 bg-white text-gray-700 hover:border-amber-300"
                                                }`}
                                        >
                                            ${a}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-3">
                                    <input
                                        type="number"
                                        placeholder="Or enter custom amount ($20–$5000)"
                                        value={customAmount}
                                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>
                            </div>

                            {/* Design */}
                            <div>
                                <h3 className="font-black text-gray-900 text-lg mb-4">Choose Design</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {designs.map((d) => (
                                        <button
                                            key={d.id}
                                            onClick={() => setSelectedDesign(d.id)}
                                            className={`p-4 rounded-xl text-left border-2 transition-all ${selectedDesign === d.id ? "border-amber-500 bg-amber-50" : "border-gray-200 bg-white hover:border-amber-300"
                                                }`}
                                        >
                                            <div className="text-3xl mb-2">{d.emoji}</div>
                                            <div className="font-bold text-gray-900 text-sm">{d.label}</div>
                                            <div className="text-gray-500 text-xs mt-0.5">{d.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recipient */}
                            <div>
                                <h3 className="font-black text-gray-900 text-lg mb-4">Recipient Details</h3>
                                <div className="space-y-3">
                                    <input type="text" placeholder="Recipient's name" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                    <input type="email" placeholder="Recipient's email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                    <textarea placeholder="Personal message (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none" />
                                </div>
                            </div>
                        </div>

                        {/* Right: Preview + Checkout */}
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {/* Card Preview */}
                            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 text-white shadow-xl">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">🏠</div>
                                    <span className="font-black text-lg">WorldBNB</span>
                                </div>
                                <div className="text-6xl mb-3">{designs.find(d => d.id === selectedDesign)?.emoji}</div>
                                <p className="text-white/80 text-sm mb-6">{designs.find(d => d.id === selectedDesign)?.desc}</p>
                                <div className="text-4xl font-black">${customAmount || selectedAmount}</div>
                                <div className="text-white/70 text-sm mt-1">Gift Card</div>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
                                <h3 className="font-bold text-gray-900">Order Summary</h3>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Gift Card Amount</span>
                                    <span className="font-bold">${customAmount || selectedAmount}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>Processing Fee</span>
                                    <span className="text-green-600 font-bold">Free</span>
                                </div>
                                <div className="border-t pt-4 flex justify-between font-black text-gray-900">
                                    <span>Total</span>
                                    <span>${customAmount || selectedAmount}</span>
                                </div>
                                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg">
                                    Purchase Gift Card
                                </button>
                                <p className="text-xs text-gray-400 text-center">Delivered instantly via email. No expiry date.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to redeem */}
            <section className="py-14 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-xl font-black text-gray-900 mb-8">How to Redeem</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[{ icon: "📧", step: "Receive", desc: "Your recipient gets an email with the gift card code instantly." }, { icon: "🏠", step: "Browse", desc: "They browse 500K+ listings and find their perfect stay." }, { icon: "✅", step: "Apply", desc: "Enter the code at checkout — balance applied automatically." }].map((s) => (
                            <div key={s.step} className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                <div className="text-3xl mb-3">{s.icon}</div>
                                <div className="font-black text-gray-900 mb-1">{s.step}</div>
                                <div className="text-gray-500 text-sm">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
