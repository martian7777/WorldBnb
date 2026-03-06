import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="w-20 h-20 bg-[#FF6B4A]/10 text-[#FF6B4A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert className="w-10 h-10" />
                </div>
                <h1 className="text-5xl font-black text-[#1E3A8A] mb-4">404</h1>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    Oops! The page you're looking for seems to have wandered off. Let's get you back home and exploring new destinations.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-[#FF6B4A] hover:bg-[#E55A3D] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-[#FF6B4A]/30 w-full sm:w-auto"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
