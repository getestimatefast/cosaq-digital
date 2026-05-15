"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";
import { MixedInterface } from "@/components/MixedInterface";

export function HeroSection() {
  return (
    <section
      id="home"
      className="container-shell relative z-10 grid min-h-[760px] scroll-mt-32 items-center gap-12 pb-20 pt-32 sm:pt-32 md:scroll-mt-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:pb-24 lg:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <div className="mb-6 inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-cosaq-muted">
          Strategic digital solutions for growing businesses
        </div>

        <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-normal text-balance text-cosaq-white sm:text-6xl lg:text-7xl">
          Technology evolves. Problem solving remains.
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-cosaq-muted sm:text-xl">
          We build modern digital experiences designed to help businesses grow,
          build trust and stand out online.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#contact">Start Your Project</ButtonLink>
          <ButtonLink href="#work" variant="secondary">
            View Our Work
          </ButtonLink>
        </div>
      </motion.div>

      <MixedInterface />
    </section>
  );
}
