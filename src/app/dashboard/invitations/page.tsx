"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function InvitationsPage() {
    // Mock Invitations
    const upcomingInvitations = [
        {
            id: 123,
            restaurant: "L'Effervescence",
            date: "Saturday, February 15",
            time: "7:00 PM",
            image: "/images/restaurant-interior.jpg",
            stars: 2,
            cuisine: "French Contemporary",
            status: "Action Required"
        }
    ];

    const pastInvitations = [
        {
            id: 101,
            restaurant: "Florilège",
            date: "January 18, 2026",
            time: "7:30 PM",
            image: "/images/dish-1.jpg",
            stars: 2,
            cuisine: "Modern French",
            status: "Completed"
        },
        {
            id: 98,
            restaurant: "Den",
            date: "December 20, 2025",
            time: "6:00 PM",
            image: "/images/hero.png",
            stars: 2,
            cuisine: "Creative Kaiseki",
            status: "Completed"
        }
    ];

    return (
        <main className="max-w-[1400px] mx-auto px-6 pt-28 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
            >
                <h1 className="text-3xl font-light text-white uppercase tracking-tight mb-2">My Invitations</h1>
                <p className="text-gray-400 mt-1 font-light tracking-wide text-sm">Review your upcoming culinary journeys and past experiences.</p>
            </motion.div>

            {/* Upcoming */}
            <section className="mb-16">
                <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Upcoming</h2>
                <div className="grid gap-6">
                    {upcomingInvitations.map((inv) => (
                        <motion.div
                            key={inv.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-surface-dark rounded-lg overflow-hidden border border-white/10 flex flex-col md:flex-row hover:border-primary/50 transition-colors group"
                        >
                            <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                                <Image src={inv.image} alt={inv.restaurant} fill className="object-cover" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-2 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded">{inv.status}</span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-2xl font-light uppercase tracking-wide text-white group-hover:text-primary transition-colors">{inv.restaurant}</h3>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-400 font-bold uppercase tracking-wider mb-6">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-[14px] font-icon">star</span> {inv.stars}-Star</span>
                                    <span>{inv.cuisine}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-300 font-light">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
                                        {inv.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                                        {inv.time}
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <Link href={`/dashboard/invitation/${inv.id}`} className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs font-bold uppercase tracking-widest rounded">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Past */}
            <section>
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">Past Experiences</h2>
                <div className="grid gap-4">
                    {pastInvitations.map((inv) => (
                        <div key={inv.id} className="bg-background-dark border border-white/5 rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 opacity-70 hover:opacity-100 transition-opacity">
                            <div className="size-16 relative rounded overflow-hidden shrink-0">
                                <Image src={inv.image} alt={inv.restaurant} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wide">{inv.restaurant}</h3>
                                <div className="text-xs text-gray-400 mt-1">{inv.date}</div>
                            </div>
                            <div className="flex gap-4">
                                <button className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Rate</button>
                                <button className="text-xs text-gray-400 hover:text-white uppercase tracking-wider transition-colors">Revisit</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
