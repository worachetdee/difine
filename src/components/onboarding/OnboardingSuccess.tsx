"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function OnboardingSuccess({ plan }: { plan: string }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="text-center w-full max-w-lg mx-auto">
            {!showContent ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                        transition={{ duration: 1.5, ease: "anticipate" }}
                        className="size-32 rounded-full border border-primary/30 flex items-center justify-center relative mb-8"
                    >
                        <div className="absolute inset-0 border border-primary/50 rounded-full animate-ping opacity-20" />
                        <Image src="/difine/images/difine-logo.svg" alt="DiFine" width={64} height={64} />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-primary font-bold uppercase tracking-[0.2em] text-sm animate-pulse"
                    >
                        Finalizing Membership...
                    </motion.p>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-4">Welcome to DiFine</h1>
                    <p className="text-xl text-primary font-serif italic mb-12">You are now a {plan} member.</p>

                    <div className="bg-surface-dark border border-white/10 p-8 rounded-lg mb-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-9xl">verified</span>
                        </div>
                        <div className="text-left relative z-10">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Member ID</div>
                            <div className="text-lg font-mono text-white mb-6">DF-2026-0482</div>

                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Member Since</div>
                            <div className="text-lg text-white">February 2026</div>
                        </div>
                    </div>

                    <div className="space-y-6 mb-12">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">What happens next:</h3>
                        <div className="space-y-4 text-left max-w-sm mx-auto">
                            <div className="flex gap-4">
                                <span className="flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary text-xs font-bold ring-1 ring-primary/50">1</span>
                                <p className="text-sm text-gray-300 font-light">Our algorithm is building your taste profile now.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary text-xs font-bold ring-1 ring-primary/50">2</span>
                                <p className="text-sm text-gray-300 font-light">Your first curated invitation arrives within 48 hours.</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary text-xs font-bold ring-1 ring-primary/50">3</span>
                                <p className="text-sm text-gray-300 font-light">Accept, show up, and savor.</p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/dashboard"
                        className="inline-block w-full md:w-auto px-12 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                    >
                        Go to Dashboard
                    </Link>
                </motion.div>
            )}
        </div>
    );
}
