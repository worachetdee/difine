"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

const PAST_EXPERIENCES = [
    {
        id: 1,
        restaurant: "Sushi Kanesaka",
        date: "January 18, 2026",
        location: "Ginza, Tokyo",
        image: "/difine/images/dish-1.jpg",
        price: "¥45,000",
        rating: 5,
    },
    {
        id: 2,
        restaurant: "Narisawa",
        date: "December 12, 2025",
        location: "Aoyama, Tokyo",
        image: "/difine/images/dish-1.jpg",
        price: "¥55,000",
        rating: 5,
    },
    {
        id: 3,
        restaurant: "Florilège",
        date: "November 23, 2025",
        location: "Jingumae, Tokyo",
        image: "/difine/images/restaurant-interior.jpg",
        price: "¥42,000",
        rating: 4,
    }
];

export default function PastExperiencesPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">

            <main className="flex-1 max-w-5xl mx-auto px-6 py-20 w-full">
                <div className="mb-12 flex items-center gap-4">
                    <Link href="/dashboard" className="text-gray-500 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </Link>
                    <h1 className="text-3xl font-light uppercase tracking-tight">Past Experiences</h1>
                </div>

                <div className="grid gap-8">
                    {PAST_EXPERIENCES.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-surface-dark border border-white/10 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center shadow-lg hover:border-primary/50 transition-colors"
                        >
                            <div className="relative w-full md:w-32 h-32 rounded overflow-hidden shrink-0">
                                <Image src={exp.image} alt={exp.restaurant} fill className="object-cover" />
                            </div>

                            <div className="flex-1 w-full text-center md:text-left">
                                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{exp.date}</div>
                                <h2 className="text-2xl font-light uppercase tracking-tight mb-2">{exp.restaurant}</h2>
                                <div className="text-gray-400 text-sm font-light flex items-center justify-center md:justify-start gap-2">
                                    <span className="material-symbols-outlined text-[16px]">location_on</span>
                                    {exp.location}
                                </div>
                            </div>

                            <div className="text-center md:text-right w-full md:w-auto">
                                <div className="flex justify-center md:justify-end gap-1 text-primary text-[14px] mb-2">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <span key={starIndex} className={`material-symbols-outlined font-icon ${starIndex < exp.rating ? '' : 'text-gray-700'}`}>star</span>
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-white mb-2">{exp.price}</div>
                                <button className="text-xs uppercase tracking-widest text-gray-400 border border-white/20 px-4 py-2 rounded hover:text-white hover:border-white transition-colors">
                                    View Receipt
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
