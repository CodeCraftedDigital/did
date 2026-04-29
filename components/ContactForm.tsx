import Image from "next/image";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Contact-BG.jpg"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/90" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <p className="text-primary-light text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
              Get A Quote
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready for{" "}
              <span className="text-primary-light italic">Your</span>
              <br />
              Next Project?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Send the basics and our team will help determine the right
              water-filled cofferdam configuration for your site.
            </p>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs text-white/60 mb-2"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="First Last"
                  className="w-full bg-dark border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-white/60 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@domain.com"
                  className="w-full bg-dark border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs text-white/60 mb-2"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="000-000-0000"
                  className="w-full bg-dark border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-xs text-white/60 mb-2"
                >
                  Project location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Michigan"
                  className="w-full bg-dark border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 transition-colors"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xs text-white/60 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about water depth, application, timeline, and site conditions"
                  className="w-full bg-dark border border-white/20 rounded px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary-light/50 transition-colors resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary-light text-dark font-bold text-xs uppercase tracking-wider py-4 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Get A Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
