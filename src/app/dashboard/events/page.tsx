"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

const EVENTS = [
    {
        id: 1,
        title: "Sakura Season Chef's Table",
        date: "March 20, 2026",
        location: "Kagurazaka, Tokyo",
        description: "An exclusive 12-seat dinner celebrating the arrival of spring with a sakura-themed kaiseki menu.",
        image: "/difine/images/dish-1.jpg",
        status: "Open",
    },
    {
        id: 2,
        title: "Wine & Wagyu Masterclass",
        date: "April 05, 2026",
        location: "Roppongi, Tokyo",
        description: "Learn the art of pairing rare vintages with A5 Miyazaki Wagyu from a master sommelier.",
        image: "/difine/images/restaurant-interior.jpg",
        status: "Waitlist",
    },
    {
        id: 3,
        title: "Summer Solstice Gala",
        date: "June 21, 2026",
        location: "Odaiba, Tokyo",
        description: "A black-tie evening on a private yacht overlooking Tokyo Bay, featuring a collaboration menu from 3 Michelin-starred chefs.",
        image: "/difine/images/restaurant-interior-wide.jpg",
        status: "Coming Soon",
    }
];

export default function UpcomingEventsPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">

            <main className="flex-1 max-w-5xl mx-auto px-6 py-20 w-full">
                <div className="mb-12 flex items-center gap-4">
                    <Link href="/dashboard" className="text-gray-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-3xl font-light uppercase tracking-tight">Upcoming Events</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {EVENTS.map((event, i) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-surface-dark border border-white/10 rounded-lg overflow-hidden group shadow-lg"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-[10px] font-bold uppercase px-3 py-1 rounded tracking-widest border border-white/10">
                                    {event.status}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                                    {event.date}
                                </div>
                                <h2 className="text-xl font-light uppercase tracking-tight mb-3 text-white group-hover:text-primary transition-colors">{event.title}</h2>
                                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                    {event.description}
                                </p>
                                <button className="w-full py-4 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded hover:bg-white/5 transition-colors">
                                    View Details & RSVP
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
