import Image from "next/image";

const steps = [
  {
    number: "1",
    image: "/images/HIW-Images-01.jpg",
    title: "Set Up",
    description:
      "Position and secure the cofferdam along the intended control line.",
  },
  {
    number: "2",
    image: "/images/HIW-Images-02.jpg",
    title: "Fill With Water",
    description:
      "Fill on-site using pumps or gravity flow to create the barrier mass.",
  },
  {
    number: "3",
    image: "/images/HIW-Images-03.jpg",
    title: "Control The Area",
    description:
      "Fill on-site using pumps or gravity flow to create the barrier mass.",
  },
  {
    number: "4",
    image: "/images/HIW-Images-04.jpg",
    title: "Drain & Remove",
    description: "Drain, deflate, roll up, and relocate after completion.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 lg:py-20 bg-dark relative overflow-hidden"
    >
      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="lg:max-w-md">
            <p className="text-primary-light text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
              How It Works
            </p>
            <h2 className="text-2xl lg:text-3xl text-white">
              <span className="italic font-light">Simple.</span>{" "}
              <span className="text-primary-light italic font-light">Fast.</span>{" "}
              <span className="italic font-light">Effective.</span>
            </h2>
          </div>
          <div className="lg:max-w-md lg:pt-6">
            <p className="text-white/60 text-sm leading-relaxed">
              The system uses on-site water to form a stable temporary barrier,
              then drains and removes cleanly when the project is complete.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary-light text-[10px] uppercase tracking-[0.1em] font-bold mb-1">
                {step.number}. {step.title}
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="#contact" className="btn-primary text-xs">
            Get A Quote
          </a>
          <a href="#applications" className="btn-primary-filled text-xs">
            See Applications
          </a>
        </div>
      </div>
    </section>
  );
}
