"use client";

import React from "react";
import { MotionConfig, motion, useReducedMotion, type Variants } from "motion/react";

export const EDITORIAL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function RevealBlock({
  children,
  className = "",
  delay = 0,
  y = 24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.65, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TextMaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const maskChildVariants: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

/**
 * Triggers `whileInView` on the un-transformed outer wrapper (`amount: "some"`)
 * so fast scrolling or anchor jumps never leave headings stuck invisible.
 */
export function TextMaskReveal({
  children,
  className = "",
  delay = 0,
}: TextMaskRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      className="overflow-hidden pb-1"
    >
      <motion.div
        variants={maskChildVariants}
        transition={{ duration: prefersReducedMotion ? 0 : 0.72, delay: prefersReducedMotion ? 0 : delay, ease: EDITORIAL_EASE }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface ImageClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ImageClipReveal({
  children,
  className = "",
  delay = 0,
}: ImageClipRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : { clipPath: "inset(8% 0% 8% 0%)", opacity: 0.25, scale: 1.03 }
      }
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 0.85, delay, ease: EDITORIAL_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
