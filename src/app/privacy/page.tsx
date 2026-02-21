"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <Navbar />
            <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
                <h1 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-8">Privacy Policy</h1>
                <div className="space-y-8 text-gray-300 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">1. Introduction</h2>
                        <p>
                            Welcome to DiFine ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you subscribe to our luxury dining service.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Identification:</strong> Name, contact details, and payment information.</li>
                            <li><strong>Dining Preferences:</strong> Dietary restrictions, allergies, and cuisine preferences used to curate your experiences.</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our platform and reservation history.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">3. How We Use Your Information</h2>
                        <p>
                            We use your data primarily to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Process your subscription and payments.</li>
                            <li>Curate and book personalized dining experiences.</li>
                            <li>Communicate regarding your reservations and membership benefits.</li>
                            <li>Improve our matching algorithm (details in Section 4).</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">4. Data-Driven Curation</h2>
                        <p>
                            With your explicit consent, we may integrate with third-party partners (such as credit card providers) to analyze dining patterns. This helps our "Omotenashi" engine provide recommendations better aligned with your tastes. You may opt-out of this analysis at any time.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">5. Sharing of Information</h2>
                        <p>
                            We do not sell your personal data. We share necessary information with:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li><strong>Restaurant Partners:</strong> To secure your reservation and communicate dietary needs.</li>
                            <li><strong>Service Providers:</strong> For payment processing and platform hosting.</li>
                        </ul>
                    </section>
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4">6. Contact Us</h2>
                        <p>
                            If you have questions about this policy, please contact us at privacy@difine.com.
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
