"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 bg-background-dark/85 backdrop-blur-md border-b border-white/5 text-white transition-all duration-300"
        >
            <div className="flex items-center gap-3 text-white">
                <div className="flex items-center justify-center size-8 rounded bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-[20px] font-icon">restaurant_menu</span>
                </div>
                <Link href="/" className="text-white text-lg font-bold tracking-[0.1em] uppercase font-display">
                    DiFine
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-10">
                <Link href="/restaurants" className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-widest transition-colors duration-200">
                    Restaurants
                </Link>
                <Link href="/pricing" className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-widest transition-colors duration-200">
                    Membership
                </Link>
                <Link href="/concierge" className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-widest transition-colors duration-200">
                    Concierge
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/sign-in" className="flex items-center justify-center rounded bg-primary px-6 h-10 text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-[0_0_15px_rgba(141,127,104,0.3)]">
                    Sign In
                </Link>
            </div>
        </motion.nav>
    );
}
