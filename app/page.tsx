"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────
   HEADER / NAV
───────────────────────────────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span
              className={`text-xl font-black tracking-tight transition-colors ${scrolled ? "text-rose-500" : "text-white"
                }`}
            >
              wind<span className={scrolled ? "text-gray-900" : "text-white/80"}>bnb</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["How It Works", "Destinations", "Become a Host", "Reviews"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className={`text-sm font-semibold transition-colors hover:text-rose-400 ${scrolled ? "text-gray-700" : "text-white/90"
                  }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/home"
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
                }`}
            >
              Log in
            </Link>
            <Link
              href="/home"
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
            {["How It Works", "Destinations", "Become a Host", "Reviews"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-semibold py-2 border-b border-gray-100 hover:text-rose-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Link href="/home" className="flex-1 text-center py-2.5 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50">
                Log in
              </Link>
              <Link href="/home" className="flex-1 text-center py-2.5 rounded-full bg-rose-500 text-white font-bold text-sm hover:bg-rose-600">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────
   SECTION 1: HERO
───────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Beautiful rental destination"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">1M+ happy guests worldwide</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
          Find Your Perfect
          <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Home Away
          </span>
          From Home
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
          Discover unique stays, from cozy cabins to luxury villas. Book with confidence, experience the world differently.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-2xl p-2 max-w-3xl mx-auto flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
            <svg className="w-5 h-5 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Where</div>
              <div className="text-sm text-gray-400">Search destinations</div>
            </div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200 my-3" />
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
            <svg className="w-5 h-5 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">When</div>
              <div className="text-sm text-gray-400">Add dates</div>
            </div>
          </div>
          <div className="hidden sm:block w-px bg-gray-200 my-3" />
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-200">
            <svg className="w-5 h-5 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Who</div>
              <div className="text-sm text-gray-400">Add guests</div>
            </div>
          </div>
          <Link
            href="/home"
            className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl px-6 py-3 transition-all hover:shadow-lg hover:scale-[1.02] shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </Link>
        </div>

        {/* Quick tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {["🏖️ Beach", "🏔️ Mountain", "🏙️ City", "🌿 Nature", "🏠 Unique"].map((tag) => (
            <span
              key={tag}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white/20 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2: STATS
───────────────────────────────────────── */
const stats = [
  { number: "1M+", label: "Happy Guests", icon: "😊" },
  { number: "500K+", label: "Unique Listings", icon: "🏠" },
  { number: "190+", label: "Countries", icon: "🌍" },
  { number: "4.9★", label: "Average Rating", icon: "⭐" },
];

function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">{s.number}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3: HOW IT WORKS
───────────────────────────────────────── */
const steps = [
  {
    step: "01",
    title: "Search & Discover",
    desc: "Browse thousands of verified listings — from beachside villas to mountain retreats. Filter by price, amenities, and location.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    step: "02",
    title: "Book Instantly",
    desc: "Reserve your dream stay with one click. Secure payments, transparent pricing — no hidden fees, ever.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
  },
  {
    step: "03",
    title: "Enjoy & Explore",
    desc: "Check in seamlessly, connect with your host, and make memories. 24/7 support is always a message away.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-rose-500 font-bold text-sm uppercase tracking-widest">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">How WindBnB Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Three easy steps to your perfect stay — we handle the rest.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                {s.step}
              </div>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4: FEATURED DESTINATIONS
───────────────────────────────────────── */
const destinations = [
  { name: "Paris", country: "France", listings: "2,840 listings", img: "/images/paris.png" },
  { name: "Bali", country: "Indonesia", listings: "3,210 listings", img: "/images/bali.png" },
  { name: "Maldives", country: "Indian Ocean", listings: "980 listings", img: "/images/maldives.png" },
  { name: "Kyoto", country: "Japan", listings: "1,560 listings", img: "/images/kyoto.png" },
  { name: "Santorini", country: "Greece", listings: "1,200 listings", img: "/images/santorini.png" },
  { name: "New York", country: "USA", listings: "5,430 listings", img: "/images/hero-bg.png" },
];

function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="text-rose-500 font-bold text-sm uppercase tracking-widest">Explore</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">Top Destinations</h2>
          </div>
          <Link href="/home" className="text-rose-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <Link
              href="/home"
              key={d.name}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
            >
              <div className={`relative ${i < 2 ? "h-72" : "h-56"}`}>
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-black text-xl">{d.name}</div>
                  <div className="text-white/70 text-sm">{d.country} · {d.listings}</div>
                </div>
                <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5: WHY WINDBNB
───────────────────────────────────────── */
const features = [
  {
    icon: "🛡️",
    title: "Verified Listings",
    desc: "Every property is reviewed and verified by our team. What you see is exactly what you get.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    desc: "Your payment is protected with bank-level encryption. We hold funds until 24h after check-in.",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to resolve any issues instantly.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "Find the same property cheaper elsewhere? We'll match it — no questions asked.",
  },
  {
    icon: "⚡",
    title: "Instant Booking",
    desc: "Skip the waiting. Most properties offer instant confirmation so you can plan with confidence.",
  },
  {
    icon: "🌟",
    title: "Top-Rated Hosts",
    desc: "Our hosts are rated by real guests. Travel knowing you're staying with the best.",
  },
];

function WhySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-rose-400 font-bold text-sm uppercase tracking-widest">Our Promise</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">Why Choose WindBnB?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We go beyond booking. We deliver confidence, comfort, and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-rose-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-rose-300 transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6: TRENDING LISTINGS SHOWCASE
───────────────────────────────────────── */
const sampleListings = [
  {
    title: "Luxury Cliffside Villa",
    location: "Santorini, Greece",
    price: 320,
    rating: 4.97,
    reviews: 124,
    img: "/images/santorini.png",
    tags: ["Pool", "Sea View", "Chef's Kitchen"],
  },
  {
    title: "Serene Bamboo Retreat",
    location: "Ubud, Bali",
    price: 145,
    rating: 4.92,
    reviews: 89,
    img: "/images/bali.png",
    tags: ["Jungle View", "Yoga Deck", "Spa"],
  },
  {
    title: "Overwater Bungalow",
    location: "South Malé Atoll, Maldives",
    price: 580,
    rating: 5.0,
    reviews: 47,
    img: "/images/maldives.png",
    tags: ["Private Beach", "Snorkeling", "Sunset View"],
  },
];

function ListingsShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="text-rose-500 font-bold text-sm uppercase tracking-widest">Trending Now</span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">Guests Are Loving These</h2>
          </div>
          <Link href="/home" className="text-rose-500 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            Browse all listings <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {sampleListings.map((l) => (
            <Link href="/home" key={l.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-56">
                <Image src={l.img} alt={l.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-sm font-bold text-gray-800">
                  ★ {l.rating}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {l.tags.map((t) => (
                    <span key={t} className="text-xs bg-rose-50 text-rose-600 font-medium px-2.5 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-rose-500 transition-colors">{l.title}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  {l.location}
                </p>
                <div className="flex items-center justify-between border-t pt-4">
                  <div>
                    <span className="text-xl font-black text-gray-900">${l.price}</span>
                    <span className="text-gray-400 text-sm"> / night</span>
                  </div>
                  <span className="text-gray-400 text-xs">{l.reviews} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 7: BECOME A HOST CTA
───────────────────────────────────────── */
function HostCTASection() {
  return (
    <section id="become-a-host" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/host-cta.png"
          alt="Become a host"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/75 to-gray-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-block bg-rose-500/20 border border-rose-500/30 text-rose-300 text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            For Hosts
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 leading-tight">
            Turn Your Space Into
            <span className="block text-rose-400">Extra Income</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Join over 4 million hosts on WindBnB. Set your own schedule, set your price, and welcome guests from around the world — on your terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-lg">💸</div>
              <div>
                <div className="font-bold text-sm">Avg. $1,200/mo</div>
                <div className="text-gray-400 text-xs">extra income per host</div>
              </div>
            </div>
            <div className="hidden sm:block w-px bg-white/10" />
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-lg">🌍</div>
              <div>
                <div className="font-bold text-sm">190+ Countries</div>
                <div className="text-gray-400 text-xs">guests from worldwide</div>
              </div>
            </div>
          </div>

          <Link
            href="/home"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl hover:shadow-rose-500/40 hover:scale-105 text-lg"
          >
            Start Hosting Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 8: TESTIMONIALS
───────────────────────────────────────── */
const testimonials = [
  {
    name: "Sophie Laurent",
    location: "Paris, France",
    avatar: "SL",
    rating: 5,
    text: "Absolutely magical experience in Santorini! The villa exceeded every expectation. WindBnB made the entire booking process seamless. We're already planning our next trip!",
    stay: "Santorini Cliffside Villa",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "James Thornton",
    location: "London, UK",
    avatar: "JT",
    rating: 5,
    text: "Stayed in a gorgeous ryokan in Kyoto. The host was incredibly welcoming and the property was exactly as described. WindBnB's customer support was outstanding throughout.",
    stay: "Traditional Kyoto Ryokan",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Aisha Rahman",
    location: "Dubai, UAE",
    avatar: "AR",
    rating: 5,
    text: "The Maldives overwater bungalow was a dream come true. Everything from booking to checkout was perfect. I've recommended WindBnB to all my friends and family!",
    stay: "Maldives Overwater Bungalow",
    color: "from-amber-500 to-orange-600",
  },
];

function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-rose-500 font-bold text-sm uppercase tracking-widest">Real Stories</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4">Guests Love WindBnB</h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {"★★★★★".split("").map((_, i) => (
              <span key={i} className="text-amber-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-gray-500">4.9 / 5 from over 200,000 reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity -translate-y-6 translate-x-6" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>

              {/* Stay tag */}
              <div className="inline-flex items-center gap-1.5 text-xs text-rose-600 bg-rose-50 rounded-full px-3 py-1 font-medium mb-5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                {t.stay}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
const footerLinks = {
  Support: ["Help Center", "Safety Info", "Cancellation Options", "Report a Concern"],
  Community: ["WindBnB Magazine", "Events", "Invite Friends", "Gift Cards"],
  Hosting: ["Try Hosting", "Host Resources", "Host Community", "Responsible Hosting"],
  WindBnB: ["Newsroom", "Features", "Careers", "Investors"],
};

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-800">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span className="text-white font-black text-lg">WindBnB</span>
          </div>

          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} WindBnB, Inc. · All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { label: "Twitter", path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
              { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            ].map((icon) => (
              <a
                key={icon.label}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-rose-500 transition-colors flex items-center justify-center"
                aria-label={icon.label}
              >
                <svg className="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
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

/* ─────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────── */
export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <DestinationsSection />
      <WhySection />
      <ListingsShowcase />
      <HostCTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}