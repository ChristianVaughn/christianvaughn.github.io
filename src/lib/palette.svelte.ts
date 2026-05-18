import { DEFAULT_PALETTE, isPaletteId, palettes, type PaletteId } from "./palettes";

const STORAGE_KEY = "palette";
const isDev = import.meta.env.DEV;

function readInitial(): PaletteId {
  if (isDev && typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isPaletteId(stored)) return stored;
  }
  const fromEnv = import.meta.env.VITE_PALETTE;
  if (isPaletteId(fromEnv)) return fromEnv;
  return DEFAULT_PALETTE;
}

const initial = readInitial();
let current = $state<PaletteId>(initial);

function apply(id: PaletteId) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.palette = id;
}

apply(initial);

export const paletteState = {
  get current() {
    return current;
  },
  get palette() {
    return palettes[current];
  },
  set(id: PaletteId) {
    current = id;
    apply(id);
    if (isDev && typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, id);
    }
  },
};
