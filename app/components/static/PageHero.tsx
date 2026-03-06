import Image from "next/image";

interface PageHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    /** Tailwind gradient classes — used as fallback when no bgImage is set */
    gradient?: string;
    /** Path to a public/ image used as the hero background (e.g. "/images/hero-support.png") */
    bgImage?: string;
}

export default function PageHero({
    badge,
    title,
    subtitle,
    gradient = "from-[#FF6B4A] to-[#14B8A6]",
    bgImage,
}: PageHeroProps) {
    return (
        <section
            className={`relative pt-32 pb-24 px-4 overflow-hidden ${bgImage ? "" : `bg-gradient-to-br ${gradient}`
                }`}
        >
            {/* Photo background */}
            {bgImage && (
                <>
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                        quality={80}
                    />
                    {/* Dark overlay so text stays readable */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/65" />
                </>
            )}

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 backdrop-blur-sm">
                    {badge}
                </span>
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
