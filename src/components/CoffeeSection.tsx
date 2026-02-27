"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    label: "自家焙煎",
    english: "HOME ROASTED",
    desc: "お店で一つずつ、手作業で焙煎しています",
  },
  {
    label: "新鮮な豆",
    english: "FRESH BEANS",
    desc: "焙煎したてだから、香りがぜんぜん違います",
  },
  {
    label: "少量焙煎",
    english: "SMALL BATCH",
    desc: "大量生産はしません。少しずつ、その都度",
  },
];

const beanTypes = [
  { name: "浅煎り", english: "LIGHT" },
  { name: "中煎り", english: "MEDIUM" },
  { name: "深煎り", english: "DARK" },
  { name: "ブレンド", english: "BLEND" },
];

export default function CoffeeSection() {
  return (
    <section id="coffee" className="relative bg-kraft-light/25 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        {/* Section label */}
        <FadeIn>
          <div className="text-center">
            <span className="text-[10px] tracking-[0.4em] text-kraft-dark">COFFEE</span>
            <h2
              className="mt-3 text-3xl tracking-[0.12em] text-ink md:text-4xl"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              珈琲
            </h2>
            {/* Stamp-style brand mark */}
            <div className="mt-5 inline-block border border-stamp/40 px-3 py-1">
              <span className="text-[10px] tracking-[0.15em] text-stamp/70">
                アームズ珈琲®
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Features */}
        <div className="mt-20 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-8">
          {features.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.12}>
              <div className="text-center">
                <span className="text-[9px] tracking-[0.35em] text-kraft-dark/60">
                  {f.english}
                </span>
                <h3
                  className="mt-2 text-xl tracking-[0.15em] text-ink"
                  style={{ fontFamily: "'Shippori Mincho', serif" }}
                >
                  {f.label}
                </h3>
                <div className="mx-auto mt-3 h-px w-6 bg-kraft/40" />
                <p className="mt-4 text-sm font-light leading-[2] tracking-wider text-ink-light">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bean type circles — inspired by the reference design */}
        <FadeIn delay={0.1}>
          <div className="mt-24 md:mt-32">
            <p className="text-center text-[10px] tracking-[0.3em] text-ink-muted">
              焙煎度合い
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {beanTypes.map((bean, i) => (
                <FadeIn key={bean.name} delay={i * 0.1}>
                  <div className="group flex flex-col items-center gap-4">
                    {/* Circular placeholder */}
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border border-kraft/30 bg-paper-warm transition-all duration-500 group-hover:border-kraft/60 md:h-28 md:w-28">
                      <div className="flex h-full w-full items-center justify-center">
                        <div
                          className="h-full w-full"
                          style={{
                            background: `radial-gradient(circle, ${
                              i === 0
                                ? "#d4c5a0"
                                : i === 1
                                ? "#a08860"
                                : i === 2
                                ? "#5c4a32"
                                : "#8a7450"
                            }22 0%, transparent 70%)`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <span
                        className="text-base tracking-[0.1em] text-ink"
                        style={{ fontFamily: "'Shippori Mincho', serif" }}
                      >
                        {bean.name}
                      </span>
                      <span className="mt-1 block text-[8px] tracking-[0.25em] text-ink-muted">
                        {bean.english}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Freshness message */}
        <FadeIn delay={0.2}>
          <div className="mt-24 text-center md:mt-28">
            <p
              className="text-xl tracking-[0.1em] text-ink md:text-2xl"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              いちばん美味しいタイミングで。
            </p>
            <p className="mt-4 text-sm font-light leading-[2] tracking-wider text-ink-light md:text-base">
              焙煎したての豆だからこそ味わえる香りがあります。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
