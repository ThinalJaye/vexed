"use client";

import React from "react";

export function AnnouncementBar() {
  return (
    <div className="relative z-40 border-b border-h-border bg-h-bg px-4 py-2 text-h-fg">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center font-mono text-[10px] uppercase tracking-[0.22em] sm:text-[11px]">
        <span>SRI LANKA · ISLAND-WIDE DELIVERY</span>
        <span className="hidden text-h-muted sm:inline">/</span>
        <span className="text-h-soft">CUSTOM DTF T-SHIRT PRINTING STUDIO</span>
        <span className="hidden text-h-muted md:inline">/</span>
        <span className="hidden text-h-muted md:inline">
          FRONTEND VISUAL PROTOTYPE · DEMO LKR PRICING
        </span>
      </div>
    </div>
  );
}
