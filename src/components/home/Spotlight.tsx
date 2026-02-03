import Image from "next/image";
import Link from "next/link";

export function Spotlight() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-surface-dark border-t border-white/5">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Editor&apos;s Choice</span>
          <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Curator&apos;s Pick</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-[#252524] rounded-xl overflow-hidden shadow-2xl">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
            <Image
              src="/images/restaurant-interior-wide.jpg"
              alt="L'Effervescence Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col items-start justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">New Arrival</span>
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-[16px] font-icon fill-current">star</span>
                ))}
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">The Obsidian Room</h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
              Experience the pinnacle of modern gastronomy in a setting defined by shadow and light. Chef Alexander Thorne presents a tasting menu that defies convention.
            </p>
            <div className="flex gap-4">
              <Link href="/restaurants/123" className="h-12 flex items-center justify-center rounded bg-primary px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-primary-hover transition-colors">
                Reserve Table
              </Link>
              <Link href="/restaurants/123#menu" className="h-12 flex items-center justify-center rounded border border-white/20 px-8 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-colors">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
