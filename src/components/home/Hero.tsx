"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Luxurious dark restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/50 to-background-dark" />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Exquisite Taste</span>
          <h1 className="text-white text-5xl md:text-7xl font-light uppercase tracking-tight leading-[1.1]">
            Taste The <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Extraordinary</span>
          </h1>
          <p className="max-w-xl text-gray-300 text-sm md:text-base font-light leading-relaxed tracking-wide mt-2">
            Curated reservations for the world&apos;s most exclusive tables. Experience culinary perfection in settings designed to inspire.
          </p>
        </motion.div>

        {/* Search Bar Module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 w-full max-w-3xl rounded-lg bg-surface-dark/80 backdrop-blur-md border border-white/10 p-2 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-2">
            {/* Location Input */}
            <div className="relative flex h-12 md:h-14 w-full flex-1 items-center rounded bg-white/5 hover:bg-white/10 transition-colors px-4 border border-transparent focus-within:border-primary/50">
              <span className="material-symbols-outlined text-gray-400 mr-3 text-[20px] font-icon">location_on</span>
              <input className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-0 border-none p-0 font-medium" placeholder="Location" type="text" />
            </div>
            {/* Date Input */}
            <div className="relative flex h-12 md:h-14 w-full md:w-1/4 items-center rounded bg-white/5 hover:bg-white/10 transition-colors px-4 border border-transparent focus-within:border-primary/50">
              <span className="material-symbols-outlined text-gray-400 mr-3 text-[20px] font-icon">calendar_today</span>
              <input className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-0 border-none p-0 font-medium" placeholder="Date" type="date" />
            </div>
            {/* Guests Input */}
            <div className="relative flex h-12 md:h-14 w-full md:w-1/4 items-center rounded bg-white/5 hover:bg-white/10 transition-colors px-4 border border-transparent focus-within:border-primary/50">
              <span className="material-symbols-outlined text-gray-400 mr-3 text-[20px] font-icon">person</span>
              <input className="w-full bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-0 border-none p-0 font-medium" min="1" placeholder="2 Guests" type="number" />
            </div>
            {/* Search Button */}
            <Link href="/restaurants" className="h-12 md:h-14 w-full md:w-auto min-w-[140px] rounded bg-primary px-6 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-hover transition-all active:scale-95 shadow-lg flex items-center justify-center">
              Find Table
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
