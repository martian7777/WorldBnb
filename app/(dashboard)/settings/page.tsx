"use client";

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const { logout } = useAuth();
    const router = useRouter();

    // Password section
    const [currentPw, setCurrentPw] = useState("");
    const [newPw, setNewPw] = useState("");
    const [confirmPw, setConfirmPw] = useState("");
    const [pwMsg, setPwMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

    // Notification prefs
    const [prefs, setPrefs] = useState({
        bookingUpdates: true,
        messages: true,
        promotions: false,
        priceAlerts: true,
        newsletter: false,
    });

    // Privacy
    const [profilePublic, setProfilePublic] = useState(true);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    function handlePasswordChange(e: React.FormEvent) {
        e.preventDefault();
        if (!currentPw) { setPwMsg({ type: "err", text: "Enter your current password." }); return; }
        if (newPw.length < 6) { setPwMsg({ type: "err", text: "New password must be at least 6 characters." }); return; }
        if (newPw !== confirmPw) { setPwMsg({ type: "err", text: "Passwords do not match." }); return; }
        setPwMsg({ type: "ok", text: "Password updated successfully!" });
        setCurrentPw(""); setNewPw(""); setConfirmPw("");
        setTimeout(() => setPwMsg(null), 4000);
    }

    function togglePref(key: keyof typeof prefs) {
        setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    }

    function handleDeleteAccount() {
        logout();
        router.push("/");
    }

    const inputCls = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF8A70] focus:border-transparent transition-all";

    return (
        <div className="max-w-2xl space-y-6">
            {/* Change Password */}
            <form onSubmit={handlePasswordChange} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-5">
                <h3 className="font-black text-slate-900 text-lg border-b border-gray-100 pb-4">Change Password</h3>
                {pwMsg && (
                    <div className={`text-sm rounded-xl px-4 py-3 border ${pwMsg.type === "ok" ? "bg-green-50 border-green-200 text-green-700" : "bg-[#FFF0ED] border-rose-200 text-rose-700"}`}>
                        {pwMsg.text}
                    </div>
                )}
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Current Password</label>
                    <input type="password" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} placeholder="••••••••" className={inputCls} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">New Password</label>
                        <input type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} placeholder="Min. 6 characters" className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Confirm New Password</label>
                        <input type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} placeholder="Re-enter password" className={inputCls} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-[#1E3A8A] hover:bg-gray-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all">
                        Update Password
                    </button>
                </div>
            </form>

            {/* Notification Preferences */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-lg border-b border-gray-100 pb-4 mb-5">Notification Preferences</h3>
                <div className="space-y-4">
                    {(Object.entries(prefs) as [keyof typeof prefs, boolean][]).map(([key, val]) => {
                        const labels: Record<keyof typeof prefs, string> = {
                            bookingUpdates: "Booking updates & confirmations",
                            messages: "New messages from hosts",
                            promotions: "Promotions and special offers",
                            priceAlerts: "Price drop alerts for your wishlist",
                            newsletter: "Rentora newsletter",
                        };
                        return (
                            <div key={key} className="flex items-center justify-between py-1">
                                <span className="text-sm text-slate-700">{labels[key]}</span>
                                <button
                                    type="button"
                                    onClick={() => togglePref(key)}
                                    className={`w-11 h-6 rounded-full relative transition-all ${val ? "bg-[#FF6B4A]" : "bg-gray-200"}`}
                                    role="switch"
                                    aria-checked={val}
                                >
                                    <span className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all ${val ? "left-5" : "left-0.5"}`} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-lg border-b border-gray-100 pb-4 mb-5">Privacy</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-700">Public Profile</p>
                        <p className="text-xs text-gray-400 mt-0.5">Allow other users and hosts to see your profile</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setProfilePublic(!profilePublic)}
                        className={`w-11 h-6 rounded-full relative transition-all ${profilePublic ? "bg-[#FF6B4A]" : "bg-gray-200"}`}
                    >
                        <span className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-all ${profilePublic ? "left-5" : "left-0.5"}`} />
                    </button>
                </div>
            </div>

            {/* Connected Accounts */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-lg border-b border-gray-100 pb-4 mb-5">Connected Accounts</h3>
                <div className="space-y-4">
                    {[
                        { name: "Google", icon: "🔵", connected: false },
                        { name: "GitHub", icon: "⬛", connected: false },
                    ].map((acc) => (
                        <div key={acc.name} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">{acc.icon}</span>
                                <span className="text-sm font-semibold text-slate-700">{acc.name}</span>
                            </div>
                            <button className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${acc.connected ? "bg-gray-100 text-gray-600 hover:bg-gray-200" : "bg-[#FFF0ED] text-[#E55A3D] border border-rose-200 hover:bg-rose-100"}`}>
                                {acc.connected ? "Disconnect" : "Connect"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
                <h3 className="font-black text-red-600 text-lg border-b border-red-50 pb-4 mb-5">Danger Zone</h3>
                {!showDeleteConfirm ? (
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold text-slate-700">Delete Account</p>
                            <p className="text-xs text-gray-400 mt-0.5">Permanently remove your account and all data. This cannot be undone.</p>
                        </div>
                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            className="text-sm font-bold bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 px-4 py-2 rounded-xl transition-all"
                        >
                            Delete Account
                        </button>
                    </div>
                ) : (
                    <div className="bg-red-50 rounded-xl p-5 space-y-3">
                        <p className="text-sm font-bold text-red-700">Are you sure? This action is irreversible.</p>
                        <div className="flex gap-3">
                            <button onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2 rounded-xl transition-all">
                                Yes, Delete Forever
                            </button>
                            <button onClick={() => setShowDeleteConfirm(false)} className="bg-white border border-gray-200 text-gray-600 font-semibold text-sm px-5 py-2 rounded-xl hover:bg-slate-50 transition-all">
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
