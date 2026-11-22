"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { DEMO_PRODUCTS, DemoProduct } from "@/data/demo-content";
import { ProductCard } from "@/components/ui/ProductCard";
import { RevealBlock, TextMaskReveal } from "@/components/motion/MotionPrimitives";

const FILTER_TABS = ["All", "Graphic DTF", "Oversized", "Heavyweight Blanks"] as const;
type FilterTab = (typeof FILTER_TABS)[number];

interface FeaturedProductsSectionProps {
  onSelectProduct: (product: DemoProduct) => void;
}

export function FeaturedProductsSection({
  onSelectProduct,
}: FeaturedProductsSectionProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredProducts =
    activeTab === "All"
      ? DEMO_PRODUCTS
      : DEMO_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="featured"
      className="relative bg-l-bg py-20 text-l-fg transition-colors duration-700 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header + Interactive Visual Category Filters */}
        <div className="flex flex-col justify-between gap-8 border-b border-l-border pb-10 lg:flex-row lg:items-end">
          <div>
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-l-muted">
                03 / CURATED SELECTION
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.94] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                FEATURED PRODUCTS
              </h2>
            </TextMaskReveal>
          </div>

          <RevealBlock delay={0.14} className="flex flex-wrap items-center gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "bg-l-fg text-l-bg"
                      : "border border-l-border bg-transparent text-l-soft hover:border-l-fg"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </RevealBlock>
        </div>

        {/* Product Showcase Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onSelect={onSelectProduct}
            />
          ))}
        </motion.div>

        <RevealBlock delay={0.1} className="mt-12 border-t border-l-border pt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-l-muted">
            NOTE: ALL FEATURED GARMENTS, BADGES &amp; LKR PRICES SHOWN ABOVE ARE DEMO
            PROTOTYPE CONTENT — NOT LIVE INVENTORY.
          </p>
        </RevealBlock>
      </div>
    </section>
  );
}
