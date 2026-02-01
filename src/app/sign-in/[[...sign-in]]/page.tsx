"use client";

import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark font-display text-white px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-light uppercase tracking-tight text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400 font-light tracking-wide text-sm">Sign in to access your exclusive dining privileges</p>
                </div>

                <div className="bg-surface-dark backdrop-blur-md border border-white/10 shadow-2xl w-full p-8 rounded-lg">
                    <form className="space-y-4" action="/dashboard">
                        <div>
                            <label className="block text-gray-300 text-xs uppercase tracking-wider mb-2 font-bold">Email address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full bg-white/5 border border-white/10 p-3 rounded text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 text-xs uppercase tracking-wider mb-2 font-bold">Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors text-sm"
                            />
                        </div>
                        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-xs uppercase tracking-widest p-4 rounded transition-colors mt-4 shadow-lg">
                            Sign In
                        </button>
                    </form>
                    <div className="mt-8 text-center text-xs tracking-wide">
                        <span className="text-gray-400">No account? </span>
                        <Link href="/sign-up" className="text-primary hover:text-white transition-colors font-bold uppercase">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
