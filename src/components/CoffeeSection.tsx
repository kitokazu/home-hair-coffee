"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { coffeeImages } from "@/lib/images";

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
    label: "お湯洗い",
    english: "HOME ROASTED",
    desc: "ハンドピックで欠点豆、虫食い豆、カビ豆などを取り除き、50℃のお湯で洗いして水蒸気焙煎の後本焙煎しています。",
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
          </div>
        </FadeIn>

        {/* Arms Coffee brand block */}
        <FadeIn delay={0.1}>
          <div className="mt-14 text-center md:mt-16">
            <div className="inline-block border-[3px] border-double border-stamp px-8 py-4 md:px-10 md:py-5">
              <span
                className="text-2xl tracking-[0.2em] text-stamp md:text-3xl"
                style={{ fontFamily: "'Shippori Mincho', serif" }}
              >
                アームズ珈琲<span className="text-base align-super md:text-lg">®</span>
              </span>
            </div>
            <p className="mx-auto mt-8 max-w-lg text-sm font-light leading-[2.2] tracking-wider text-ink-light md:text-base">
              当店はアームズ珈琲<span className="text-[10px] align-super">®</span>を提供する美容室です。
            </p>
          </div>
        </FadeIn>

        {/* What is Arms Coffee */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-16 max-w-2xl md:mt-20">
            <p className="text-center text-[10px] tracking-[0.3em] text-ink-muted">
              ARMS COFFEE とは
            </p>
            <div className="mt-6 space-y-4 text-center text-sm font-light leading-[2.2] tracking-wider text-ink-light">
              <p>
                アームズ珈琲<span className="text-[10px] align-super">®</span>は、
                一般社団法人日本焙煎技術普及協会（ARMS）が
                推進する焙煎メソッドで仕上げた珈琲です。
              </p>
              <p>
                「安心・安全で、冷めてもますます美味しい」
                <br />
                をコンセプトに、豆の産地ごとに最適な焙煎を施しています。
              </p>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://rms.or.jp/index.shtml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] tracking-[0.2em] text-kraft-dark/70 underline underline-offset-4 transition-colors hover:text-kraft-dark"
              >
                ARMS 公式サイト →
              </a>
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
                <p className="mt-4 text-left text-sm font-light leading-[2] tracking-wider text-ink-light">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

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

        {/* Photo grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-4">
          {coffeeImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.08}>
              <div
                className={`group relative ${
                  img.aspect === "square"
                    ? "aspect-square"
                    : img.aspect === "landscape"
                      ? "aspect-[5/4]"
                      : "aspect-[3/4]"
                } w-full overflow-hidden`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-kraft/30" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
