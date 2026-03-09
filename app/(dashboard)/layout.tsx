"use client";

import DashboardSidebar from "@/app/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar — hidden on mobile, sticky on desktop */}
            <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:z-40">
                <DashboardSidebar />
            </div>

            {/* Main content area */}
            <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
                <DashboardHeader />
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
