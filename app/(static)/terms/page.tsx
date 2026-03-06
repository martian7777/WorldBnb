import PageHero from "@/app/components/static/PageHero";
import Link from "next/link";

const sections = [
    {
        heading: "1. Acceptance of Terms",
        body: `By accessing or using Rentora's website, mobile applications, or any of our services, you confirm that you are at least 18 years old and that you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.\n\nRentora reserves the right to update these terms at any time. Continued use of the platform after changes are posted constitutes your acceptance.`,
    },
    {
        heading: "2. User Accounts",
        body: `To access certain features, you must create a Rentora account. You are responsible for:\n• Providing accurate and current registration information\n• Maintaining the confidentiality of your login credentials\n• All activity that occurs under your account\n\nRentora reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or misuse the platform in any way.`,
    },
    {
        heading: "3. Booking & Payments",
        body: `By making a booking through Rentora, you agree to pay the total price shown at checkout, including the nightly rate, service fees, and any applicable taxes.\n\nRentora acts as a payment intermediary. Host payouts are processed after 24 hours from guest check-in. No funds are transferred before that time to ensure guest protection under our Guest Guarantee.`,
    },
    {
        heading: "4. Host Responsibilities",
        body: `Hosts agree to:\n• List properties accurately — photos and descriptions must be truthful\n• Maintain their listing in the described condition at all times\n• Abide by all local laws, regulations, and HOA rules regarding short-term rentals\n• Respond to guest enquiries within 24 hours\n• Not discriminate against guests based on race, religion, gender, sexual orientation, disability, or national origin\n\nRentora may remove listings that violate these guidelines at its sole discretion.`,
    },
    {
        heading: "5. Guest Responsibilities",
        body: `Guests agree to:\n• Treat the host's property with respect and follow the listed house rules\n• Not exceed the maximum occupancy stated in the listing\n• Report any damage or issues promptly to the host and Rentora\n• Not use properties for unlawful purposes\n\nGuests may be held financially liable for damages caused during their stay.`,
    },
    {
        heading: "6. Cancellations & Refunds",
        body: `Refund eligibility depends on the cancellation policy selected by the host at time of listing. Rentora offers three policy tiers: Flexible, Moderate, and Strict. Please review the applicable policy before booking.\n\nRentora service fees are non-refundable except in cases of verified host cancellation or under our Extenuating Circumstances Policy.`,
    },
    {
        heading: "7. Intellectual Property",
        body: `All content on the Rentora platform — including text, images, logos, graphics, and software — is the property of Rentora, Inc. or its content suppliers and is protected by international copyright and trademark laws.\n\nYou may not reproduce, distribute, or create derivative works from any Rentora content without prior written permission.`,
    },
    {
        heading: "8. Limitation of Liability",
        body: `Rentora is a marketplace connecting hosts and guests and is not responsible for the actions or conduct of hosts or guests. To the maximum extent permitted by law, Rentora's total liability arising from use of the platform shall not exceed the total amount paid by you for the specific booking giving rise to the claim.\n\nRentora is not liable for indirect, incidental, punitive, or consequential damages.`,
    },
    {
        heading: "9. Prohibited Activities",
        body: `Users may not:\n• Use bots, scrapers, or automated tools to access the platform\n• Post false, misleading, or fraudulent listings\n• Harass, threaten, or harm other users\n• Use the platform for commercial subletting without disclosure\n• Attempt to circumvent the Rentora payment system\n\nViolations may result in immediate account termination and legal action.`,
    },
    {
        heading: "10. Governing Law",
        body: `These Terms shall be governed by and construed in accordance with the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in San Francisco, California.`,
    },
    {
        heading: "11. Contact",
        body: `For questions about these Terms, please contact:\n\nEmail: legal@rentora.com\nAddress: Rentora, Inc. · 340 Pine Street, San Francisco, CA 94104, USA`,
    },
];

export default function TermsPage() {
    return (
        <>
            <PageHero
                badge="Legal"
                title="Terms & Conditions"
                subtitle="Please read these terms carefully before using Rentora. They govern your access to and use of our platform and services."
                bgImage="/images/hero-company.png"
            />

            {/* Last updated banner */}
            <div className="bg-amber-50 border-b border-amber-100 py-3">
                <div className="max-w-3xl mx-auto px-4 text-center text-sm text-amber-700 font-medium">
                    Last updated: <strong>March 1, 2026</strong> · Effective immediately for new users · Existing users: 30-day notice period applies
                </div>
            </div>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Intro box */}
                    <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 mb-10">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            These Terms & Conditions ("Terms") constitute a legally binding agreement between you and Rentora, Inc. governing your use of our website, apps, and marketplace services. Rentora is a platform that connects hosts with guests — we are not a party to agreements between hosts and guests.
                        </p>
                    </div>

                    {/* Quick nav */}
                    <div className="bg-[#FFF0ED] rounded-2xl p-5 mb-10 border border-rose-100">
                        <p className="text-sm font-bold text-rose-700 mb-3">Quick Navigation</p>
                        <div className="flex flex-wrap gap-2">
                            {sections.map((s) => (
                                <a key={s.heading} href={`#${s.heading.replace(/\s+/g, "-")}`} className="text-xs bg-white border border-rose-200 text-[#E55A3D] hover:bg-[#FF6B4A] hover:text-white transition-all px-3 py-1.5 rounded-full font-medium">
                                    {s.heading.split(". ")[1]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-10">
                        {sections.map((s) => (
                            <div key={s.heading} id={s.heading.replace(/\s+/g, "-")}>
                                <h2 className="text-xl font-black text-slate-900 mb-3 pb-2 border-b border-gray-100">
                                    {s.heading}
                                </h2>
                                <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-14 bg-slate-50 text-center">
                <div className="max-w-xl mx-auto px-4">
                    <p className="text-gray-500 mb-6 text-sm">
                        Questions about our terms? Our legal team is here to help.
                    </p>
                    <Link href="/support/help-center" className="inline-block bg-[#1E3A8A] hover:bg-gray-700 text-white font-bold px-8 py-3.5 rounded-2xl transition-all hover:shadow-lg">
                        Contact Legal Team
                    </Link>
                    <div className="mt-4">
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-600 underline">
                            View Privacy Policy →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
