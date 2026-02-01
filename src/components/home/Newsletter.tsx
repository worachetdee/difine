export function Newsletter() {
  return (
    <section className="py-24 px-4 bg-background-dark relative overflow-hidden">
      {/* Decorative gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-light text-white uppercase tracking-widest mb-4">Join The Inner Circle</h2>
        <p className="text-gray-400 mb-8">Receive priority access to new openings and exclusive culinary events.</p>
        <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-0 outline-none transition-colors" placeholder="Email Address" type="email" />
          <button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-widest text-xs px-6 py-3 rounded transition-colors" type="button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
