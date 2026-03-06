"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthCard from "@/app/components/auth/AuthCard";
import SocialButton, { GithubIcon, GoogleIcon } from "@/app/components/auth/SocialButton";
import { useAuth } from "@/app/context/AuthContext";

export default function SignupPage() {
    const { signup } = useAuth();
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        if (password !== confirm) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        const result = await signup(name, email, password);
        setLoading(false);
        if (result.ok) {
            router.push("/dashboard");
        } else {
            setError(result.error ?? "Signup failed. Please try again.");
        }
    }

    function handleSocial(provider: string) {
        signup(`${provider} User`, `demo@${provider}.com`, "password123").then((r) => {
            if (r.ok) router.push("/dashboard");
        });
    }

    return (
        <AuthCard
            title="Create your account ✈️"
            subtitle="Start your Rentora journey — it's completely free"
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
                    <span className="bg-white px-3 text-gray-400 font-medium">or sign up with email</span>
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
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Johnson"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all placeholder-gray-400"
                    />
                </div>

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
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Min. 6 characters"
                        required
                        minLength={6}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all placeholder-gray-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Confirm Password</label>
                    <input
                        type="password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Re-enter your password"
                        required
                        minLength={6}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-gray-400 ${confirm && confirm !== password
                                ? "border-[#FFAA99] focus:ring-[#FFAA99]"
                                : "border-gray-200 focus:ring-[#FF8A70]"
                            }`}
                    />
                    {confirm && confirm !== password && (
                        <p className="text-xs text-[#FF6B4A] mt-1">Passwords do not match</p>
                    )}
                </div>

                {/* Terms agreement */}
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                    By signing up you agree to our{" "}
                    <Link href="/terms" className="text-[#FF6B4A] hover:underline">Terms</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="text-[#FF6B4A] hover:underline">Privacy Policy</Link>
                </p>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#FF6B4A] to-[#14B8A6] hover:from-[#E55A3D] hover:to-pink-700 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-rose-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                    {loading ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                            Creating account…
                        </span>
                    ) : "Create Account →"}
                </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <Link href="/login" className="text-[#FF6B4A] hover:text-rose-700 font-semibold">
                    Sign in
                </Link>
            </p>
        </AuthCard>
    );
}
