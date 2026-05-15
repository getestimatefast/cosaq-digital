import { SectionReveal } from "@/components/SectionReveal";

export function PositioningSection() {
  return (
    <SectionReveal className="relative z-10 border-y border-white/[0.06] bg-white/[0.025] py-24 sm:py-28">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
          Modern tools. Real expertise. Real solutions.
        </h2>
        <p className="text-pretty text-lg leading-8 text-cosaq-muted sm:text-xl">
          Great tools mean nothing without the right people behind them. We
          combine strategy, design and technology to create digital solutions
          that solve real business problems.
        </p>
      </div>
    </SectionReveal>
  );
}
