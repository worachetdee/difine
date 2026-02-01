"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-dark font-display text-white antialiased selection:bg-primary selection:text-white pt-20">
            <Navbar />

            {/* Header */}
            <section className="py-20 px-6 text-center bg-background-dark text-white relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Membership</span>
                        <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight leading-[1.1] mb-6">
                            Choose Your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">Experience</span>
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
                            Three tiers designed for different lifestyles. All include guaranteed monthly fine dining with course fees covered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto -mt-20 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* SILVER */}
                    <TierCard
                        title="Silver"
                        price="¥45,000"
                        usd="~$290 USD"
                        tagline="Smart Curation"
                        idealFor="Professionals who want Michelin-quality dining without the reservation hassle"
                        features={[
                            "One guaranteed fine dining experience monthly",
                            "Standard course at curated restaurants",
                            "AI-powered matching",
                            "Flexible cancellation (1 week prior)",
                            "Invite 1 guest (additional fee applies)",
                            "DiFine digital gourmet magazine"
                        ]}
                        btnText="Start with Silver"
                        delay={0}
                    />

                    {/* GOLD */}
                    <TierCard
                        title="Gold"
                        price="¥70,000"
                        usd="~$450 USD"
                        tagline="Access & Exploration"
                        idealFor="Executives and entrepreneurs seeking exclusive access and culinary discovery"
                        features={[
                            "Everything in Silver",
                            "Premium courses (2-star equivalent)",
                            "Choose from multiple restaurant options",
                            "Flexible cancellation (3 days prior)",
                            "Invite up to 2 guests",
                            "Special signature dish or takeaway gift",
                            "Invitations to chef's table events"
                        ]}
                        btnText="Choose Gold"
                        isPopular
                        delay={0.1}
                    />

                    {/* DIAMOND */}
                    <TierCard
                        title="Diamond"
                        price="¥120,000"
                        usd="~$770 USD"
                        tagline="Bespoke Hospitality"
                        idealFor="Discerning patrons who expect nothing less than perfection in every detail"
                        features={[
                            "Everything in Gold",
                            "High-end courses (3-star equivalent)",
                            "Priority seating on weekends/holidays",
                            "Flexible cancellation (1 day prior)",
                            "Invite up to 3 guests",
                            "Limousine service included",
                            "Concierge arrangements",
                            "Priority access to collaborations"
                        ]}
                        btnText="Experience Diamond"
                        delay={0.2}
                    />
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 px-6 bg-surface-dark border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-light text-center text-white uppercase tracking-tight mb-12">Compare Memberships</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 px-4 text-gray-400 font-normal w-1/4 uppercase tracking-wider text-xs">Feature</th>
                                    <th className="py-4 px-4 text-white font-bold text-lg w-1/4 uppercase tracking-wide">Silver</th>
                                    <th className="py-4 px-4 text-primary font-bold text-lg w-1/4 uppercase tracking-wide">Gold</th>
                                    <th className="py-4 px-4 text-white font-bold text-lg w-1/4 uppercase tracking-wide">Diamond</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <TableRow feature="Monthly Fee" silver="¥45,000" gold="¥70,000" diamond="¥120,000" />
                                <TableRow feature="Course Level" silver="Standard" gold="Premium" diamond="High-end" />
                                <TableRow feature="Restaurant Options" silver="Assigned" gold="Multiple choices" diamond="Priority selection" />
                                <TableRow feature="Cancellation" silver="1 week" gold="3 days" diamond="1 day" />
                                <TableRow feature="Guest Invites" silver="1" gold="2" diamond="3" />
                                <TableRow feature="Chef's Table" silver="—" gold="✓" diamond="Priority" />
                                <TableRow feature="Limousine" silver="—" silverClass="text-gray-600" gold="—" goldClass="text-gray-600" diamond="✓" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-background-dark border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light text-center text-white uppercase tracking-tight mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        <FAQItem q="What's included in the course fee?" a="Your membership covers the dinner course at your assigned restaurant. Drinks, additional dishes, and guest courses are charged separately at the venue." />
                        <FAQItem q="Can I choose which restaurant I visit?" a="Silver members receive AI-curated assignments. Gold and Diamond members can choose from multiple vetted options each month." />
                        <FAQItem q="What if I need to cancel?" a="Cancel within your tier's window (1 week/3 days/1 day before) at no charge. Late cancellations forfeit that month's dining credit." />
                        <FAQItem q="Can I bring guests?" a="Yes! Invite guests at an additional per-person course fee. Silver allows 1 guest, Gold allows 2, Diamond allows 3." />
                        <FAQItem q="Is this a contract?" a="Memberships are month-to-month with no long-term commitment. Cancel anytime before your next billing cycle." />
                        <FAQItem q="How do you select restaurants?" a="We partner with Michelin-listed and chef-driven establishments. Our algorithm matches you based on cuisine preferences and availability." />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-surface-dark text-center px-6 text-white border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-light mb-6 uppercase tracking-tight">Ready to Transform Your Dining Life?</h2>
                <p className="text-gray-400 mb-8 font-light text-sm md:text-base max-w-2xl mx-auto">Select your tier and request an invitation. Our team will reach out within 48 hours.</p>
                <Link href="/sign-up" className="inline-block px-10 py-4 bg-primary text-white font-bold text-sm uppercase tracking-widest rounded hover:bg-primary-hover transition-colors shadow-lg">
                    Get Started
                </Link>
            </section>

            {/* Footer */}
            <footer className="bg-surface-dark border-t border-white/5 py-12 px-6">
                <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-white">
                        <div className="size-6 bg-primary/20 rounded flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[14px] font-icon">restaurant_menu</span>
                        </div>
                        <span className="font-bold tracking-[0.1em] uppercase text-sm">DiFine</span>
                    </div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest">© {new Date().getFullYear()} DiFine Inc.</p>
                </div>
            </footer>
        </div>
    );
}

function TierCard({ title, price, usd, tagline, idealFor, features, btnText, isPopular, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className={`flex flex-col p-8 rounded-lg relative ${isPopular ? 'bg-surface-lighter text-white border border-primary/50 shadow-2xl scale-[1.02] z-10' : 'bg-surface-dark text-white border border-white/10 shadow-xl'}`}
        >
            {isPopular && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-b">Most Popular</div>}

            <div className="mb-6 text-center">
                <h3 className={`text-2xl font-bold uppercase tracking-wide mb-2 ${isPopular ? 'text-primary' : 'text-white'}`}>{title}</h3>
                <p className={`text-xs tracking-[0.2em] uppercase mb-6 ${isPopular ? 'text-white/60' : 'text-gray-400'}`}>{tagline}</p>
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-light">{price}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">/mo</span>
                </div>
                <div className="text-xs text-gray-600 mt-1 uppercase tracking-wider">{usd}</div>
            </div>

            <div className={`p-4 rounded text-sm mb-8 italic text-center font-serif ${isPopular ? 'bg-white/5 text-gray-300' : 'bg-white/5 text-gray-400'}`}>
                &quot;{idealFor}&quot;
            </div>

            <ul className="flex-1 space-y-4 mb-8">
                {features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                        <span className={`material-symbols-outlined text-[18px] shrink-0 ${isPopular ? 'text-primary' : 'text-gray-500'}`}>check_circle</span>
                        <span className="text-gray-300 font-light">{feat}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 font-bold uppercase tracking-widest text-xs rounded transition-colors ${isPopular ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {btnText}
            </button>
        </motion.div>
    )
}

function TableRow({ feature, silver, gold, diamond, silverClass = "", goldClass = "", diamondClass = "" }: any) {
    return (
        <tr className="hover:bg-white/5 transition-colors">
            <td className="py-4 px-4 font-medium text-gray-400 text-sm">{feature}</td>
            <td className={`py-4 px-4 text-sm text-gray-300 ${silverClass}`}>{silver}</td>
            <td className={`py-4 px-4 font-bold text-primary text-sm ${goldClass}`}>{gold}</td>
            <td className={`py-4 px-4 font-bold text-white text-sm ${diamondClass}`}>{diamond}</td>
        </tr>
    )
}

function FAQItem({ q, a }: any) {
    return (
        <div className="space-y-2">
            <h4 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">help</span> {q}
            </h4>
            <p className="text-gray-400 leading-relaxed pl-8 text-sm font-light">{a}</p>
        </div>
    )
}
