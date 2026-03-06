import PageHero from "@/app/components/static/PageHero";
import Link from "next/link";
import InfoCard from "@/app/components/static/InfoCard";

const benefits = [
  { icon: "📅", title: "Earn on Your Schedule", desc: "Host for a weekend, a season, or full-time. You're in complete control of your calendar and availability." },
  { icon: "🛡️", title: "Host Protection Guarantee", desc: "Up to $1M in property damage protection and liability insurance included with every booking at no cost to you." },
  { icon: "💬", title: "Dedicated Host Support", desc: "Access our 24/7 host support line, detailed guides, and a community of experienced hosts to help you succeed." },
  { icon: "💡", title: "Smart Pricing Tools", desc: "Our pricing recommendations use local market data to help you stay competitive and maximize your earnings." },
  { icon: "⭐", title: "Superhost Recognition", desc: "Earn Superhost status for exceptional hospitality—it unlocks greater visibility and exclusive rewards." },
  { icon: "🌍", title: "Global Guest Network", desc: "Reach travelers from 190+ countries. Rentora is the world's most trusted platform for unique stays." }
];

const steps = [
  { step: "01", icon: "🏠", title: "Create Your Listing", desc: "Tell us about your space—add photos, set your house rules, and choose your amenities. Takes about 10 minutes." },
  { step: "02", icon: "💵", title: "Set Your Price", desc: "You decide what to charge. Use our smart pricing tool or set your own nightly rates for any date range." },
  { step: "03", icon: "👋", title: "Welcome Guests", desc: "Accept booking requests, communicate with guests, and share your local knowledge for an unforgettable stay." }
];

export default function TryHostingPage() {
  return (
    <>
      <PageHero
        badge="Hosting"
        title="Earn Money Hosting on Rentora"
        subtitle="Turn your spare room, vacation home, or unique space into a source of income. Join 4 million hosts worldwide."
        bgImage="/images/hero-hosting.png"
        gradient="from-indigo-600 to-violet-700"
      />

      {/* Earnings Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-900 to-violet-900 rounded-3xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-2xl font-bold text-indigo-200 mb-2">Hosts in your area earn an average of</h2>
            <div className="text-6xl sm:text-7xl font-black my-4">$2,000<span className="text-3xl text-indigo-300">/mo</span></div>
            <p className="text-indigo-200 mb-8 max-w-md mx-auto">Based on similar listings in your region. Your actual earnings depend on your location, space type, and availability.</p>
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[{ label: "Avg. Nightly Rate", value: "$98" }, { label: "Avg. Occupancy", value: "73%" }, { label: "Avg. Rating", value: "4.87" }].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black">{s.value}</div>
                  <div className="text-indigo-300 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-10 text-center">Getting Started Is Simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg transition-all text-center">
                <div className="text-4xl mb-5">{s.icon}</div>
                <div className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Step {s.step}</div>
                <h3 className="font-black text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-10 text-center">Why Host with Rentora?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => <InfoCard key={b.title} {...b} accent="bg-indigo-50 text-indigo-600" />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700 text-center">
        <div className="max-w-xl mx-auto px-5">
          <h2 className="text-3xl font-black text-white mb-5">Ready to Start Hosting?</h2>
          <p className="text-indigo-200 mb-8">Create your listing in minutes and start earning today.</p>
          <Link href="/" className="inline-block bg-white text-indigo-700 font-black px-10 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all text-lg">
            Create Your Listing
          </Link>
        </div>
      </section>
    </>
  );
}