"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
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

        {/* Featured Collections */}
        <section className="py-20 px-4 md:px-10 lg:px-20 bg-background-dark">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Curated For You</span>
                <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Featured Collections</h2>
              </div>
              <a className="group flex items-center text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-widest" href="/restaurants">
                View All
                <span className="material-symbols-outlined ml-1 text-[18px] group-hover:translate-x-1 transition-transform font-icon">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <Image
                  src="/images/dish-1.jpg"
                  alt="Michelin Star Dish"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                  <div className="mb-2 h-0.5 w-12 bg-primary" />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Michelin Star</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    Discover culinary excellence awarded by the world&apos;s most prestigious guide.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <Image
                  src="/images/chef-cooking.jpg"
                  alt="Chef's Table"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-2 h-0.5 w-12 bg-primary" />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Chef&apos;s Table</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    Front-row seats to the artistry of cooking. An immersive dining experience.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Fine Ambience"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-2 h-0.5 w-12 bg-primary" />
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Rooftop Views</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    Dine amongst the stars with breathtaking panoramas of the city skyline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight Section */}
        <section className="py-20 px-4 md:px-10 lg:px-20 bg-surface-dark border-t border-white/5">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col items-center mb-12 text-center">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Editor&apos;s Choice</span>
              <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Curator&apos;s Pick</h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-[#252524] rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
                <Image
                  src="/images/restaurant-interior-wide.jpg"
                  alt="L'Effervescence Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col items-start justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">New Arrival</span>
                  <div className="flex text-primary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined text-[16px] font-icon fill-current">star</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">The Obsidian Room</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                  Experience the pinnacle of modern gastronomy in a setting defined by shadow and light. Chef Alexander Thorne presents a tasting menu that defies convention.
                </p>
                <div className="flex gap-4">
                  <Link href="/restaurants/123" className="h-12 flex items-center justify-center rounded bg-primary px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-hover transition-colors">
                    Reserve Table
                  </Link>
                  <button className="h-12 rounded border border-white/20 px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 px-4 bg-background-dark relative overflow-hidden">
          {/* Decorative gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-4">Join The Inner Circle</h2>
            <p className="text-gray-400 mb-8">Receive priority access to new openings and exclusive culinary events.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="Email Address" type="email" />
              <button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest text-xs px-6 py-3 rounded transition-colors" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-dark border-t border-white/5 py-12 px-6">
        <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <div className="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[14px] font-icon">restaurant_menu</span>
            </div>
            <span className="font-bold tracking-[0.1em] uppercase text-sm">DiFine</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-primary uppercase tracking-widest transition-colors">Contact</Link>
          </div>
          <p className="text-xs text-gray-600 uppercase tracking-widest">© {new Date().getFullYear()} DiFine Inc.</p>
        </div>
      </footer>
    </div>
  );
}
