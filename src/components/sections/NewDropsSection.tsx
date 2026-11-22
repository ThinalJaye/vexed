"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demo-content";
import { ProductCard } from "@/components/ui/ProductCard";
import { RevealBlock, TextMaskReveal } from "@/components/motion/MotionPrimitives";

interface NewDropsSectionProps {
  onSelectProduct: (product: DemoProduct) => void;
}

export function NewDropsSection({ onSelectProduct }: NewDropsSectionProps) {
  const newDrops = DEMO_PRODUCTS.filter((p) => p.isNewDrop);

  return (
    <section
      id="new-drops"
      className="relative bg-l-bg py-20 text-l-fg transition-colors duration-700 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-l-border pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RevealBlock>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-l-muted">
                <span className="h-1.5 w-1.5 bg-l-fg" />
                01 / SEASON ONE ARRIVALS
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.94] font-extrabold uppercase tracking-[-0.03em] text-l-fg sm:text-6xl">
                NEW DROPS
              </h2>
            </TextMaskReveal>
          </div>

          <RevealBlock delay={0.14} className="lg:col-span-5 lg:text-right">
            <p className="text-sm leading-relaxed text-l-soft sm:text-base">
              Heavyweight 280–300 GSM boxy tees with studio-cured DTF graphics.
              Hover or tap to inspect front and back artwork.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 lg:justify-end">
              <span className="border border-l-border bg-l-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-l-soft">
                DEMO SHOWCASE · SAMPLE LKR PRICING
              </span>
              <a
                href="#featured"
                className="inline-flex min-h-[44px] items-center gap-1 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-l-fg underline underline-offset-4 transition-opacity hover:opacity-65"
              >
                <span>View All Featured</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </RevealBlock>
        </div>

        {/* Product Grid */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {newDrops.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onSelect={onSelectProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
