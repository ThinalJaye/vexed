"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Layers, Sparkles, Upload } from "lucide-react";
import {
  EDITORIAL_EASE,
  ImageClipReveal,
  RevealBlock,
  TextMaskReveal,
} from "@/components/motion/MotionPrimitives";

const BLANK_SWATCHES = [
  {
    name: "Obsidian Black",
    shortLabel: "Obsidian",
    hex: "#080808",
    frontImage: "/images/tee-obsidian-front.jpg",
    backImage: "/images/tee-obsidian-back.jpg",
  },
  {
    name: "Bone White",
    shortLabel: "Bone",
    hex: "#F4F4F0",
    frontImage: "/images/tee-bone-front.jpg",
    backImage: "/images/tee-bone-back.jpg",
  },
  {
    name: "Washed Charcoal",
    shortLabel: "Washed",
    hex: "#3D3D3D",
    frontImage: "/images/tee-ash-front.jpg",
    backImage: "/images/tee-ash-back.jpg",
  },
];

const PLACEMENTS = [
  { label: "Front Center", side: "front" as const, zoneNote: "FRONT CHEST / CENTER DTF" },
  { label: "Oversized Back", side: "back" as const, zoneNote: "FULL BACK EDITORIAL DTF" },
  { label: "Front + Back", side: "back" as const, zoneNote: "DUAL ZONE · FRONT + BACK DTF" },
  { label: "Sleeve Hit", side: "front" as const, zoneNote: "SLEEVE + FRONT DETAIL DTF" },
];

export function CustomTshirtSection() {
  const [selectedSwatch, setSelectedSwatch] = useState(0);
  const [selectedPlacement, setSelectedPlacement] = useState(1);

  const currentSwatch = BLANK_SWATCHES[selectedSwatch];
  const currentPlacement = PLACEMENTS[selectedPlacement];
  const previewSrc =
    currentPlacement.side === "back"
      ? currentSwatch.backImage
      : currentSwatch.frontImage;

  return (
    <section
      id="custom-dtf"
      className="relative bg-l-bg py-20 text-l-fg sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Content + Interactive Visual Configurator Preview */}
          <div className="lg:col-span-6">
            <RevealBlock>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-l-muted">
                <Sparkles className="h-3.5 w-3.5 text-l-fg" />
                05 / BESPOKE CUSTOM PRINTING
              </span>
            </RevealBlock>

            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.93] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                CREATE YOUR OWN.
                <br />
                PRINTED DIFFERENT.
              </h2>
            </TextMaskReveal>

            <RevealBlock delay={0.15}>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-l-soft sm:text-base">
                Have a graphic, brand concept, or one-of-one visual? Pair your artwork
                with VEXED&apos;s signature 280 GSM oversized blanks and studio-grade DTF
                printing—whether you need a single statement piece or a custom drop.
              </p>
            </RevealBlock>

            {/* Tactile Visual Preview Selector */}
            <RevealBlock
              delay={0.22}
              className="mt-8 border border-l-border bg-l-surface p-5 sm:p-6"
            >
              <div className="flex items-center justify-between border-b border-l-border pb-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-l-fg">
                  STUDIO PREVIEW CONFIGURATOR (DEMO)
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-l-muted">
                  PNG · SVG · PDF · AI
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Blank Garment Colour */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-l-muted">
                    1. BLANK BASE COLOUR
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {BLANK_SWATCHES.map((swatch, idx) => (
                      <button
                        key={swatch.name}
                        type="button"
                        aria-pressed={selectedSwatch === idx}
                        onClick={() => setSelectedSwatch(idx)}
                        className={`inline-flex min-h-[44px] items-center gap-2 border px-3.5 py-2 font-mono text-[11px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l-fg ${
                          selectedSwatch === idx
                            ? "border-l-fg bg-l-fg text-l-bg"
                            : "border-l-border bg-l-bg text-l-soft hover:border-l-fg"
                        }`}
                      >
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-l-muted"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <span>{swatch.shortLabel}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Print Placement */}
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-l-muted">
                    2. DTF PLACEMENT ZONE
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {PLACEMENTS.map((place, idx) => (
                      <button
                        key={place.label}
                        type="button"
                        aria-pressed={selectedPlacement === idx}
                        onClick={() => setSelectedPlacement(idx)}
                        className={`min-h-[44px] border px-3.5 py-2 font-mono text-[11px] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l-fg ${
                          selectedPlacement === idx
                            ? "border-l-fg bg-l-fg text-l-bg"
                            : "border-l-border bg-l-bg text-l-soft hover:border-l-fg"
                        }`}
                      >
                        {place.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Active Selection Summary Strip */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-l-border pt-4 font-mono text-[11px]">
                <span className="text-l-soft">
                  SELECTED:{" "}
                  <strong className="text-l-fg">
                    {currentSwatch.name} · {currentPlacement.label}
                  </strong>
                </span>
                <span className="text-l-muted">280 GSM OVERSIZED</span>
              </div>
            </RevealBlock>

            {/* Key Custom Highlights */}
            <RevealBlock delay={0.28} className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Upload className="mt-0.5 h-4 w-4 shrink-0 text-l-fg" />
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                    Artwork Upload Ready
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-l-muted">
                    Full custom upload &amp; design-brief submission connects in our e-commerce phase.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-4 w-4 shrink-0 text-l-fg" />
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em]">
                    No Minimum Order
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-l-muted">
                    Built for individual 1-of-1 streetwear pieces and small brand runs alike.
                  </p>
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.32} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#how-it-works"
                className="inline-flex min-h-[46px] items-center gap-3 bg-l-fg px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-l-bg transition-colors hover:bg-l-soft"
              >
                <span>See Custom Ordering Flow</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#dtf-quality"
                className="inline-flex min-h-[46px] items-center gap-3 border border-l-fg px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-l-fg transition-colors hover:bg-l-fg hover:text-l-bg"
              >
                <span>Inspect DTF Craft</span>
              </a>
            </RevealBlock>
          </div>

          {/* Right Live-Synced Editorial Garment Preview */}
          <div className="lg:col-span-6">
            <ImageClipReveal
              delay={0.14}
              className="relative aspect-[3/4] w-full overflow-hidden border border-l-border bg-l-surface"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${currentSwatch.name}-${currentPlacement.side}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={previewSrc}
                    alt={`${currentSwatch.name} oversized T-shirt — ${currentPlacement.label} custom DTF preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Active Print Zone Indicator Pill */}
              <div className="pointer-events-none absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                <span className="bg-l-fg/90 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-l-bg backdrop-blur-md">
                  {currentPlacement.zoneNote}
                </span>
                <span className="bg-l-bg/90 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-l-fg backdrop-blur-md">
                  {currentPlacement.side === "back" ? "BACK VIEW" : "FRONT VIEW"}
                </span>
              </div>

              <div className="absolute right-4 bottom-4 left-4 z-10 flex flex-wrap items-center justify-between gap-2 bg-l-fg/92 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-l-bg backdrop-blur-md">
                <span>VEXED CUSTOM PRINT LAB</span>
                <span>
                  {currentSwatch.name} / {currentPlacement.label}
                </span>
              </div>
            </ImageClipReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
