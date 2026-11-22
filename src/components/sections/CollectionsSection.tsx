"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { DEMO_COLLECTIONS } from "@/data/demo-content";
import {
  ImageClipReveal,
  RevealBlock,
  TextMaskReveal,
} from "@/components/motion/MotionPrimitives";

export function CollectionsSection() {
  return (
    <section
      id="collections"
      className="relative bg-d-bg py-20 text-d-fg transition-colors duration-700 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-d-border pb-10 md:flex-row md:items-end">
          <div>
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-d-muted">
                02 / CURATED PILLARS
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.94] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                EXPLORE COLLECTIONS
              </h2>
            </TextMaskReveal>
          </div>
          <RevealBlock delay={0.14} className="max-w-md">
            <p className="text-sm leading-relaxed text-d-soft/80 sm:text-base">
              Four distinct pillars uniting architectural oversized fits, sharp monochrome
              DTF graphics, and bespoke custom printing.
            </p>
          </RevealBlock>
        </div>

        {/* Asymmetric Editorial Staggered Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {DEMO_COLLECTIONS.map((col, idx) => (
            <a
              key={col.id}
              href={col.href}
              className={`group block ${idx % 2 === 1 ? "lg:mt-12" : ""}`}
            >
              <ImageClipReveal
                delay={idx * 0.08}
                className="relative aspect-[3/4] w-full overflow-hidden border border-d-border bg-d-surface"
              >
                <Image
                  src={col.image}
                  alt={`${col.title} collection editorial visual`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-d-bg/90 via-d-bg/20 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-d-soft">
                  <span className="bg-d-bg/75 px-2.5 py-1 backdrop-blur-sm">
                    {col.index}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center border border-d-fg/35 bg-d-bg/60 text-d-fg transition-all duration-300 group-hover:border-d-fg group-hover:bg-d-fg group-hover:text-d-bg">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-d-soft/80">
                    {col.itemCountLabel}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-extrabold uppercase tracking-tight text-d-fg sm:text-2xl">
                    {col.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-d-soft/85">
                    {col.subtitle}
                  </p>
                </div>
              </ImageClipReveal>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
