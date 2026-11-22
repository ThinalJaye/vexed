"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "VEXED",
  "NOT MADE TO BLEND IN.",
  "280 GSM HEAVYWEIGHT",
  "CUSTOM DTF PRINTING",
  "OVERSIZED SILHOUETTES",
  "SRI LANKA STREETWEAR",
];

export function TypographyMarquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="VEXED Brand Marquee"
      className="marquee-wrapper relative overflow-hidden border-y border-d-border bg-d-bg py-5 text-d-fg sm:py-7"
    >
      {/* Primary Track */}
      <div className="flex w-max animate-marquee-left items-center gap-8 will-change-transform">
        {[...repeated, ...repeated].map((phrase, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-8">
            <span
              className={`font-display text-2xl font-extrabold uppercase tracking-[0.08em] sm:text-4xl ${
                idx % 2 === 0 ? "text-d-fg" : "text-d-soft/75"
              }`}
            >
              {phrase}
            </span>
            <span className="h-2 w-2 rotate-45 bg-accent" aria-hidden="true" />
          </div>
        ))}
      </div>

      {/* Subtle Secondary Counter-Track */}
      <div className="mt-3 flex w-max animate-marquee-right items-center gap-6 border-t border-d-border/70 pt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-d-muted sm:text-xs">
        {[...repeated, ...repeated].map((phrase, idx) => (
          <span key={`m2-${idx}`} className="flex items-center gap-6 whitespace-nowrap">
            <span>{phrase}</span>
            <span aria-hidden="true">{"//"}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
