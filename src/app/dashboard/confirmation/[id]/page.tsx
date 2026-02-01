"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ConfirmationPage() {
    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center p-6 font-display text-white selection:bg-primary selection:text-white">

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-surface-dark w-full max-w-lg overflow-hidden shadow-2xl rounded-lg border border-white/10"
            >
                <div className="bg-primary/10 p-8 text-center border-b border-primary/20">
                    <div className="size-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-primary/30">
                        <span className="material-symbols-outlined text-[32px] font-icon">check</span>
                    </div>
                    <h1 className="text-3xl font-light uppercase tracking-tight text-white mb-2">Table Confirmed</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm">Your reservation is secured.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-start pb-4 border-b border-white/10">
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Restaurant</div>
                                <div className="text-xl font-light uppercase tracking-wide text-white">L&apos;Effervescence</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/10">
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Date</div>
                                <div className="font-medium text-gray-300">Sat, Feb 15</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Time</div>
                                <div className="font-medium text-gray-300">7:00 PM</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Party</div>
                                <div className="font-medium text-gray-300">1 Person</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Ref ID</div>
                                <div className="font-mono text-xs text-primary mt-1 tracking-wider">DF-2026-0215</div>
                            </div>
                        </div>
                    </div>

                    {/* Diamond Perk */}
                    <div className="bg-background-dark p-4 rounded border border-white/10 flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-[20px] font-icon">directions_car</span>
                        </div>
                        <div>
                            <div className="font-bold text-primary text-xs uppercase tracking-widest mb-1">Limousine Service</div>
                            <p className="text-xs text-gray-400 mb-3 font-light leading-relaxed">Your pickup is included. We&apos;ll confirm your address 48h before.</p>
                            <button className="text-xs font-bold underline decoration-white/30 underline-offset-4 hover:text-primary transition-colors uppercase tracking-wider text-white">
                                Confirm Pickup Address
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="py-3 border border-white/10 rounded bg-transparent text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/20 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary font-icon">calendar_today</span> Add to Calendar
                        </button>
                        <button className="py-3 border border-white/10 rounded bg-transparent text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 hover:border-white/20 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-[16px] text-primary font-icon">location_on</span> View Map
                        </button>
                    </div>
                </div>

                <div className="bg-background-dark p-6 text-center border-t border-white/10">
                    <Link href="/dashboard" className="text-white font-bold text-xs uppercase tracking-widest hover:text-primary transition-colors">
                        Return to Dashboard
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
