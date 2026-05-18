export type PaletteId = "rose-plum" | "rose-sage" | "rose-lavender" | "rose-peach";

export interface Palette {
  id: PaletteId;
  label: string;
  blurb: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    heading: string;
    body: string;
    bg: string;
    bgSoft: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

export const palettes: Record<PaletteId, Palette> = {
  "rose-plum": {
    id: "rose-plum",
    label: "Rose & Plum",
    blurb: "Editorial. Warm cream, dusty rose, plum-navy.",
    colors: {
      primary: "#c97b8a",
      secondary: "#4a3b5c",
      accent: "#e8a598",
      heading: "#4a3b5c",
      body: "#5c4a52",
      bg: "#faf6f4",
      bgSoft: "#f3e9e6",
      muted: "#d9c9c4",
    },
    fonts: {
      heading: "'Fraunces', Georgia, serif",
      body: "'Poppins', sans-serif",
    },
  },
  "rose-sage": {
    id: "rose-sage",
    label: "Rose & Sage",
    blurb: "Cottage / garden. Ivory cream, rose, muted sage.",
    colors: {
      primary: "#c97b8a",
      secondary: "#8fa789",
      accent: "#e8c5b4",
      heading: "#3d3a36",
      body: "#4a4540",
      bg: "#faf7f3",
      bgSoft: "#ede5d9",
      muted: "#c9bfb2",
    },
    fonts: {
      heading: "'DM Serif Display', Georgia, serif",
      body: "'Poppins', sans-serif",
    },
  },
  "rose-lavender": {
    id: "rose-lavender",
    label: "Rose & Lavender",
    blurb: "Dreamy / soft cute. Barely-pink cream, rose, muted lavender.",
    colors: {
      primary: "#d49aa9",
      secondary: "#a89bc4",
      accent: "#f4ddd6",
      heading: "#3d2e5c",
      body: "#5a4d63",
      bg: "#fdf9f7",
      bgSoft: "#f4ddd6",
      muted: "#d6c8df",
    },
    fonts: {
      heading: "'Quicksand', sans-serif",
      body: "'Quicksand', sans-serif",
    },
  },
  "rose-peach": {
    id: "rose-peach",
    label: "Rose & Peach",
    blurb: "Sunset. Warm ivory, rose, kept-peach.",
    colors: {
      primary: "#c97b8a",
      secondary: "#f6ab65",
      accent: "#f4c5b8",
      heading: "#4a3b5c",
      body: "#5c4a52",
      bg: "#fef9f5",
      bgSoft: "#fbe5d4",
      muted: "#e8c9b3",
    },
    fonts: {
      heading: "'Fraunces', Georgia, serif",
      body: "'Poppins', sans-serif",
    },
  },
};

export const paletteIds = Object.keys(palettes) as PaletteId[];

export const DEFAULT_PALETTE: PaletteId = "rose-plum";

export function isPaletteId(value: unknown): value is PaletteId {
  return typeof value === "string" && value in palettes;
}
