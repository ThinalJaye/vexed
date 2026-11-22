"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { DemoProduct, formatDemoLkr } from "@/data/demo-content";
import { EDITORIAL_EASE } from "@/components/motion/MotionPrimitives";

interface ProductCardProps {
  product: DemoProduct;
  index?: number;
  onSelect?: (product: DemoProduct) => void;
}

/** Product card used inside light sections (uses the l-* theme tokens). */
export function ProductCard({ product, index = 0, onSelect }: ProductCardProps) {
  const [showBack, setShowBack] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: EDITORIAL_EASE }}
      className="group flex flex-col"
    >
      {/* Editorial Portrait Image Frame */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden border border-l-border bg-l-surface"
        onMouseEnter={() => setShowBack(true)}
        onMouseLeave={() => setShowBack(false)}
      >
        <Image
          src={product.frontImage}
          alt={`${product.name} — front view (demo editorial placeholder)`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showBack ? "scale-105 opacity-0" : "scale-100 opacity-100 group-hover:scale-105"
          }`}
        />
        <Image
          src={product.backImage}
          alt={`${product.name} — back view (demo editorial placeholder)`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showBack ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />

        <div className="pointer-events-none absolute top-3 right-3 left-3 flex items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {product.demoBadge && (
              <span className="bg-l-fg px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.18em] text-l-bg uppercase">
                {product.demoBadge} · Demo
              </span>
            )}
          </div>
          <span className="bg-l-bg/90 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-l-fg uppercase backdrop-blur-sm">
            {showBack ? "BACK" : "FRONT"}
          </span>
        </div>

        {/* Accessible 44px touch targets on mobile without visual bulk */}
        <div className="absolute right-2 bottom-2 left-2 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowBack((prev) => !prev);
            }}
            aria-label={`Toggle front and back view for ${product.name}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 bg-l-fg/85 px-3 font-mono text-[10px] tracking-[0.14em] text-l-bg uppercase backdrop-blur-md transition-colors hover:bg-l-fg focus:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l-fg md:min-h-[36px] md:opacity-0 md:group-hover:opacity-100"
          >
            <RotateCw className="h-3 w-3" />
            <span>{showBack ? "Front" : "Back"}</span>
          </button>

          {onSelect && (
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1 bg-l-bg px-3.5 font-mono text-[10px] font-medium tracking-[0.16em] text-l-fg uppercase transition-all duration-300 hover:bg-l-fg hover:text-l-bg focus:translate-y-0 focus:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l-fg md:min-h-[36px] md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
            >
              <span>Preview</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-3.5 flex flex-1 flex-col justify-between gap-2.5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <button
              type="button"
              onClick={() => onSelect?.(product)}
              className="inline-flex min-h-[44px] items-center text-left font-display text-sm font-bold tracking-[0.04em] text-l-fg uppercase transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-l-fg sm:text-base md:min-h-0"
            >
              {product.name}
            </button>
            <div className="shrink-0 pt-2 text-right md:pt-0">
              <p className="font-mono text-xs font-semibold tracking-tight text-l-fg sm:text-sm">
                {formatDemoLkr(product.samplePriceLkr)}
              </p>
              <p className="font-mono text-[9px] tracking-[0.14em] text-l-muted uppercase">
                Sample Price
              </p>
            </div>
          </div>
          <p className="mt-0.5 text-xs text-l-muted">{product.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-l-border pt-1.5">
          {/* 44x44 touch hit-area around sleek 16px visual swatches */}
          <div className="-ml-3 flex items-center" aria-label="Available colour options">
            {product.colors.map((color, idx) => (
              <button
                key={color.name}
                type="button"
                title={color.name}
                aria-label={`Color option ${color.name}`}
                aria-pressed={selectedColor === idx}
                onClick={() => setSelectedColor(idx)}
                className="flex h-11 w-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-l-fg md:h-8 md:w-8"
              >
                <span
                  aria-hidden="true"
                  className={`h-4 w-4 rounded-full border transition-transform ${
                    selectedColor === idx
                      ? "scale-110 border-l-muted ring-1 ring-l-fg ring-offset-2 ring-offset-l-bg"
                      : "border-l-muted/60 hover:scale-105"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 font-mono text-[10px] tracking-[0.1em] text-l-muted">
            {product.sizes.map((size) => (
              <span key={size} className="bg-l-surface px-1 py-0.5 text-l-soft">
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
