"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display antialiased text-white selection:bg-primary selection:text-white pt-20">
      <Navbar />
      <main className="flex-grow px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-8">We&apos;re Here to Help</h1>
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
              Have a question about your membership, a special request, or just want to say hello? Our team is ready to assist you.
            </p>

            <div className="space-y-8">
               <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Concierge Support</h3>
                <p className="text-gray-400 font-light">Available 24/7 for Diamond members.</p>
                <a href="mailto:concierge@difine.com" className="text-primary hover:text-white transition-colors mt-1 inline-block">concierge@difine.com</a>
              </div>

              <div>
                 <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">General Inquiries</h3>
                 <p className="text-gray-400 font-light">Mon-Fri, 9am - 6pm JST</p>
                 <a href="mailto:hello@difine.com" className="text-primary hover:text-white transition-colors mt-1 inline-block">hello@difine.com</a>
              </div>

               <div>
                 <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">Location</h3>
                 <p className="text-gray-400 font-light">
                   Roppongi Hills Mori Tower<br />
                   6-10-1 Roppongi, Minato-ku<br />
                   Tokyo, Japan 106-6108
                 </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-dark p-8 rounded-lg border border-white/5">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wide mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name</label>
                <input type="text" className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
                <input type="email" className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="your@email.com" />
              </div>
               <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Subject</label>
                <select className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white focus:border-primary focus:ring-0 outline-none transition-colors appearance-none">
                    <option>Membership Inquiry</option>
                    <option>Reservation Support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message</label>
                <textarea className="w-full bg-background-dark border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-primary focus:ring-0 outline-none transition-colors h-32" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-white font-bold uppercase tracking-widest text-xs px-6 py-4 rounded hover:bg-primary-hover transition-colors shadow-lg">
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
