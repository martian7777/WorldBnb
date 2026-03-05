"use client";

import { useState } from "react";
import PageHero from "@/app/components/static/PageHero";

const pressReleases = [
    { date: "Mar 1, 2026", category: "Product", title: "WorldBNB Launches AI-Powered Smart Matching for Guests and Hosts", excerpt: "New feature uses machine learning to match guests with perfectly suited properties based on travel style, past stays, and host preferences.", tag: "Product Announcement", tagColor: "bg-blue-100 text-blue-700" },
    { date: "Feb 18, 2026", category: "Expansion", title: "WorldBNB Expands into 15 New African Markets", excerpt: "The platform's rapid growth continues as it launches dedicated support and local payment methods across 15 African countries.", tag: "Expansion", tagColor: "bg-green-100 text-green-700" },
    { date: "Feb 5, 2026", category: "Financial", title: "WorldBNB Surpasses 1 Million Active Hosts Worldwide", excerpt: "WorldBNB celebrates a major milestone as the platform's host community crosses the 1 million mark, spanning 190 countries.", tag: "Milestone", tagColor: "bg-amber-100 text-amber-700" },
    { date: "Jan 22, 2026", category: "Expansion", title: "WorldBNB Partners with Leading Airlines for Bundled Travel Packages", excerpt: "A new strategic partnership enables guests to book flights and accommodations together, saving up to 30% on combined travel costs.", tag: "Partnership", tagColor: "bg-purple-100 text-purple-700" },
    { date: "Jan 10, 2026", category: "Financial", title: "2025 Annual Report: Revenue Up 42% YoY, Bookings Hit Record High", excerpt: "WorldBNB's 2025 annual report reveals record-breaking performance with $2.8 billion in gross revenue and 80 million total nights booked.", tag: "Financial", tagColor: "bg-rose-100 text-rose-700" },
    { date: "Dec 14, 2025", category: "Product", title: "WorldBNB Named World's #1 Travel Platform by Global Travel Awards", excerpt: "For the second consecutive year, WorldBNB has been recognized as the leading travel accommodation platform globally.", tag: "Award", tagColor: "bg-indigo-100 text-indigo-700" },
];

const mediaContacts = [
    { region: "Global", email: "press@WorldBNB.com" },
    { region: "APAC", email: "press.apac@WorldBNB.com" },
    { region: "EMEA", email: "press.emea@WorldBNB.com" },
];

const FILTERS = ["All", "Product", "Expansion", "Financial"] as const;
type Filter = (typeof FILTERS)[number];

export default function NewsroomPage() {
    const [activeFilter, setActiveFilter] = useState<Filter>("All");

    const filtered = activeFilter === "All"
        ? pressReleases
        : pressReleases.filter((p) => p.category === activeFilter);

    return (
        <>
            <PageHero
                badge="WorldBNB"
                title="Newsroom"
                subtitle="The latest announcements, partnerships, milestones, and media resources from WorldBNB."
                bgImage="/images/hero-company.png"
            />

            {/* Press Releases */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl font-black text-gray-900">
                            Press Releases <span className="text-gray-400 font-normal text-lg">({filtered.length})</span>
                        </h2>
                        <div className="flex gap-2 flex-wrap">
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all ${activeFilter === f
                                            ? "bg-gray-900 text-white shadow-md"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filtered.length === 0 ? (
                        <div className="py-20 text-center text-gray-400">No results in this category.</div>
                    ) : (
                        <div className="space-y-5">
                            {filtered.map((p) => (
                                <article key={p.title} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer group">
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                        <div className="shrink-0 text-center bg-gray-50 rounded-xl p-3 min-w-[80px]">
                                            <div className="text-xs text-gray-400 font-semibold">{p.date.split(" ")[0].toUpperCase()}</div>
                                            <div className="text-2xl font-black text-gray-900">{p.date.split(" ")[1].replace(",", "")}</div>
                                            <div className="text-xs text-gray-400">{p.date.split(" ")[2]}</div>
                                        </div>
                                        <div className="flex-1">
                                            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${p.tagColor}`}>{p.tag}</span>
                                            <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-gray-700 transition-colors leading-snug">{p.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{p.excerpt}</p>
                                            <span className="inline-flex items-center gap-1 text-rose-500 font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                                                Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Media Kit & Contacts */}
            <section className="py-14 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                        <h3 className="font-black text-gray-900 text-xl mb-4">📦 Media Kit</h3>
                        <p className="text-gray-500 text-sm mb-5">Download official WorldBNB logos, brand guidelines, executive headshots, and product screenshots.</p>
                        <button className="bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-700 transition-all flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download Media Kit
                        </button>
                    </div>
                    <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                        <h3 className="font-black text-gray-900 text-xl mb-4">📧 Press Contacts</h3>
                        <ul className="space-y-3">
                            {mediaContacts.map((c) => (
                                <li key={c.region} className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600 font-semibold">{c.region}</span>
                                    <a href={`mailto:${c.email}`} className="text-rose-500 hover:underline">{c.email}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
