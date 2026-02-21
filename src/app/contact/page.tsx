"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
    return (
        <div className="bg-background-dark font-display min-h-screen flex flex-col antialiased text-white selection:bg-primary selection:text-white pt-20">
            <Navbar />
            <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
                <h1 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-8">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12 bg-surface-dark p-8 rounded-lg border border-white/5">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-lg font-bold text-primary uppercase tracking-widest mb-4">Headquarters</h2>
                            <p className="text-gray-300 font-light leading-relaxed">
                                DiFine Inc.<br />
                                Ginza, Chuo-ku<br />
                                Tokyo, Japan
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-primary uppercase tracking-widest mb-4">Inquiries</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-1">General Support</h3>
                                    <a href="mailto:support@difine.com" className="text-gray-400 hover:text-primary transition-colors">support@difine.com</a>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-1">Restaurant Partnerships</h3>
                                    <a href="mailto:partners@difine.com" className="text-gray-400 hover:text-primary transition-colors">partners@difine.com</a>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white mb-1">Concierge (Members)</h3>
                                    <a href="mailto:concierge@difine.com" className="text-gray-400 hover:text-primary transition-colors">concierge@difine.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-lg font-bold text-white uppercase tracking-widest mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                                <input type="text" className="w-full bg-background-dark border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                                <input type="email" className="w-full bg-background-dark border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                                <select className="w-full bg-background-dark border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors">
                                    <option>Membership Inquiry</option>
                                    <option>Partnership Proposal</option>
                                    <option>Press / Media</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                                <textarea className="w-full bg-background-dark border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary transition-colors h-32" placeholder="How can we assist you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-primary text-white font-bold text-xs uppercase tracking-widest py-4 rounded hover:bg-primary-hover transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
