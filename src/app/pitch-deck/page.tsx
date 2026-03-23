"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

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
        <section className={`min-h-screen flex items-center justify-center px-6 py-24 ${className}`}>
            <div className="max-w-[1200px] w-full mx-auto">{children}</div>
        </section>
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image src="/difine/images/hero.png" alt="Background" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black" />
            </div>
            <div className="relative z-10 text-center px-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
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
        </section>
    );
}

// Slide 2: The Problem
function ProblemSlide() {
    return (
        <SlideWrapper className="bg-background-dark">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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

// Slide 5: Operational Plan
function OperationalSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Roadmap</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Path to <span className="text-primary">3,000 Members</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-4 gap-0 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/50 to-primary" />

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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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

// Slide 9: Financials
function FinancialsSlide() {
    return (
        <SlideWrapper className="bg-surface-dark">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <motion.div variants={fadeUp} custom={0}>
                    <SectionLabel>Financial Strength</SectionLabel>
                    <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
                        Early Profitability, <span className="text-primary">Controlled Risk</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
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

                {/* Revenue Chart */}
                <motion.div variants={fadeUp} custom={4} className="bg-white/[0.02] border border-white/5 rounded-lg p-8">
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
                <motion.div variants={fadeUp} custom={5} className="grid grid-cols-3 gap-6 mt-8">
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

// Slide 10: Why DiFine Wins
function WhyWeWinSlide() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0">
                <Image src="/difine/images/restaurant-interior.jpg" alt="Interior" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/80" />
            </div>
            <div className="relative z-10 max-w-[900px] mx-auto text-center px-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-background-dark to-black" />
            <div className="relative z-10 text-center px-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div variants={fadeUp} custom={0} className="mb-8">
                        <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                            <span className="material-symbols-outlined text-3xl">restaurant_menu</span>
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
        </section>
    );
}

export default function PitchDeckPage() {
    return (
        <div className="min-h-screen bg-background-dark text-white">
            <Navbar />
            <TitleSlide />
            <ProblemSlide />
            <SolutionSlide />
            <MarketSlide />
            <OperationalSlide />
            <RoadmapSlide />
            <MarketingSlide />
            <BusinessModelSlide />
            <FinancialsSlide />
            <WhyWeWinSlide />
            <TeamSlide />
            <AskSlide />
            <Footer />
        </div>
    );
}
