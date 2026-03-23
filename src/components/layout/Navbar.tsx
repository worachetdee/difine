"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LenisScroll } from "./LenisScroll";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: "/restaurants", label: "Restaurants" },
        { href: "/pricing", label: "Membership" },
        { href: "/concierge", label: "Concierge" },
        { href: "/journal", label: "Journal" },
    ];

    return (
        <>
        <LenisScroll />
        <nav
            className="fixed top-0 left-0 right-0 z-50 bg-background-dark/85 backdrop-blur-md border-b border-white/5 text-white transition-all duration-300"
        >
            <div className="flex items-center justify-between px-6 lg:px-10 py-4">
                <Link href="/" className="flex items-center">
                    <Image src="/difine/images/difine-logo.svg" alt="DiFine" width={36} height={36} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-widest transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Action */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/sign-in" className="flex items-center justify-center rounded bg-primary px-6 h-10 text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-[0_0_15px_rgba(141,127,104,0.3)]">
                        Sign In
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex items-center justify-center text-white hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-background-dark border-t border-white/5"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 hover:text-primary text-sm font-medium uppercase tracking-widest transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/5">
                                <Link
                                    href="/sign-in"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full rounded bg-primary py-3 text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-[0_0_15px_rgba(141,127,104,0.3)]"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
        </>
    );
}
