"use client";

import { useState } from "react";

interface ContactFormProps {
    subjects: string[];
    submitLabel?: string;
}

export default function ContactForm({
    subjects,
    submitLabel = "Submit",
}: ContactFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-gray-500 text-sm">
                    Our support team will get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Your Name
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:border-transparent transition"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address
                    </label>
                    <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:border-transparent transition"
                    />
                </div>
            </div>

            {/* Subject */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:border-transparent transition bg-white text-slate-700"
                >
                    <option value="">Select a topic...</option>
                    {subjects.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea
                    required
                    rows={5}
                    placeholder="Describe your issue or question in detail..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B4A] focus:border-transparent transition resize-none"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#FF6B4A] hover:bg-[#E55A3D] text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-[#FF6B4A]/30"
            >
                {submitLabel}
            </button>
        </form>
    );
}
