"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { RevealBlock } from "@/components/motion/MotionPrimitives";

export function Footer() {
  return (
    <footer className="relative border-t border-d-border bg-d-bg pt-16 pb-10 text-d-fg sm:pt-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 gap-10 border-b border-d-border pb-14 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center border border-d-fg font-display text-xs font-extrabold">
                V
              </span>
              <span className="font-display text-lg font-extrabold tracking-[0.28em]">
                VEXED
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-d-soft/80">
              NOT MADE TO BLEND IN. Premium oversized streetwear and high-definition
              custom DTF T-shirt printing crafted in Sri Lanka.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-d-muted">
              MARKET: SRI LANKA · CURRENCY: LKR
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-d-muted">
              EXPLORE
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-d-soft">
              <li>
                <a href="#new-drops" className="transition-colors hover:text-d-fg">
                  New Drops
                </a>
              </li>
              <li>
                <a href="#collections" className="transition-colors hover:text-d-fg">
                  Collections
                </a>
              </li>
              <li>
                <a href="#featured" className="transition-colors hover:text-d-fg">
                  Featured Products
                </a>
              </li>
              <li>
                <a
                  href="#oversized-campaign"
                  className="transition-colors hover:text-d-fg"
                >
                  Oversized Campaign
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-d-muted">
              CUSTOM &amp; STUDIO
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-d-soft">
              <li>
                <a href="#custom-dtf" className="transition-colors hover:text-d-fg">
                  Custom T-Shirt Printing
                </a>
              </li>
              <li>
                <a href="#dtf-quality" className="transition-colors hover:text-d-fg">
                  DTF Printing Quality
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-d-fg">
                  How Ordering Works
                </a>
              </li>
              <li>
                <a href="#lookbook" className="transition-colors hover:text-d-fg">
                  Fashion Lookbook
                </a>
              </li>
              <li>
                <a href="#brand-story" className="transition-colors hover:text-d-fg">
                  Brand Story
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-d-muted">
              PROTOTYPE NOTICE
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-d-muted">
              This build is a visual frontend prototype (STEP 03). Products, badges,
              editorial visuals, and LKR pricing shown are demo content only. Live
              checkout, bank transfer details, WhatsApp integration, and inventory arrive
              in upcoming phases.
            </p>
            <a
              href="#hero"
              className="mt-6 inline-flex items-center gap-2 border border-d-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-d-soft transition-colors hover:border-d-fg hover:text-d-fg"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Sculptural Oversized Brand Wordmark */}
        <RevealBlock className="py-8 sm:py-12">
          <p
            aria-hidden="true"
            className="select-none text-center font-display text-[clamp(2.85rem,13vw,12rem)] leading-[0.88] font-extrabold tracking-[0.04em] text-d-fg/[0.92]"
          >
            VEXED
          </p>
        </RevealBlock>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-d-border pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-d-muted sm:flex-row">
          <p>© {new Date().getFullYear()} VEXED — NOT MADE TO BLEND IN.</p>
          <p>VISUAL FRONTEND PROTOTYPE · SRI LANKA</p>
        </div>
      </div>
    </footer>
  );
}
