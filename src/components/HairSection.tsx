"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { hairImages } from "@/lib/images";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

const services = [
  { name: "カット", desc: "CUT", price: "¥4,730（税込）" },
  { name: "カラー", desc: "COLOR", price: "¥6,270〜" },
  { name: "パーマ", desc: "PERM", price: "¥10,450〜" },
  { name: "トリートメント", desc: "TREATMENT", price: "¥2,200" },
];

// Show real images if available, otherwise show 6 placeholders
const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  aspect:
    i % 3 === 0
      ? "aspect-[3/4]"
      : i % 3 === 1
        ? "aspect-square"
        : "aspect-[4/5]",
}));

export default function HairSection() {
  const hasImages = hairImages.length > 0;

  return (
    <section id="hair" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <span className="text-[10px] tracking-[0.4em] text-kraft">
              HAIR
            </span>
            <h2
              className="mt-3 text-3xl tracking-[0.12em] text-ink md:text-4xl"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              ヘア
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-14 max-w-sm md:mt-16">
            <p className="mb-6 text-center text-[10px] tracking-[0.3em] text-ink-muted">
              MENU
            </p>
            <div className="space-y-4">
              {services.map((s) => (
                <div key={s.name} className="flex items-baseline justify-between border-b border-kraft/15 pb-3">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-base tracking-[0.1em] text-ink"
                      style={{ fontFamily: "'Shippori Mincho', serif" }}
                    >
                      {s.name}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] text-ink-muted">
                      {s.desc}
                    </span>
                  </div>
                  <span className="text-sm tracking-wider text-ink-light">
                    {s.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Photo grid */}
        <div className="mt-16 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-3 md:gap-4">
          {hasImages
            ? hairImages.map((img, i) => (
                <FadeIn key={img.src} delay={i * 0.08}>
                  <div
                    className={`group relative ${
                      img.aspect === "square"
                        ? "aspect-square"
                        : img.aspect === "landscape"
                          ? "aspect-[5/4]"
                          : "aspect-[3/4]"
                    } w-full cursor-pointer overflow-hidden`}
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
              ))
            : placeholders.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.08}>
                  <div
                    className={`group relative ${item.aspect} w-full cursor-pointer overflow-hidden bg-paper-warm`}
                  >
                    <div className="flex h-full w-full items-center justify-center transition-colors duration-300 group-hover:bg-kraft-light/30">
                      <span className="text-[10px] tracking-[0.3em] text-ink-muted/30">
                        {item.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-kraft/30" />
                  </div>
                </FadeIn>
              ))}
        </div>
      </div>
    </section>
  );
}
