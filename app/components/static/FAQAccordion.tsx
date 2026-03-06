"use client";

import { useState } from "react";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {items.map((item, index) => (
                <div key={index} className="bg-white">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors group"
                        aria-expanded={openIndex === index}
                    >
                        <span className="font-semibold text-slate-900 group-hover:text-[#FF6B4A] transition-colors pr-4">
                            {item.q}
                        </span>
                        <svg
                            className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180 text-[#FF6B4A]" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {openIndex === index && (
                        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                            {item.a}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
