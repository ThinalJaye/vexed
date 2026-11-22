"use client";

import React from "react";
import Image from "next/image";
import { DTF_PILLARS } from "@/data/demo-content";
import {
  ImageClipReveal,
  RevealBlock,
  TextMaskReveal,
} from "@/components/motion/MotionPrimitives";

export function DtfQualitySection() {
  return (
    <section
      id="dtf-quality"
      className="relative bg-d-bg py-20 text-d-fg sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Macro Visual */}
          <div className="lg:col-span-6">
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-d-muted">
                06 / TECHNICAL PRINT ENGINEERING
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.94] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                DTF PRINTING
                <br />
                QUALITY.
              </h2>
            </TextMaskReveal>

            <ImageClipReveal
              delay={0.14}
              className="relative mt-8 aspect-[4/3] w-full overflow-hidden border border-d-border bg-d-surface"
            >
              <Image
                src="/images/dtf-detail.jpg"
                alt="Macro detail of crisp white and silver DTF graphic bonded onto 280GSM matte black cotton"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 border border-d-border bg-d-bg/85 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-d-soft backdrop-blur-md">
                MACRO INSPECTION · 1200 DPI PIGMENT LAYER
              </div>
            </ImageClipReveal>
          </div>

          {/* Right 4 Craft Pillars */}
          <div className="lg:col-span-6 lg:pt-14">
            <RevealBlock delay={0.12}>
              <p className="max-w-xl text-sm leading-relaxed text-d-soft/85 sm:text-base">
                Every VEXED graphic and custom order is produced using calibrated
                Direct-to-Film transfer workflows—delivering gallery-grade sharpness,
                rich ink opacity, and effortless wearability on heavyweight cotton.
              </p>
            </RevealBlock>

            <div className="mt-8 divide-y divide-d-border border-y border-d-border">
              {DTF_PILLARS.map((pillar, idx) => (
                <RevealBlock
                  key={pillar.code}
                  delay={0.08 * idx}
                  className="group py-6 transition-colors hover:bg-d-surface/70 sm:px-3"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-d-muted">
                      {pillar.code}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-d-fg sm:text-xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-d-soft/80 sm:text-sm">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </RevealBlock>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
