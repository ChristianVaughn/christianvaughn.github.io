# GitHub Profile README — Template

This is the markdown skeleton for your GitHub profile README, built to use the 10 rendered scrapbook assets from `npm run readme:render`.

---

## How to use this

1. **Render the assets** if you haven't already:
   ```bash
   npm run readme:render
   ```
   This produces 10 PNGs in `/readme-assets/`:

   | File | What it is |
   |---|---|
   | `header.png` | Main banner — "Hello, I'm Christian Vaughn" with decorations |
   | `tape-about.png` | Section tape band — "a few things / about me" |
   | `about-card.png` | Paper card with the about-me blurb baked in |
   | `tape-building.png` | Section tape band — "lately / currently building" |
   | `project-1.png` | Paper card — Cv Bladers Ranked |
   | `project-2.png` | Paper card — Unggoy.xyz |
   | `project-3.png` | Paper card — Unggoy API |
   | `tape-findme.png` | Section tape band — "say hi / find me" |
   | `findme-card.png` | Paper card with email / github / linkedin / location |
   | `footer.png` | Decoration row with copyright sticky-note |

2. **Create your GitHub profile repo** (a special repo named the same as your username, e.g. `ChristianVaughn/ChristianVaughn`). A README.md in that repo's root renders on your profile page.

3. **Commit the asset PNGs** into the profile repo under `assets/`. The path doesn't matter, just make sure the markdown image references match.

4. **Copy the markdown below** into the profile repo's `README.md`. Edit the project links if you ever change which projects are featured.

5. **Iterating**: change `Header.svelte`, `ProjectCard.svelte`, `AboutCard.svelte`, etc. → re-run `npm run readme:render` → re-commit the new PNGs.

---

## Markdown skeleton (copy this into your profile README.md)

```markdown
<img src="assets/header.png" alt="Hello, I'm Christian Vaughn" width="820" />

<br/>

<img src="assets/tape-about.png" alt="A few things about me" width="280" />

<img src="assets/about-card.png" alt="About blurb" width="700" />

<br/>

<img src="assets/tape-building.png" alt="Currently building" width="280" />

[<img src="assets/project-1.png" alt="Cv Bladers Ranked" width="480" />](https://www.cvbladers.com)

[<img src="assets/project-2.png" alt="Unggoy.xyz" width="480" />](https://www.unggoy.xyz)

[<img src="assets/project-3.png" alt="Unggoy API" width="480" />](https://github.com/Unggoy1/unggoy-api)

<br/>

<img src="assets/tape-findme.png" alt="Find me" width="220" />

<img src="assets/findme-card.png" alt="Contact info" width="540" />

- 📫 [contact@christianvaughn.net](mailto:contact@christianvaughn.net)
- 💻 [Portfolio](https://christianvaughn.net)
- 💻 [GitHub](https://github.com/ChristianVaughn)
- 💼 [LinkedIn](https://www.linkedin.com/in/christian-vaughn-3a29bb23b/)

<br/>

<img src="assets/footer.png" alt="" width="800" />
```

---

## Notes on the markdown choices

- **Image widths** — source PNGs are rendered at 2× (retina), so they're ~1500-2000 physical pixels. Setting an explicit display width prevents them from overwhelming the README. The values below are a comfortable rhythm:
  - Header banner: `820`
  - Tape headings: `220-280`
  - About card: `700`
  - Project cards: `480`
  - Find-me card: `540`
  - Footer: `800`

- **Project cards are wrapped in markdown links** — `[<img ... />](url)` makes the entire project card image clickable. Click the card, go to the project.

- **Find-me card is decorative** — the actual clickable contact links are markdown bullets below. The card shows the same info visually but you can't click inside a PNG, so the bullets provide the real interaction.

- **`<br/>` between blocks** — markdown collapses blank lines into a single paragraph break. Explicit `<br/>` adds breathing room between sections.

- **No CSS, no JS** — GitHub strips all of that. Tilts and shadows are baked into the PNGs themselves.

## Limitations

- **Static snapshot** — palette switcher, hover effects, animations don't transfer. The README is rose-plum only (whatever palette was active when you rendered).
- **Light/dark mode** — the assets have cream baked in, so they look the same against either GitHub theme. Some viewers on dark mode may find cream slightly bright; produce dark-mode variants if you ever want that.
- **Asset size** — the 10 PNGs total ~400-500 KB. Reasonable for a profile README. Add more cautiously.
- **Selectable text** — text baked into PNG isn't selectable, searchable, or screenreader-friendly. The `alt` attributes provide accessibility fallbacks.
