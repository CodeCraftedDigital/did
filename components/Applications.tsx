import Image from "next/image";

const applications = [
  {
    image: "/images/Application-Images-01.jpg",
    title: "Construction\nDewatering",
  },
  {
    image: "/images/Application-Images-02.jpg",
    title: "Flood\nControl",
  },
  {
    image: "/images/Application-Images-03.jpg",
    title: "Utility\nWork",
  },
  {
    image: "/images/Application-Images-04.jpg",
    title: "Bridge\nRepair",
  },
  {
    image: "/images/Application-Images-05.jpg",
    title: "Shoreline\nProtection",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-16 lg:py-20 bg-light">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="lg:max-w-md">
            <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
              Applications
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-dark">
              Built for <span className="text-primary-light">Every Application</span>
            </h2>
          </div>
          <div className="lg:max-w-md lg:pt-6">
            <p className="text-gray text-sm leading-relaxed">
              Designed for crews that need temporary water control without heavy
              earthwork, long cleanup, or unnecessary site impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {applications.map((app) => (
            <div key={app.title} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3 aspect-[4/3]">
                <Image
                  src={app.image}
                  alt={app.title.replace("\n", " ")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-primary-light text-[10px] uppercase tracking-[0.1em] font-bold leading-tight whitespace-pre-line text-center">
                {app.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
