# Scrapbook Rework — Placeholder SVGs to Replace

The Sticker-Rework branch swaps the editorial layout for a scrapbook/sticker aesthetic. Many of the decorative SVGs are intentional **placeholders** — they get the geometry right but lack the hand-drawn warmth this style really wants. Below is the swap-out list, ranked by visual impact.

## Replace first (highest impact)

### `src/lib/components/decor/Sparkle.svelte`
- Current: clean geometric 4-point sparkle
- Wanted: hand-drawn 4-point burst with slight stroke variation, like a sketched "✦"
- Used: scattered around the character (Home), in section decor, between divider squiggles
- Effort to replace: trace an existing hand-drawn sparkle in Illustrator/Figma, export as inline SVG path, paste into the component

### `src/lib/components/decor/Star.svelte`
- Current: geometric 5-point star (outlined)
- Wanted: scribbly hand-drawn 5-point star — see `ref1.png` for the vibe (the yellow scribbled stars in the corners)
- Used: Resume section header, Portfolio header decor

### `src/lib/components/decor/Squiggle.svelte`
- Current: smooth sine-wave path
- Wanted: a wavy line with **stroke width variation** (thicker in middle, thinner at ends) — true hand-drawn marker feel
- Used: every section Divider
- Note: easiest authentic version is to draw it in Procreate/Affinity, export SVG, replace the `<path d="...">` value

## Replace when convenient

### `src/lib/components/decor/Sprig.svelte`
- Current: a stem with three simple leaf shapes
- Wanted: a tiny botanical doodle — could be a single sprig of leaves or a flower stem with petals
- Used: About section decoration

### `src/lib/components/decor/Heart.svelte`
- Current: standard heart shape
- Wanted: a "drawn quickly with a marker" heart with slightly uneven sides
- Used: About + Home decorations

## Don't need to replace (these are CSS-based and look fine)

- `src/lib/components/decor/WashiTape.svelte` — the patterns (stripes/dots/checker) are pure CSS gradients. Authentic washi has real paper texture, but the CSS version reads convincingly as tape at small sizes. Only swap if you want PNG/SVG paper-texture tiles.
- `src/lib/components/decor/PaperCard.svelte` — pure CSS shadow + tilt. No asset needed.

## How to replace any of them

Each component takes a single `<path>` or `<svg>` body. To swap:

1. Open the component file (e.g. `Sparkle.svelte`)
2. Replace the SVG `<path d="..." />` with your new path data
3. Keep the `viewBox` and props (size/color/rotation) — these flow through automatically
4. The component's `fill={color}` or `stroke={color}` already wires palette colors in — your new path will inherit those

If you make a more complex SVG (multiple paths, groups), just keep all paths inside the `<svg>` element. The wrapping `<svg>` handles the size/rotation transform.

## Asset sources if you want to find/generate rather than draw

- **AI image gen** (Midjourney/DALL-E/Stable Diffusion): prompts like *"hand-drawn marker sparkle, simple line art, transparent background"* — then trace to vector in Illustrator
- **Open SVG libraries**: [doodle.land](https://doodle.land), [Noun Project](https://thenounproject.com) (handwritten/sketch category), [Streamline](https://streamlinehq.com) Hand-drawn set
- **Procreate / Affinity Designer / Figma** for hand-drawing your own — the most authentic but most time

## What's already shipped and working

- ✓ Palette system (4 palettes, rose-plum default) — every decor element is palette-aware
- ✓ Grid paper wrapper background (inline SVG)
- ✓ Caveat handwritten font loaded and wired into `--font-accent`
- ✓ Washi tape with 4 pattern variants (solid/stripes/dots/checker)
- ✓ PaperCard primitive (tilt, shadow, optional washi tape)
- ✓ Home rebuilt with character + tape + sparkle decor + handwritten greeting + role-on-tape banner + sticker socials
- ✓ About rebuilt with two tilted PaperCards + scattered decor + "email for resume" sticker button
- ✓ Resume rebuilt with stacked PaperCard entries, handwritten year labels, varied tilts
- ✓ Portfolio rebuilt with PaperCards for projects, sticker filter chips, tag stickers
- ✓ Divider as squiggle + sparkle endcaps

## Verification I couldn't do (please check in the browser)

- All 4 palettes look good with the scrapbook layout (rose-sage/lavender/peach may need tilt or color tweaks)
- Mobile layout reads cleanly (the Bootstrap grid should still stack, but the decor positioning is absolute and could need media-query overrides)
- The `transform: rotate()` on cards/socials/filter-chips doesn't cause horizontal overflow on narrow viewports
