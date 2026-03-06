"use client";

import { useState, useMemo } from "react";
import PageHero from "@/app/components/static/PageHero";

const openRoles = [
    { id: 1, title: "Senior Full-Stack Engineer", dept: "Engineering", location: "Remote / San Francisco", type: "Full-time", level: "Senior" },
    { id: 2, title: "Product Designer — Host Experience", dept: "Design", location: "Remote / London", type: "Full-time", level: "Mid-Senior" },
    { id: 3, title: "Data Science Lead", dept: "Data & AI", location: "Remote / Singapore", type: "Full-time", level: "Lead" },
    { id: 4, title: "Growth Marketing Manager", dept: "Marketing", location: "Remote / New York", type: "Full-time", level: "Manager" },
    { id: 5, title: "Trust & Safety Analyst", dept: "Operations", location: "Remote", type: "Full-time", level: "Mid-Level" },
    { id: 6, title: "iOS Engineer", dept: "Engineering", location: "Remote / Berlin", type: "Full-time", level: "Senior" },
    { id: 7, title: "Community Program Manager", dept: "Community", location: "Remote", type: "Full-time", level: "Manager" },
    { id: 8, title: "Customer Experience Associate", dept: "Support", location: "Remote", type: "Full-time", level: "Entry-Level" },
];

const perks = [
    { icon: "🌍", title: "Remote First", desc: "Work from anywhere. We have hubs in NYC, London, Singapore, and Berlin." },
    { icon: "🏥", title: "Full Health Coverage", desc: "Medical, dental, and vision for you and your family from day one." },
    { icon: "✈️", title: "Annual Travel Credit", desc: "$2,500 annual Rentora travel credit to explore the world." },
    { icon: "📚", title: "Learning Budget", desc: "$1,500/year for courses, conferences, and skill development." },
    { icon: "🧘", title: "Wellness Stipend", desc: "$100/month for gym, meditation apps, or any wellness activity." },
    { icon: "🏖️", title: "Unlimited PTO", desc: "We trust our team. Take the time you need to recharge." },
];

const deptColors: Record<string, string> = {
    Engineering: "bg-blue-100 text-blue-700",
    Design: "bg-purple-100 text-purple-700",
    "Data & AI": "bg-indigo-100 text-indigo-700",
    Marketing: "bg-amber-100 text-amber-700",
    Operations: "bg-rose-100 text-rose-700",
    Community: "bg-green-100 text-green-700",
    Support: "bg-teal-100 text-teal-700",
};

// Build filter options dynamically from the data
const FILTERS = ["All", ...Array.from(new Set(openRoles.map((r) => r.dept)))] as const;
type Filter = string;

export default function CareersPage() {
    const [activeFilter, setActiveFilter] = useState<Filter>("All");

    const filtered = useMemo(
        () => activeFilter === "All" ? openRoles : openRoles.filter((r) => r.dept === activeFilter),
        [activeFilter]
    );

    return (
        <>
            <PageHero
                badge="Rentora"
                title="Work at Rentora"
                subtitle="Join a global team building the future of travel. We're looking for curious, driven people who want to make a real difference."
                bgImage="/images/hero-company.png"
            />

            {/* Mission Statement */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-6xl mb-5">🌍</div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4">"We believe travel creates belonging."</h2>
                    <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Rentora's mission is to create a world where anyone can belong anywhere. Our 1,200+ team members across 30 countries work every day to make that a reality — through technology, community, and care.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mt-10">
                        {[{ val: "1,200+", label: "Team Members" }, { val: "30", label: "Countries" }, { val: "4.8/5", label: "Glassdoor Rating" }].map((s) => (
                            <div key={s.label} className="bg-violet-50 rounded-2xl p-5">
                                <div className="text-3xl font-black text-violet-700">{s.val}</div>
                                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles with working filter */}
            <section className="py-14 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <h2 className="text-2xl font-black text-slate-900">
                            Open Positions <span className="text-gray-400 font-normal text-lg">({filtered.length})</span>
                        </h2>
                        <div className="flex gap-2 flex-wrap">
                            {FILTERS.map((f) => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`text-sm font-bold px-4 py-2 rounded-full transition-all ${activeFilter === f
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
                        <div className="py-20 text-center text-gray-400">No open positions in that department right now.</div>
                    ) : (
                        <div className="space-y-3">
                            {filtered.map((role) => (
                                <div key={role.id} className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${deptColors[role.dept]}`}>{role.dept}</span>
                                            <span className="text-xs text-gray-400">{role.level}</span>
                                        </div>
                                        <h3 className="font-black text-slate-900 hover:text-violet-600 transition-colors">{role.title}</h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-1">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                {role.location}
                                            </span>
                                            <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">{role.type}</span>
                                        </div>
                                    </div>
                                    <button className="shrink-0 bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all">
                                        Apply Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Perks */}
            <section className="py-14 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Why You'll Love Working Here</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perks.map((p) => (
                            <div key={p.title} className="bg-violet-50 rounded-2xl p-7 border border-violet-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="text-4xl mb-4">{p.icon}</div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
