import Image from "next/image";

const features = [
  {
    icon: "/icons/Since-1928.svg",
    title: "Since 1928",
    description: "Nearly a century of water-control expertise.",
  },
  {
    icon: "/icons/Purchase-Options.svg",
    title: "Purchase Options",
    description: "Built for long-term project needs.",
  },
  {
    icon: "/icons/Emergency-Availability.svg",
    title: "Emergency Availability",
    description: "Rapid response when it matters most.",
  },
  {
    icon: "/icons/Nationwide-Support.svg",
    title: "Nationwide Support",
    description: "Where you need us, when you need us.",
  },
];

export default function Features() {
  return (
    <section className="py-16 lg:py-20 bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-gray-200 rounded-lg p-5 lg:p-6 text-center"
            >
              <div className="flex items-center justify-center mb-4 h-16">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={56}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="text-primary-light text-[10px] uppercase tracking-[0.15em] font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
