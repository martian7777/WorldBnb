import PageHero from "@/app/components/static/PageHero";
import Link from "next/link";

const sections = [
    {
        heading: "1. Information We Collect",
        body: `We collect information you provide directly to us, such as when you create an account, make a booking, or contact support. This includes your name, email address, phone number, payment details, and any messages you send through our platform.\n\nWe also collect information automatically when you use Rentora, including your IP address, browser type, device identifiers, pages visited, and actions taken on the platform (such as searches and bookings).`,
    },
    {
        heading: "2. How We Use Your Information",
        body: `Rentora uses your information to:\n• Process bookings and payments securely\n• Communicate with you about your reservations and account\n• Send service updates, safety alerts, and support messages\n• Personalise your experience and improve our recommendations\n• Prevent fraud and ensure platform security\n• Comply with legal obligations\n\nWe do not sell your personal data to third parties for marketing purposes.`,
    },
    {
        heading: "3. Sharing Your Information",
        body: `We share your information only when necessary:\n\n• With Hosts or Guests to facilitate confirmed bookings (e.g. name, contact info)\n• With payment processors to complete transactions\n• With service providers who assist us in operating our platform (under strict confidentiality agreements)\n• With law enforcement or regulators when required by law\n• With your consent for any other purpose\n\nAll third-party partners are required to handle your data in compliance with this Privacy Policy.`,
    },
    {
        heading: "4. Data Retention",
        body: `We retain your personal data for as long as necessary to provide our services and comply with legal requirements. You may request deletion of your account and associated data at any time by contacting our support team. Some data may be retained for a limited period for legal or safety reasons.`,
    },
    {
        heading: "5. Cookies & Tracking",
        body: `Rentora uses cookies and similar tracking technologies to improve platform functionality, remember your preferences, and analyse site traffic. You can control cookie settings through your browser. Disabling cookies may affect certain features of the platform.`,
    },
    {
        heading: "6. Data Security",
        body: `We use industry-standard encryption (TLS/SSL) to protect your data in transit and at rest. Access to personal data is restricted to authorised staff only. While we take reasonable measures to protect your information, no internet transmission is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
        heading: "7. Your Rights",
        body: `Depending on your location, you may have the right to:\n• Access the personal data we hold about you\n• Correct inaccurate or incomplete data\n• Request deletion of your personal data\n• Restrict or object to certain processing activities\n• Data portability (receive a copy in a machine-readable format)\n\nTo exercise any of these rights, contact us at privacy@rentora.com.`,
    },
    {
        heading: "8. Children's Privacy",
        body: `Rentora is not intended for children under 18. We do not knowingly collect personal information from minors. If you believe a child has provided us with personal data, please contact us immediately and we will take steps to remove it.`,
    },
    {
        heading: "9. Changes to This Policy",
        body: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our platform. Your continued use of Rentora after changes are posted constitutes your acceptance of the updated policy.`,
    },
    {
        heading: "10. Contact Us",
        body: `For any privacy-related questions, requests, or complaints, please contact our Data Protection team:\n\nEmail: privacy@rentora.com\nAddress: Rentora, Inc. · 340 Pine Street, San Francisco, CA 94104, USA`,
    },
];

export default function PrivacyPage() {
    return (
        <>
            <PageHero
                badge="Legal"
                title="Privacy Policy"
                subtitle="We are committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights as a Rentora user."
                bgImage="/images/hero-company.png"
            />

            {/* Last Updated */}
            <div className="bg-[#FFF0ED] border-b border-rose-100 py-3">
                <div className="max-w-3xl mx-auto px-4 text-center text-sm text-rose-700 font-medium">
                    Last updated: <strong>March 1, 2026</strong> · Effective immediately
                </div>
            </div>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Intro */}
                    <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 mb-10">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            This Privacy Policy applies to Rentora, Inc. and its affiliates globally. By using Rentora services — including our website, mobile apps, and related tools — you agree to the collection and use of information as described here.
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-10">
                        {sections.map((s) => (
                            <div key={s.heading}>
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
                        Have a question about your privacy? We're here to help.
                    </p>
                    <Link href="/support/report-concern" className="inline-block bg-[#FF6B4A] hover:bg-[#E55A3D] text-white font-bold px-8 py-3.5 rounded-2xl transition-all hover:shadow-lg">
                        Contact Privacy Team
                    </Link>
                    <div className="mt-4">
                        <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-600 underline">
                            View Terms & Conditions →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
