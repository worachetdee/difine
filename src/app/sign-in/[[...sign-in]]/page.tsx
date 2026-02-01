"use client";

import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-navy px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-serif font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-white/60">Sign in to access your exclusive dining privileges</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl w-full p-8 rounded-sm">
                    <form className="space-y-4" action="/dashboard">
                        <div>
                            <label className="block text-white/80 text-sm mb-1">Email address</label>
                            <input type="email" placeholder="you@example.com" className="w-full bg-white/10 border border-white/20 p-3 rounded-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold" />
                        </div>
                        <div>
                            <label className="block text-white/80 text-sm mb-1">Password</label>
                            <input type="password" className="w-full bg-white/10 border border-white/20 p-3 rounded-sm text-white focus:outline-none focus:border-gold" />
                        </div>
                        <button className="w-full bg-gold hover:bg-gold-light text-navy font-bold p-3 rounded-sm transition-colors mt-2">
                            Sign In
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        <span className="text-white/60">No account? </span>
                        <Link href="/sign-up" className="text-gold hover:text-gold-light">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
