"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
    }),
};

function SlideWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`h-screen w-screen flex items-center justify-center px-6 overflow-hidden ${className}`}>
            <div className="max-w-[1200px] w-full mx-auto">{children}</div>
        </div>
    );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4 block">{children}</span>
    );
}

// Slide 1: Hero / Title
function TitleSlide() {
    return (
        <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/difine/images/hero.png" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black" />
            </div>
            <div className="relative z-10 text-center px-6">
                <motion.div initial="hidden" animate="visible" className="space-y-8">
                    <motion.p variants={fadeUp} custom={0} className="text-primary text-xs font-bold uppercase tracking-[0.3em]">
                        Investor Presentation
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-7xl md:text-9xl font-light uppercase tracking-tight">
                        DiFine
                    </motion.h1>
                    <motion.div variants={fadeUp} custom={2} className="h-[2px] w-20 bg-primary mx-auto" />
                    <motion.p variants={fadeUp} custom={3} className="text-xl md:text-2xl text-gray-300 tracking-[0.15em] uppercase font-light">
                        Luxury Dining, Seamlessly Delivered
                    </motion.p>
                    <motion.p variants={fadeUp} custom={4} className="text-base text-gray-400 font-light max-w-lg mx-auto">
                        Tokyo&apos;s First Luxury Dining Subscription Platform
                    </motion.p>
                    <motion.div variants={fadeUp} custom={5} className="inline-block mt-4 border border-primary/40 px-8 py-3 text-primary text-sm uppercase tracking-widest">
                        Seeking $1.125M Seed Investment
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute bottom-8 left-0 w-full text-center z-10">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">Confidential &amp; Proprietary</p>
            </div>
        </div>
    );
}

// Slide 2: The Problem
function ProblemSlide() {
    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>The Problem</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4">
                        Premium dining should be an escape —<br />
                        <span className="text-primary">yet getting there is anything but.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mt-16">
                    <motion.div variants={fadeUp} custom={1} className="space-y-8">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-white/80 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">person</span>
                            For Diners
                        </h3>
                        <div className="space-y-6">
                            {[
                                { icon: "search_off", title: "Research Overload", desc: "Tokyo has 1,600+ premium restaurants, making discovery an exhausting task." },
                                { icon: "block", title: "Booking Friction", desc: "Complex reservation forms and lottery-based systems create unnecessary barriers." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-red-400/70 text-xl mt-1">{item.icon}</span>
                                    <div>
                                        <p className="text-white font-medium mb-1">{item.title}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp} custom={2} className="space-y-8">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-white/80 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">storefront</span>
                            For Restaurants
                        </h3>
                        <div className="space-y-6">
                            {[
                                { icon: "trending_down", title: "Unpredictable Revenue", desc: "Volatile customer flow, cancellations, and no-shows undermine financial planning." },
                                { icon: "group_off", title: "Uncontrollable Guest Quality", desc: "Attracting guests who upgrade to premium courses or fine wines remains elusive." },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-red-400/70 text-xl mt-1">{item.icon}</span>
                                    <div>
                                        <p className="text-white font-medium mb-1">{item.title}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 3: The Solution
function SolutionSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>The Solution</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-2">
                        DiFine — <span className="text-primary">Luxury Dining as a Service</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-16">Tokyo&apos;s First Luxury Dining Subscription (LDaaS)</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div variants={fadeUp} custom={1} className="space-y-8">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-white/80">For Diners</h3>
                        {[
                            { icon: "calendar_month", title: "Guaranteed Monthly Dining", desc: "Pre-arranged reservations at premium restaurants every month — no research, no hassle." },
                            { icon: "auto_awesome", title: "Curated Guest Experience", desc: "DiFine selects restaurants and tailors every visit, ensuring a consistently exceptional experience." },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 items-start p-5 bg-white/[0.03] border border-white/5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">{item.icon}</span>
                                <div>
                                    <p className="text-white font-medium mb-1">{item.title}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} custom={2} className="space-y-8">
                        <h3 className="text-lg font-bold uppercase tracking-widest text-white/80">For Restaurants</h3>
                        {[
                            { icon: "groups", title: "Steady Stream of Quality Guests", desc: "A consistent flow of high-intent members. Cancelled seats are automatically filled — keeping every table occupied." },
                            { icon: "shield", title: "Revenue Protection", desc: "Course fees collected upfront. Full compensation for cancellations and no-shows, securing predictable revenue." },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 items-start p-5 bg-white/[0.03] border border-white/5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">{item.icon}</span>
                                <div>
                                    <p className="text-white font-medium mb-1">{item.title}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.p variants={fadeUp} custom={3} className="text-xs text-gray-500 mt-12 text-center">
                    * Drinks, course upgrades, and additional plates billed separately
                </motion.p>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 4: Market Opportunity
function MarketSlide() {
    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Market Opportunity</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        The <span className="text-primary">Exclusivity Gap</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            label: "Open Platforms",
                            name: "TableCheck / Omakase",
                            traits: ["High friction", "Zero curation", "Lottery-style booking"],
                            verdict: "Designed for mass market",
                            color: "text-gray-500",
                        },
                        {
                            label: "Traditional Concierge",
                            name: "Amex Centurion / Luxury Desks",
                            traits: ["Human-dependent", "24-48hr wait times", "No API inventory control"],
                            verdict: "High cost, manual delays",
                            color: "text-gray-500",
                        },
                        {
                            label: "DiFine",
                            name: "AI-Powered LDaaS",
                            traits: ["95% AI automation", "Instant push-curation", "Guaranteed access"],
                            verdict: "Blue Ocean in luxury dining",
                            color: "text-primary",
                            highlight: true,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            variants={fadeUp}
                            custom={i + 1}
                            className={`p-8 rounded-lg border ${item.highlight ? "border-primary/30 bg-primary/[0.05]" : "border-white/5 bg-white/[0.02]"}`}
                        >
                            <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-2 ${item.color}`}>{item.label}</p>
                            <p className="text-white font-medium text-lg mb-6">{item.name}</p>
                            <ul className="space-y-3 mb-6">
                                {item.traits.map((t) => (
                                    <li key={t} className="flex items-center gap-2 text-sm text-gray-400">
                                        <span className={`material-symbols-outlined text-sm ${item.highlight ? "text-primary" : "text-gray-600"}`}>
                                            {item.highlight ? "check_circle" : "remove"}
                                        </span>
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <p className={`text-xs uppercase tracking-widest ${item.color} font-bold`}>{item.verdict}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeUp} custom={4} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "290K", label: "HNWIs in Tokyo (SAM)" },
                        { value: "3,000", label: "Target Members by 2030" },
                        { value: "$1.2B–$4.7B", label: "Projected SAM Spend" },
                        { value: "~1%", label: "Affluent Demographic Target" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-lg">
                            <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 5: Pricing Tiers
function TiersSlide() {
    const tiers = [
        {
            name: "Silver",
            tagline: "Smart Curation",
            price: "¥45,000",
            features: [
                "1 Michelin dinner/month",
                "AI-curated matching",
                "Standard course included",
                "Flexible cancel (1 week)",
                "DiFine gourmet magazine",
            ],
        },
        {
            name: "Gold",
            tagline: "Access & Exploration",
            price: "¥70,000",
            featured: true,
            features: [
                "Premium course included",
                "Choose from multiple options",
                "Chef's table invitations",
                "Signature gift at venue",
                "Cancel 3 days prior",
            ],
        },
        {
            name: "Diamond",
            tagline: "Bespoke Hospitality",
            price: "¥120,000",
            features: [
                "High-end course included",
                "Priority weekend seating",
                "Limousine service",
                "Bouquets & arrangements",
                "Concierge-level care",
            ],
        },
    ];

    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
                    <SectionLabel>Pricing Tiers</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight">
                        Three Tiers of <span className="text-primary">Luxury</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            variants={fadeUp}
                            custom={i + 1}
                            className={`relative rounded-lg p-8 flex flex-col ${
                                tier.featured
                                    ? "bg-primary/10 border-2 border-primary"
                                    : "bg-background-dark border border-white/10"
                            }`}
                        >
                            {tier.featured && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-1">{tier.name}</p>
                            <p className="text-gray-400 text-sm mb-6">{tier.tagline}</p>
                            <div className="mb-8">
                                <span className="text-white text-4xl font-light">{tier.price}</span>
                                <span className="text-gray-500 text-sm"> /month</span>
                            </div>
                            <ul className="space-y-3 flex-1">
                                {tier.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-sm">
                                        <span className="material-symbols-outlined text-primary text-base font-icon mt-0.5">check</span>
                                        <span className="text-gray-300">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 6: Operational Plan
function OperationalSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Operational Plan</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        The <span className="text-primary">95/5 Model</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            icon: "workspace_premium",
                            title: "Tiered Membership",
                            desc: "Silver (Foundational), Gold (Premium), Diamond (UHNW) — each with curated experiences.",
                        },
                        {
                            icon: "smart_toy",
                            title: "Algorithmic Curation",
                            desc: "Proprietary AI maps 'Diner DNA' — flavor profiles, wine preferences, scheduling patterns — to automate the invitation-to-booking lifecycle.",
                        },
                        {
                            icon: "group",
                            title: "Lean Personnel",
                            desc: "Scaling from 8 to 21 employees over five years. 95% automation, elite concierge team for complex Diamond-tier edge cases.",
                        },
                        {
                            icon: "api",
                            title: "API Remote Control",
                            desc: "Direct integration with restaurant POS/Inventory systems to eliminate manual calls and ensure 100% reservation accuracy.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            custom={i + 1}
                            className="p-6 bg-white/[0.03] border border-white/5 rounded-lg"
                        >
                            <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{item.icon}</span>
                            <p className="text-white font-medium mb-3">{item.title}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 6: Roadmap
function RoadmapSlide() {
    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Roadmap</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Path to <span className="text-primary">3,000 Members</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-0 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[0.5rem] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary" />

                    {[
                        { phase: "Phase 1", title: "Foundation", year: "2026", desc: "Manual 'White Glove' beta for 300 members in Minato/Ginza to train AI datasets.", members: "300" },
                        { phase: "Phase 2", title: "Hardening", year: "2027", desc: "Full AI Curation Engine launch and API Remote Control integration with 25+ partner venues.", members: "700" },
                        { phase: "Phase 3", title: "Scaling", year: "2028–2029", desc: "Luxury brand partnerships and aggressive referral loop scaling.", members: "2,000" },
                        { phase: "Phase 4", title: "Maturity", year: "2030", desc: "Terminal state: 3,000 subscribers, 100 daily bookings with peak RevPASH for partners.", members: "3,000" },
                    ].map((item, i) => (
                        <motion.div key={item.phase} variants={fadeUp} custom={i + 1} className="relative text-center px-4">
                            <div className="w-4 h-4 rounded-full bg-primary mx-auto mb-8 relative z-10 ring-4 ring-background-dark" />
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-1">{item.phase}</p>
                            <p className="text-white text-lg font-medium mb-1">{item.title}</p>
                            <p className="text-gray-500 text-xs mb-4">{item.year}</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                            <p className="text-primary font-bold text-xl">{item.members}</p>
                            <p className="text-gray-600 text-[10px] uppercase tracking-widest">Members</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 7: Marketing Strategy
function MarketingSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Marketing Strategy</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Three Pillars of <span className="text-primary">Growth</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "handshake",
                            title: "Strategic B2B Alliances",
                            points: [
                                "Co-marketing with private wealth firms, family offices, and premium card issuers",
                                "Direct referral channels with Tokyo's elite 5-star hotels and luxury concierge desks",
                            ],
                        },
                        {
                            icon: "lock",
                            title: "Veblen Referral & Waitlist",
                            points: [
                                "Invite-only waitlist mechanism to drive desirability as a true Veblen good",
                                "Member-exclusive nomination system rewarding VIP perks, systematically lowering CAC",
                            ],
                        },
                        {
                            icon: "campaign",
                            title: "Targeted B2C & Prestige PR",
                            points: [
                                "Hyper-targeted SEO and algorithmic social media campaigns",
                                "Aimed at high-intent luxury dining keywords and affluent demographic profiles",
                            ],
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            custom={i + 1}
                            className="p-8 bg-white/[0.03] border border-white/5 rounded-lg"
                        >
                            <span className="material-symbols-outlined text-primary text-3xl mb-6 block">{item.icon}</span>
                            <p className="text-white font-medium text-lg mb-6">{item.title}</p>
                            <ul className="space-y-4">
                                {item.points.map((p) => (
                                    <li key={p} className="flex gap-3 items-start text-sm text-gray-400 leading-relaxed">
                                        <span className="material-symbols-outlined text-primary text-sm mt-0.5">arrow_forward</span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 8: Business Model
function BusinessModelSlide() {
    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Business Model</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Scalable, <span className="text-primary">High-Margin</span> Subscription
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-6 mb-16">
                    {[
                        { value: "$600–700", label: "ARPU / Month" },
                        { value: "3 Tiers", label: "Subscription Model" },
                        { value: "300→3K", label: "Subscriber Growth" },
                        { value: "Prepaid", label: "Cash Visibility" },
                        { value: "Asset-Light", label: "Platform Model" },
                    ].map((item, i) => (
                        <motion.div key={item.label} variants={fadeUp} custom={i + 1} className="text-center p-6 bg-white/[0.03] border border-white/5 rounded-lg">
                            <p className="text-xl md:text-2xl font-bold text-primary mb-2">{item.value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Subscriber Growth Chart */}
                <motion.div variants={fadeUp} custom={6} className="bg-white/[0.02] border border-white/5 rounded-lg p-8">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 font-bold">Subscriber Growth Projection</p>
                    <div className="flex items-end justify-between gap-4 h-48">
                        {[
                            { year: "2026", value: 300, max: 3000 },
                            { year: "2027", value: 700, max: 3000 },
                            { year: "2028", value: 1200, max: 3000 },
                            { year: "2029", value: 2000, max: 3000 },
                            { year: "2030", value: 3000, max: 3000 },
                        ].map((bar) => (
                            <div key={bar.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                <p className="text-primary font-bold text-sm">{bar.value.toLocaleString()}</p>
                                <div
                                    className="w-full max-w-[80px] bg-primary/80 rounded-t"
                                    style={{ height: `${(bar.value / bar.max) * 100}%` }}
                                />
                                <p className="text-gray-500 text-xs">{bar.year}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 9a: Financial Strength — Metrics
function FinancialsSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Financial Strength</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Early Profitability, <span className="text-primary">Controlled Risk</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Profitability",
                            icon: "trending_up",
                            items: ["Break-even: 375 subscribers", "EBITDA positive: Year 2", "Net margin: ~22%"],
                        },
                        {
                            title: "Downside Protection",
                            icon: "shield",
                            items: ["Prepaid revenue model", "Low fixed costs", "No insolvency risk"],
                        },
                        {
                            title: "Upside Potential",
                            icon: "rocket_launch",
                            items: ["Premium tier expansion", "Scalable platform", "Margin expansion over time"],
                        },
                    ].map((item, i) => (
                        <motion.div key={item.title} variants={fadeUp} custom={i + 1} className="p-8 bg-white/[0.03] border border-white/5 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-2xl mb-4 block">{item.icon}</span>
                            <p className="text-white font-medium text-lg mb-4">{item.title}</p>
                            <ul className="space-y-3">
                                {item.items.map((li) => (
                                    <li key={li} className="flex gap-2 items-center text-sm text-gray-400">
                                        <span className="material-symbols-outlined text-primary text-sm">check</span>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 9b: Financial Strength — Revenue Projections
function RevenueSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Financial Strength</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Revenue <span className="text-primary">Projections</span>
                    </h2>
                </motion.div>

                {/* Revenue Chart */}
                <motion.div variants={fadeUp} custom={1} className="bg-white/[0.02] border border-white/5 rounded-lg p-8">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 font-bold">Revenue Growth: $2M → $25M</p>
                    <div className="flex items-end justify-between gap-4 h-48">
                        {[
                            { year: "2026", value: 2.1, max: 25.5 },
                            { year: "2027", value: 5.1, max: 25.5 },
                            { year: "2028", value: 9.2, max: 25.5 },
                            { year: "2029", value: 16.2, max: 25.5 },
                            { year: "2030", value: 25.5, max: 25.5 },
                        ].map((bar) => (
                            <div key={bar.year} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                                <p className="text-primary font-bold text-sm">${bar.value}M</p>
                                <div
                                    className="w-full max-w-[80px] bg-primary/80 rounded-t"
                                    style={{ height: `${(bar.value / bar.max) * 100}%` }}
                                />
                                <p className="text-gray-500 text-xs">{bar.year}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Scenario */}
                <motion.div variants={fadeUp} custom={2} className="grid grid-cols-3 gap-6 mt-8">
                    {[
                        { label: "Worst Case", value: "< $7M", color: "text-gray-500" },
                        { label: "Base Case", value: "~$9M", color: "text-white" },
                        { label: "Best Case", value: "> $15M", color: "text-primary" },
                    ].map((s) => (
                        <div key={s.label} className="text-center p-4 bg-white/[0.02] border border-white/5 rounded-lg">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{s.label}</p>
                            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 10: Income Statement
function IncomeStatementSlide() {
    const years = [
        {
            year: "2026", revenue: "$2.09M", cogs: "(1.52M)", gross: "$571K", grossMargin: "27.3%",
            opex: "(670K)", ebitda: "-$99K", ebit: "-$183K", ebitMargin: "-8.7%",
            tax: "—", net: "-$183K", netMargin: "-8.7%", negative: true,
        },
        {
            year: "2027", revenue: "$5.13M", cogs: "(3.48M)", gross: "$1.65M", grossMargin: "32.1%",
            opex: "(835K)", ebitda: "$811K", ebit: "$703K", ebitMargin: "13.7%",
            tax: "(114K)", net: "$588K", netMargin: "11.5%",
        },
        {
            year: "2028", revenue: "$9.23M", cogs: "(6.18M)", gross: "$3.05M", grossMargin: "33.1%",
            opex: "(1.02M)", ebitda: "$2.04M", ebit: "$1.91M", ebitMargin: "20.7%",
            tax: "(421K)", net: "$1.49M", netMargin: "16.2%",
        },
        {
            year: "2029", revenue: "$16.16M", cogs: "(10.69M)", gross: "$5.47M", grossMargin: "33.8%",
            opex: "(1.34M)", ebitda: "$4.13M", ebit: "$3.99M", ebitMargin: "24.7%",
            tax: "(877K)", net: "$3.11M", netMargin: "19.2%",
        },
        {
            year: "2030", revenue: "$25.45M", cogs: "(16.74M)", gross: "$8.71M", grossMargin: "34.2%",
            opex: "(1.47M)", ebitda: "$7.24M", ebit: "$7.09M", ebitMargin: "27.8%",
            tax: "(1.56M)", net: "$5.53M", netMargin: "21.7%",
        },
    ];

    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Financial Strength</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-12">
                        Income <span className="text-primary">Statement</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-5 gap-4">
                    {years.map((y, i) => (
                        <motion.div
                            key={y.year}
                            variants={fadeUp}
                            custom={i + 1}
                            className={`bg-surface-dark border rounded-lg overflow-hidden ${y.year === "2030" ? "border-primary/50" : "border-white/10"}`}
                        >
                            <div className={`px-4 py-3 text-center border-b ${y.year === "2030" ? "border-primary/30 bg-primary/10" : "border-white/10 bg-white/[0.02]"}`}>
                                <p className={`text-lg font-bold ${y.year === "2030" ? "text-primary" : "text-white"}`}>{y.year}</p>
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Revenue</p>
                                    <p className="text-white font-medium text-sm">{y.revenue}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Gross Profit</p>
                                    <p className="text-white font-medium text-sm">{y.gross}</p>
                                    <p className="text-primary/70 text-[10px]">{y.grossMargin} margin</p>
                                </div>
                                <div className="h-px bg-white/5" />
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">EBITDA</p>
                                    <p className={`font-medium text-sm ${y.negative ? "text-red-400" : "text-white"}`}>{y.ebitda}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">EBIT</p>
                                    <p className={`font-medium text-sm ${y.negative ? "text-red-400" : "text-white"}`}>{y.ebit}</p>
                                    <p className="text-primary/70 text-[10px]">{y.ebitMargin} margin</p>
                                </div>
                                <div className="h-px bg-white/5" />
                                <div className={`rounded p-2 -mx-1 ${y.year === "2030" ? "bg-primary/10" : "bg-white/[0.02]"}`}>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Net Income</p>
                                    <p className={`font-bold text-base ${y.negative ? "text-red-400" : "text-primary"}`}>{y.net}</p>
                                    <p className="text-primary/70 text-[10px]">{y.netMargin} margin</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeUp} custom={6} className="mt-6 text-center">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                        All figures in USD · FX: ¥154.73/USD · Tax: 22% flat · No debt · IFRS basis
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 11: Why DiFine Wins
function WhyWeWinSlide() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0">
                <Image src="/difine/images/restaurant-interior.jpg" alt="Interior" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/80" />
            </div>
            <div className="relative z-10 max-w-[900px] mx-auto text-center px-6">
                <motion.div initial="hidden" animate="visible">
                    <motion.div variants={fadeUp} custom={0}>
                        <SectionLabel>Why DiFine Wins</SectionLabel>
                        <h2 className="text-4xl md:text-6xl font-light leading-tight mb-4">
                            Defining a New Category
                        </h2>
                        <p className="text-xl text-primary font-light tracking-wide mb-16">Luxury Dining-as-a-Service</p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { icon: "lightbulb", text: "Solves real pain in premium dining" },
                            { icon: "do_not_disturb_on", text: "No booking competition (push model)" },
                            { icon: "public", text: "Scalable across global cities" },
                            { icon: "insights", text: "Strong economics, limited downside" },
                        ].map((item, i) => (
                            <motion.div key={item.text} variants={fadeUp} custom={i + 1} className="flex items-center gap-4 text-left p-5 bg-white/[0.05] border border-white/10 rounded-lg backdrop-blur-sm">
                                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                                <p className="text-white text-lg font-light">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Slide 11: Team & Execution
function TeamSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Execution &amp; Team</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Lean Team, <span className="text-primary">Strong Execution</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={fadeUp} custom={1} className="space-y-8">
                        {[
                            { icon: "groups", title: "Cross-Functional Leadership", desc: "CEO / COO / CFO / CXO covering all critical functions." },
                            { icon: "speed", title: "Fast Execution", desc: "Lean structure with AI + concierge hybrid model for speed and quality." },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 items-start p-5 bg-white/[0.03] border border-white/5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">{item.icon}</span>
                                <div>
                                    <p className="text-white font-medium mb-1">{item.title}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} custom={2} className="space-y-8">
                        {[
                            { icon: "restaurant", title: "Partnership Focus", desc: "Strong restaurant partnerships with an ecosystem approach to growth." },
                            { icon: "trending_up", title: "Scaling Approach", desc: "Hire with growth. Asset-light expansion into Singapore and Hong Kong post-Series A." },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 items-start p-5 bg-white/[0.03] border border-white/5 rounded-lg">
                                <span className="material-symbols-outlined text-primary text-2xl mt-0.5">{item.icon}</span>
                                <div>
                                    <p className="text-white font-medium mb-1">{item.title}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 12: CTA / Ask
function AskSlide() {
    return (
        <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background-dark to-black" />
            <div className="relative z-10 text-center px-6">
                <motion.div initial="hidden" animate="visible">
                    <motion.div variants={fadeUp} custom={0} className="mb-8">
                        <div className="mx-auto mb-8">
                            <Image src="/difine/images/difine-logo.svg" alt="DiFine" width={64} height={64} className="mx-auto" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-light mb-4">DiFine</h2>
                        <div className="h-[2px] w-16 bg-primary mx-auto mb-6" />
                    </motion.div>
                    <motion.p variants={fadeUp} custom={1} className="text-2xl md:text-3xl text-gray-300 font-light mb-2">
                        Seeking <span className="text-primary font-medium">$1.125M</span> Seed Investment
                    </motion.p>
                    <motion.p variants={fadeUp} custom={2} className="text-gray-500 text-lg mb-12 max-w-lg mx-auto">
                        Join us in defining the future of luxury dining in Tokyo and beyond.
                    </motion.p>
                    <motion.div variants={fadeUp} custom={3}>
                        <a
                            href="/difine/contact"
                            className="inline-block bg-primary text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-primary-hover transition-colors"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

// Slide 13: Live Product Demo
function DemoSlide() {
    const [showDemo, setShowDemo] = useState(false);

    const pages = [
        { label: "Homepage", path: "/difine", icon: "home" },
        { label: "Restaurants", path: "/difine/restaurants", icon: "restaurant" },
        { label: "Pricing", path: "/difine/pricing", icon: "payments" },
        { label: "Onboarding", path: "/difine/onboarding", icon: "person_add" },
        { label: "Dashboard", path: "/difine/dashboard", icon: "dashboard" },
        { label: "Partner Portal", path: "/difine/partner/dashboard", icon: "storefront" },
    ];

    return (
        <div className="h-screen w-screen flex flex-col bg-background-dark overflow-hidden">
            {!showDemo ? (
                <div className="flex-1 flex items-center justify-center px-6">
                    <motion.div initial="hidden" animate="visible" className="max-w-[1200px] w-full">
                        <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
                            <SectionLabel>Product Demo</SectionLabel>
                            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4">
                                See DiFine <span className="text-primary">in Action</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light">A walkthrough of the live platform</p>
                        </motion.div>

                        <motion.div variants={fadeUp} custom={1} className="grid grid-cols-3 gap-4 mb-12">
                            {pages.map((page) => (
                                <div
                                    key={page.label}
                                    className="bg-surface-dark border border-white/10 rounded-lg p-5 flex items-center gap-4"
                                >
                                    <div className="size-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                                        <span className="material-symbols-outlined text-primary text-xl font-icon">{page.icon}</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-medium">{page.label}</p>
                                        <p className="text-gray-500 text-xs">{page.path}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} custom={2} className="text-center">
                            <button
                                onClick={() => setShowDemo(true)}
                                className="inline-flex items-center gap-3 bg-primary text-black px-10 py-4 text-sm uppercase tracking-[0.2em] font-bold hover:bg-primary-hover transition-colors rounded"
                            >
                                <span className="material-symbols-outlined text-xl font-icon">play_arrow</span>
                                Launch Demo
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            ) : (
                <div className="flex-1 flex flex-col p-4 pt-2">
                    {/* Browser Chrome */}
                    <div className="bg-[#1a1a1a] rounded-t-xl border border-white/10 border-b-0 px-4 py-2.5 flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <button onClick={() => setShowDemo(false)} className="size-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                            <div className="size-3 rounded-full bg-yellow-500" />
                            <div className="size-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="bg-white/5 rounded-md px-4 py-1 text-xs text-gray-400 flex items-center gap-2 max-w-md w-full">
                                <span className="material-symbols-outlined text-[14px] font-icon text-gray-500">lock</span>
                                difine.com
                            </div>
                        </div>
                        <div className="flex gap-3">
                            {pages.map((page) => (
                                <button
                                    key={page.label}
                                    onClick={() => {
                                        const iframe = document.getElementById("demo-iframe") as HTMLIFrameElement;
                                        if (iframe) iframe.src = page.path;
                                    }}
                                    className="text-[10px] text-gray-500 hover:text-primary uppercase tracking-widest transition-colors font-bold"
                                >
                                    {page.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* iframe */}
                    <div className="flex-1 rounded-b-xl border border-white/10 overflow-hidden bg-black">
                        <iframe
                            id="demo-iframe"
                            src="/difine"
                            className="w-full h-full border-0"
                            title="DiFine Demo"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

// Slide 14: Conclusion
function ConclusionSlide() {
    const points = [
        {
            label: "The Problem",
            text: "Booking premium restaurants in Tokyo is stressful, competitive, and time-consuming for affluent diners.",
        },
        {
            label: "The Solution",
            text: "DiFine delivers curated, all-inclusive dining invitations monthly — powered by AI matching and push-based allocation.",
        },
        {
            label: "The Opportunity",
            text: "Tokyo: world's #1 foodie city, 290K+ HNWIs, $1.2B–$4.7B SAM. No integrated luxury dining subscription exists.",
        },
        {
            label: "The Business",
            text: "Asset-light, prepaid subscription model. Break-even at 375 subscribers. Profitable by Year 2, targeting $25M+ revenue by Year 5.",
        },
    ];

    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Conclusion</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Redefining Luxury Dining <span className="text-primary">in Tokyo</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {points.map((item, i) => (
                        <motion.div
                            key={item.label}
                            variants={fadeUp}
                            custom={i + 1}
                            className="bg-surface-dark border border-white/10 rounded-lg p-8"
                        >
                            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">{item.label}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeUp} custom={5} className="text-center">
                    <div className="h-[2px] w-16 bg-primary mx-auto mb-8" />
                    <p className="text-xl md:text-2xl text-white font-light italic">
                        DiFine — Where Every Dinner is an Invitation
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}

// Slide 14: References
function ReferencesSlide() {
    const refsLeft = [
        "D'Arpizio, C. et al. (2025). \"Finding a New Longevity for Luxury.\" Bain & Company.",
        "Henley & Partners. (2025). \"World's Wealthiest Cities Report 2025.\"",
        "Near+Far. (2025). Cities with the most Michelin-starred restaurants worldwide.",
        "Michelin Guide. (2026). Tokyo Michelin Restaurants — the Michelin Guide Japan.",
        "Tabelog. (2026). Japan's No. 1 Restaurant Listing and Reservation Site.",
        "TableCheck. (2026). Reservations at Japan's Best Restaurants.",
        "OMAKASE. (2026). Book Japan's Top Fine Dining Restaurants.",
    ];
    const refsRight = [
        "Chef's Pencil. (2024). Exploring Michelin Dining Costs across 40 Countries.",
        "Euromonitor International. (2025). Consumer Foodservice in 2024: The Big Picture.",
        "Hiramatsu Inc. (2026). Securities Report (有価証券報告書).",
        "Cabinet Office Japan. (2025). GDP by Prefecture, FY2022.",
        "Food Service Industry Research Institute. (2025). Japan Foodservice Market Size.",
        "American Express. (2026). Platinum Card Concierge & Global Dining Access.",
        "Asher & Lyrici. (2023). Global Foodie Index — Top 10 Cities.",
    ];

    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" animate="visible">
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>References</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Sources &amp; <span className="text-primary">Citations</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.ul variants={fadeUp} custom={1} className="space-y-4">
                        {refsLeft.map((ref, i) => (
                            <li key={i} className="text-gray-400 text-sm leading-relaxed pl-4 border-l-2 border-white/10">
                                {ref}
                            </li>
                        ))}
                    </motion.ul>
                    <motion.ul variants={fadeUp} custom={2} className="space-y-4">
                        {refsRight.map((ref, i) => (
                            <li key={i} className="text-gray-400 text-sm leading-relaxed pl-4 border-l-2 border-white/10">
                                {ref}
                            </li>
                        ))}
                    </motion.ul>
                </div>

                <motion.div variants={fadeUp} custom={3} className="mt-16 text-center">
                    <div className="h-[1px] w-full max-w-md mx-auto bg-white/10 mb-6" />
                    <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
                        EMBA Class of May 2026 · Group #75 · Otaki · Chan · Rathinasabapathy · Deeyai
                    </p>
                </motion.div>
            </motion.div>
        </SlideWrapper>
    );
}

const slides = [
    { component: TitleSlide, label: "Title" },
    { component: ProblemSlide, label: "Problem" },
    { component: SolutionSlide, label: "Solution" },
    { component: MarketSlide, label: "Market" },
    { component: TiersSlide, label: "Tiers" },
    { component: OperationalSlide, label: "Operations" },
    { component: RoadmapSlide, label: "Roadmap" },
    { component: MarketingSlide, label: "Marketing" },
    { component: BusinessModelSlide, label: "Business Model" },
    { component: FinancialsSlide, label: "Financials" },
    { component: RevenueSlide, label: "Revenue" },
    { component: IncomeStatementSlide, label: "Income Statement" },
    { component: WhyWeWinSlide, label: "Why We Win" },
    { component: TeamSlide, label: "Team" },
    { component: DemoSlide, label: "Demo" },
    { component: ConclusionSlide, label: "Conclusion" },
    { component: ReferencesSlide, label: "References" },
    { component: AskSlide, label: "CTA" },
];

const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export default function PitchDeckPage() {
    const [[current, direction], setCurrent] = useState([0, 0]);

    const go = useCallback((dir: number) => {
        setCurrent(([prev]) => {
            const next = prev + dir;
            if (next < 0 || next >= slides.length) return [prev, 0];
            return [next, dir];
        });
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
                e.preventDefault();
                go(1);
            }
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                e.preventDefault();
                go(-1);
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [go]);

    const SlideComponent = slides[current].component;

    return (
        <div className="h-screen w-screen overflow-hidden bg-background-dark text-white font-display relative select-none">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-screen w-screen"
                >
                    <SlideComponent />
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center gap-6">
                <button
                    onClick={() => go(-1)}
                    disabled={current === 0}
                    className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined text-[18px] font-icon">chevron_left</span>
                </button>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-bold tabular-nums">
                    {current + 1} / {slides.length}
                </span>
                <button
                    onClick={() => go(1)}
                    disabled={current === slides.length - 1}
                    className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined text-[18px] font-icon">chevron_right</span>
                </button>
            </div>

            {/* Progress bar */}
            <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
                <motion.div
                    className="h-full bg-primary"
                    animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                />
            </div>
        </div>
    );
}
