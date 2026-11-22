"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { RevealBlock, TextMaskReveal } from "@/components/motion/MotionPrimitives";

export function BrandStorySection() {
  return (
    <section
      id="brand-story"
      className="relative bg-l-bg py-24 text-l-fg sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Sticky Eyebrow & Statement */}
          <div className="lg:col-span-5">
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-l-muted">
                09 / BRAND MANIFESTO
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl leading-[0.92] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                NOT MADE
                <br />
                TO BLEND IN.
              </h2>
            </TextMaskReveal>
            <RevealBlock delay={0.18} className="mt-8 border-l-2 border-l-fg pl-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-l-soft">
                FOUNDED IN SRI LANKA · BUILT FOR GLOBAL STREET CULTURE
              </p>
            </RevealBlock>
          </div>

          {/* Right Editorial Narrative */}
          <div className="flex flex-col justify-between gap-10 lg:col-span-7">
            <RevealBlock delay={0.12} className="space-y-6">
              <p className="font-display text-xl leading-snug font-semibold text-l-fg sm:text-2xl lg:text-3xl">
                VEXED began with a refusal to settle for thin blanks, generic silhouettes,
                and disposable fast-fashion prints.
              </p>
              <p className="text-sm leading-relaxed text-l-soft sm:text-base">
                We obsess over the architecture of an oversized tee—the drop of the
                shoulder, the weight of 280–300 GSM combed cotton, and the precision of
                high-definition Direct-to-Film pigment. Every ready-made drop is cut to
                hold space in a room. Every custom DTF piece gives creators, artists, and
                individuals the same luxury canvas to wear their own vision without
                compromise.
              </p>
            </RevealBlock>

            <RevealBlock
              delay={0.22}
              className="grid grid-cols-1 gap-6 border-t border-l-border pt-8 sm:grid-cols-3"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-l-muted">
                  01 · SILHOUETTE
                </p>
                <p className="mt-2 font-display text-base font-bold uppercase">
                  Heavyweight Structure
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-l-muted">
                  02 · CRAFT
                </p>
                <p className="mt-2 font-display text-base font-bold uppercase">
                  Studio DTF Precision
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-l-muted">
                  03 · IDENTITY
                </p>
                <p className="mt-2 font-display text-base font-bold uppercase">
                  Unapologetically Distinct
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.28}>
              <a
                href="#collections"
                className="inline-flex items-center gap-3 border border-l-fg bg-l-fg px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-l-bg transition-colors hover:bg-transparent hover:text-l-fg"
              >
                <span>Discover Season 01</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
