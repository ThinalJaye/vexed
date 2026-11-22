"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { EDITORIAL_EASE } from "@/components/motion/MotionPrimitives";
import { useTheme } from "@/components/theme/ThemeProvider";
import { THEME_CYCLE_MS, THEME_OPTIONS } from "@/data/themes";

const charVariants: Variants = {
  hidden: { y: "108%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: EDITORIAL_EASE },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EDITORIAL_EASE },
  },
};

function SplitLine({ text, delay }: { text: string; delay: number }) {
  const words = text.split(" ");
  return (
    <motion.span
      aria-hidden="true"
      className="block whitespace-nowrap"
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay, staggerChildren: 0.02 }}
    >
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          className="inline-block overflow-hidden py-[0.04em] align-bottom"
        >
          {Array.from(word).map((ch, ci) => (
            <motion.span key={ci} variants={charVariants} className="inline-block">
              {ch}
            </motion.span>
          ))}
          {wi < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </motion.span>
  );
}

const SUPPORTING_PHRASES = [
  "Premium Oversized T-Shirts.",
  "Designed Different.",
  "Made for You.",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const prefersReducedMotion = useReducedMotion();
  const { themeId, playing, reducedMotion, selectTheme, toggleAutoPlay } = useTheme();

  const activeIndex = THEME_OPTIONS.findIndex((o) => o.id === themeId);
  const activeOption = THEME_OPTIONS[activeIndex];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax on the campaign model stage only (no React re-renders)
  const modelY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const count = THEME_OPTIONS.length;
    let next = activeIndex;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (activeIndex + 1) % count;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (activeIndex - 1 + count) % count;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = count - 1;
    else return;
    e.preventDefault();
    selectTheme(THEME_OPTIONS[next].id);
    optionRefs.current[next]?.focus();
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-h-bg text-h-fg lg:min-h-[calc(100svh-6.25rem)]"
    >
      {/* Subtle full-bleed grain across the themed canvas */}
      <div className="editorial-grain pointer-events-none absolute inset-0 z-0 opacity-35" />

      {/* Approved 45% Left (Editorial Copy & Minimal Selector) / 55% Right (Prominent Full-Height Model) */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:min-h-[calc(100svh-6.25rem)] lg:grid-cols-[45%_55%]">
        {/* RIGHT SIDE ON DESKTOP (55%), TOP ON MOBILE: Single Prominent Full-Height Campaign Model */}
        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1 }
              : { clipPath: "inset(4% 0% 4% 0%)", opacity: 0 }
          }
          animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
          transition={{ duration: 0.9, ease: EDITORIAL_EASE }}
          className="relative order-1 h-[32svh] min-h-[225px] max-h-[360px] w-full overflow-hidden bg-d-surface sm:h-[44svh] sm:max-h-[440px] lg:order-2 lg:h-auto lg:max-h-none lg:min-h-[calc(100svh-6.25rem)]"
        >
          <motion.div
            style={prefersReducedMotion ? undefined : { y: modelY }}
            className="relative h-[106%] w-full will-change-transform"
          >
            {THEME_OPTIONS.map((opt) => {
              const active = opt.id === themeId;
              return (
                <motion.div
                  key={opt.id}
                  aria-hidden={!active}
                  initial={false}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={
                    active
                      ? { duration: reducedMotion ? 0.01 : 0.6, ease: EDITORIAL_EASE }
                      : { duration: 0.01, delay: reducedMotion ? 0 : 0.6 }
                  }
                  style={{ zIndex: active ? 2 : 1 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={opt.campaignImage}
                    alt={
                      active
                        ? `VEXED editorial campaign model wearing ${opt.name} (${opt.garment}) heavyweight oversized T-shirt`
                        : ""
                    }
                    fill
                    priority={opt.id === "obsidian"}
                    loading="eager"
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover object-[76%_10%] sm:object-[72%_12%] lg:object-[70%_12%]"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Subtle seamless edge integration ONLY at the left boundary on desktop & bottom edge on mobile (never covers or fades the model's T-shirt) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-h-bg via-h-bg/45 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-h-bg to-transparent lg:hidden"
          />

          {/* Discrete Editorial Spec Tag at Top-Right Corner (Clear of Model) */}
          <div className="pointer-events-none absolute top-4 right-4 z-10 hidden border border-white/20 bg-black/55 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-white/90 uppercase backdrop-blur-md lg:block">
            280 GSM OVERSIZED · {activeOption.index} / 05
          </div>

          {/* Discrete Scroll Indicator at Bottom-Right Corner on Desktop (Clear of Model's T-shirt) */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute right-6 bottom-5 z-10 hidden lg:block"
          >
            <a
              href="#new-drops"
              aria-label="Scroll to New Drops"
              className="group inline-flex min-h-[44px] items-center gap-2.5 border border-white/25 bg-black/55 px-3.5 py-2 font-mono text-[10px] tracking-[0.22em] text-white/90 uppercase backdrop-blur-md transition-colors hover:border-white hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span>SCROLL</span>
              <motion.span
                animate={prefersReducedMotion ? undefined : { y: [-2, 3, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="h-3.5 w-3.5" />
              </motion.span>
            </a>
          </motion.div>
        </motion.div>

        {/* LEFT SIDE ON DESKTOP (45%), BELOW MODEL ON MOBILE: Brand Mark, Headline, Copy, CTAs & Minimal 5-Colour Row */}
        <div className="order-2 flex flex-col justify-between px-5 pt-3 pb-4 sm:px-8 sm:pt-6 sm:pb-7 lg:order-1 lg:px-12 lg:py-10 xl:px-16">
          {/* Top Brand Identifier (shown sm+; mobile already has VEXED header directly above) */}
          <div className="hidden items-center gap-3 sm:flex">
            <motion.span
              initial={
                prefersReducedMotion ? { opacity: 1 } : { opacity: 0, rotate: -45, scale: 0.8 }
              }
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.05, ease: EDITORIAL_EASE }}
              className="flex h-8 w-8 shrink-0 items-center justify-center border border-h-fg/80 font-display text-xs font-extrabold tracking-widest"
            >
              V
            </motion.span>
            <div className="flex flex-col">
              <motion.span
                initial="hidden"
                animate="visible"
                aria-label="VEXED Studio"
                transition={{ delayChildren: 0.14, staggerChildren: 0.025 }}
                className="flex overflow-hidden font-display text-[11px] font-bold tracking-[0.34em]"
              >
                {Array.from("VEXED STUDIO").map((ch, i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    variants={charVariants}
                    className="inline-block"
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.35 }}
                className="font-mono text-[10px] tracking-[0.22em] text-h-muted uppercase"
              >
                CAMPAIGN 01 · SRI LANKA / LKR
              </motion.span>
            </div>
            <motion.span
              initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EDITORIAL_EASE }}
              className="hidden h-px flex-1 origin-left bg-h-border sm:block"
            />
          </div>

          {/* Center Editorial Statement + CTAs */}
          <div className="my-2.5 sm:my-6 lg:my-auto lg:py-8">
            <h1
              aria-label="NOT MADE TO BLEND IN."
              className="font-display text-[clamp(1.75rem,3.6vw,4.15rem)] leading-[0.94] font-extrabold tracking-[-0.03em] text-h-fg uppercase"
            >
              <SplitLine text="NOT MADE" delay={0.12} />
              <SplitLine text="TO BLEND IN." delay={0.24} />
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              transition={{ delayChildren: 0.46, staggerChildren: 0.08 }}
              className="mt-3.5 max-w-md text-sm leading-relaxed text-h-soft sm:mt-5 sm:text-base lg:text-lg"
            >
              {SUPPORTING_PHRASES.map((phrase, i) => (
                <React.Fragment key={phrase}>
                  {i > 0 ? " " : null}
                  <motion.span variants={fadeUpVariants} className="inline-block">
                    {phrase}
                  </motion.span>
                </React.Fragment>
              ))}
            </motion.p>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: EDITORIAL_EASE }}
              className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
            >
              <motion.a
                href="#collections"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="group relative inline-flex min-h-[46px] items-center justify-between gap-3.5 overflow-hidden border border-h-fg bg-h-fg px-6 py-3 font-mono text-xs font-semibold tracking-[0.18em] text-h-bg uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-h-fg sm:justify-center"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-h-soft transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0"
                />
                <span className="relative">EXPLORE COLLECTION</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                href="#custom-dtf"
                whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className="group relative inline-flex min-h-[46px] items-center justify-between gap-3.5 overflow-hidden border border-h-fg/55 bg-transparent px-6 py-3 font-mono text-xs font-semibold tracking-[0.18em] text-h-fg uppercase transition-colors duration-500 hover:border-h-fg hover:text-h-bg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-h-fg sm:justify-center"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full bg-h-fg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                />
                <span className="relative">CREATE YOUR OWN</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Minimal Horizontal 5-Colour Selector Row (No Floating Card, Cleanly Below Campaign Text) */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: EDITORIAL_EASE }}
            className="border-t border-h-border pt-3 sm:pt-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-baseline gap-2">
                <span
                  id="tee-selector-label"
                  className="font-mono text-[10px] tracking-[0.2em] text-h-muted uppercase"
                >
                  TEE COLOUR
                </span>
                <span className="text-h-border">/</span>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={activeOption.id}
                    initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="truncate font-mono text-[11px] font-semibold tracking-[0.18em] text-h-fg uppercase"
                  >
                    {activeOption.name} · {activeOption.garment}
                  </motion.span>
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={toggleAutoPlay}
                disabled={reducedMotion}
                aria-pressed={playing}
                aria-label={
                  reducedMotion
                    ? "Automatic colour cycle disabled due to reduced motion"
                    : playing
                    ? "Pause automatic colour cycle"
                    : "Resume automatic colour cycle"
                }
                className="inline-flex h-11 min-w-[44px] shrink-0 items-center justify-center gap-1.5 border border-h-border px-2.5 font-mono text-[10px] tracking-[0.16em] text-h-soft uppercase transition-colors hover:border-h-fg hover:text-h-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg disabled:cursor-not-allowed disabled:opacity-45"
              >
                {playing ? (
                  <>
                    <Pause className="h-3 w-3" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button>
            </div>

            {/* Five Compact Accessible Swatches */}
            <div
              role="radiogroup"
              aria-labelledby="tee-selector-label"
              onKeyDown={handleKeyDown}
              className="mt-2.5 grid grid-cols-5 gap-1.5 sm:gap-2"
            >
              {THEME_OPTIONS.map((opt, i) => {
                const active = opt.id === themeId;
                return (
                  <button
                    key={opt.id}
                    ref={(el) => {
                      optionRefs.current[i] = el;
                    }}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    aria-label={`${opt.index} ${opt.name} — ${opt.garment} oversized T-shirt and site theme`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => selectTheme(opt.id)}
                    className="group relative flex min-h-[44px] flex-col items-center justify-center gap-1.5 px-1 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-h-fg"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-5 w-5 rounded-full border transition-transform duration-300 ${
                        active
                          ? "scale-110 border-h-fg ring-2 ring-h-fg ring-offset-2 ring-offset-h-bg"
                          : "border-h-fg/45 group-hover:scale-105 group-hover:border-h-fg"
                      }`}
                      style={{ backgroundColor: opt.tee }}
                    />
                    <span
                      className={`max-w-full truncate font-mono text-[8px] font-semibold tracking-[0.08em] uppercase sm:text-[9px] sm:tracking-[0.12em] ${
                        active ? "text-h-fg" : "text-h-muted group-hover:text-h-soft"
                      }`}
                    >
                      {opt.name}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="tee-active-underline"
                        aria-hidden="true"
                        transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                        className="absolute right-2 bottom-0 left-2 h-[2px] bg-h-fg"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Subtle 2-Second Cycle Hairline + Mobile Scroll Link */}
            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="h-[2px] flex-1 overflow-hidden bg-h-border/70">
                {playing ? (
                  <motion.div
                    key={activeOption.id}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: THEME_CYCLE_MS / 1000, ease: "linear" }}
                    className="h-full w-full origin-left bg-h-fg"
                  />
                ) : (
                  <div className="h-full w-full bg-h-fg/35" />
                )}
              </div>

              <span className="font-mono text-[9px] tracking-[0.16em] text-h-muted uppercase">
                DEMO · {activeOption.tee}
              </span>

              <a
                href="#new-drops"
                aria-label="Scroll to New Drops"
                className="inline-flex min-h-[44px] items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] text-h-soft uppercase hover:text-h-fg lg:hidden"
              >
                <span>SCROLL</span>
                <ArrowDown className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
