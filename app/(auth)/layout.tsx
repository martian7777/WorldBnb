// Minimal centered layout for login / signup pages
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 flex flex-col">
            {/* Top nav */}
            <header className="py-5 px-6">
                <Link href="/" className="flex items-center gap-2 w-fit">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-black tracking-tight text-rose-500">
                        world<span className="text-gray-900">bnb</span>
                    </span>
                </Link>
            </header>

            {/* Page content */}
            <main className="flex-1 flex items-center justify-center px-4 py-12">
                {children}
            </main>

            {/* Footer */}
            <footer className="py-4 text-center text-xs text-gray-400 border-t border-gray-100">
                © {new Date().getFullYear()} WorldBNB, Inc. ·{" "}
                <Link href="/privacy" className="hover:text-rose-500 transition-colors">Privacy</Link>
                {" · "}
                <Link href="/terms" className="hover:text-rose-500 transition-colors">Terms</Link>
            </footer>
        </div>
    );
}
