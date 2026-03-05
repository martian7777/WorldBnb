import PageHero from "@/app/components/static/PageHero";
import InfoCard from "@/app/components/static/InfoCard";

const resources = [
    { icon: "📸", title: "Photography Guide", desc: "A step-by-step guide to taking stunning listing photos with just your smartphone — lighting, angles, and editing tips included.", href: "#" },
    { icon: "✍️", title: "Writing Your Listing", desc: "Copywriting templates and best practices to create a compelling listing description that converts browsers into bookers.", href: "#" },
    { icon: "💰", title: "Pricing Strategy", desc: "How to set competitive prices using our Smart Pricing tool, seasonal rate strategies, and length-of-stay discounts.", href: "#" },
    { icon: "🏡", title: "Setting Up Your Space", desc: "Checklists and design tips for staging your property to wow guests — from bedroom essentials to welcome baskets.", href: "#" },
    { icon: "⭐", title: "Getting 5-Star Reviews", desc: "Actionable advice on guest communication, check-in experience, and the small touches that lead to glowing reviews.", href: "#" },
    { icon: "📋", title: "Legal & Tax Guide", desc: "What every host needs to know about local regulations, short-term rental permits, and reporting rental income.", href: "#" },
    { icon: "🔒", title: "Safety & Security", desc: "Installing smart locks, best practices for vetting guests, and how to use WorldBNB's Host Protection Guarantee.", href: "#" },
    { icon: "📊", title: "Analytics Dashboard", desc: "How to read your hosting dashboard — views, conversion rate, earnings trends, and how to improve each metric.", href: "#" },
    { icon: "🤝", title: "Working with Co-Hosts", desc: "A guide to finding, hiring, and managing a co-host to help you scale your hosting business.", href: "#" },
];

const guides = [
    { category: "Getting Started", emoji: "🚀", count: "12 guides" },
    { category: "Pricing & Revenue", emoji: "💹", count: "8 guides" },
    { category: "Guest Experience", emoji: "⭐", count: "10 guides" },
    { category: "Legal & Compliance", emoji: "⚖️", count: "6 guides" },
    { category: "Marketing", emoji: "📣", count: "7 guides" },
    { category: "Advanced Hosting", emoji: "🎓", count: "9 guides" },
];

export default function HostResourcesPage() {
    return (
        <>
            <PageHero
                badge="Hosting"
                title="Host Resources"
                subtitle="Everything you need to become a confident, successful WorldBNB host — guides, checklists, templates, and expert advice."
                bgImage="/images/hero-hosting.png"
                gradient="from-teal-500 to-emerald-600"
            />

            {/* Guide Categories */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {guides.map((g) => (
                            <button key={g.category} className="bg-gray-50 hover:bg-teal-50 hover:border-teal-200 border-2 border-transparent rounded-2xl p-4 text-center transition-all group">
                                <div className="text-3xl mb-2">{g.emoji}</div>
                                <div className="font-bold text-gray-900 text-xs group-hover:text-teal-700">{g.category}</div>
                                <div className="text-gray-400 text-xs mt-0.5">{g.count}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Cards */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-black text-gray-900">Popular Resources</h2>
                        <span className="text-sm text-gray-500">52 guides total</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resources.map((r) => <InfoCard key={r.title} {...r} accent="bg-teal-50 text-teal-600" />)}
                    </div>
                </div>
            </section>

            {/* Quick Downloads */}
            <section className="py-14 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-black text-gray-900 mb-6 text-center">Free Downloads</h2>
                    <div className="space-y-3">
                        {[
                            { name: "Host Onboarding Checklist", type: "PDF", size: "245 KB" },
                            { name: "Welcome Book Template", type: "DOCX", size: "89 KB" },
                            { name: "Guest Communication Scripts", type: "PDF", size: "312 KB" },
                            { name: "Pricing Calculator Spreadsheet", type: "XLSX", size: "156 KB" },
                        ].map((d) => (
                            <div key={d.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-5 py-4 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 transition-all group">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">📄</span>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm group-hover:text-teal-700">{d.name}</div>
                                        <div className="text-gray-400 text-xs">{d.type} · {d.size}</div>
                                    </div>
                                </div>
                                <button className="text-teal-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Download <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
