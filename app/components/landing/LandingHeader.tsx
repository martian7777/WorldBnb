"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LandingHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "How It Works", href: "/#how-it-works" },
        { label: "Destinations", href: "/#destinations" },
        { label: "Become a Host", href: "/hosting/try-hosting" },
        { label: "Reviews", href: "/#reviews" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </div>
                        <span
                            className={`text-xl font-black tracking-tight transition-colors ${scrolled ? "text-rose-500" : "text-white"
                                }`}
                        >
                            world
                            <span className={scrolled ? "text-gray-900" : "text-white/80"}>bnb</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-semibold transition-colors hover:text-rose-400 ${scrolled ? "text-gray-700" : "text-white/90"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/"
                            className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                                }`}
                        >
                            Log in
                        </Link>
                        <Link
                            href="/"
                            className="text-sm font-bold px-5 py-2.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all shadow-lg hover:shadow-rose-500/30 hover:scale-105"
                        >
                            Sign up
                        </Link>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t shadow-xl">
                    <div className="px-4 py-4 flex flex-col gap-3">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-gray-700 font-semibold py-2 border-b border-gray-100 hover:text-rose-500 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="flex gap-3 pt-2">
                            <Link href="/" className="flex-1 text-center py-2.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50">
                                Log in
                            </Link>
                            <Link href="/" className="flex-1 text-center py-2.5 rounded-full bg-rose-500 text-white font-bold text-sm hover:bg-rose-600">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
