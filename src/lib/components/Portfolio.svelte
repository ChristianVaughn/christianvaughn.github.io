<script lang="ts">
  import portfolio from "../data/portfolio.json";
  import { reveal } from "../actions/reveal";
  import { flip } from "svelte/animate";
  import PaperCard from "./decor/PaperCard.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Star from "./decor/Star.svelte";

  let filterKey = $state("all");
  const visible = $derived(
    filterKey === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.groups.includes(filterKey)),
  );

  const tilts = [-1.5, 1.2, -0.8, 1.5, -1, 0.8, -1.8, 1];

  function tiltFor(i: number) {
    return tilts[i % tilts.length] ?? 0;
  }
</script>

<section class="section portfolio-scrap">
  <div class="portfolio-head">
    <span class="kicker">stuff i've built</span>
    <h2 class="title">portfolio</h2>
    <span class="head-decor">
      <Star size={28} color="var(--c-primary)" rotation={-10} />
    </span>
  </div>

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
      <div class="project-cell" animate:flip={{ duration: 300 }}>
        <PaperCard
          tilt={tiltFor(idx)}
          tape={idx % 3 === 0}
          tapeColor={idx % 2 === 0 ? "var(--c-primary)" : "var(--c-secondary)"}
          tapePattern={idx % 2 === 0 ? "stripes" : "dots"}
          padding="1.25rem 1.4rem"
        >
          <div class="project-row">
            <div class="project-main">
              {#if item.link}
                <a
                  class="project-title-link"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 class="project-title">{item.title}</h5>
                  <i
                    class="bx bx-link-external arrow"
                    aria-hidden="true"
                  ></i>
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
          </div>
        </PaperCard>
      </div>
    {/each}
  </div>

  <div class="bottom-decor">
    <Sparkle size={24} color="var(--c-secondary)" rotation={20} />
  </div>
</section>

<style>
  .portfolio-scrap {
    position: relative;
  }
  .portfolio-head {
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
  }
  .kicker {
    font-family: var(--font-accent);
    color: var(--c-primary);
    font-size: 1.5rem;
    line-height: 1;
    display: inline-block;
    transform: rotate(-3deg);
  }
  .title {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--c-heading);
    margin: 0.25rem 0 0;
  }
  .head-decor {
    position: absolute;
    top: 0;
    right: 30%;
    transform: rotate(15deg);
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

  /* Project grid */
  .project-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr 1fr;
      gap: 1.75rem 2rem;
    }
  }

  .project-row {
    display: flex;
    flex-direction: column;
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
  .project-title.is-static {
    color: var(--c-heading);
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

  .bottom-decor {
    text-align: center;
    margin-top: 2rem;
  }
</style>
