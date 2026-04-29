import Image from "next/image";

const benefits = [
  {
    icon: "/icons/Reusable-by-Design.svg",
    title: "Reusable By Design",
    description:
      "Built tough to be used again and again, delivering long-term value.",
  },
  {
    icon: "/icons/A-Cleaner-Alternative.svg",
    title: "A Cleaner Alternative",
    description:
      "No earthen fill. No heavy equipment. Lower environmental impact.",
  },
  {
    icon: "/icons/Fast-Deployment.svg",
    title: "Fast Deployment",
    description:
      "Lightweight and portable for rapid response on demanding job sites.",
  },
  {
    icon: "/icons/Contractor-Friendly-Support.svg",
    title: "Contractor-Friendly Support",
    description:
      "Expert guidance, training, and on-site support you can count on.",
  },
];

export default function Performance() {
  return (
    <section id="performance" className="py-16 lg:py-20 bg-dark-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary-light text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
            Performance
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
            Engineered for <span className="text-primary-light">Performance.</span>
            <br />
            Built for <span className="text-primary-light">Contractors.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-dark/50 border border-white/10 rounded-lg p-5"
            >
              <div className="flex items-center justify-center h-12 mb-4">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h3 className="text-primary-light text-[10px] uppercase tracking-[0.1em] font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
