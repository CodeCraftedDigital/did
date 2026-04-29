import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Header-BG.jpg"
          alt="Cofferdam in water"
          fill
          className="object-cover"
          priority
        />
        <div className="gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom py-20 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-primary-light text-xs uppercase tracking-[0.25em] font-semibold mb-6">
            Water Solutions Since 1928
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
            <span className="text-white">Portable</span>
            <br />
            <span className="text-primary-light italic font-light">
              Water-Filled
            </span>
            <br />
            <span className="text-white">Cofferdams</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-md leading-relaxed">
            The proven solution for construction, flood control, dewatering, and
            emergency water diversion.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary text-xs">
              Get A Quote
            </a>
            <a href="#applications" className="btn-primary-filled text-xs">
              See Applications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
