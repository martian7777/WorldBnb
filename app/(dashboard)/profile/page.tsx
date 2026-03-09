"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function ProfilePage() {
    const { user, isLoaded } = useUser();

    const [name, setName] = useState(user?.firstName ?? "");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [saved, setSaved] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (isLoaded && user) {
            setName(user.firstName ?? "");
            setEmail(user.primaryEmailAddress?.emailAddress ?? "");
        }
    }, [isLoaded, user]);

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        setSaving(true);
        await new Promise((r) => setTimeout(r, 700));
        // updateUser({ name, bio, location, phone });
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    }

    return (
        <div className="max-w-2xl space-y-6">
            {/* Avatar */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF8A70] to-[#14B8A6] flex items-center justify-center text-white font-black text-4xl mx-auto mb-4 shadow-lg">
                    {name?.[0]?.toUpperCase() ?? "U"}
                </div>
                <h2 className="text-xl font-black text-slate-900">{name || "Your Name"}</h2>
                <p className="text-sm text-gray-400">{email}</p>
                <p className="text-xs text-gray-400 mt-1">Member since {user?.createdAt ? new Date(user.createdAt).getFullYear() : "2026"}</p>
                <button className="mt-4 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-slate-700 px-5 py-2 rounded-xl transition-all">
                    📷 Change Photo
                </button>
            </div>

            {/* Profile form */}
            <form onSubmit={handleSave} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
                <h3 className="font-black text-slate-900 text-lg border-b border-gray-100 pb-4">Personal Information</h3>

                {saved && (
                    <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 flex items-center gap-2">
                        <span>✅</span> Profile updated successfully!
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="w-full border border-gray-100 rounded-xl px-4 py-3 text-sm bg-slate-50 text-gray-400 cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-400 mt-1">Email cannot be changed here.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="City, Country"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Bio</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows={3}
                        placeholder="Tell hosts and guests a bit about yourself…"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all resize-none"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={saving}
                        className="bg-gradient-to-r from-[#FF6B4A] to-[#14B8A6] hover:from-[#E55A3D] hover:to-pink-700 text-white font-bold px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-rose-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                    >
                        {saving ? "Saving…" : "Save Changes"}
                    </button>
                </div>
            </form>

            {/* Trust & Verification */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-lg mb-5 border-b border-gray-100 pb-4">Trust & Verification</h3>
                <div className="space-y-4">
                    {[
                        { label: "Email address", verified: true },
                        { label: "Phone number", verified: !!phone },
                        { label: "Government ID", verified: false },
                    ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between">
                            <span className="text-sm text-slate-700">{item.label}</span>
                            {item.verified ? (
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">✓ Verified</span>
                            ) : (
                                <button className="text-xs font-bold text-[#FF6B4A] hover:text-rose-700 border border-rose-200 hover:border-[#FF8A70] px-3 py-1 rounded-full transition-all">
                                    Verify Now
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
