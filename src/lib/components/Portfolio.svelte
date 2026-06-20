<script lang="ts">
  import portfolio from "../data/portfolio.json";
  import { reveal } from "../actions/reveal";
  import { flip } from "svelte/animate";
  import PaperCard from "./decor/PaperCard.svelte";
  import SectionHeader from "./decor/SectionHeader.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Star from "./decor/Star.svelte";
  import Heart from "./decor/Heart.svelte";

  let filterKey = $state("all");
  const visible = $derived(
    filterKey === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.groups.includes(filterKey)),
  );

  const tilts = [-1.8, 1.5, -1, 1.8, -1.5, 0.9, -1.3, 1.2, -2, 1, -1.6, 1.4];
  function tiltFor(i: number) {
    return tilts[i % tilts.length] ?? 0;
  }

  // Bento pattern — index positions get featured-wide treatment
  function isWide(i: number) {
    return i % 5 === 0;
  }
</script>

<section class="section portfolio-scrap">
  <SectionHeader
    title="portfolio"
    kicker="stuff i've built"
    tapeColor="var(--c-primary)"
    tapePattern="stripes"
    tilt={-2}
  />

  <div
    class="filters-row"
    use:reveal={{ delay: 400 }}
    data-reveal="fade"
  >
    {#each portfolio.filters as f (f.key)}
      {@const isActive = filterKey === f.key.toLowerCase()}
      <button
        type="button"
        class="filter-chip"
        class:active={isActive}
        onclick={() => (filterKey = f.key.toLowerCase())}
      >
        {f.text}
      </button>
    {/each}
  </div>

  <div class="project-grid">
    {#each visible as item, idx (item.title)}
      <div
        class="project-cell"
        class:wide={isWide(idx)}
        animate:flip={{ duration: 300 }}
      >
        <PaperCard
          tilt={tiltFor(idx)}
          tape={idx % 3 === 0}
          tapeColor={idx % 2 === 0 ? "var(--c-primary)" : "var(--c-secondary)"}
          tapePattern={idx % 2 === 0 ? "stripes" : "dots"}
          padding="1.25rem 1.4rem"
        >
          <div class="project-row" class:is-featured={isWide(idx)}>
            <div class="project-main">
              {#if item.link}
                <a
                  class="project-title-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 class="project-title">{item.title}</h5>
                  <i class="bx bx-link-external arrow" aria-hidden="true"></i>
                </a>
              {:else}
                <h5 class="project-title is-static">{item.title}</h5>
              {/if}
              {#if item.description}
                <p class="project-desc">{item.description}</p>
              {/if}
              <div class="project-tags">
                {#each item.tags as tag (tag)}
                  <span class="tag-sticker">{tag}</span>
                {/each}
              </div>
              {#if !item.link && item.altLink}
                <span class="project-status">{item.altLink}</span>
              {/if}
            </div>
            {#if isWide(idx)}
              <span class="featured-deco">
                {#if idx === 0}
                  <Star size={44} color="pink" variant={1} rotation={18} />
                {:else if idx === 5}
                  <Heart size={40} color="purple" variant={2} rotation={-12} />
                {:else}
                  <Sparkle size={44} color="pink" variant={2} rotation={22} />
                {/if}
              </span>
            {/if}
          </div>
        </PaperCard>
      </div>
    {/each}
  </div>

  <div class="bottom-decor">
    <Heart size={40} color="pink" variant={1} rotation={-10} />
    <Star size={44} color="purple" variant={2} rotation={-15} />
    <Sparkle size={36} color="pink" variant={1} rotation={-30} />
  </div>
</section>

<style>
  .portfolio-scrap {
    position: relative;
  }

  /* Filter chips */
  .filters-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
    margin-bottom: 2.5rem;
  }
  .filter-chip {
    background: var(--c-bg);
    color: var(--c-body);
    border: 2px solid var(--c-muted);
    padding: 0.35rem 0.95rem;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 999px;
    cursor: pointer;
    transform: rotate(-1deg);
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }
  .filter-chip:nth-child(even) {
    transform: rotate(1deg);
  }
  .filter-chip:hover {
    border-color: var(--c-primary);
    color: var(--c-primary);
  }
  .filter-chip.active {
    background: var(--c-primary);
    color: #fff;
    border-color: var(--c-primary);
  }

  /* Bento grid */
  .project-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
    gap: 1.75rem;
  }
  @media (min-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.75rem 1.75rem;
    }
    .project-cell.wide {
      grid-column: span 2;
    }
  }
  @media (min-width: 1200px) {
    .project-grid {
      gap: 2rem 2.25rem;
    }
  }

  .project-row {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .project-row.is-featured {
    /* Featured cards get a bit more vertical breathing room */
    min-height: 100%;
  }
  .project-title-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: var(--c-heading);
  }
  .project-title-link:hover .arrow {
    transform: translate(2px, -2px);
    opacity: 1;
  }
  .project-title {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--c-heading);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .project-row.is-featured .project-title {
    font-size: 1.3rem;
  }
  .arrow {
    color: var(--c-primary);
    opacity: 0.65;
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
    font-size: 1.1rem;
  }
  .project-desc {
    font-family: var(--font-body);
    color: var(--c-body);
    font-size: 0.92rem;
    line-height: 1.55;
    margin: 0.4rem 0 0.65rem;
  }
  .project-status {
    display: inline-block;
    margin-top: 0.4rem;
    font-family: var(--font-accent);
    font-size: 1.15rem;
    color: var(--c-secondary);
  }
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.25rem;
  }
  .tag-sticker {
    display: inline-block;
    background: rgba(var(--c-primary-rgb), 0.14);
    color: var(--c-primary);
    border: 1.5px solid rgba(var(--c-primary-rgb), 0.4);
    padding: 0.15rem 0.55rem;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 999px;
    line-height: 1.4;
  }

  .featured-deco {
    position: absolute;
    top: -4px;
    right: 0;
    transform: rotate(15deg);
  }

  .bottom-decor {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
  }
</style>
