"use client";

import { useState } from "react";
import PageHero from "@/app/components/static/PageHero";

const howItWorks = [
    { step: "01", icon: "📨", title: "Share Your Invite Link", desc: "Copy your unique referral link and share it with friends via email, WhatsApp, or social media." },
    { step: "02", icon: "✅", title: "Friend Signs Up", desc: "Your friend creates a WorldBNB account using your referral link — takes less than 2 minutes." },
    { step: "03", icon: "🎉", title: "Both of You Earn", desc: "Your friend gets $30 off their first booking, and you get $30 credit after they complete their stay." },
];

export default function InviteFriendsPage() {
    const [copied, setCopied] = useState(false);
    const referralLink = "https://WorldBNB.com/invite/USER123";

    const copyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <PageHero
                badge="Community"
                title="Give $30, Get $30"
                subtitle="Invite your friends to WorldBNB. They get $30 off their first stay — you get $30 travel credit when they complete their booking."
                bgImage="/images/hero-community.png"
                gradient="from-pink-500 to-rose-600"
            />

            {/* Main Referral Card */}
            <section className="py-16 bg-white">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-100 rounded-3xl p-8 text-center">
                        <div className="text-7xl mb-5">🎁</div>
                        <h2 className="text-3xl font-black text-gray-900 mb-3">Your Referral Link</h2>
                        <p className="text-gray-500 mb-6 text-sm">Share this link with friends to start earning travel credits.</p>
                        <div className="flex gap-2 bg-white rounded-xl border border-gray-200 p-2 shadow-sm mb-6">
                            <input
                                readOnly
                                value={referralLink}
                                className="flex-1 px-4 py-2.5 text-sm text-gray-700 bg-transparent outline-none font-mono"
                            />
                            <button
                                onClick={copyLink}
                                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all shrink-0 ${copied ? "bg-green-500 text-white" : "bg-rose-500 hover:bg-rose-600 text-white"
                                    }`}
                            >
                                {copied ? "✓ Copied!" : "Copy"}
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mb-8">Or share via:</p>
                        <div className="flex justify-center gap-4">
                            {[
                                { label: "WhatsApp", icon: "💬", color: "bg-green-500 hover:bg-green-600" },
                                { label: "Email", icon: "📧", color: "bg-blue-500 hover:bg-blue-600" },
                                { label: "Twitter", icon: "🐦", color: "bg-sky-500 hover:bg-sky-600" },
                                { label: "Facebook", icon: "📘", color: "bg-indigo-600 hover:bg-indigo-700" },
                            ].map((s) => (
                                <button key={s.label} className={`${s.color} text-white font-bold px-4 py-3 rounded-xl transition-all flex items-center gap-2 text-sm`}>
                                    <span>{s.icon}</span>
                                    <span className="hidden sm:inline">{s.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorks.map((s) => (
                            <div key={s.step} className="bg-white rounded-2xl p-7 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">Step {s.step}</div>
                                <h3 className="font-black text-gray-900 text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credits Balance */}
            <section className="py-16 bg-white">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                        <h3 className="text-lg font-bold text-gray-400 mb-2">Your Travel Credits</h3>
                        <div className="text-5xl font-black text-white mb-2">$0.00</div>
                        <p className="text-gray-400 text-sm mb-6">Start inviting friends to earn credits!</p>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-white/10 rounded-xl p-4"><div className="text-2xl font-black">0</div><div className="text-gray-400 text-xs mt-1">Friends Invited</div></div>
                            <div className="bg-white/10 rounded-xl p-4"><div className="text-2xl font-black">0</div><div className="text-gray-400 text-xs mt-1">Stays Completed</div></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
