import Image from "next/image";
import Link from "next/link";

export function FeaturedCollections() {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-background-dark">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Curated For You</span>
            <h2 className="text-3xl md:text-4xl font-light text-white uppercase tracking-tight">Featured Collections</h2>
          </div>
          <Link className="group flex items-center text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-widest" href="/restaurants">
            View All
            <span className="material-symbols-outlined ml-1 text-[18px] group-hover:translate-x-1 transition-transform font-icon">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Link href="/restaurants" className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer block">
            <Image
              src="/images/dish-1.jpg"
              alt="Michelin Star Dish"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
              <div className="mb-2 h-0.5 w-12 bg-primary" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Michelin Star</h3>
              <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                Discover culinary excellence awarded by the world&apos;s most prestigious guide.
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/restaurants" className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer block">
            <Image
              src="/images/chef-cooking.jpg"
              alt="Chef's Table"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-2 h-0.5 w-12 bg-primary" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Chef&apos;s Table</h3>
              <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                Front-row seats to the artistry of cooking. An immersive dining experience.
              </p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link href="/restaurants" className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer block">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Fine Ambience"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="mb-2 h-0.5 w-12 bg-primary" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">Rooftop Views</h3>
              <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                Dine amongst the stars with breathtaking panoramas of the city skyline.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
