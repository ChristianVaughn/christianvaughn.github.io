<script lang="ts">
  import { scrollspy } from "../actions/scrollspy";

  type Nav = { hash: string; icon: string; text: string };
  type Props = { navs: Nav[] };
  let { navs }: Props = $props();

  let activeId = $state("");

  // Slight per-item tilt so the cluster reads as casually-placed stickers
  const tilts = [-6, 4, -3, 5];

  function go(id: string) {
    return (e: MouseEvent) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  }
</script>

<svelte:body
  use:scrollspy={{
    ids: navs.map((n) => n.hash),
    onActive: (id) => (activeId = id),
  }}
/>

<nav class="floating-nav" aria-label="Section navigation">
  {#each navs as item, idx (item.hash)}
    {@const isActive = activeId === item.hash}
    <a
      href="#{item.hash}"
      class="sticker"
      class:active={isActive}
      style="--tilt: {tilts[idx % tilts.length]}deg"
      onclick={go(item.hash)}
      aria-label={item.text}
      aria-current={isActive ? "page" : undefined}
    >
      <i class={item.icon} aria-hidden="true"></i>
      <span class="label">{item.text}</span>
    </a>
  {/each}
</nav>

<style>
  .floating-nav {
    position: fixed;
    top: 28px;
    right: 28px;
    z-index: 50;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  /* Rounded-square sticker tabs (physical sticker shape) */
  .sticker {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: var(--c-secondary);
    text-decoration: none;
    font-size: 1.4rem;
    transform: rotate(var(--tilt));
    box-shadow:
      0 0 0 3px var(--c-primary),
      0 0 0 5px #fff,
      0 6px 14px rgba(0, 0, 0, 0.12);
    transition:
      transform 0.2s ease,
      background 0.2s ease,
      color 0.2s ease;
  }

  .sticker:hover {
    transform: rotate(0deg) scale(1.06);
    color: var(--c-primary);
  }

  .sticker.active {
    background: var(--c-primary);
    color: #fff;
    transform: rotate(0deg) scale(1.04);
  }

  .label {
    position: absolute;
    right: calc(100% + 14px);
    top: 50%;
    transform: translateY(-50%) rotate(-2deg);
    background: var(--c-bg);
    color: var(--c-heading);
    font-family: var(--font-accent);
    font-size: 1.25rem;
    line-height: 1;
    padding: 4px 12px 6px;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.10);
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.15s ease;
  }
  .sticker:hover .label,
  .sticker.active .label {
    opacity: 1;
  }

  /* Mobile: smaller stickers, no labels (icon-only) */
  @media (max-width: 575.98px) {
    .floating-nav {
      top: 16px;
      right: 16px;
      gap: 10px;
    }
    .sticker {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      font-size: 1.1rem;
      box-shadow:
        0 0 0 2px var(--c-primary),
        0 0 0 4px #fff,
        0 4px 10px rgba(0, 0, 0, 0.12);
    }
    .label {
      display: none;
    }
  }
</style>
