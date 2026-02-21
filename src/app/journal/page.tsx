"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function JournalPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white">
            <Navbar />

            <main className="flex-1 w-full pt-20">
                {/* Hero Section */}
                <section className="relative px-6 py-24 md:py-32 max-w-[1280px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-10"
                    >
                        <div className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full bg-primary/10">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">The DiFine Journal</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tight mb-6">Curating Excellence</h1>
                        <p className="text-gray-400 font-light tracking-wide text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                            Beyond the reservation. Discover the people, stories, and exclusive experiences that define the DiFine lifestyle.
                        </p>
                    </motion.div>
                </section>

                {/* Influencers / Voices of Taste */}
                <section className="px-6 py-16 bg-surface-dark/50 border-y border-white/5">
                    <div className="max-w-[1280px] mx-auto text-center mb-12">
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">Voices of Taste</h2>
                        <p className="text-gray-500 text-sm">Our curated network of culinary ambassadors.</p>
                    </div>
                    <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Takashi M.", role: "Culinary Vlogger", desc: "Exploring Tokyo's hidden kaiseki gems.", followers: "120K+", img: "ambassador_takashi.png" },
                            { name: "Sarah J.", role: "Luxury Lifestyle", desc: "Curating the finest hospitality experiences in Asia.", followers: "450K+", img: "ambassador_sarah.png" },
                            { name: "Kenji R.", role: "Sommelier", desc: "Expert pairings and vintage wine discovery.", followers: "85K+", img: "ambassador_kenji.png" },
                        ].map((influencer, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background-dark border border-white/10 p-8 rounded-lg text-center hover:border-primary/50 transition-colors group"
                            >
                                <div className="size-24 mx-auto rounded-full mb-6 overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors">
                                    <img src={`/difine/images/${influencer.img}`} alt={influencer.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{influencer.name}</h3>
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">{influencer.role}</p>
                                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{influencer.desc}</p>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">{influencer.followers} Community</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Featured Chefs / The Masters */}
                <section className="px-6 py-24">
                    <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-light uppercase tracking-tight text-white mb-6">The Masters</h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                We partner exclusively with chefs who redefine gastronomy. Through our "Exclusive Chef Agreements," DiFine members gain access to off-menu creations and private chef's table experiences not available to the general public.
                            </p>
                            <div className="flex gap-4">
                                <button className="px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-gray-200 transition-colors">
                                    Meet the Chefs
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="relative aspect-square bg-surface-dark border border-white/10 rounded-lg overflow-hidden group">
                                <img src="/difine/images/media_chef_akiyama.png" alt="Chef Akiyama" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-center">
                                    <h4 className="font-bold text-primary mb-1">Chef Akiyama</h4>
                                    <p className="text-xs text-gray-300">3 Michelin Stars</p>
                                </div>
                            </div>
                            <div className="relative aspect-square bg-surface-dark border border-white/10 rounded-lg overflow-hidden translate-y-8 group">
                                <img src="/difine/images/media_chef_laurent.png" alt="Chef Laurent" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-center">
                                    <h4 className="font-bold text-primary mb-1">Chef Laurent</h4>
                                    <p className="text-xs text-gray-300">Modern French</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Tours */}
                <section className="px-6 py-24 bg-surface-dark border-t border-white/5">
                    <div className="max-w-[1280px] mx-auto text-center mb-16">
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-2">Experience Tours</h2>
                        <p className="text-gray-500 text-sm">Beyond the table: Immersive culinary journeys.</p>
                    </div>
                    <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-8">
                        <div className="group relative aspect-video overflow-hidden rounded-lg border border-white/10">
                            <img src="/difine/images/media_tour_toyosu.png" alt="Toyosu Market" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                                <span className="bg-primary text-black text-[10px] font-bold uppercase px-2 py-1 rounded mb-2 inline-block">Coming Soon</span>
                                <h3 className="text-xl font-bold text-white mb-2">Toyosu Market Private Tour</h3>
                                <p className="text-gray-300 text-sm">Join a master sushi chef for an exclusive morning auction and procurement tour.</p>
                            </div>
                        </div>
                        <div className="group relative aspect-video overflow-hidden rounded-lg border border-white/10">
                            <img src="/difine/images/media_tour_sake.png" alt="Sake Brewery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                                <span className="bg-primary text-black text-[10px] font-bold uppercase px-2 py-1 rounded mb-2 inline-block">Waitlist Open</span>
                                <h3 className="text-xl font-bold text-white mb-2">Sake Brewery Retreat</h3>
                                <p className="text-gray-300 text-sm">A weekend journey to Niigata's finest breweries with expert sommeliers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Awards */}
                <section className="px-6 py-24 text-center">
                    <div className="max-w-[1280px] mx-auto">
                        <h2 className="text-3xl font-light uppercase tracking-tight text-white mb-12">The DiFine Awards</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                "Partner of the Year 2025",
                                "Best Hospitality",
                                "Culinary Innovation",
                                "Members' Choice"
                            ].map((award, i) => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <div className="size-24 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-4xl text-primary">emoji_events</span>
                                    </div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-white">{award}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
