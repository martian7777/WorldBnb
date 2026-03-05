import PageHero from "@/app/components/static/PageHero";
import InfoCard from "@/app/components/static/InfoCard";
import Link from "next/link";

const safetyTips = [
    { icon: "✅", title: "Verify Your Host", desc: "Always book through WorldBNB. Our hosts go through identity verification and background checks before listing." },
    { icon: "📍", title: "Share Your Itinerary", desc: "Before every trip, share your travel plans with someone you trust — including the property address and host contact info." },
    { icon: "🔒", title: "Secure the Property", desc: "Familiarise yourself with all door locks, windows, and emergency exits when you check in." },
    { icon: "🚨", title: "Know Local Emergency Numbers", desc: "Save local emergency services numbers (police, ambulance, fire) for your destination before you travel." },
    { icon: "💊", title: "Travel with Essentials", desc: "Carry any required medication, a basic first-aid kit, and travel insurance documents at all times." },
    { icon: "📱", title: "Stay Connected", desc: "Keep your phone charged and maintain a data plan or local SIM. Download offline maps for your destination." },
];

const hostSafety = [
    { icon: "🛡️", title: "Screen Your Guests", desc: "WorldBNB guests are verified with government-issued ID. Review guest profiles and reviews before accepting." },
    { icon: "📷", title: "Install Safety Devices", desc: "Carbon monoxide detectors, smoke alarms, and fire extinguishers are required for all WorldBNB listings." },
    { icon: "📋", title: "House Rules Matter", desc: "Set clear house rules in your listing. WorldBNB supports you in enforcing them with our host protection policies." },
];

export default function SafetyInfoPage() {
    return (
        <>
            <PageHero
                badge="Safety"
                title="Your Safety Is Our Priority"
                subtitle="WorldBNB is committed to creating a safe, trusted environment for every guest and host. Here's everything you need to stay safe."
                bgImage="/images/hero-support.png"
                gradient="from-emerald-500 to-teal-600"
            />

            {/* Emergency Banner */}
            <div className="bg-red-50 border-b border-red-100 py-4">
                <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                    <span className="text-2xl">🆘</span>
                    <p className="text-red-700 font-semibold text-sm">
                        In an emergency, always call your local emergency services first.{" "}
                        <Link href="/support/report-concern" className="underline hover:text-red-900">
                            Report a safety concern to WorldBNB →
                        </Link>
                    </p>
                </div>
            </div>

            {/* Guest Safety */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest">For Guests</span>
                        <h2 className="text-2xl font-black text-gray-900 mt-1">Safety Tips for Travelers</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {safetyTips.map((tip) => (
                            <InfoCard key={tip.title} {...tip} accent="bg-emerald-50 text-emerald-600" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Host Safety */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest">For Hosts</span>
                        <h2 className="text-2xl font-black text-gray-900 mt-1">Keeping Your Property Safe</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {hostSafety.map((item) => (
                            <InfoCard key={item.title} {...item} accent="bg-indigo-50 text-indigo-600" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Safety Team */}
            <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="text-5xl mb-5">🤝</div>
                    <h2 className="text-3xl font-black text-white mb-4">Our Trust & Safety Team</h2>
                    <p className="text-white/80 mb-8 leading-relaxed">
                        Our dedicated Trust & Safety team works 24/7 to monitor activity, review reports, and take swift action against any policy violations.
                    </p>
                    <Link href="/support/report-concern" className="inline-block bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-2xl hover:shadow-xl transition-all hover:scale-105">
                        Report a Concern
                    </Link>
                </div>
            </section>
        </>
    );
}
