"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/demo-content";
import { RevealBlock, TextMaskReveal } from "@/components/motion/MotionPrimitives";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative bg-l-bg py-20 text-l-fg sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 items-end gap-8 border-b border-l-border pb-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RevealBlock>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-l-muted">
                07 / SRI LANKA ORDERING FLOW
              </span>
            </RevealBlock>
            <TextMaskReveal delay={0.08}>
              <h2 className="mt-3 font-display text-4xl leading-[0.94] font-extrabold uppercase tracking-[-0.03em] sm:text-6xl">
                HOW IT WORKS
              </h2>
            </TextMaskReveal>
          </div>
          <RevealBlock delay={0.14} className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-l-soft sm:text-base">
              Built for transparent, trustworthy Sri Lankan ordering in LKR—from unique
              order IDs to direct bank transfer and owner-verified fulfillment.
            </p>
          </RevealBlock>
        </div>

        {/* 4 Architectural Steps */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <RevealBlock
              key={item.step}
              delay={idx * 0.08}
              className="group relative flex flex-col justify-between border border-l-border bg-l-surface/70 p-6 transition-all duration-300 hover:border-l-fg hover:bg-l-bg sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between border-b border-l-border pb-4">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-l-fg">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-l-muted">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-[0.03em] text-l-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-l-soft sm:text-sm">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 h-px w-10 bg-l-fg transition-all duration-500 group-hover:w-full" />
            </RevealBlock>
          ))}
        </div>

        {/* Payment Verification Transparency Note */}
        <RevealBlock
          delay={0.2}
          className="mt-10 flex flex-col items-start justify-between gap-4 border border-l-fg bg-l-fg p-6 text-l-bg sm:flex-row sm:items-center sm:p-7"
        >
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-l-bg" />
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
                MANUAL PAYMENT VERIFICATION GUARANTEE
              </p>
              <p className="mt-1 text-xs leading-relaxed text-l-border sm:text-sm">
                WhatsApp deposit slip submission is reviewed personally—every order enters
                DTF printing only after the VEXED owner manually confirms receipt of bank
                funds.
              </p>
            </div>
          </div>
          <span className="shrink-0 border border-l-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-l-border">
            CURRENCY · LKR
          </span>
        </RevealBlock>
      </div>
    </section>
  );
}
