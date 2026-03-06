import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    Support: [
        { label: "Help Center", href: "/support/help-center" },
        { label: "Safety Info", href: "/support/safety-info" },
        { label: "Cancellation Options", href: "/support/cancellation-options" },
    ],
    Community: [
        { label: "Invite Friends", href: "/community/invite-friends" },
        { label: "Gift Cards", href: "/community/gift-cards" },
    ],
    Hosting: [
        { label: "Try Hosting", href: "/hosting/try-hosting" },
        { label: "Host Resources", href: "/hosting/host-resources" },
    ],
    Rentora: [
        { label: "Newsroom", href: "/rentora/newsroom" },
        { label: "Features", href: "/rentora/features" },
    ],
};

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
];

const socialIcons = [
    {
        label: "Twitter",
        path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    },
    {
        label: "Instagram",
        path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
];

export default function LandingFooter() {
    return (
        <footer className="bg-[#1E3A8A] text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top link columns */}
                <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-800">
                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div key={heading}>
                            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{heading}</h4>
                            <ul className="space-y-2.5">
                                {links.map((l) => (
                                    <li key={l.label}>
                                        <Link href={l.href} className="text-sm hover:text-white transition-colors">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/rentora_black.png"
                            alt="Rentora Icon"
                            width={28}
                            height={28}
                            className="w-7 h-7 rounded-full object-contain bg-white"
                        />
                        <span className="text-white font-black text-lg">Rentora</span>
                    </Link>

                    {/* Copyright + legal links */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Rentora, Inc. · All rights reserved.
                        </p>
                        <div className="flex items-center gap-3">
                            {legalLinks.map((l) => (
                                <Link key={l.label} href={l.href} className="text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-2">
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-4">
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.label}
                                href="#"
                                aria-label={icon.label}
                                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#FF6B4A] transition-colors flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d={icon.path} />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
