import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

export default function PresentationPage() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white font-sans p-8">
            <Navbar />
            <div className="max-w-[1200px] mx-auto space-y-12 pt-20">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl text-primary font-bold uppercase tracking-widest">DiFine Presentation Kit</h1>
                    <p className="text-gray-400">Use these slide templates for your presentation. Screenshots or copy-paste components.</p>
                </div>

                {/* Slide 1: Title Slide */}
                <div className="aspect-video w-full bg-black relative overflow-hidden border border-gray-800 shadow-2xl flex flex-col items-center justify-center text-center p-20">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="/difine/images/hero.png" // Assuming this exists or using placeholder
                            alt="Background"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <h1 className="text-7xl font-light uppercase tracking-tight">
                            DiFine
                        </h1>
                        <div className="h-1 w-24 bg-primary mx-auto" />
                        <p className="text-xl text-gray-300 tracking-[0.2em] uppercase font-light">
                            The Private Dining Club
                        </p>
                    </div>
                    <div className="absolute bottom-8 left-0 w-full text-center">
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Confidential & Proprietary</p>
                    </div>
                </div>

                {/* Slide 2: Agenda / List */}
                <div className="aspect-video w-full bg-neutral-900 relative overflow-hidden border border-gray-800 shadow-2xl p-16 flex flex-col">
                    <div className="flex items-center justify-between mb-12 border-b border-gray-800 pb-6">
                        <h2 className="text-4xl text-white font-light uppercase tracking-tight">Agenda</h2>
                        <span className="text-primary text-sm font-bold tracking-widest uppercase">DiFine</span>
                    </div>
                    <ul className="space-y-6 text-2xl text-gray-300 font-light flex-1">
                        <li className="flex items-center gap-4">
                            <span className="text-primary font-serif italic text-3xl">01</span>
                            <span>Market Opportunity: The Luxury Gap</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-primary font-serif italic text-3xl">02</span>
                            <span>Product: Tech-Enabled Hospitality</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-primary font-serif italic text-3xl">03</span>
                            <span>Business Model & Financials</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="text-primary font-serif italic text-3xl">04</span>
                            <span>Go-to-Market Strategy</span>
                        </li>
                    </ul>
                </div>

                {/* Slide 3: Two Column (Image / Text) */}
                <div className="aspect-video w-full bg-black relative overflow-hidden border border-gray-800 shadow-2xl grid grid-cols-2">
                    <div className="relative h-full">
                        <Image
                            src="/difine/images/dish-1.jpg"
                            alt="Fine Dining"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="p-16 flex flex-col justify-center bg-neutral-900 border-l border-white/5">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">The Problem</span>
                        <h2 className="text-4xl font-light leading-tight mb-8">Access is the Ultimate Luxury</h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-6">
                            Affluent professionals have the means but not the time. Existing platforms force them to compete for reservations.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">close</span>
                                <span className="text-gray-300">No guaranteed access</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">close</span>
                                <span className="text-gray-300">Time-consuming search</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary">close</span>
                                <span className="text-gray-300">Lack of personalization</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 4: Big Statistic */}
                <div className="aspect-video w-full bg-background-dark relative overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center text-center p-20">
                    <div className="space-y-4 max-w-4xl">
                        <span className="text-primary text-sm font-bold uppercase tracking-[0.2em]">Market Validation</span>
                        <h2 className="text-8xl font-bold text-white tracking-tighter">
                            $290B
                        </h2>
                        <p className="text-2xl text-gray-300 font-light">
                            Global Luxury Experience Spending
                        </p>
                        <p className="text-sm text-gray-500 mt-8 max-w-lg mx-auto leading-relaxed">
                            "Luxury hospitality and fine dining have grown 20-40% since 2019, outpacing personal goods." <br />— Bain & Company, 2025
                        </p>
                    </div>
                </div>

                {/* Slide 5: Section Header */}
                <div className="aspect-video w-full bg-primary relative overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('/difine/images/pattern.png')] opacity-10 mix-blend-multiply" />
                    <div className="relative z-10 text-center">
                        <h2 className="text-6xl font-serif italic text-black mb-2">Financials</h2>
                        <p className="text-black/70 text-lg uppercase tracking-widest font-bold">Projections 2026-2028</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
