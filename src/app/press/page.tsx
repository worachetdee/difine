"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const PRESS_RELEASES = [
    {
        date: "February 1, 2026",
        title: "DiFine Launches Elite Dining Concierge in Tokyo",
        summary: "The definitive digital membership for high-end gastronomy makes its debut in Ginza and Omotesando, partnering with 50+ award-winning establishments.",
        media: "Business Wire"
    },
    {
        date: "January 15, 2026",
        title: "DiFine Secures $1.2M Pre-Seed Funding to Revolutionize Tokyo's Fine Dining Access",
        summary: "Led by prominent hospitality angel investors, the funding will fuel platform development and exclusive restaurant partnerships.",
        media: "TechCrunch Japan"
    },
    {
        date: "December 10, 2025",
        title: "Former Michelin Guide Director Joins DiFine Advisory Board",
        summary: "Kenjiro Sato brings three decades of industry expertise to curate DiFine's exclusive 'Diamond Collection' of bespoke dining experiences.",
        media: "Nikkei Asia"
    }
];

export default function PressPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 max-w-4xl mx-auto px-6 py-24 w-full mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Newsroom</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-light text-white uppercase tracking-tight mb-6">Press & Media</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm max-w-xl mx-auto leading-relaxed">
                        Latest updates, announcements, and media coverage from the DiFine team. For media inquiries, please contact <a href="mailto:press@difine.com" className="text-white hover:text-primary transition-colors underline decoration-white/30 hover:decoration-primary/50">press@difine.com</a>.
                    </p>
                </motion.div>

                <div className="grid gap-8">
                    {PRESS_RELEASES.map((item, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-surface-dark border border-white/5 p-8 rounded-lg hover:border-white/20 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.media}</span>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">•</span>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-widest">{item.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{item.title}</h2>
                                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-2xl">
                                        {item.summary}
                                    </p>
                                </div>
                                <div className="shrink-0">
                                    <button className="text-xs text-white border-b border-white/30 pb-1 hover:text-primary hover:border-primary transition-colors uppercase tracking-widest font-bold">
                                        Read Story
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-white/10 text-center">
                    <h3 className="text-lg font-light uppercase tracking-wide mb-6">Brand Assets</h3>
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded text-xs font-bold uppercase tracking-widest transition-colors">
                            Download Logo Kit
                        </button>
                        <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded text-xs font-bold uppercase tracking-widest transition-colors">
                            Executive Bios
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
