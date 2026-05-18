<script lang="ts">
  import portfolio from "../data/portfolio.json";
  import { reveal } from "../actions/reveal";
  import { flip } from "svelte/animate";

  let filterKey = $state("all");
  const visible = $derived(
    filterKey === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.groups.includes(filterKey)),
  );
</script>

<section class="section pt-80">
  <div class="container">
    <div class="section-title style-2">
      <h2 class="h3">Portfolio</h2>
    </div>

    <div class="work-list" use:reveal={{ delay: 400 }} data-reveal="fade">
      <ul class="work-nav filters list-unstyled">
        {#each portfolio.filters as f (f.key)}
          <li class:filtr-active={filterKey === f.key.toLowerCase()}>
            <button
              type="button"
              class="control"
              onclick={() => (filterKey = f.key.toLowerCase())}
            >
              {f.text}
            </button>
          </li>
        {/each}
      </ul>

      <ul class="project-list list-unstyled mb-0">
        {#each visible as item (item.title)}
          <li class="project-row" animate:flip={{ duration: 300 }}>
            {#if item.link}
              <a
                class="project-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="project-main">
                  <h5 class="project-title mb-1 text-uppercase">
                    {item.title}
                  </h5>
                  {#if item.description}
                    <p class="project-desc mb-1 fs-13 text-muted">
                      {item.description}
                    </p>
                  {/if}
                  <div class="project-tags">
                    {#each item.tags as tag (tag)}
                      <span
                        class="badge me-2 text-orange text-uppercase fs-12 fw-normal bg-soft-orange"
                      >
                        {tag}
                      </span>
                    {/each}
                  </div>
                </div>
                <i
                  class="bx bx-link-external theme-color project-arrow fs-22"
                  aria-hidden="true"
                ></i>
                <span class="visually-hidden">{item.altLink}</span>
              </a>
            {:else}
              <div class="project-link is-static">
                <div class="project-main">
                  <h5 class="project-title mb-1 text-uppercase">
                    {item.title}
                  </h5>
                  {#if item.description}
                    <p class="project-desc mb-1 fs-13 text-muted">
                      {item.description}
                    </p>
                  {/if}
                  <div class="project-tags">
                    {#each item.tags as tag (tag)}
                      <span
                        class="badge me-2 text-orange text-uppercase fs-12 fw-normal bg-soft-orange"
                      >
                        {tag}
                      </span>
                    {/each}
                  </div>
                </div>
                <span class="project-status fs-13 text-muted">
                  {item.altLink}
                </span>
              </div>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<style>
  :global(.work-nav .control) {
    background: none;
    border: 0;
    padding: 0;
    color: inherit;
    font: inherit;
    cursor: pointer;
  }

  .project-list {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2.5rem;
  }
  @media (min-width: 992px) {
    .project-list {
      grid-template-columns: 1fr 1fr;
    }
  }
  .project-row {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  .project-link {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
    color: inherit;
    text-decoration: none;
    transition: background-color 0.15s ease;
  }
  .project-link:not(.is-static):hover {
    background-color: rgba(var(--c-primary-rgb, 246, 171, 101), 0.08);
  }
  .project-main {
    flex: 1;
    min-width: 0;
  }
  .project-title {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .project-desc {
    line-height: 1.5;
  }
  .project-tags {
    margin-top: 0.5rem;
    line-height: 1.8;
  }
  .project-arrow {
    flex-shrink: 0;
    opacity: 0.6;
    margin-top: 0.15rem;
    transition:
      opacity 0.15s ease,
      transform 0.15s ease;
  }
  .project-link:hover .project-arrow {
    opacity: 1;
    transform: translate(2px, -2px);
  }
  .project-status {
    flex-shrink: 0;
    font-style: italic;
    margin-top: 0.15rem;
  }

  :global(.visually-hidden) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
