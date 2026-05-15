import { ButtonLink } from "@/components/ButtonLink";
import { SectionReveal } from "@/components/SectionReveal";

export function FinalCTA() {
  return (
    <SectionReveal
      id="contact"
      className="relative z-10 border-y border-white/[0.06] bg-white/[0.03] py-20 sm:py-24"
    >
      <div className="relative overflow-hidden">
        <div className="absolute right-[10%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cosaq-blue/18 blur-3xl" />
        <div className="container-shell relative">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
              Let&apos;s build something your business can grow on.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-cosaq-muted">
              Modern digital solutions designed to create trust, visibility and
              long-term growth.
            </p>
            <div className="mt-8">
              <ButtonLink href="mailto:hello@cosaqdigital.com">
                Start Your Project
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
