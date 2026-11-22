"use client";

import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { SOCIAL_SHOWCASE_ITEMS } from "@/data/demo-content";
import {
  ImageClipReveal,
  RevealBlock,
  TextMaskReveal,
} from "@/components/motion/MotionPrimitives";

export function SocialShowcaseSection() {
  return (
    <section
      id="social"
      className="relative border-t border-d-border bg-d-bg py-20 text-d-fg sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 pb-10 sm:flex-row sm:items-end">
          <div>
            <RevealBlock>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-d-muted">
                <Camera className="h-3.5 w-3.5 text-d-fg" />
                10 / COMMUNITY ARCHIVE
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-3xl leading-[0.95] font-extrabold uppercase tracking-[-0.03em] sm:text-5xl">
                WORN DIFFERENT · @VEXED.LK
              </h2>
            </TextMaskReveal>
          </div>

          <RevealBlock delay={0.14}>
            <span className="inline-flex min-h-[44px] items-center gap-2 border border-d-border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-d-soft">
              #NOTMADETOBLENDIN · SOCIAL PREVIEW
            </span>
          </RevealBlock>
        </div>

        {/* 5-Column Editorial Social Strip */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {SOCIAL_SHOWCASE_ITEMS.map((item, idx) => (
            <ImageClipReveal
              key={item.id}
              delay={idx * 0.06}
              className="group relative aspect-[3/4] overflow-hidden border border-d-border bg-d-surface"
            >
              <Image
                src={item.image}
                alt={`${item.tag} — VEXED social showcase`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-108 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-d-bg/90 via-transparent to-d-bg/20 p-3.5 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                <span className="self-end font-mono text-[9px] uppercase tracking-[0.2em] text-d-soft">
                  0{idx + 1}
                </span>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-d-fg">
                    {item.handle}
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-d-soft/80">
                    {item.tag}
                  </p>
                </div>
              </div>
            </ImageClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
