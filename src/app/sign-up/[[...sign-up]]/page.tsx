"use client";

import Link from "next/link";

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-navy px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">Join DiFine</h1>
                    <p className="text-white/60">Start your journey to culinary excellence</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl w-full p-8 rounded-sm">
                    <form className="space-y-4" action="/dashboard">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white/80 text-sm mb-1">First Name</label>
                                <input type="text" className="w-full bg-white/10 border border-white/20 p-3 rounded-sm text-white focus:outline-none focus:border-gold" />
                            </div>
                            <div>
                                <label className="block text-white/80 text-sm mb-1">Last Name</label>
                                <input type="text" className="w-full bg-white/10 border border-white/20 p-3 rounded-sm text-white focus:outline-none focus:border-gold" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-white/80 text-sm mb-1">Email address</label>
                            <input type="email" placeholder="you@example.com" className="w-full bg-white/10 border border-white/20 p-3 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold" />
                        </div>
                        <div>
                            <label className="block text-white/80 text-sm mb-1">Password</label>
                            <input type="password" className="w-full bg-white/10 border border-white/20 p-3 rounded-sm text-white focus:outline-none focus:border-gold" />
                        </div>
                        <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold p-3 rounded-sm transition-colors mt-2">
                            Create Account
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        <span className="text-white/60">Already a member? </span>
                        <Link href="/sign-in" className="text-gold hover:text-gold-light">Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
