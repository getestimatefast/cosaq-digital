"use client";

import { motion } from "framer-motion";

const flowSteps = ["Brief", "Design", "Build", "Launch"];

export function MixedInterface() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[520px] w-full max-w-[560px] lg:h-[590px]"
      aria-label="Digital solution dashboard preview"
    >
      <motion.div
        animate={{ opacity: [0.55, 0.86, 0.55], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cosaq-blue/18 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel blue-glow absolute left-0 top-8 w-[82%] rounded-2xl p-4 sm:p-5"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">
              Website Preview
            </p>
            <p className="mt-1 font-display text-lg font-semibold">Service Platform</p>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-cosaq-blue" />
          </div>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="h-24 rounded-xl border border-white/[0.06] bg-[linear-gradient(135deg,rgba(10,132,255,0.22),rgba(245,247,250,0.035))]" />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.035]"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute right-0 top-44 w-[48%] rounded-2xl p-4"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">Leads</p>
        <div className="mt-4 flex items-end gap-2">
          <p className="font-display text-4xl font-semibold">284</p>
          <p className="pb-1 text-sm font-medium text-cosaq-blue">+18%</p>
        </div>
        <div className="mt-5 flex h-24 items-end gap-2">
          {[34, 52, 44, 72, 58, 88, 76].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="flex-1 rounded-t-full bg-cosaq-blue/80"
              style={{ height: `${height}%`, opacity: 0.38 + index * 0.07 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute bottom-24 left-8 w-[58%] rounded-2xl p-4"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">
          Automation Flow
        </p>
        <div className="mt-5 grid gap-3">
          {flowSteps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-cosaq-blue/30 bg-cosaq-blue/10 text-xs text-cosaq-blue">
                {index + 1}
              </span>
              <span className="h-px flex-1 bg-white/[0.08]" />
              <span className="w-16 text-right text-sm text-cosaq-white/80">{step}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute bottom-6 right-6 w-[52%] rounded-2xl p-4"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.18em] text-cosaq-muted">
            Dashboard
          </p>
          <span className="rounded-full bg-cosaq-blue/12 px-2.5 py-1 text-xs text-cosaq-blue">
            Live
          </span>
        </div>
        <div className="mt-5 space-y-3">
          <div className="h-2 rounded-full bg-white/[0.08]">
            <div className="h-2 w-[82%] rounded-full bg-cosaq-blue" />
          </div>
          <div className="h-2 rounded-full bg-white/[0.08]">
            <div className="h-2 w-[64%] rounded-full bg-white/40" />
          </div>
          <div className="h-2 rounded-full bg-white/[0.08]">
            <div className="h-2 w-[72%] rounded-full bg-white/28" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
