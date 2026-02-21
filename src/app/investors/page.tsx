"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function InvestorsPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple client-side check for demonstration/MVP
        if (password === "difine2026") {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
                <Navbar />
                <main className="flex-1 max-w-lg mx-auto px-6 py-20 w-full flex flex-col justify-center items-center">
                    <div className="text-center w-full">
                        <div className="size-16 bg-primary/20 rounded mx-auto flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl font-icon">lock</span>
                        </div>
                        <h1 className="text-2xl font-light uppercase tracking-tight mb-2">Confidential Information</h1>
                        <p className="text-gray-400 font-light mb-8">
                            This page contains sensitive financial and strategic information intended for authorized investors only.
                        </p>

                        <form onSubmit={handleLogin} className="w-full space-y-4">
                            <div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-surface-dark border border-white/10 rounded p-4 text-center text-white tracking-widest focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter Access Code"
                                />
                            </div>
                            {error && (
                                <p className="text-red-400 text-xs uppercase tracking-widest animate-pulse">
                                    Incorrect Access Code
                                </p>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold text-xs uppercase tracking-widest py-4 rounded hover:bg-primary-hover transition-colors"
                            >
                                Access Documents
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-8">
                            To request access, please contact <a href="mailto:invest@difine.com" className="text-primary hover:underline">invest@difine.com</a>
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <Navbar />
            <main className="flex-1 max-w-5xl mx-auto px-6 py-20 w-full">

                {/* Header */}
                <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold mb-4">
                        Confidential & Proprietary
                    </div>
                    <h1 className="text-3xl md:text-5xl font-light uppercase tracking-tight mb-6">Investment Opportunity</h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        DiFine is defining a new category: <strong>Luxury Dining-as-a-Service</strong>. We are a scalable platform connecting affluent diners with the world's most coveted tables.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
                    {/* The Market */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-primary uppercase tracking-widest border-b border-primary/20 pb-2">The Market</h2>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li>
                                <strong className="text-white block mb-1">Global Opportunity</strong>
                                Luxury experience spending accounts for €290B globally. Fine dining is outgrowing luxury goods, with 39-41% growth since 2019.
                            </li>
                            <li>
                                <strong className="text-white block mb-1">Tokyo: The Global Capital</strong>
                                Tokyo is the world's most foodie-friendly city with over 410 Michelin-listed venues and a premium dining SAM of ~$4.65B.
                            </li>
                        </ul>
                    </div>

                    {/* The Solution */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-primary uppercase tracking-widest border-b border-primary/20 pb-2">Our Advantage</h2>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li>
                                <strong className="text-white block mb-1">Recurring Revenue Model</strong>
                                Unlike transactional booking sites, DiFine utilizes a prepaid subscription model (Silver @ ¥45k to Diamond @ ¥120k/mo), ensuring predictable cash flow.
                            </li>
                            <li>
                                <strong className="text-white block mb-1">Defensibility</strong>
                                Our proprietary matching algorithm and two-sided engagement create high switching costs for both diners and restaurant partners.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Financial Projections */}
                <div className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
                    <h2 className="text-2xl font-light text-center uppercase tracking-tight mb-8">Projected Growth (2026-2028)</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-surface-dark border-b border-white/10 uppercase tracking-wider text-gray-400">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Metric</th>
                                    <th className="px-6 py-4 font-bold">2026 (Launch)</th>
                                    <th className="px-6 py-4 font-bold">2027 (Scale)</th>
                                    <th className="px-6 py-4 font-bold">2028 (Expansion)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-bold text-white">Revenue</td>
                                    <td className="px-6 py-4">$1.7M</td>
                                    <td className="px-6 py-4">$4.5M</td>
                                    <td className="px-6 py-4 text-primary font-bold">$8.9M</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-white">Gross Profit</td>
                                    <td className="px-6 py-4">$0.7M</td>
                                    <td className="px-6 py-4">$1.9M</td>
                                    <td className="px-6 py-4">$3.9M</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-white">EBITDA Margin</td>
                                    <td className="px-6 py-4 text-red-400">-4%</td>
                                    <td className="px-6 py-4 text-green-400">21%</td>
                                    <td className="px-6 py-4 text-green-400">31%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-4 italic">Source: DiFine Operations Plan v1.0. Projections are estimates based on assumed market conditions.</p>
                </div>

                {/* Capital Ask & Exit */}
                <div className="bg-surface-dark border border-white/10 rounded-lg p-8 md:p-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
                    <h2 className="text-3xl font-light text-white uppercase tracking-tight mb-6">The Ask</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        We are seeking an initial equity investment of <strong>$1.2 Million</strong> to fund platform development and early operations in Tokyo. We target a strategic exit within 5-7 years via acquisition by major luxury hospitality or financial groups.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="mailto:invest@difine.com" className="bg-primary text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                            Request Pitch Deck
                        </a>
                        <a href="/contact" className="border border-white/20 text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                            Contact Management
                        </a>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
