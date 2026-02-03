"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display antialiased text-white selection:bg-primary selection:text-white pt-20">
      <Navbar />
      <main className="flex-grow px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light uppercase tracking-tight mb-8">Terms of Service</h1>
           <div className="prose prose-invert prose-lg text-gray-300 font-light leading-relaxed">
            <p className="mb-6">Last Updated: October 26, 2026</p>
            <p className="mb-6">
              Welcome to DiFine. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">1. Acceptance of Terms</h2>
            <p className="mb-6">
              By using our services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you may not use our services.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">2. Membership & Reservations</h2>
            <p className="mb-6">
               Membership tiers grant access to different levels of dining experiences. Reservations are subject to availability. Cancellations must be made in accordance with your membership tier's policy to avoid fees.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">3. User Conduct</h2>
            <p className="mb-6">
              You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the services.
            </p>
            <h2 className="text-2xl font-bold text-white mt-10 mb-4 uppercase tracking-wide">4. Limitation of Liability</h2>
            <p className="mb-6">
              DiFine shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
