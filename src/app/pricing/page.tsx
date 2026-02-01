"use client";

import { motion } from "framer-motion";
import { Check, Star, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-offwhite text-charcoal font-sans pt-20">
            <Navbar />

            {/* Header */}
            <section className="py-20 px-6 text-center bg-navy text-white relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold mb-6"
                    >
                        Choose Your <span className="text-gold italic">Experience</span>
                    </motion.h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                        Three tiers designed for different lifestyles. All include guaranteed monthly fine dining with course fees covered.
                    </p>
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
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-center text-navy mb-12">Compare Memberships</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 px-4 text-charcoal/60 font-normal w-1/4">Feature</th>
                                    <th className="py-4 px-4 text-navy font-bold text-lg w-1/4">Silver</th>
                                    <th className="py-4 px-4 text-gold font-bold text-lg w-1/4">Gold</th>
                                    <th className="py-4 px-4 text-navy font-bold text-lg w-1/4">Diamond</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <TableRow feature="Monthly Fee" silver="¥45,000" gold="¥70,000" diamond="¥120,000" />
                                <TableRow feature="Course Level" silver="Standard" gold="Premium" diamond="High-end" />
                                <TableRow feature="Restaurant Options" silver="Assigned" gold="Multiple choices" diamond="Priority selection" />
                                <TableRow feature="Cancellation" silver="1 week" gold="3 days" diamond="1 day" />
                                <TableRow feature="Guest Invites" silver="1" gold="2" diamond="3" />
                                <TableRow feature="Chef's Table" silver="—" gold="✓" diamond="Priority" />
                                <TableRow feature="Limousine" silver="—" silverClass="text-gray-300" gold="—" goldClass="text-gray-300" diamond="✓" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-offwhite">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-center text-navy mb-12">Frequently Asked Questions</h2>
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
            <section className="py-24 bg-navy text-center px-6 text-white">
                <h2 className="text-4xl font-serif font-bold mb-6">Ready to Transform Your Dining Life?</h2>
                <p className="text-lg text-white/70 mb-8 font-light">Select your tier and request an invitation. Our team will reach out within 48 hours.</p>
                <Link href="/sign-up" className="inline-block px-10 py-4 bg-gold text-navy font-bold text-lg rounded-sm hover:bg-gold-light transition-colors">
                    Get Started
                </Link>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-charcoal text-white/40 text-sm text-center border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} DiFine. All rights reserved.</p>
            </footer>
        </div>
    );
}

function TierCard({ title, price, usd, tagline, idealFor, features, btnText, isPopular, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`flex flex-col p-8 rounded-sm relative ${isPopular ? 'bg-navy text-white ring-2 ring-gold shadow-2xl scale-[1.02] z-10' : 'bg-white text-charcoal border border-gray-100 shadow-lg'}`}
        >
            {isPopular && <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-b-sm">Most Popular</div>}

            <div className="mb-6 text-center">
                <h3 className={`text-2xl font-serif font-bold mb-2 ${isPopular ? 'text-gold' : 'text-navy'}`}>{title}</h3>
                <p className={`text-sm tracking-wide uppercase mb-6 ${isPopular ? 'text-white/60' : 'text-charcoal/60'}`}>{tagline}</p>
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-sm opacity-60">/mo</span>
                </div>
                <div className="text-sm opacity-50 mt-1">{usd}</div>
            </div>

            <div className={`p-4 rounded-sm text-sm mb-8 italic text-center ${isPopular ? 'bg-white/10 text-white/80' : 'bg-gray-50 text-charcoal/70'}`}>
                &quot;{idealFor}&quot;
            </div>

            <ul className="flex-1 space-y-4 mb-8">
                {features.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 shrink-0 ${isPopular ? 'text-gold' : 'text-navy'}`} />
                        <span className="opacity-80">{feat}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 font-bold rounded-sm transition-colors ${isPopular ? 'bg-gold text-navy hover:bg-gold-light' : 'bg-navy text-white hover:bg-navy/90'}`}>
                {btnText}
            </button>
        </motion.div>
    )
}

function TableRow({ feature, silver, gold, diamond, silverClass = "", goldClass = "", diamondClass = "" }: any) {
    return (
        <tr className="hover:bg-gray-50/50 transition-colors">
            <td className="py-4 px-4 font-medium text-charcoal/80">{feature}</td>
            <td className={`py-4 px-4 ${silverClass}`}>{silver}</td>
            <td className={`py-4 px-4 font-medium text-navy/90 ${goldClass}`}>{gold}</td>
            <td className={`py-4 px-4 font-bold text-navy ${diamondClass}`}>{diamond}</td>
        </tr>
    )
}

function FAQItem({ q, a }: any) {
    return (
        <div className="space-y-2">
            <h4 className="text-lg font-serif font-bold text-navy flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-gold" /> {q}
            </h4>
            <p className="text-charcoal/70 leading-relaxed pl-7">{a}</p>
        </div>
    )
}
