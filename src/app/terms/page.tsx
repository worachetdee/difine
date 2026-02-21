"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <Navbar />
            <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
                <h1 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-8">Terms of Service</h1>
                <div className="space-y-8 text-gray-300 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By subscribing to DiFine, you agree to these Terms of Service. If you do not agree, you may not use our services.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">2. Membership & Subscription</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Tiers:</strong> We offer Silver (JPY 45,000), Gold (JPY 70,000), and Diamond (JPY 120,000) memberships.</li>
                            <li><strong>Billing:</strong> Fees are billed monthly in advance.</li>
                            <li><strong>Inclusions:</strong> The subscription covers the cost of the curated dinner course. Drinks and additional orders are billed separately by the restaurant.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">3. Reservations & Cancellations</h2>
                        <p>
                            Our service provides guaranteed monthly access. However, cancellations must adhere to the policy of your specific tier:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Silver:</strong> 1 week prior notice required.</li>
                            <li><strong>Gold:</strong> 3 days prior notice required.</li>
                            <li><strong>Diamond:</strong> 1 day prior notice required.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-400">
                            Late cancellations or no-shows may forfeit the monthly course credit without refund, as we compensate our restaurant partners.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">4. Code of Conduct</h2>
                        <p>
                            Members are expected to adhere to the dress code and dining etiquette of our partner restaurants. We reserve the right to terminate membership for repeated behavioral issues or no-shows.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">5. Limitation of Liability</h2>
                        <p>
                            DiFine is a platform connecting diners with restaurants. While we curate for quality, we are not responsible for the specific food preparation or on-site service provided by independent restaurant partners.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">6. Changes to Service</h2>
                        <p>
                            We reserve the right to modify subscription fees or benefits with 30 days' notice.
                        </p>
                    </section>
                    <div className="pt-8 border-t border-white/10 text-xs text-gray-500">
                        Last Updated: February 2026
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
