import Link from "next/link";

interface InfoCardProps {
    icon: string;
    title: string;
    desc: string;
    href?: string;
    accent?: string;
}

export default function InfoCard({
    icon,
    title,
    desc,
    href,
    accent = "bg-[#FFF0ED] text-[#E55A3D]",
}: InfoCardProps) {
    const content = (
        <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
            <div className={`w-12 h-12 rounded-xl ${accent} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#FF6B4A] transition-colors">
                {title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
            {href && (
                <div className="mt-4 flex items-center gap-1 text-[#FF6B4A] text-sm font-semibold">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            )}
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }
    return content;
}
