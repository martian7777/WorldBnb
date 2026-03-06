"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "@/app/components/auth/AuthCard";
import SocialButton, { GithubIcon, GoogleIcon } from "@/app/components/auth/SocialButton";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);
        const result = await login(email, password);
        setLoading(false);
        if (result.ok) {
            router.push("/dashboard");
        } else {
            setError(result.error ?? "Login failed. Please try again.");
        }
    }

    function handleSocial(provider: string) {
        // In production, this calls signIn(provider) from next-auth/react
        // For demo, we simulate a social login
        login(`demo@${provider}.com`, "password123").then((r) => {
            if (r.ok) router.push("/dashboard");
        });
    }

    return (
        <AuthCard
            title="Welcome back 👋"
            subtitle="Sign in to access your Rentora dashboard"
        >
            {/* Social Buttons */}
            <div className="flex gap-3 mb-6">
                <SocialButton icon={<GithubIcon />} label="GitHub" onClick={() => handleSocial("github")} />
                <SocialButton icon={<GoogleIcon />} label="Google" onClick={() => handleSocial("google")} />
            </div>

            {/* Divider */}
            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="bg-white px-3 text-gray-400 font-medium">or continue with email</span>
                </div>
            </div>

            {/* Error */}
            {error && (
                <div className="mb-5 bg-[#FFF0ED] border border-rose-200 text-rose-700 text-sm rounded-xl px-4 py-3">
                    {error}
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all placeholder-gray-400"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label className="text-sm font-semibold text-slate-700">Password</label>
                        <button type="button" className="text-xs text-[#FF6B4A] hover:text-rose-700 font-medium">Forgot password?</button>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all placeholder-gray-400 pr-11"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#FF6B4A] to-[#14B8A6] hover:from-[#E55A3D] hover:to-pink-700 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-rose-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm mt-2"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            Signing in…
                        </span>
                    ) : "Sign In →"}
                </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#FF6B4A] hover:text-rose-700 font-semibold">
                    Create one free
                </Link>
            </p>
        </AuthCard>
    );
}
