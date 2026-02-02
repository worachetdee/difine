"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { Spotlight } from "@/components/home/Spotlight";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <FeaturedCollections />
        <Spotlight />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
