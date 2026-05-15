import { SectionReveal } from "@/components/SectionReveal";

const principles = [
  "Strategy before tools",
  "Clean and modern design",
  "Built for growth",
  "Human expertise with modern technology",
];

export function WhyCOSAQSection() {
  return (
    <SectionReveal className="relative z-10 border-y border-white/[0.06] bg-[#101113]/70 py-24 sm:py-28">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cosaq-blue">
            Why COSAQ
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
            Premium execution for real business momentum.
          </h2>
        </div>

        <div className="grid gap-3">
          {principles.map((principle, index) => (
            <div
              key={principle}
              className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:border-cosaq-blue/30 hover:bg-white/[0.04]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cosaq-blue/10 font-display text-sm font-semibold text-cosaq-blue">
                0{index + 1}
              </span>
              <p className="font-display text-lg font-semibold text-cosaq-white">
                {principle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
