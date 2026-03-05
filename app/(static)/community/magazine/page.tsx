"use client";

import { useState } from "react";
import PageHero from "@/app/components/static/PageHero";

const articles = [
    { category: "Travel", tag: "🌏", title: "The 10 Most Underrated Cities to Visit in 2026", excerpt: "Skip the tourist traps — these hidden gems offer authentic culture, affordable stays, and experiences money can't buy.", date: "March 1, 2026", readTime: "6 min read", color: "from-blue-500 to-indigo-600" },
    { category: "Hosting", tag: "🏡", title: "How Maria Turned Her Spare Room Into $3,000 a Month", excerpt: "A single mom in Lisbon shares how hosting on WorldBNB changed her life — and how you can do it too.", date: "Feb 25, 2026", readTime: "4 min read", color: "from-rose-500 to-pink-600" },
    { category: "Design", tag: "🎨", title: "Airbnb Aesthetic: How to Design a Space Guests Love", excerpt: "Interior design tips from top-rated WorldBNB hosts — from lighting tricks to the one plant that makes all the difference.", date: "Feb 20, 2026", readTime: "5 min read", color: "from-amber-500 to-orange-600" },
    { category: "Food", tag: "🍜", title: "Eating Like a Local: Food Markets Across Southeast Asia", excerpt: "From Bangkok's floating markets to Hanoi's street food alleys — your ultimate culinary travel guide.", date: "Feb 15, 2026", readTime: "7 min read", color: "from-emerald-500 to-teal-600" },
    { category: "Travel", tag: "🌿", title: "How to Travel Sustainably Without Sacrificing Comfort", excerpt: "Eco-conscious travel doesn't mean roughing it. Here's how WorldBNB hosts are leading the green travel revolution.", date: "Feb 10, 2026", readTime: "5 min read", color: "from-green-500 to-emerald-600" },
    { category: "Hosting", tag: "💻", title: "The Best WorldBNB Rentals for Digital Nomads in 2026", excerpt: "Fast WiFi, desk space, and stunning views — we ranked the top 15 work-friendly rentals you can book right now.", date: "Feb 5, 2026", readTime: "8 min read", color: "from-violet-500 to-purple-600" },
];

const FILTERS = ["All", "Travel", "Hosting", "Design", "Food"] as const;
type Filter = (typeof FILTERS)[number];

export default function MagazinePage() {
    const [activeFilter, setActiveFilter] = useState<Filter>("All");

    const filtered = activeFilter === "All"
        ? articles
        : articles.filter((a) => a.category === activeFilter);

    return (
        <>
            <PageHero
                badge="Community"
                title="WorldBNB Magazine"
                subtitle="Stories, guides, and inspiration from the WorldBNB community — travelers, hosts, and everyone in between."
                bgImage="/images/hero-community.png"
            />

            {/* Featured Article */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row gap-8 items-center">
                        <div className="flex-1">
                            <span className="inline-block bg-violet-500/30 border border-violet-400/30 text-violet-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">Featured Story</span>
                            <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">World's Friendliest Hosts: The 2026 WorldBNB Awards</h2>
                            <p className="text-gray-300 leading-relaxed mb-6">We travelled to 40 countries to find the hosts that go above and beyond — the ones who leave fresh flowers, write city guides, and make guests feel like family.</p>
                            <a href="#" className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-bold px-6 py-3 rounded-xl transition-all">
                                Read Full Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </div>
                        <div className="text-8xl lg:text-9xl select-none">🏆</div>
                    </div>
                </div>
            </section>

            {/* Article Grid with working filter */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl font-black text-gray-900">
                            Latest Articles <span className="text-gray-400 font-normal text-lg">({filtered.length})</span>
                        </h2>
                        <div className="flex gap-2 flex-wrap">
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${activeFilter === f
                                            ? "bg-violet-600 text-white shadow-md"
                                            : "bg-white border border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-600"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="py-20 text-center text-gray-400">No articles in this category yet.</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filtered.map((a) => (
                                <article key={a.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                    <div className={`h-36 bg-gradient-to-br ${a.color} flex items-center justify-center`}>
                                        <span className="text-5xl">{a.tag}</span>
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">{a.category}</span>
                                        <h3 className="font-black text-gray-900 text-lg mt-2 mb-2 group-hover:text-violet-600 transition-colors leading-snug">{a.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4">
                                            <span>{a.date}</span>
                                            <span>{a.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700 text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-white mb-4">Never Miss a Story</h2>
                    <p className="text-white/80 mb-8">Get the best travel guides and hosting tips delivered to your inbox every week.</p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white" />
                        <button className="bg-white text-violet-700 font-bold px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">Subscribe</button>
                    </div>
                </div>
            </section>
        </>
    );
}
