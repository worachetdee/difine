"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display antialiased text-white selection:bg-primary selection:text-white pt-20">
      <Navbar />
      <main className="flex-grow px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light uppercase tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-lg text-gray-300 font-light leading-relaxed">
            <p className="mb-6">Effective Date: October 26, 2026</p>
            <p className="mb-6">
              At DiFine, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">1. Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly to us, such as when you create an account, make a reservation, or contact our concierge. This may include your name, email address, phone number, and payment information.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use your information to provide our services, process transactions, communicate with you, and personalize your experience. We may also use your data to improve our platform and for marketing purposes, with your consent.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">3. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
             <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">4. Contact Us</h2>
            <p className="mb-6">
              If you have any questions about this Privacy Policy, please contact us at support@difine.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
