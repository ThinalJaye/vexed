"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { DemoProduct, formatDemoLkr } from "@/data/demo-content";
import { EDITORIAL_EASE } from "@/components/motion/MotionPrimitives";

interface ProductQuickViewModalProps {
  product: DemoProduct | null;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProductQuickViewModal({
  product,
  onClose,
}: ProductQuickViewModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!product) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move keyboard focus inside the dialog once mounted
    const focusTimer = window.setTimeout(() => {
      const first = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
      first?.focus();
    }, 20);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      previousFocusRef.current?.focus();
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Product preview: ${product.name}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-d-bg/80 p-4 backdrop-blur-md"
        >
          <ProductQuickViewContent
            key={product.id}
            dialogRef={dialogRef}
            product={product}
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProductQuickViewContent({
  dialogRef,
  product,
  onClose,
}: {
  dialogRef: React.RefObject<HTMLDivElement | null>;
  product: DemoProduct;
  onClose: () => void;
}) {
  const [view, setView] = useState<"front" | "back">("front");
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes.includes("L") ? "L" : product.sizes[0]
  );

  return (
    <motion.div
      ref={dialogRef}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
      onClick={(e) => e.stopPropagation()}
      className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto border border-d-border bg-d-bg text-d-fg md:grid-cols-2"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close product preview"
        className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center border border-d-border bg-d-bg/90 text-d-fg transition-colors hover:bg-d-fg hover:text-d-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-fg"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Left Visual */}
      <div className="relative aspect-[3/4] w-full bg-d-surface">
        <Image
          src={view === "front" ? product.frontImage : product.backImage}
          alt={`${product.name} ${view} view`}
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            type="button"
            onClick={() => setView("front")}
            className={`min-h-[44px] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-fg ${
              view === "front"
                ? "bg-d-fg text-d-bg"
                : "border border-d-border bg-d-bg/85 text-d-fg"
            }`}
          >
            Front View
          </button>
          <button
            type="button"
            onClick={() => setView("back")}
            className={`min-h-[44px] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-fg ${
              view === "back"
                ? "bg-d-fg text-d-bg"
                : "border border-d-border bg-d-bg/85 text-d-fg"
            }`}
          >
            Back View
          </button>
        </div>
      </div>

      {/* Right Editorial Info */}
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-d-muted">
            DEMO PRODUCT PREVIEW · NOT LIVE INVENTORY
          </p>
          <h3 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
            {product.name}
          </h3>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="font-mono text-xl font-semibold text-d-fg">
              {formatDemoLkr(product.samplePriceLkr)}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-d-muted">
              Sample LKR Price
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-d-soft">
            {product.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 border-y border-d-border py-4 font-mono text-[11px]">
            <div>
              <span className="block text-d-muted">FABRIC</span>
              <span className="mt-0.5 block text-d-fg">{product.gsmSpec}</span>
            </div>
            <div>
              <span className="block text-d-muted">SILHOUETTE</span>
              <span className="mt-0.5 block text-d-fg">{product.fitSpec}</span>
            </div>
          </div>

          {/* Size Selector (Prototype Visual State) */}
          <div className="mt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-d-muted">
              AVAILABLE SIZES (DEMO)
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`min-h-[44px] min-w-[44px] border px-3 py-2 font-mono text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-fg ${
                    selectedSize === size
                      ? "border-d-fg bg-d-fg text-d-bg"
                      : "border-d-border text-d-soft hover:border-d-muted"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <a
            href="#how-it-works"
            onClick={onClose}
            className="flex min-h-[46px] w-full items-center justify-between bg-d-fg px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-d-bg transition-colors hover:bg-d-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-fg"
          >
            <span>HOW ORDERING WORKS</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#custom-dtf"
            onClick={onClose}
            className="flex min-h-[46px] w-full items-center justify-between border border-d-border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-d-fg transition-colors hover:border-d-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-fg"
          >
            <span>CUSTOMIZE THIS SILHOUETTE</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="font-mono text-[10px] leading-relaxed text-d-muted">
            Frontend visual prototype: live cart, unique order numbers &amp; WhatsApp
            bank-slip checkout arrive in future development steps.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
