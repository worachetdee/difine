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
          src="/difine/images/hero.png"
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
            The private dining club for the world&apos;s most exclusive tables. Experience culinary perfection in settings designed to inspire.
          </p>
        </motion.div>

        {/* Search Bar Module */}
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link
            href="/membership"
            className="h-14 px-8 rounded bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-hover transition-all active:scale-95 shadow-lg flex items-center justify-center min-w-[200px]"
          >
            Apply for Membership
          </Link>
          <Link
            href="/restaurants"
            className="h-14 px-8 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center min-w-[200px]"
          >
            Explore Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
