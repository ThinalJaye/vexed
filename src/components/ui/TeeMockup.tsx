import React, { useId } from "react";

interface TeeMockupProps {
  /** Garment colour */
  fill: string;
  /** Emblem/print colour with good contrast on `fill` */
  print: string;
  className?: string;
  label?: string;
}

const BODY_PATH =
  "M150,52 L88,68 L16,118 L54,206 L98,184 L98,402 Q200,414 302,402 L302,184 L346,206 L384,118 L312,68 L250,52 Q200,92 150,52 Z";

const COLOR_EASE = "600ms cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Clean, reusable oversized-tee garment mockup (SVG). Colours are driven by
 * props and morph through CSS transitions; shading uses neutral black/white
 * alpha layers so it reads correctly on any garment colour. No photo or
 * baked-in studio background is involved.
 */
export function TeeMockup({ fill, print, className, label }: TeeMockupProps) {
  const uid = useId().replace(/:/g, "");
  const clip = `${uid}-clip`;
  const side = `${uid}-side`;
  const vert = `${uid}-vert`;
  const glow = `${uid}-glow`;
  const blur = `${uid}-blur`;

  return (
    <svg
      viewBox="0 0 400 440"
      role="img"
      aria-label={label ?? "Oversized T-shirt mockup"}
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={clip}>
          <path d={BODY_PATH} />
        </clipPath>
        <linearGradient id={side} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity="0.26" />
          <stop offset="0.14" stopColor="#000" stopOpacity="0.07" />
          <stop offset="0.26" stopColor="#000" stopOpacity="0" />
          <stop offset="0.74" stopColor="#000" stopOpacity="0" />
          <stop offset="0.86" stopColor="#000" stopOpacity="0.07" />
          <stop offset="1" stopColor="#000" stopOpacity="0.26" />
        </linearGradient>
        <linearGradient id={vert} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.1" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.17" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.42" r="0.5">
          <stop offset="0" stopColor="#fff" stopOpacity="0.09" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id={blur} x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="200" cy="420" rx="134" ry="9" fill="#000" opacity="0.3" filter={`url(#${blur})`} />

      {/* Garment body (softened corners via same-colour stroke) */}
      <path
        d={BODY_PATH}
        style={{
          fill,
          stroke: fill,
          strokeWidth: 6,
          strokeLinejoin: "round",
          transition: `fill ${COLOR_EASE}, stroke ${COLOR_EASE}`,
        }}
      />

      {/* Shading, folds and construction details, clipped to the garment */}
      <g clipPath={`url(#${clip})`}>
        <rect width="400" height="440" fill={`url(#${side})`} />
        <rect width="400" height="440" fill={`url(#${vert})`} />
        <rect width="400" height="440" fill={`url(#${glow})`} />

        {/* Sleeve & armpit folds */}
        <path d="M98,184 Q118,216 104,254" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2.4" />
        <path d="M302,184 Q282,216 296,254" fill="none" stroke="#000" strokeOpacity="0.12" strokeWidth="2.4" />
        <path d="M70,150 Q96,168 100,186" fill="none" stroke="#000" strokeOpacity="0.09" strokeWidth="2" />
        <path d="M330,150 Q304,168 300,186" fill="none" stroke="#000" strokeOpacity="0.09" strokeWidth="2" />

        {/* Body folds */}
        <path d="M128,326 Q170,350 158,398" fill="none" stroke="#000" strokeOpacity="0.08" strokeWidth="3" />
        <path d="M272,318 Q232,346 244,398" fill="none" stroke="#000" strokeOpacity="0.08" strokeWidth="3" />
        <path d="M148,122 Q200,142 252,120" fill="none" stroke="#fff" strokeOpacity="0.09" strokeWidth="3" />

        {/* Shoulder seams */}
        <path d="M150,52 L88,68" fill="none" stroke="#000" strokeOpacity="0.14" strokeWidth="1.5" />
        <path d="M250,52 L312,68" fill="none" stroke="#000" strokeOpacity="0.14" strokeWidth="1.5" />

        {/* Hem & sleeve stitching */}
        <path d="M98,392 Q200,404 302,392" fill="none" stroke="#000" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M98,394 Q200,406 302,394" fill="none" stroke="#fff" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M30,126 L64,196" fill="none" stroke="#000" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M370,126 L336,196" fill="none" stroke="#000" strokeOpacity="0.2" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Inside back-neck */}
        <path d="M150,52 Q200,44 250,52 Q200,92 150,52 Z" fill="#000" fillOpacity="0.32" />
      </g>

      {/* Collar rib */}
      <path
        d="M150,52 Q200,92 250,52"
        fill="none"
        strokeLinecap="round"
        style={{ stroke: fill, strokeWidth: 10, transition: `stroke ${COLOR_EASE}` }}
      />
      <path d="M150,52 Q200,92 250,52" fill="none" stroke="#000" strokeOpacity="0.16" strokeWidth="10" strokeLinecap="round" />
      <path d="M154,56 Q200,95 246,56" fill="none" stroke="#fff" strokeOpacity="0.1" strokeWidth="1.2" />

      {/* Left-chest micro emblem */}
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: print, transition: `stroke ${COLOR_EASE}` }}
        opacity="0.9"
      >
        <rect x="256" y="116" width="26" height="26" strokeWidth="1.6" />
        <path d="M262,122 L269,136 L276,122" strokeWidth="2" />
      </g>
    </svg>
  );
}
