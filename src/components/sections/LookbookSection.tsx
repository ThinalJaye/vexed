"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, X } from "lucide-react";
import { LOOKBOOK_FRAMES, LookbookFrame } from "@/data/demo-content";
import {
  EDITORIAL_EASE,
  ImageClipReveal,
  RevealBlock,
  TextMaskReveal,
} from "@/components/motion/MotionPrimitives";

export function LookbookSection() {
  const [activeFrame, setActiveFrame] = useState<LookbookFrame | null>(null);

  useEffect(() => {
    if (!activeFrame) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveFrame(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeFrame]);

  return (
    <section
      id="lookbook"
      className="relative bg-d-bg py-20 text-d-fg sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-d-border pb-10 md:flex-row md:items-end">
          <div>
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-d-muted">
                08 / EDITORIAL ARCHIVE
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.94] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                FASHION LOOKBOOK
              </h2>
            </TextMaskReveal>
          </div>
          <RevealBlock delay={0.14} className="max-w-sm md:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-d-soft">
              SEASON 01 · MONOCHROME STUDY
            </p>
            <p className="mt-2 text-xs leading-relaxed text-d-muted sm:text-sm">
              Click any editorial frame to inspect composition, proportion, and print detail.
            </p>
          </RevealBlock>
        </div>

        {/* Asymmetric Editorial Magazine Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-7">
          {/* Frame 01 — Wide Feature */}
          <div className="md:col-span-7">
            <LookbookCard frame={LOOKBOOK_FRAMES[0]} onOpen={setActiveFrame} delay={0} />
          </div>
          {/* Frame 02 — Tall Portrait */}
          <div className="md:col-span-5 md:mt-14">
            <LookbookCard frame={LOOKBOOK_FRAMES[1]} onOpen={setActiveFrame} delay={0.08} />
          </div>

          {/* Frame 03 — Tall Portrait */}
          <div className="md:col-span-5">
            <LookbookCard frame={LOOKBOOK_FRAMES[2]} onOpen={setActiveFrame} delay={0.06} />
          </div>
          {/* Frame 04 — Wide Campaign */}
          <div className="md:col-span-7 md:mt-12">
            <LookbookCard frame={LOOKBOOK_FRAMES[3]} onOpen={setActiveFrame} delay={0.12} />
          </div>

          {/* Frame 05 & 06 */}
          <div className="md:col-span-6">
            <LookbookCard frame={LOOKBOOK_FRAMES[4]} onOpen={setActiveFrame} delay={0.06} />
          </div>
          <div className="md:col-span-6 md:mt-10">
            <LookbookCard frame={LOOKBOOK_FRAMES[5]} onOpen={setActiveFrame} delay={0.12} />
          </div>
        </div>
      </div>

      {/* Lookbook Lightbox */}
      <AnimatePresence>
        {activeFrame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveFrame(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Lookbook frame: ${activeFrame.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-d-bg/92 p-4 backdrop-blur-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl border border-d-border bg-d-bg"
            >
              <button
                type="button"
                onClick={() => setActiveFrame(null)}
                aria-label="Close lookbook viewer"
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center border border-d-border bg-d-bg/85 text-d-fg hover:bg-d-fg hover:text-d-bg"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="relative h-[70vh] w-full bg-d-bg">
                <Image
                  src={activeFrame.image}
                  alt={activeFrame.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-d-border px-5 py-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-d-muted">
                    {activeFrame.code}
                  </p>
                  <p className="font-display text-lg font-bold uppercase text-d-fg">
                    {activeFrame.title}
                  </p>
                </div>
                <p className="font-mono text-xs text-d-soft">{activeFrame.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function LookbookCard({
  frame,
  onOpen,
  delay,
}: {
  frame: LookbookFrame;
  onOpen: (frame: LookbookFrame) => void;
  delay: number;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(frame)}
      className="group block w-full text-left"
    >
      <ImageClipReveal
        delay={delay}
        className={`relative ${frame.aspect} w-full overflow-hidden border border-d-border bg-d-surface`}
      >
        <Image
          src={frame.image}
          alt={`${frame.title} — ${frame.caption}`}
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-d-bg/15 transition-colors duration-300 group-hover:bg-d-bg/5" />
        <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-d-fg/35 bg-d-bg/75 text-d-fg opacity-80 backdrop-blur-sm transition-all duration-300 group-hover:border-d-fg group-hover:bg-d-fg group-hover:text-d-bg group-hover:opacity-100">
          <Maximize2 className="h-3.5 w-3.5" />
        </span>
      </ImageClipReveal>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-d-muted">
            {frame.code}
          </p>
          <h3 className="mt-0.5 font-display text-base font-bold uppercase tracking-[0.04em] text-d-fg sm:text-lg">
            {frame.title}
          </h3>
        </div>
        <p className="hidden text-right font-mono text-[11px] text-d-muted sm:block">
          {frame.caption}
        </p>
      </div>
    </button>
  );
}
