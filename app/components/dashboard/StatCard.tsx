// Reusable stat card for dashboard metrics
interface StatCardProps {
    icon: string;
    label: string;
    value: string | number;
    trend?: string;
    trendUp?: boolean;
    accent?: string; // Tailwind bg+text classes for the icon box
}

export default function StatCard({
    icon,
    label,
    value,
    trend,
    trendUp = true,
    accent = "bg-rose-100 text-[#E55A3D]",
}: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${accent}`}>
                    {icon}
                </div>
                {trend && (
                    <span
                        className={`text-xs font-bold px-2 py-1 rounded-full ${trendUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                            }`}
                    >
                        {trendUp ? "↑" : "↓"} {trend}
                    </span>
                )}
            </div>
            <div className="text-2xl font-black text-slate-900 mb-1">{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
        </div>
    );
}
