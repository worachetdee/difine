"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function InvitationDetailPage() {
    return (
        <div className="min-h-screen bg-background-dark text-white font-display pb-20 selection:bg-primary selection:text-white">

            {/* Hero Image */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src="/images/restaurant-interior-wide.jpg"
                    alt="L'Effervescence Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-background-dark/30" />
                <div className="absolute top-6 left-6 z-10">
                    <Link href="/dashboard" className="px-4 py-2 bg-background-dark/50 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-background-dark/70 transition-colors flex items-center gap-2 border border-white/10">
                        <span className="material-symbols-outlined text-[16px] font-icon">arrow_back</span> Back to Dashboard
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent text-white">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-light uppercase tracking-tight mb-4">L&apos;Effervescence</h1>
                        <div className="flex flex-wrap items-center gap-4 text-white/80">
                            <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-sm">Michelin 2-Star</span>
                            <span className="text-sm font-light tracking-wide">French Contemporary</span>
                            <span className="size-1 bg-white/40 rounded-full" />
                            <span className="text-sm font-light tracking-wide">Nishi-Azabu, Tokyo</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 -mt-8 relative z-10">
                {/* Left Content */}
                <div className="md:col-span-2 space-y-12 bg-surface-dark p-8 md:p-12 shadow-2xl rounded-sm border border-white/5">
                    <div>
                        <h2 className="text-2xl font-light uppercase tracking-wide text-white mb-4">About the Restaurant</h2>
                        <p className="text-gray-400 leading-relaxed mb-6 font-light">
                            L&apos;Effervescence, led by Chef Shinobu Namae, celebrates the philosophy of &apos;farm to table&apos; with a focus on organic, seasonal ingredients. The intimate 22-seat space has held 2 Michelin stars since 2015 and is renowned for its deep respect for Japanese terroir expressed through French techniques.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-light uppercase tracking-wide text-white mb-4">About Your Course</h2>
                        <div className="bg-background-dark p-6 border-l-4 border-primary">
                            <h3 className="font-bold text-primary mb-2 text-lg uppercase tracking-wider">Winter Awakening</h3>
                            <p className="text-gray-300 italic mb-4 font-serif">8 courses · Wine pairing available</p>
                            <p className="text-sm text-gray-400 leading-relaxed font-light">
                                The &apos;Winter Awakening&apos; menu features root vegetables from Nagano, line-caught fish from Hokkaido, and a signature dessert celebrating Japan&apos;s citrus season.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-light uppercase tracking-wide text-white mb-6">Manage Reservation</h2>

                        {/* Guest Section */}
                        <div className="border border-white/10 rounded-sm p-6 mb-8 bg-background-dark/50">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-white uppercase tracking-wider text-sm">Add a Guest</h3>
                                    <p className="text-sm text-gray-400 mt-1">Invite a companion to join this experience</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-lg font-bold text-white">¥25,000</div>
                                    <div className="text-xs text-primary uppercase tracking-widest font-bold">per guest</div>
                                </div>
                            </div>
                            <button className="w-full py-3 border border-white/20 text-white font-bold hover:bg-white/5 transition-colors text-xs uppercase tracking-widest">
                                + Add 1 Guest
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="/dashboard/confirmation/123" className="flex-1 py-4 bg-primary text-white font-bold text-center hover:bg-primary-hover transition-colors uppercase tracking-widest text-xs shadow-lg rounded">
                                Accept Invitation
                            </Link>
                            <button className="px-6 py-4 text-white font-bold hover:bg-white/5 transition-colors text-xs border border-white/20 uppercase tracking-widest rounded">
                                Request Change
                            </button>
                        </div>
                        <div className="mt-4 text-center">
                            <button className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-red-400 transition-colors font-bold">
                                Decline This Month
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Details Card */}
                <div className="md:col-span-1">
                    <div className="bg-surface-dark p-8 shadow-lg border-t-4 border-primary sticky top-24 border-x border-b border-white/5">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Reservation Details</h3>

                        <ul className="space-y-6">
                            <DetailRow icon="calendar_today" label="Date" value="Saturday, Feb 15" sub="2026" />
                            <DetailRow icon="schedule" label="Time" value="7:00 PM" sub="Arrive by 6:50 PM" />
                            <DetailRow icon="person" label="Party Size" value="1 Person" sub="Counter Seating" />
                            <DetailRow icon="info" label="Dress Code" value="Smart Casual" sub="No shorts or sandals" />
                        </ul>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Cancellation Policy</div>
                            <p className="text-xs text-gray-400 leading-relaxed font-light">
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
            <div className="text-primary mt-1">
                <span className="material-symbols-outlined text-[20px] font-icon">{icon}</span>
            </div>
            <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-1">{label}</div>
                <div className="font-light text-white text-lg tracking-wide">{value}</div>
                {sub && <div className="text-sm text-gray-400 font-light">{sub}</div>}
            </div>
        </li>
    )
}
