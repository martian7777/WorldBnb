"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";

function SuccessContent() {
    const searchParams = useSearchParams();
    const bookingId = searchParams ? searchParams.get("bookingId") : null;
    const [booking, setBooking] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (bookingId) {
            // We'll just fetch the booking details to show on success
            axios.get(`/api/bookings/${bookingId}`).then(res => {
                setBooking(res.data);
                setLoading(false);
            }).catch(err => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [bookingId]);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto animate-bounce">
                    🎉
                </div>
                
                <div className="space-y-2">
                    <h1 className="text-3xl font-black text-slate-900">Booking Confirmed!</h1>
                    <p className="text-gray-500">Pack your bags, you're going to {booking?.listings?.location || "your destination"}!</p>
                </div>

                {booking && (
                    <div className="bg-gray-50 rounded-2xl p-5 text-left border border-gray-100">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Booking Summary</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-slate-600">Property</span>
                                <span className="text-sm font-black text-slate-900">{booking.listings.title}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-slate-600">Confirmation</span>
                                <span className="text-sm font-black text-[#FF6B4A]">#{booking.confirmation_code}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-slate-600">Dates</span>
                                <span className="text-sm font-bold text-slate-800">
                                    {new Date(booking.check_in).toLocaleDateString()} - {new Date(booking.check_out).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                <div className="pt-4 space-y-3">
                    <Link 
                        href="/bookings" 
                        className="block w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
                    >
                        View My Bookings
                    </Link>
                    <Link 
                        href="/" 
                        className="block w-full text-slate-500 font-bold text-sm py-2 hover:text-slate-900 transition-all font-inter"
                    >
                        Back to Home
                    </Link>
                </div>

                <p className="text-[10px] text-gray-400 leading-relaxed font-inter">
                    A confirmation email has been sent to your registered address. <br/>
                    Need help? Contact support@rentora.com
                </p>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF6B4A]"></div>
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}
