"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { EDITORIAL_EASE } from "@/components/motion/MotionPrimitives";

const NAV_LINKS = [
  { label: "New Drops", href: "#new-drops" },
  { label: "Collections", href: "#collections" },
  { label: "Featured", href: "#featured" },
  { label: "Oversized", href: "#oversized-campaign" },
  { label: "Custom DTF", href: "#custom-dtf" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Story", href: "#brand-story" },
];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        menuBtnRef.current?.focus();
      }
      return;
    }

    wasOpenRef.current = true;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 20);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusables = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
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

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full text-h-fg transition-all duration-500 ${
          scrolled
            ? "border-b border-h-border bg-h-bg/92 backdrop-blur-xl"
            : "border-b border-h-border/50 bg-h-bg/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-12">
          {/* Brand Wordmark */}
          <a
            href="#hero"
            className="group inline-flex min-h-[44px] items-center gap-2.5 text-h-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg"
            aria-label="VEXED Home"
          >
            <span className="flex h-7 w-7 items-center justify-center border border-h-fg font-display text-xs font-extrabold transition-colors duration-300 group-hover:bg-h-fg group-hover:text-h-bg">
              V
            </span>
            <span className="font-display text-lg font-extrabold tracking-[0.26em] sm:text-xl">
              VEXED
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-h-soft transition-colors hover:text-h-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-h-fg"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-h-fg transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#custom-dtf"
              className="hidden min-h-[44px] items-center gap-1.5 border border-h-fg bg-h-fg px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-h-bg transition-all duration-300 hover:bg-transparent hover:text-h-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg sm:inline-flex"
            >
              <span>Create Your Own</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center border border-h-border bg-h-bg text-h-fg transition-colors hover:border-h-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Dedicated Editorial Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-h-bg text-h-fg lg:hidden"
          >
            {/* Mobile Drawer Header */}
            <div className="flex h-16 items-center justify-between border-b border-h-border px-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center border border-h-fg font-display text-xs font-extrabold">
                  V
                </span>
                <span className="font-display text-lg font-extrabold tracking-[0.26em]">
                  VEXED
                </span>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="flex h-11 w-11 items-center justify-center border border-h-border text-h-fg transition-colors hover:border-h-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Oversized Editorial Mobile Links */}
            <nav
              aria-label="Mobile Navigation"
              className="flex flex-1 flex-col justify-center gap-1 px-6 py-6"
            >
              {NAV_LINKS.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12, transition: { duration: 0.15, delay: 0 } }}
                  transition={{
                    duration: 0.35,
                    delay: 0.04 + index * 0.035,
                    ease: EDITORIAL_EASE,
                  }}
                  className="group flex min-h-[48px] items-center justify-between border-b border-h-border/70 py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg"
                >
                  <span className="font-display text-2xl font-bold uppercase tracking-[0.06em] text-h-fg transition-transform duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-h-muted">
                    0{index + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile Drawer Footer CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25, ease: EDITORIAL_EASE }}
              className="border-t border-h-border p-6"
            >
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="#collections"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-between bg-h-fg px-5 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-h-bg"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#custom-dtf"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center justify-between border border-h-border px-5 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-h-fg"
                >
                  <span>Create Your Own DTF</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-h-muted">
                NOT MADE TO BLEND IN · SRI LANKA (LKR)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
