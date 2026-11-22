"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  ImageClipReveal,
  RevealBlock,
  TextMaskReveal,
} from "@/components/motion/MotionPrimitives";

const SILHOUETTE_SPECS = [
  { metric: "280–300", unit: "GSM", label: "Combed Heavyweight Cotton" },
  { metric: "BOXY", unit: "FIT", label: "Architectural Dropped Shoulder" },
  { metric: "1.25\"", unit: "RIB", label: "High-Density Mock Collar" },
];

export function OversizedCampaignSection() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="oversized-campaign"
      ref={containerRef}
      className="relative overflow-hidden bg-d-bg py-20 text-d-fg sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Top Asymmetric Editorial Banner */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-d-muted">
                04 / CAMPAIGN 01 — PROPORTION &amp; PRESENCE
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.92] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                THE OVERSIZED
                <br />
                ARCHITECTURE.
              </h2>
            </TextMaskReveal>
          </div>
          <RevealBlock delay={0.16} className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-d-soft/85 sm:text-base">
              Engineered from the ground up with widened chests, clean dropped shoulders,
              and heavyweight drape that holds its structure from morning studio sessions
              to late Colombo nights.
            </p>
          </RevealBlock>
        </div>

        {/* Full-Width Parallax Editorial Photograph */}
        <ImageClipReveal
          delay={0.12}
          className="relative mt-12 aspect-[16/10] w-full overflow-hidden border border-d-border bg-d-surface sm:aspect-[16/8.5]"
        >
          <motion.div
            style={prefersReducedMotion ? undefined : { y: parallaxY }}
            className="relative h-[114%] w-full -translate-y-[7%] will-change-transform"
          >
            <Image
              src="/images/campaign-oversized.jpg"
              alt="VEXED Oversized Collection architectural monochrome campaign"
              fill
              sizes="(max-width: 1440px) 100vw, 1344px"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-d-bg/80 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-d-soft">
                CAMPAIGN FILM STILL · MONOCHROME STUDY
              </p>
              <p className="mt-1 font-display text-xl font-bold uppercase tracking-tight sm:text-3xl">
                VOLUME WITHOUT COMPROMISE.
              </p>
            </div>
            <a
              href="#new-drops"
              className="inline-flex items-center gap-2 bg-d-fg px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-d-bg transition-colors hover:bg-d-soft"
            >
              <span>Explore Oversized Drops</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </ImageClipReveal>

        {/* Garment Spec Strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SILHOUETTE_SPECS.map((spec, idx) => (
            <RevealBlock
              key={spec.label}
              delay={idx * 0.08}
              className="border border-d-border bg-d-surface p-6"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-extrabold tracking-tight text-d-fg sm:text-4xl">
                  {spec.metric}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-d-muted">
                  {spec.unit}
                </span>
              </div>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-d-soft">
                {spec.label}
              </p>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
