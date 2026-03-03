"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { allGalleryImages, type ImageItem } from "@/lib/images";

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

// Placeholder gallery items (used when no real images are configured)
const placeholderItems: (ImageItem & { id: number; aspectClass: string })[] = [
  { id: 1, category: "hair", src: "", alt: "ヘア", aspect: "portrait", aspectClass: "aspect-[3/4]" },
  { id: 2, category: "coffee", src: "", alt: "珈琲", aspect: "square", aspectClass: "aspect-square" },
  { id: 3, category: "hair", src: "", alt: "ヘア", aspect: "portrait", aspectClass: "aspect-[4/5]" },
  { id: 4, category: "coffee", src: "", alt: "珈琲", aspect: "portrait", aspectClass: "aspect-[3/4]" },
  { id: 5, category: "hair", src: "", alt: "ヘア", aspect: "square", aspectClass: "aspect-square" },
  { id: 6, category: "hair", src: "", alt: "ヘア", aspect: "portrait", aspectClass: "aspect-[4/5]" },
  { id: 7, category: "coffee", src: "", alt: "珈琲", aspect: "portrait", aspectClass: "aspect-[3/4]" },
  { id: 8, category: "hair", src: "", alt: "ヘア", aspect: "square", aspectClass: "aspect-square" },
  { id: 9, category: "coffee", src: "", alt: "珈琲", aspect: "portrait", aspectClass: "aspect-[4/5]" },
];

const filters = [
  { key: "all", label: "すべて" },
  { key: "hair", label: "ヘア" },
  { key: "coffee", label: "珈琲" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const hasImages = allGalleryImages.length > 0;
  const items = hasImages ? allGalleryImages : placeholderItems;

  const filtered =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <span className="text-[10px] tracking-[0.4em] text-kraft">
              GALLERY
            </span>
            <h2
              className="mt-3 text-3xl tracking-[0.12em] text-ink md:text-4xl"
              style={{ fontFamily: "'Shippori Mincho', serif" }}
            >
              ギャラリー
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 flex items-center justify-center gap-8 md:mt-14">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`relative text-[12px] tracking-[0.2em] transition-colors duration-300 ${
                  activeFilter === f.key
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink-light"
                }`}
              >
                {f.label}
                {activeFilter === f.key && (
                  <motion.div
                    layoutId="gallery-filter"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-kraft"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Gallery grid */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const key = item.src || `placeholder-${i}`;
              const aspectClass =
                "aspectClass" in item
                  ? (item as { aspectClass: string }).aspectClass
                  : item.aspect === "square"
                    ? "aspect-square"
                    : item.aspect === "landscape"
                      ? "aspect-[5/4]"
                      : "aspect-[3/4]";

              return (
                <motion.div
                  key={key}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`group relative ${aspectClass} cursor-pointer overflow-hidden`}
                  onClick={() => item.src && setLightbox(item.src)}
                >
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-paper-warm transition-colors duration-300 group-hover:bg-kraft-light/30">
                      <div className="text-center">
                        <span className="text-[9px] tracking-[0.3em] text-ink-muted/30">
                          {item.category === "hair" ? "ヘア" : "珈琲"}
                        </span>
                        <span className="mt-1 block text-[10px] tracking-[0.2em] text-ink-muted/20">
                          {(i + 1).toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 border border-transparent transition-all duration-300 group-hover:border-kraft/30" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt=""
                fill
                className="object-contain"
                sizes="90vw"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-10 right-0 text-[11px] tracking-[0.2em] text-paper/80 transition-colors hover:text-paper"
              >
                閉じる
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
