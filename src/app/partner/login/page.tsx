"use client";

import Link from "next/link";
import Image from "next/image";

export default function PartnerLoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark font-display text-white px-4">
            <div className="w-full max-w-md text-center">
                <Link href="/"><Image src="/difine/images/difine-logo.svg" alt="DiFine" width={48} height={48} className="mx-auto mb-6" /></Link>
                <h1 className="text-3xl font-light uppercase tracking-tight text-white mb-4">Partner Login</h1>
                <p className="text-gray-400 font-light tracking-wide text-sm mb-8">
                    Partner portal access coming soon.
                </p>
                <Link
                    href="/partner/dashboard"
                    className="inline-block bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded mb-8 transition-colors shadow-lg"
                >
                    Enter Partner Portal
                </Link>
                <div className="block">
                    <Link
                        href="/sign-in"
                        className="text-gray-500 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
                    >
                        &larr; Back to Member Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
}
