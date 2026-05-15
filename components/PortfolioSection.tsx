import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";

const projects = [
  {
    title: "WBNextLevel",
    category: "Home Services Website",
    description:
      "A conversion-focused remodeling presence built around local trust, clear services and fast estimate actions for Tampa Bay homeowners.",
    image: "/projects/wbnextlevel.png",
    href: "https://wbnextlevel.com",
  },
  {
    title: "GetEstimateFast",
    category: "Lead Generation Platform",
    description:
      "A streamlined request experience that helps homeowners compare estimates and connect with trusted local professionals faster.",
    image: "/projects/getestimatefast.png",
    href: "https://www.getestimatefast.com",
  },
  {
    title: "CASAL Arquitetura & Engenharia",
    category: "Architecture & Engineering",
    description:
      "A premium institutional presence for architecture, engineering and steel frame construction, focused on credibility and organized project delivery.",
    image: "/projects/casal-arqeng.png",
    href: "https://www.casalarqeng.com.br/",
  },
  {
    title: "FamíliaUSA1",
    category: "Editorial Content Platform",
    description:
      "A practical media hub for Brazilians in the United States, structured for trustworthy guides, useful content and long-term growth.",
    image: "/projects/familiausa1.png",
    href: "https://familiausa1.com",
  },
];

export function PortfolioSection() {
  return (
    <SectionReveal id="work" className="relative z-10 py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cosaq-blue">
              Work
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
              Real digital work, built to perform.
            </h2>
          </div>
          <p className="max-w-md text-pretty leading-7 text-cosaq-muted">
            A selection of live project showcases across service businesses,
            lead generation, architecture and editorial digital presence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.026] transition duration-500 hover:-translate-y-1.5 hover:border-cosaq-blue/35 hover:bg-white/[0.04] hover:shadow-[0_26px_90px_rgba(10,132,255,0.13)]"
            >
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
                className="block"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.07] bg-[#111214]">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-top opacity-[0.86] transition duration-700 group-hover:scale-[1.035] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,11,0.02),rgba(11,11,11,0.22))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/[0.12] bg-cosaq-background/72 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cosaq-white shadow-[0_16px_44px_rgba(0,0,0,0.28)] backdrop-blur-md">
                    Live project
                  </div>
                </div>
              </a>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-cosaq-blue">
                    0{index + 1}
                  </p>
                  <p className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-cosaq-muted">
                    {project.category}
                  </p>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-balance sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-pretty leading-7 text-cosaq-muted">
                  {project.description}
                </p>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-cosaq-white transition duration-300 hover:-translate-y-0.5 hover:border-cosaq-blue/45 hover:bg-cosaq-blue hover:shadow-[0_18px_48px_rgba(10,132,255,0.2)] focus:outline-none focus:ring-2 focus:ring-cosaq-blue/60 focus:ring-offset-2 focus:ring-offset-cosaq-background"
                >
                  Visit project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
