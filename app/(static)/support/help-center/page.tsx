import PageHero from "@/app/components/static/PageHero";
import FAQAccordion from "@/app/components/static/FAQAccordion";
import InfoCard from "@/app/components/static/InfoCard";

const categories = [
    { icon: "🏠", title: "Booking Help", desc: "Find answers about reservations, check-in, and checkout processes.", href: "#faq" },
    { icon: "💳", title: "Payments & Billing", desc: "Questions about charges, refunds, and payment methods.", href: "#faq" },
    { icon: "🔐", title: "Account & Privacy", desc: "Manage your profile, security settings, and personal data.", href: "#faq" },
    { icon: "🏡", title: "Host Support", desc: "Resources for hosts — listings, pricing, and guest management.", href: "#faq" },
    { icon: "⭐", title: "Reviews & Ratings", desc: "How our review system works and how to leave feedback.", href: "#faq" },
    { icon: "⚡", title: "Technical Issues", desc: "App bugs, connectivity problems, or site-related help.", href: "#faq" },
];

const faqs = [
    { q: "How do I cancel or modify my booking?", a: "You can cancel or modify a booking from your Trips dashboard. Go to Account → Trips, select the reservation, and click 'Cancel' or 'Edit'. Refunds depend on the host's cancellation policy selected at booking." },
    { q: "When will I receive my refund?", a: "Refunds are typically processed within 5–10 business days depending on your payment method and bank. You'll receive a confirmation email once the refund is initiated." },
    { q: "How do I contact my host before check-in?", a: "Once your booking is confirmed, you can message your host directly through the WorldBNB messaging system. Go to Account → Trips → Messages to start a conversation." },
    { q: "What if the property doesn't match the listing description?", a: "If there are significant discrepancies, contact us within 24 hours of check-in. Our Guest Guarantee covers accommodations that are significantly misrepresented." },
    { q: "How do I become a host on WorldBNB?", a: "Visit our 'Try Hosting' page to get started. You'll need to create a listing, verify your identity, and accept our Terms of Service. Most listings are live within 24 hours." },
    { q: "Is my personal information secure?", a: "Yes. WorldBNB uses bank-level encryption for all data. We never sell your personal information, and you can review our full Privacy Policy at any time." },
    { q: "Can I request a specific check-in time?", a: "Check-in times are set by the host. You can message your host to request early check-in or late check-out — it is ultimately at the host's discretion." },
    { q: "What payment methods are accepted?", a: "WorldBNB accepts all major credit and debit cards, PayPal, and various local payment methods depending on your country. Payment details can be managed in Account → Payments." },
];

export default function HelpCenterPage() {
    return (
        <>
            <PageHero
                badge="Support"
                title="How Can We Help You?"
                subtitle="Find answers, browse guides, or contact our support team — we're here 24/7 to make your WorldBNB experience seamless."
                bgImage="/images/hero-support.png"
            />

            {/* Search Bar */}
            <section className="bg-white py-10 border-b border-gray-100">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="relative">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search for help articles..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Browse by Topic</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((c) => (
                            <InfoCard key={c.title} {...c} accent="bg-blue-50 text-blue-600" />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <FAQAccordion items={faqs} />
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <p className="text-gray-500 mb-6">Still can't find what you're looking for?</p>
                    <a href="/support/report-concern" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-2xl transition-all hover:shadow-lg">
                        Contact Support
                    </a>
                </div>
            </section>
        </>
    );
}
