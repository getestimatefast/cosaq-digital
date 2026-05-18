"use client";

import { motion } from "framer-motion";

const flowSteps = ["Strategy", "Design", "Build", "Launch"];
const stats = [
  { label: "Credibility", value: "Trust" },
  { label: "Visibility", value: "Reach" },
  { label: "Experience", value: "Fast" },
];

export function MixedInterface() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[540px] w-full max-w-[590px] lg:h-[610px]"
      aria-label="Premium digital solution interface preview"
    >
      <motion.div
        animate={{ opacity: [0.42, 0.72, 0.42], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cosaq-blue/16 blur-[90px]"
      />
      <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-white/[0.035] blur-3xl" />

      <motion.div
        animate={{ y: [0, -10, 0], rotateX: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel blue-glow absolute left-0 top-8 w-[86%] overflow-hidden rounded-[1.75rem] p-4 sm:p-5"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cosaq-muted">
              Website Experience
            </p>
            <p className="mt-1 font-display text-lg font-semibold">Service Business</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-cosaq-blue shadow-[0_0_18px_rgba(10,132,255,0.65)]" />
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="relative h-28 overflow-hidden rounded-2xl border border-white/[0.07] bg-[linear-gradient(135deg,rgba(10,132,255,0.28),rgba(245,247,250,0.04))] p-4">
            <div className="absolute right-4 top-4 h-14 w-14 rounded-2xl bg-white/[0.08] blur-sm" />
            <div className="h-3 w-28 rounded-full bg-white/55" />
            <div className="mt-4 h-2 w-48 rounded-full bg-white/22" />
            <div className="mt-2 h-2 w-36 rounded-full bg-white/14" />
            <div className="mt-5 h-8 w-28 rounded-full bg-cosaq-blue/90 shadow-[0_12px_36px_rgba(10,132,255,0.25)]" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.035] p-3"
              >
                <p className="text-xs text-cosaq-muted">{stat.label}</p>
                <p className="mt-2 font-display text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute right-0 top-48 w-[48%] rounded-[1.5rem] p-4"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">Lead Flow</p>
          <span className="rounded-full bg-cosaq-blue/12 px-2.5 py-1 text-xs text-cosaq-blue">
            Active
          </span>
        </div>
        <div className="mt-4 flex items-end gap-2">
          <p className="font-display text-4xl font-semibold">Clear</p>
          <p className="pb-1 text-sm font-medium text-cosaq-blue">Path</p>
        </div>
        <p className="mt-1 text-xs text-cosaq-muted">from visitor to action</p>
        <div className="mt-5 flex h-24 items-end gap-2">
          {[34, 52, 44, 72, 58, 88, 76].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="flex-1 rounded-t-full bg-cosaq-blue/80"
              style={{ height: `${height}%`, opacity: 0.34 + index * 0.07 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute bottom-28 left-8 w-[60%] rounded-[1.5rem] p-4"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">
          Delivery Process
        </p>
        <div className="mt-5 grid gap-3">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cosaq-blue/30 bg-cosaq-blue/10 text-xs text-cosaq-blue">
                {index + 1}
              </span>
              <span className="h-px flex-1 bg-white/[0.08]" />
              <span className="w-20 text-right text-sm text-cosaq-white/80">{step}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute bottom-6 right-6 w-[52%] rounded-[1.5rem] p-4"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">
            Growth System
          </p>
          <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-200">
            Online
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <div>
            <div className="mb-2 flex justify-between text-xs text-cosaq-muted">
              <span>Visibility</span>
              <span>Built</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.08]">
              <div className="h-2 w-[82%] rounded-full bg-cosaq-blue" />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between text-xs text-cosaq-muted">
              <span>Trust</span>
              <span>Ready</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.08]">
              <div className="h-2 w-[74%] rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
