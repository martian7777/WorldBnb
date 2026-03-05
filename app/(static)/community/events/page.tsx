import PageHero from "@/app/components/static/PageHero";

const events = [
    { emoji: "🏙️", title: "WorldBNB Host Summit — Lisbon 2026", date: "Apr 12–14, 2026", location: "Lisbon, Portugal", type: "In-Person", spots: "234 attending", desc: "Three days of workshops, networking, and masterclasses for WorldBNB hosts from around the world.", color: "border-blue-200 bg-blue-50 text-blue-700" },
    { emoji: "💻", title: "Webinar: Maximizing Your Listing Revenue", date: "Mar 20, 2026", location: "Online", type: "Webinar", spots: "1,240 registered", desc: "Learn proven pricing strategies, photography tips, and guest communication best practices from top-rated hosts.", color: "border-emerald-200 bg-emerald-50 text-emerald-700" },
    { emoji: "🌏", title: "Community Meetup — Singapore", date: "Mar 28, 2026", location: "Singapore", type: "Meetup", spots: "89 attending", desc: "Connect with local hosts and guests in an informal evening of food, drinks, and sharing experiences.", color: "border-violet-200 bg-violet-50 text-violet-700" },
    { emoji: "🎨", title: "Listing Photography Workshop", date: "Apr 5, 2026", location: "Online", type: "Workshop", spots: "456 registered", desc: "A hands-on workshop to help hosts take stunning photos that attract more bookings — no professional camera needed.", color: "border-rose-200 bg-rose-50 text-rose-700" },
    { emoji: "🏡", title: "New Host Orientation — March", date: "Mar 15, 2026", location: "Online", type: "Webinar", spots: "780 registered", desc: "Everything you need to know to launch your first WorldBNB listing — live Q&A with experienced hosts included.", color: "border-amber-200 bg-amber-50 text-amber-700" },
    { emoji: "🤝", title: "Host Community Day — Dubai", date: "May 3, 2026", location: "Dubai, UAE", type: "In-Person", spots: "150 attending", desc: "A full-day event celebrating the WorldBNB host community in the Middle East, featuring awards and panel discussions.", color: "border-orange-200 bg-orange-50 text-orange-700" },
];

export default function EventsPage() {
    return (
        <>
            <PageHero
                badge="Community"
                title="Events & Experiences"
                subtitle="Join WorldBNB events — from host summits to webinars and local meetups. Connect, learn, and grow with the community."
                bgImage="/images/hero-community.png"
                gradient="from-orange-500 to-rose-500"
            />

            {/* Filter Bar */}
            <section className="bg-white border-b border-gray-100 py-5 sticky top-16 z-30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 flex-wrap">
                    {["All Events", "In-Person", "Webinars", "Workshops", "Meetups"].map((f) => (
                        <button key={f} className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${f === "All Events" ? "bg-rose-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                            {f}
                        </button>
                    ))}
                </div>
            </section>

            {/* Events Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        {events.map((e) => (
                            <div key={e.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="text-4xl">{e.emoji}</div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${e.color}`}>{e.type}</span>
                                </div>
                                <div>
                                    <h3 className="font-black text-gray-900 text-lg mb-2 leading-snug">{e.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        {e.date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        {e.location}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                        {e.spots}
                                    </span>
                                </div>
                                <button className="mt-auto w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 rounded-xl transition-all text-sm">
                                    Register Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Host Your Own */}
            <section className="py-16 bg-white text-center">
                <div className="max-w-xl mx-auto px-4">
                    <div className="text-5xl mb-4">🎤</div>
                    <h2 className="text-2xl font-black text-gray-900 mb-4">Want to Host a Community Event?</h2>
                    <p className="text-gray-500 mb-8 leading-relaxed">We support hosts who want to organize local meetups and workshops. Apply for community sponsorship and we'll help promote your event.</p>
                    <a href="/support/report-concern" className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold px-8 py-3.5 rounded-2xl transition-all hover:shadow-lg">
                        Apply for Sponsorship
                    </a>
                </div>
            </section>
        </>
    );
}
