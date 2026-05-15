"use client";

import { motion } from "framer-motion";

type SectionRevealProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionReveal({ id, children, className = "" }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`scroll-mt-32 md:scroll-mt-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
