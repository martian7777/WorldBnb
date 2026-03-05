import PageHero from "@/app/components/static/PageHero";
import InfoCard from "@/app/components/static/InfoCard";

const principles = [
    { icon: "🌿", title: "Minimize Environmental Impact", desc: "Provide recycling bins, use energy-efficient appliances, offer eco-friendly toiletries, and encourage guests to conserve resources.", accent: "bg-green-50 text-green-600" },
    { icon: "🤝", title: "Respect Your Neighbors", desc: "Set clear noise policies, parking rules, and guest limits. Communicate proactively with your neighbors about your hosting activity.", accent: "bg-blue-50 text-blue-600" },
    { icon: "⚖️", title: "Follow Local Regulations", desc: "Ensure you have all required permits, register with local authorities, collect applicable taxes, and comply with zoning laws.", accent: "bg-indigo-50 text-indigo-600" },
    { icon: "♿", title: "Welcome Everyone", desc: "Make your space accessible to guests with disabilities. Clearly describe accessibility features in your listing to set accurate expectations.", accent: "bg-purple-50 text-purple-600" },
    { icon: "🔒", title: "Protect Guest Privacy", desc: "Never install cameras in bedrooms or bathrooms. Disclose all exterior cameras in your listing. Respect guest data and privacy always.", accent: "bg-rose-50 text-rose-600" },
    { icon: "🏡", title: "Maintain Your Property", desc: "Keep your space clean, safe, and in good repair. Fix issues promptly and ensure smoke/CO detectors are functional before every stay.", accent: "bg-amber-50 text-amber-600" },
];

const commitments = [
    { pct: "94%", label: "of hosts follow eco guidelines" },
    { pct: "2.1M", label: "eco-certified listings" },
    { pct: "87%", label: "reduced carbon per stay vs hotels" },
];

export default function ResponsibleHostingPage() {
    return (
        <>
            <PageHero
                badge="Hosting"
                title="Responsible Hosting"
                subtitle="Being a great host means more than just providing a clean space. It means being a positive force in your community and the world."
                bgImage="/images/hero-hosting.png"
                gradient="from-green-600 to-teal-600"
            />

            {/* Commitment Banner */}
            <section className="py-10 bg-green-900 text-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {commitments.map((c) => (
                            <div key={c.label}>
                                <div className="text-4xl font-black text-green-300">{c.pct}</div>
                                <div className="text-green-100 text-sm mt-1">{c.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-black text-gray-900">The 6 Pillars of Responsible Hosting</h2>
                        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">Our hosting standards are built on these core principles. All WorldBNB hosts agree to uphold them.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {principles.map((p) => <InfoCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} accent={p.accent} />)}
                    </div>
                </div>
            </section>

            {/* Sustainability Pledge */}
            <section className="py-16 bg-gradient-to-br from-green-50 to-teal-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-green-100 shadow-sm">
                        <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="text-7xl shrink-0">🌍</div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-900 mb-3">Wind BnB Sustainability Pledge</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    WorldBNB is committed to achieving net-zero carbon emissions by 2030. We partner with eco-certified hosts, offset travel emissions, and invest in reforestation projects for every booking made on our platform.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-green-100 text-green-700 text-sm font-bold px-4 py-2 rounded-full">🌱 Carbon Neutral by 2027</span>
                                    <span className="bg-teal-100 text-teal-700 text-sm font-bold px-4 py-2 rounded-full">♻️ Eco Host Program</span>
                                    <span className="bg-emerald-100 text-emerald-700 text-sm font-bold px-4 py-2 rounded-full">🌲 Tree Planting Partnership</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-2xl font-black text-gray-900 mb-4">Report a Hosting Concern</h2>
                    <p className="text-gray-500 mb-6 text-sm">Witnessed a hosting practice that violates our responsible hosting standards? Let us know.</p>
                    <a href="/support/report-concern" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-2xl transition-all hover:shadow-lg">
                        Submit a Report
                    </a>
                </div>
            </section>
        </>
    );
}
