"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Calendar, MapPin, Car, Share2 } from "lucide-react";

export default function ConfirmationPage() {
    return (
        <div className="min-h-screen bg-navy flex items-center justify-center p-6">

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white w-full max-w-lg overflow-hidden shadow-2xl rounded-sm"
            >
                <div className="bg-sage/10 p-8 text-center border-b border-sage/20">
                    <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <Check className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-navy mb-2">Table Confirmed</h1>
                    <p className="text-charcoal/60">Your reservation is secured.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Restaurant</div>
                                <div className="text-xl font-serif font-bold text-navy">L&apos;Effervescence</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-100">
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Date</div>
                                <div className="font-medium text-charcoal">Sat, Feb 15</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Time</div>
                                <div className="font-medium text-charcoal">7:00 PM</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Party</div>
                                <div className="font-medium text-charcoal">1 Person</div>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Ref ID</div>
                                <div className="font-mono text-xs text-charcoal mt-1">DF-2026-0215</div>
                            </div>
                        </div>
                    </div>

                    {/* Diamond Perk */}
                    <div className="bg-navy p-4 rounded-sm text-white flex items-start gap-4">
                        <div className="bg-gold/20 p-2 rounded-full text-gold">
                            <Car className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-gold text-sm uppercase tracking-widest mb-1">Limousine Service</div>
                            <p className="text-xs text-white/70 mb-3">Your pickup is included. We&apos;ll confirm your address 48h before.</p>
                            <button className="text-xs font-bold underline decoration-white/30 underline-offset-4 hover:text-gold transition-colors">
                                Confirm Pickup Address
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="py-3 border border-gray-200 text-charcoal text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" /> Add to Calendar
                        </button>
                        <button className="py-3 border border-gray-200 text-charcoal text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" /> View Map
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 text-center">
                    <Link href="/dashboard" className="text-navy font-bold text-sm hover:text-gold transition-colors">
                        Return to Dashboard
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
