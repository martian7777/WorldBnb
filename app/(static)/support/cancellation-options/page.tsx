import PageHero from "@/app/components/static/PageHero";

const policies = [
    {
        name: "Flexible",
        color: "border-green-400",
        badge: "bg-green-100 text-green-700",
        badgeLabel: "Most Lenient",
        icon: "🟢",
        rules: [
            { label: "Full refund", detail: "Cancel up to 24 hours before check-in for a full refund." },
            { label: "Partial refund", detail: "Cancel within 24 hours — first night is non-refundable." },
            { label: "No refund", detail: "Cancellation after check-in — remaining nights are non-refundable." },
        ],
    },
    {
        name: "Moderate",
        color: "border-amber-400",
        badge: "bg-amber-100 text-amber-700",
        badgeLabel: "Most Common",
        icon: "🟡",
        rules: [
            { label: "Full refund", detail: "Cancel at least 5 days before check-in for a full refund." },
            { label: "50% refund", detail: "Cancel within 5 days — you'll receive 50% back (excluding service fee)." },
            { label: "No refund", detail: "Cancellation on check-in day, no-show, or during your stay." },
        ],
    },
    {
        name: "Strict",
        color: "border-red-400",
        badge: "bg-red-100 text-red-700",
        badgeLabel: "Least Flexible",
        icon: "🔴",
        rules: [
            { label: "Full refund", detail: "Cancel within 48 hours of booking AND at least 14 days before check-in." },
            { label: "50% refund", detail: "Cancel at least 7 days before check-in (outside 48-hour window)." },
            { label: "No refund", detail: "Cancellation within 7 days of check-in or during your stay." },
        ],
    },
];

const faqs = [
    { q: "Are service fees refunded on cancellation?", a: "For flexible and moderate policies with a full refund, the WorldBNB service fee is also refunded. For partial refunds, the service fee is not refunded." },
    { q: "What happens if my host cancels?", a: "If a host cancels a confirmed booking, you'll receive a full refund including service fees. We'll also help you find a comparable property." },
    { q: "Can I get a refund for extenuating circumstances?", a: "WorldBNB's Extenuating Circumstances Policy may apply for situations like natural disasters, serious illness, or government travel restrictions. Documentation is required." },
    { q: "How long does a refund take?", a: "Refunds are typically processed within 5–10 business days. Timing depends on your payment method and bank." },
];

export default function CancellationOptionsPage() {
    return (
        <>
            <PageHero
                badge="Cancellation"
                title="Cancellation Policies"
                subtitle="Every listing on WorldBNB has a clear cancellation policy set by the host. Know what to expect before you book."
                bgImage="/images/hero-support.png"
                gradient="from-amber-500 to-orange-600"
            />

            {/* Policy Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-10 text-center">Policy Types at a Glance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {policies.map((p) => (
                            <div key={p.name} className={`bg-white rounded-2xl border-2 ${p.color} p-7 shadow-sm hover:shadow-lg transition-all`}>
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">{p.icon}</span>
                                        <h3 className="text-xl font-black text-gray-900">{p.name}</h3>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.badge}`}>{p.badgeLabel}</span>
                                </div>
                                <ul className="space-y-4">
                                    {p.rules.map((r) => (
                                        <li key={r.label} className="border-t border-gray-100 pt-4">
                                            <div className="font-bold text-gray-900 text-sm mb-1">{r.label}</div>
                                            <div className="text-gray-500 text-xs leading-relaxed">{r.detail}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl font-black text-gray-900 mb-6 text-center">Quick Comparison</h2>
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-900 text-white">
                                    <th className="px-6 py-4 text-left font-bold">Scenario</th>
                                    <th className="px-4 py-4 text-center font-bold">Flexible</th>
                                    <th className="px-4 py-4 text-center font-bold">Moderate</th>
                                    <th className="px-4 py-4 text-center font-bold">Strict</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {[
                                    ["Cancel 14+ days before", "✅ Full", "✅ Full", "✅ Full*"],
                                    ["Cancel 5–13 days before", "✅ Full", "✅ Full", "50%"],
                                    ["Cancel 1–4 days before", "✅ Full*", "50%", "❌ None"],
                                    ["Cancel day of check-in", "❌ None", "❌ None", "❌ None"],
                                    ["Host cancels", "✅ Full", "✅ Full", "✅ Full"],
                                ].map(([scenario, flex, mod, strict]) => (
                                    <tr key={scenario} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{scenario}</td>
                                        <td className="px-4 py-4 text-center text-gray-600">{flex}</td>
                                        <td className="px-4 py-4 text-center text-gray-600">{mod}</td>
                                        <td className="px-4 py-4 text-center text-gray-600">{strict}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center">* Within 48-hour booking window conditions may apply.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Common Questions</h2>
                    <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
                        {faqs.map((item) => (
                            <div key={item.q} className="bg-white px-6 py-5">
                                <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
