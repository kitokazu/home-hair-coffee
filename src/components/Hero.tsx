"use client";

import { motion } from "framer-motion";
import HomeLogo from "./HomeLogo";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6">
      {/* Subtle decorative corner marks — like crop marks on printed matter */}
      <div className="pointer-events-none absolute top-8 left-8 h-8 w-8 border-t border-l border-kraft/30 md:top-12 md:left-12 md:h-12 md:w-12" />
      <div className="pointer-events-none absolute top-8 right-8 h-8 w-8 border-t border-r border-kraft/30 md:top-12 md:right-12 md:h-12 md:w-12" />
      <div className="pointer-events-none absolute bottom-8 left-8 h-8 w-8 border-b border-l border-kraft/30 md:bottom-12 md:left-12 md:h-12 md:w-12" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-8 w-8 border-b border-r border-kraft/30 md:bottom-12 md:right-12 md:h-12 md:w-12" />

      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex w-full justify-center"
        >
          <HomeLogo width={320} className="md:w-[400px]" />
        </motion.div>

        {/* Kraft divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-8 h-px w-16 bg-kraft/50 md:mt-10 md:w-24"
        />

        {/* Japanese tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="mt-8 text-sm font-light tracking-[0.15em] text-ink-muted md:mt-10 md:text-base"
          style={{ fontFamily: "'Shippori Mincho', serif" }}
        >
          美容師&珈琲焙煎士してます
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-ink-muted/60">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-kraft/40"
        />
      </motion.div>
    </section>
  );
}
