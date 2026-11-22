export interface DemoColorOption {
  name: string;
  hex: string;
}

export interface DemoProduct {
  id: string;
  name: string;
  subtitle: string;
  category: "Oversized" | "Graphic DTF" | "Heavyweight Blanks";
  samplePriceLkr: number;
  sizes: string[];
  colors: DemoColorOption[];
  demoBadge?: "New Arrival" | "Best Seller";
  frontImage: string;
  backImage: string;
  gsmSpec: string;
  fitSpec: string;
  description: string;
  featured?: boolean;
  isNewDrop?: boolean;
}

export interface DemoCollection {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  itemCountLabel: string;
  image: string;
  href: string;
  aspectClass: string;
}

export interface LookbookFrame {
  id: string;
  code: string;
  title: string;
  caption: string;
  image: string;
  aspect: string;
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "vxd-001",
    name: "MONOLITH OVERSIZED TEE",
    subtitle: "280 GSM Heavyweight Cotton · Front & Back DTF",
    category: "Graphic DTF",
    samplePriceLkr: 6900,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Obsidian Black", hex: "#080808" },
      { name: "Bone White", hex: "#F4F4F0" },
      { name: "Washed Ash", hex: "#3A3A3A" },
    ],
    demoBadge: "New Arrival",
    frontImage: "/images/tee-obsidian-front.jpg",
    backImage: "/images/tee-obsidian-back.jpg",
    gsmSpec: "280 GSM Combed Cotton",
    fitSpec: "Boxy Dropped-Shoulder Oversized",
    description:
      "Architectural boxy silhouette cut from dense 280 GSM matte black cotton, finished with high-contrast brutalist monochrome DTF artwork across the back.",
    isNewDrop: true,
    featured: true,
  },
  {
    id: "vxd-002",
    name: "NOCTURNE BONE GRAPHIC TEE",
    subtitle: "280 GSM Heavyweight Cotton · Matte Black DTF",
    category: "Graphic DTF",
    samplePriceLkr: 7200,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Bone White", hex: "#F4F4F0" },
      { name: "Obsidian Black", hex: "#080808" },
    ],
    demoBadge: "Best Seller",
    frontImage: "/images/tee-bone-front.jpg",
    backImage: "/images/tee-bone-back.jpg",
    gsmSpec: "280 GSM Pre-Shrunk Jersey",
    fitSpec: "Relaxed Oversized Drape",
    description:
      "Raw off-white canvas paired with dense matte-black architectural typography printed with stretch-flex DTF pigment for razor-sharp permanence.",
    isNewDrop: true,
    featured: true,
  },
  {
    id: "vxd-003",
    name: "CONCRETE WASH ARCHIVE TEE",
    subtitle: "300 GSM Vintage Wash · Silver & Bone DTF",
    category: "Oversized",
    samplePriceLkr: 7500,
    sizes: ["M", "L", "XL", "XXL"],
    colors: [
      { name: "Concrete Charcoal", hex: "#3D3D3D" },
      { name: "Obsidian Black", hex: "#080808" },
    ],
    demoBadge: "New Arrival",
    frontImage: "/images/tee-ash-front.jpg",
    backImage: "/images/tee-ash-back.jpg",
    gsmSpec: "300 GSM Enzyme-Washed Cotton",
    fitSpec: "Ultra-Boxy Heavy Street Fit",
    description:
      "Enzyme-washed charcoal jersey engineered for sculptural structure, thick collar retention, and luminous monochrome DTF back detailing.",
    isNewDrop: true,
    featured: true,
  },
  {
    id: "vxd-004",
    name: "RAW STUDIO BLANK 01",
    subtitle: "280 GSM Ready-for-DTF Oversized Canvas",
    category: "Heavyweight Blanks",
    samplePriceLkr: 5400,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Obsidian Black", hex: "#080808" },
      { name: "Bone White", hex: "#F4F4F0" },
      { name: "Charcoal", hex: "#242424" },
    ],
    demoBadge: "Best Seller",
    frontImage: "/images/custom-studio.jpg",
    backImage: "/images/dtf-detail.jpg",
    gsmSpec: "280 GSM Print-Grade Cotton",
    fitSpec: "Signature VEXED Oversized Block",
    description:
      "Our flagship blank engineered specifically for ultra-crisp custom DTF transfers or minimal unprinted wear. Zero side-seam twist.",
    isNewDrop: true,
    featured: true,
  },
  {
    id: "vxd-005",
    name: "STATIC SHADOW BOX TEE",
    subtitle: "280 GSM Heavyweight · Minimalist Back Graphic",
    category: "Oversized",
    samplePriceLkr: 6800,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Obsidian Black", hex: "#080808" },
      { name: "Concrete Charcoal", hex: "#4A4A4A" },
    ],
    frontImage: "/images/tee-obsidian-back.jpg",
    backImage: "/images/tee-obsidian-front.jpg",
    gsmSpec: "280 GSM Combed Cotton",
    fitSpec: "Structured Boxy Oversized",
    description:
      "Editorial statement tee showcasing high-opacity white ink layering over jet-black cotton for unmistakable street presence.",
    featured: true,
  },
  {
    id: "vxd-006",
    name: "VOID EDITORIAL BLANK",
    subtitle: "300 GSM Architectural Heavyweight Blank",
    category: "Heavyweight Blanks",
    samplePriceLkr: 5800,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Bone White", hex: "#F4F4F0" },
      { name: "Concrete Charcoal", hex: "#3D3D3D" },
    ],
    frontImage: "/images/tee-bone-front.jpg",
    backImage: "/images/tee-bone-back.jpg",
    gsmSpec: "300 GSM Heavyweight Jersey",
    fitSpec: "Dropped Shoulder Architectural Cut",
    description:
      "Built for custom DTF creators and minimalist purists alike. Heavy neck rib and structured sleeves that hold shape all day.",
    featured: true,
  },
];

export const DEMO_COLLECTIONS: DemoCollection[] = [
  {
    id: "col-oversized",
    index: "01",
    title: "OVERSIZED SILHOUETTES",
    subtitle: "280–300 GSM boxy cuts engineered for architectural drape.",
    itemCountLabel: "DEMO CAPSULE · 06 PIECES",
    image: "/images/tee-obsidian-front.jpg",
    href: "#oversized-campaign",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "col-dtf",
    index: "02",
    title: "GRAPHIC DTF SERIES",
    subtitle: "High-density monochrome prints designed to command attention.",
    itemCountLabel: "DEMO CAPSULE · 08 PIECES",
    image: "/images/tee-bone-back.jpg",
    href: "#featured",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "col-washed",
    index: "03",
    title: "WASHED ARCHIVE",
    subtitle: "Enzyme-washed charcoal tones with raw concrete energy.",
    itemCountLabel: "DEMO CAPSULE · 04 PIECES",
    image: "/images/tee-ash-back.jpg",
    href: "#new-drops",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "col-custom",
    index: "04",
    title: "CUSTOM DTF LAB",
    subtitle: "Your artwork, our heavyweight blanks, studio-grade DTF transfer.",
    itemCountLabel: "MADE TO ORDER · SRI LANKA",
    image: "/images/custom-studio.jpg",
    href: "#custom-dtf",
    aspectClass: "aspect-[3/4]",
  },
];

export const DTF_PILLARS = [
  {
    code: "SPEC 01",
    title: "RAZOR-SHARP MICRO DETAIL",
    description:
      "High-resolution Direct-to-Film pigment transfer captures fine halftones, razor typography, and crisp geometric edges without bleeding into cotton fibers.",
  },
  {
    code: "SPEC 02",
    title: "STRETCH-FLEX DURABILITY",
    description:
      "Elastic thermal adhesive bonds deeply with 280–300 GSM combed cotton so prints move naturally with the garment—resisting cracking and peeling.",
  },
  {
    code: "SPEC 03",
    title: "50+ WASH LONGEVITY",
    description:
      "Cured under calibrated heat and pressure for lasting contrast across obsidian blacks, bone whites, and concrete washes.",
  },
  {
    code: "SPEC 04",
    title: "SOFT-HAND BREATHABILITY",
    description:
      "No heavy plastic slabs. Balanced ink density delivers bold opaque graphics with a smooth, wearable luxury finish built for Sri Lankan heat.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "EXPLORE OR CUSTOMIZE",
    description:
      "Choose a ready-made VEXED oversized graphic tee or configure a custom DTF order with your own artwork, size, colour, and print placement.",
  },
  {
    step: "02",
    title: "RECEIVE ORDER ID & BANK DETAILS",
    description:
      "Place your order online to receive a unique VEXED order number, transparent LKR total, and official business bank transfer details.",
  },
  {
    step: "03",
    title: "TRANSFER & SEND SLIP VIA WHATSAPP",
    description:
      "Complete your bank transfer and tap the order-specific WhatsApp button to send your deposit slip directly to our team.",
  },
  {
    step: "04",
    title: "VERIFIED, PRINTED & DELIVERED",
    description:
      "Once the owner manually verifies receipt of funds, your piece enters DTF production, quality inspection, packaging, and island-wide Sri Lanka delivery.",
  },
];

export const LOOKBOOK_FRAMES: LookbookFrame[] = [
  {
    id: "lb-01",
    code: "FRAME 01 / COLOMBO STUDIO",
    title: "SHADOW PROPORTION",
    caption: "Obsidian 280 GSM Boxy Cut · Editorial Study",
    image: "/images/hero-editorial.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "lb-02",
    code: "FRAME 02 / BACK DETAIL",
    title: "BRUTALIST INK",
    caption: "High-Density White DTF Transfer on Matte Black",
    image: "/images/tee-obsidian-back.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "lb-03",
    code: "FRAME 03 / CONTRAST",
    title: "BONE MONOLITH",
    caption: "Off-White Oversized Silhouette in Dark Studio",
    image: "/images/tee-bone-front.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "lb-04",
    code: "FRAME 04 / CAMPAIGN",
    title: "CONCRETE DUALITY",
    caption: "Dual Monochrome Silhouettes · Season 01",
    image: "/images/campaign-oversized.jpg",
    aspect: "aspect-[16/10]",
  },
  {
    id: "lb-05",
    code: "FRAME 05 / TEXTURE",
    title: "WASHED ASH",
    caption: "300 GSM Enzyme-Washed Charcoal Heavyweight",
    image: "/images/tee-ash-front.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: "lb-06",
    code: "FRAME 06 / CRAFT",
    title: "STUDIO PRECISION",
    caption: "Macro DTF Pigment & Heavyweight Cotton Weave",
    image: "/images/dtf-detail.jpg",
    aspect: "aspect-[4/3]",
  },
];

export const SOCIAL_SHOWCASE_ITEMS = [
  {
    id: "soc-01",
    handle: "@VEXED.LK",
    tag: "DROP 01 · OBSIDIAN",
    image: "/images/tee-obsidian-back.jpg",
  },
  {
    id: "soc-02",
    handle: "@VEXED.LK",
    tag: "CUSTOM DTF LAB",
    image: "/images/custom-studio.jpg",
  },
  {
    id: "soc-03",
    handle: "@VEXED.LK",
    tag: "BONE SILHOUETTE",
    image: "/images/tee-bone-back.jpg",
  },
  {
    id: "soc-04",
    handle: "@VEXED.LK",
    tag: "280 GSM MACRO",
    image: "/images/dtf-detail.jpg",
  },
  {
    id: "soc-05",
    handle: "@VEXED.LK",
    tag: "CONCRETE WASH",
    image: "/images/tee-ash-back.jpg",
  },
];

export function formatDemoLkr(amount: number): string {
  return `LKR ${amount.toLocaleString("en-LK")}`;
}
