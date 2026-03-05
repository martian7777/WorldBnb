import PageHero from "@/app/components/static/PageHero";
import InfoCard from "@/app/components/static/InfoCard";

const latestFeatures = [
    { icon: "🤖", title: "AI Smart Matching", desc: "Our new AI engine learns your travel preferences and matches you with properties you'll love — before you even search.", badge: "New", badgeColor: "bg-blue-500" },
    { icon: "⚡", title: "Instant Book 2.0", desc: "Faster than ever — book any instant-book listing in under 30 seconds with saved payment details and pre-filled guest info.", badge: "Updated", badgeColor: "bg-emerald-500" },
    { icon: "🗺️", title: "Interactive Map Search", desc: "Explore destinations with our new map-first search — filter by price, amenities, and ratings while browsing the map.", badge: "New", badgeColor: "bg-blue-500" },
    { icon: "📱", title: "Mobile App v5.0", desc: "A completely redesigned mobile experience with dark mode, offline saved listings, and real-time host messaging.", badge: "New", badgeColor: "bg-blue-500" },
    { icon: "💬", title: "In-App Translation", desc: "Communicate with any host in 60+ languages using real-time translation — no language barriers, ever.", badge: "Updated", badgeColor: "bg-emerald-500" },
    { icon: "📊", title: "Host Analytics Pro", desc: "Hosts now get advanced revenue analytics, competitor pricing insights, and actionable improvement suggestions.", badge: "New", badgeColor: "bg-blue-500" },
];

const roadmap = [
    { quarter: "Q2 2026", items: ["AR Property Preview", "Multi-currency Wallets", "Group Booking Coordinator"], status: "Coming Soon" },
    { quarter: "Q3 2026", items: ["Sustainability Score for Listings", "Voice Search", "Pet-Friendly Filter Overhaul"], status: "Planned" },
    { quarter: "Q4 2026", items: ["WorldBNB Experiences v2", "Loyalty Rewards Program", "Enterprise Host Dashboard"], status: "In Research" },
];

export default function FeaturesPage() {
    return (
        <>
            <PageHero
                badge="WorldBNB"
                title="Platform Features"
                subtitle="Cutting-edge tools for guests and hosts — we're constantly shipping improvements to make your WorldBNB experience exceptional."
                bgImage="/images/hero-company.png"
                gradient="from-blue-600 to-indigo-700"
            />

            {/* Feature Announcement */}
            <section className="py-14 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center gap-8">
                        <div className="text-7xl shrink-0">🤖</div>
                        <div>
                            <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Featured Launch</span>
                            <h2 className="text-3xl font-black mb-3">AI-Powered Travel Assistant</h2>
                            <p className="text-blue-100 leading-relaxed mb-5">Ask our AI assistant to plan your perfect trip — it searches, compares, and books the best stays based on your preferences, budget, and travel history.</p>
                            <button className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">Try It Now →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Features Grid */}
            <section className="py-14 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Recently Shipped</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestFeatures.map((f) => (
                            <div key={f.title} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group relative overflow-hidden">
                                <span className={`absolute top-4 right-4 text-xs font-bold text-white px-2.5 py-1 rounded-full ${f.badgeColor}`}>{f.badge}</span>
                                <div className="text-4xl mb-4">{f.icon}</div>
                                <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="py-14 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">What's Coming Next</h2>
                    <div className="space-y-5">
                        {roadmap.map((r) => (
                            <div key={r.quarter} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                    <h3 className="font-black text-gray-900 text-lg">{r.quarter}</h3>
                                    <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{r.status}</span>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {r.items.map((item) => (
                                        <span key={item} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-xl hover:border-blue-300 transition-colors cursor-pointer">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
