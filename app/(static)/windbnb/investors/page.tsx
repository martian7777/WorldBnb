import PageHero from "@/app/components/static/PageHero";

const financials = [
    { label: "Gross Revenue (2025)", value: "$2.8B", change: "+42% YoY", positive: true },
    { label: "Total Nights Booked", value: "80M", change: "+31% YoY", positive: true },
    { label: "Active Listings", value: "500K+", change: "+28% YoY", positive: true },
    { label: "Adjusted EBITDA", value: "$340M", change: "+58% YoY", positive: true },
];

const quarterlyHighlights = [
    { quarter: "Q4 2025", revenue: "$820M", nights: "23.5M", highlights: ["Record Q4 bookings", "Expanded to 5 new markets", "Launched Host Analytics Pro"] },
    { quarter: "Q3 2025", revenue: "$760M", nights: "21.2M", highlights: ["AI matching engine launch", "Mobile app v5.0 release", "Reached 1M active hosts"] },
    { quarter: "Q2 2025", revenue: "$680M", nights: "18.9M", highlights: ["Airline partnership signed", "30% growth in APAC", "Superhost program revamp"] },
];

const leadership = [
    { name: "Arjun Mehta", role: "Chief Executive Officer", avatar: "AM", color: "from-blue-500 to-indigo-600" },
    { name: "Leila Nazari", role: "Chief Financial Officer", avatar: "LN", color: "from-rose-500 to-pink-600" },
    { name: "Marcus Webb", role: "Chief Technology Officer", avatar: "MW", color: "from-emerald-500 to-teal-600" },
    { name: "Yuki Tanaka", role: "Chief Product Officer", avatar: "YT", color: "from-amber-500 to-orange-600" },
];

const investors = [
    { name: "Sequoia Capital", type: "Lead Investor — Series A & B", emoji: "🏦" },
    { name: "Tiger Global Management", type: "Series C Lead", emoji: "🐯" },
    { name: "SoftBank Vision Fund", type: "Strategic Partner", emoji: "💡" },
    { name: "Andreessen Horowitz (a16z)", type: "Series A Participant", emoji: "⚡" },
];

export default function InvestorsPage() {
    return (
        <>
            <PageHero
                badge="WorldBNB"
                title="Investor Relations"
                subtitle="WorldBNB is building the world's most trusted and innovative travel platform. Here's the story in numbers."
                bgImage="/images/hero-company.png"
                gradient="from-gray-900 to-slate-800"
            />

            {/* Key Financials */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">FY 2025 Performance</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {financials.map((f) => (
                            <div key={f.label} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                <div className="text-sm text-gray-500 font-medium mb-2">{f.label}</div>
                                <div className="text-3xl font-black text-gray-900 mb-1">{f.value}</div>
                                <div className={`text-sm font-bold flex items-center gap-1 ${f.positive ? "text-green-600" : "text-red-600"}`}>
                                    {f.positive ? "↑" : "↓"} {f.change}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quarterly Earnings */}
            <section className="py-14 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8">Quarterly Highlights</h2>
                    <div className="space-y-5">
                        {quarterlyHighlights.map((q) => (
                            <div key={q.quarter} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                                    <div className="bg-gray-900 text-white rounded-xl px-5 py-3 text-center shrink-0">
                                        <div className="text-xs font-semibold text-gray-400">Quarter</div>
                                        <div className="font-black text-lg">{q.quarter}</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div><div className="text-xs text-gray-400 mb-0.5">Revenue</div><div className="font-black text-xl text-gray-900">{q.revenue}</div></div>
                                            <div><div className="text-xs text-gray-400 mb-0.5">Nights Booked</div><div className="font-black text-xl text-gray-900">{q.nights}M</div></div>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {q.highlights.map((h) => (
                                                <span key={h} className="text-xs bg-gray-100 text-gray-600 font-medium px-3 py-1.5 rounded-full">✓ {h}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Investors & Leadership */}
            <section className="py-14 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Investors */}
                    <div>
                        <h3 className="text-xl font-black text-gray-900 mb-5">Our Investors</h3>
                        <div className="space-y-4">
                            {investors.map((inv) => (
                                <div key={inv.name} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <span className="text-3xl">{inv.emoji}</span>
                                    <div>
                                        <div className="font-bold text-gray-900 text-sm">{inv.name}</div>
                                        <div className="text-gray-400 text-xs">{inv.type}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Leadership */}
                    <div>
                        <h3 className="text-xl font-black text-gray-900 mb-5">Leadership Team</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {leadership.map((l) => (
                                <div key={l.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center hover:shadow-md transition-all">
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${l.color} flex items-center justify-center text-white font-black text-lg mx-auto mb-3`}>{l.avatar}</div>
                                    <div className="font-bold text-gray-900 text-sm">{l.name}</div>
                                    <div className="text-gray-400 text-xs mt-0.5">{l.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* IR Contact */}
            <section className="py-12 bg-gray-900 text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-2xl font-black text-white mb-3">Investor Inquiries</h2>
                    <p className="text-gray-400 mb-6 text-sm">For media, press, or investor relations inquiries, reach our IR team directly.</p>
                    <a href="mailto:ir@WorldBNB.com" className="inline-block bg-white text-gray-900 font-bold px-8 py-3.5 rounded-2xl hover:bg-gray-100 transition-all">
                        ir@WorldBNB.com
                    </a>
                </div>
            </section>
        </>
    );
}
