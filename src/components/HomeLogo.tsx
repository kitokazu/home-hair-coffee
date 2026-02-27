"use client";

import Image from "next/image";

/**
 * The "home" logo with "hair & coffee roaster" subtitle.
 * Uses the actual logo image for pixel-perfect accuracy.
 */
export default function HomeLogo({
  className = "",
  width = 240,
  variant = "dark",
}: {
  className?: string;
  width?: number;
  variant?: "dark" | "light";
}) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src="/home-logo-transparent.png"
        alt="home — hair & coffee roaster"
        width={width}
        height={Math.round(width * 0.65)}
        className={`object-contain ${variant === "light" ? "invert" : ""}`}
        priority
      />
    </div>
  );
}
