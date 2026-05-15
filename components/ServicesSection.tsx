import { SectionReveal } from "@/components/SectionReveal";

const services = [
  {
    title: "Business Websites",
    description:
      "Premium websites designed to build trust, authority and long-term digital presence.",
  },
  {
    title: "Lead Generation Pages",
    description:
      "Conversion-focused pages designed to turn visitors into qualified leads.",
  },
  {
    title: "Premium Brand Presence",
    description:
      "Sophisticated digital experiences that elevate how your business is perceived online.",
  },
  {
    title: "Smart Automation",
    description:
      "Streamlined systems that save time, improve workflows and support business growth.",
  },
  {
    title: "Digital Presence Strategy",
    description:
      "Clear positioning, structure and online presence built to make your business easier to trust.",
  },
  {
    title: "Growth Systems",
    description:
      "Digital foundations designed to connect visibility, trust and conversion.",
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
            Digital solutions built around real business goals.
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
