"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { aboutImages } from "@/lib/images";

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
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ImageOrPlaceholder({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    );
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-paper-warm">
      <span className="text-[11px] tracking-[0.2em] text-ink-muted/40">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2
            className="text-center text-3xl font-normal leading-relaxed tracking-[0.08em] text-ink md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Shippori Mincho', serif" }}
          >
            一つ屋根の下に、
            <br className="sm:hidden" />
            髪と珈琲。
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-5 h-px w-10 bg-kraft/50" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm font-light leading-[2.2] tracking-wider text-ink-light md:text-base md:leading-[2.4]">
            さぬき市志度にある小さなお店です。
            <br />
            髪を整えて、珈琲を淹れる。
            <br />
            どちらも手仕事、どちらも日々のこと。
          </p>
        </FadeIn>

        {/* Two pillars */}
        <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-2 md:gap-16">
          <FadeIn delay={0.1}>
            <div className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <ImageOrPlaceholder
                  src={aboutImages.hair}
                  alt="ヘアサロン"
                  label="HAIR"
                />
                <div className="absolute inset-0 border border-kraft/20 transition-all duration-500 group-hover:border-kraft/40" />
              </div>
              <div className="mt-6">
                <h3
                  className="text-xl tracking-[0.15em] text-ink"
                  style={{ fontFamily: "'Shippori Mincho', serif" }}
                >
                  ヘア
                </h3>
                <p className="mt-3 text-sm font-light leading-[2] tracking-wider text-ink-light">
                  その人に似合う髪型を、
                  <br />
                  会話しながら一緒に見つけます。
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <ImageOrPlaceholder
                  src={aboutImages.coffee}
                  alt="珈琲焙煎"
                  label="COFFEE"
                />
                <div className="absolute inset-0 border border-kraft/20 transition-all duration-500 group-hover:border-kraft/40" />
              </div>
              <div className="mt-6">
                <h3
                  className="text-xl tracking-[0.15em] text-ink"
                  style={{ fontFamily: "'Shippori Mincho', serif" }}
                >
                  珈琲
                </h3>
                <p className="mt-3 text-sm font-light leading-[2] tracking-wider text-ink-light">
                  アームズ珈琲<span className="text-[9px] align-super">®</span>を、
                  <br />
                  一杯ずつ丁寧にお届けします。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
