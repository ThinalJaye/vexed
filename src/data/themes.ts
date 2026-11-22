export type ThemeId = "obsidian" | "bone" | "ash" | "navy" | "olive";

export interface ThemeOption {
  id: ThemeId;
  /** Display index, e.g. "01" */
  index: string;
  name: string;
  garment: string;
  /** Demo garment swatch colour (not confirmed inventory) */
  tee: string;
  /** Full-height editorial campaign photograph of the same model wearing this colourway */
  campaignImage: string;
}

export const DEFAULT_THEME: ThemeId = "obsidian";

/** Automatic cycle: 5 colours x 2s = ~10s per full loop */
export const THEME_CYCLE_MS = 2000;

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "obsidian",
    index: "01",
    name: "OBSIDIAN",
    garment: "Black",
    tee: "#171717",
    campaignImage: "/images/hero-campaign-obsidian.jpg",
  },
  {
    id: "bone",
    index: "02",
    name: "BONE",
    garment: "Off-White",
    tee: "#F0EEE6",
    campaignImage: "/images/hero-campaign-bone.jpg",
  },
  {
    id: "ash",
    index: "03",
    name: "ASH",
    garment: "Grey",
    tee: "#92928E",
    campaignImage: "/images/hero-campaign-ash.jpg",
  },
  {
    id: "navy",
    index: "04",
    name: "NAVY",
    garment: "Deep Blue",
    tee: "#25364B",
    campaignImage: "/images/hero-campaign-navy.jpg",
  },
  {
    id: "olive",
    index: "05",
    name: "OLIVE",
    garment: "Muted Olive",
    tee: "#70765D",
    campaignImage: "/images/hero-campaign-olive.jpg",
  },
];

export const THEME_ORDER: ThemeId[] = THEME_OPTIONS.map((o) => o.id);
