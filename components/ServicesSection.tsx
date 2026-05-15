import { SectionReveal } from "@/components/SectionReveal";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites built with clean architecture and a premium user experience.",
  },
  {
    title: "Landing Pages",
    description:
      "Focused pages designed to communicate clearly, build trust and convert qualified visitors.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Sophisticated online presentations for professionals, creators and service businesses.",
  },
  {
    title: "Digital Presence",
    description:
      "Brand-aligned foundations that make your business easier to understand, find and trust.",
  },
  {
    title: "Automation Systems",
    description:
      "Practical workflows that reduce repetitive tasks and connect the tools your business uses.",
  },
  {
    title: "Lead Generation",
    description:
      "Digital systems structured to capture interest and move potential clients toward action.",
  },
];

export function ServicesSection() {
  return (
    <SectionReveal id="services" className="relative z-10 py-24 sm:py-32">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cosaq-blue">
            Services
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
            Digital foundations built with intention.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cosaq-blue/35 hover:bg-white/[0.04] hover:shadow-[0_22px_70px_rgba(10,132,255,0.11)]"
            >
              <div className="mb-7 h-10 w-10 rounded-xl border border-cosaq-blue/24 bg-cosaq-blue/10 transition group-hover:border-cosaq-blue/45 group-hover:bg-cosaq-blue/16" />
              <h3 className="font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-pretty leading-7 text-cosaq-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
