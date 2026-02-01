"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, Info, Check } from "lucide-react";

export default function InvitationDetailPage() {
    return (
        <div className="min-h-screen bg-offwhite text-charcoal font-sans pb-20">

            {/* Hero Image */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src="/images/restaurant-interior-wide.jpg"
                    alt="L'Effervescence Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/30" />
                <div className="absolute top-6 left-6 z-10">
                    <Link href="/dashboard" className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-navy via-navy/80 to-transparent text-white">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">L&apos;Effervescence</h1>
                        <div className="flex flex-wrap items-center gap-4 text-white/80">
                            <span className="px-3 py-1 bg-gold text-navy text-xs font-bold uppercase tracking-widest rounded-sm">Michelin 2-Star</span>
                            <span>French Contemporary</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>Nishi-Azabu, Tokyo</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 -mt-8 relative z-10">
                {/* Left Content */}
                <div className="md:col-span-2 space-y-12 bg-white p-8 md:p-12 shadow-sm rounded-sm">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-navy mb-4">About the Restaurant</h2>
                        <p className="text-charcoal/80 leading-relaxed mb-6">
                            L&apos;Effervescence, led by Chef Shinobu Namae, celebrates the philosophy of &apos;farm to table&apos; with a focus on organic, seasonal ingredients. The intimate 22-seat space has held 2 Michelin stars since 2015 and is renowned for its deep respect for Japanese terroir expressed through French techniques.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-navy mb-4">About Your Course</h2>
                        <div className="bg-offwhite p-6 border-l-4 border-gold">
                            <h3 className="font-bold text-gold mb-2 text-lg">Winter Awakening</h3>
                            <p className="text-charcoal/80 italic mb-4">8 courses · Wine pairing available</p>
                            <p className="text-sm text-charcoal/70 leading-relaxed">
                                The &apos;Winter Awakening&apos; menu features root vegetables from Nagano, line-caught fish from Hokkaido, and a signature dessert celebrating Japan&apos;s citrus season.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-navy mb-6">Manage Reservation</h2>

                        {/* Guest Section */}
                        <div className="border border-gray-100 rounded-sm p-6 mb-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-navy">Add a Guest</h3>
                                    <p className="text-sm text-charcoal/60">Invite a companion to join this experience</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-navy">¥25,000</div>
                                    <div className="text-xs text-charcoal/50">per guest</div>
                                </div>
                            </div>
                            <button className="w-full py-3 border border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors text-sm uppercase tracking-wide">
                                + Add 1 Guest
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="/dashboard/confirmation/123" className="flex-1 py-4 bg-navy text-white font-bold text-center hover:bg-navy/90 transition-colors uppercase tracking-widest text-sm shadow-lg">
                                Accept Invitation
                            </Link>
                            <button className="px-6 py-4 text-navy font-medium hover:bg-gray-50 transition-colors text-sm border border-gray-100">
                                Request Change
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <button className="text-xs text-gray-400 hover:text-red-800 transition-colors">
                                Decline This Month
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Details Card */}
                <div className="md:col-span-1">
                    <div className="bg-white p-8 shadow-lg border-t-4 border-gold sticky top-24">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Reservation Details</h3>

                        <ul className="space-y-6">
                            <DetailRow icon={<Calendar className="w-5 h-5" />} label="Date" value="Saturday, Feb 15" sub="2026" />
                            <DetailRow icon={<Clock className="w-5 h-5" />} label="Time" value="7:00 PM" sub="Arrive by 6:50 PM" />
                            <DetailRow icon={<User className="w-5 h-5" />} label="Party Size" value="1 Person" sub="Counter Seating" />
                            <DetailRow icon={<Info className="w-5 h-5" />} label="Dress Code" value="Smart Casual" sub="No shorts or sandals" />
                        </ul>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <div className="text-xs text-charcoal/50 mb-2">Cancellation Policy</div>
                            <p className="text-xs text-charcoal/70 leading-relaxed">
                                Cancel up to 24 hours before your reservation at no charge. Late cancellations incur a 100% fee.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DetailRow({ icon, label, value, sub }: any) {
    return (
        <li className="flex items-start gap-4">
            <div className="text-gold mt-1">{icon}</div>
            <div>
                <div className="text-xs text-charcoal/50 uppercase tracking-wide mb-1">{label}</div>
                <div className="font-serif font-bold text-navy text-lg">{value}</div>
                {sub && <div className="text-sm text-charcoal/60">{sub}</div>}
            </div>
        </li>
    )
}
