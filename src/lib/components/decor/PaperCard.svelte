<script lang="ts">
  import WashiTape from "./WashiTape.svelte";

  // A tilted paper card with soft shadow, optional washi tape "holding"
  // it to the page. Use as the wrapper for content blocks in the
  // scrapbook layout.
  type Props = {
    tilt?: number;
    bg?: string;
    tape?: boolean;
    tapeColor?: string;
    tapePattern?: "solid" | "stripes" | "dots" | "checker";
    padding?: string;
    children?: import("svelte").Snippet;
  };
  let {
    tilt = -1.5,
    bg = "var(--c-bg)",
    tape = true,
    tapeColor = "var(--c-secondary)",
    tapePattern = "stripes",
    padding = "2rem",
    children,
  }: Props = $props();
</script>

<div
  class="paper-card"
  style="
    --tilt: {tilt}deg;
    --bg: {bg};
    --padding: {padding};
  "
>
  {#if tape}
    <span class="tape-slot">
      <WashiTape
        width={120}
        height={24}
        color={tapeColor}
        pattern={tapePattern}
        rotation={-6}
        opacity={0.75}
      />
    </span>
  {/if}
  <div class="paper-inner">
    {@render children?.()}
  </div>
</div>

<style>
  .paper-card {
    position: relative;
    display: block;
    background-color: var(--bg);
    padding: var(--padding);
    border-radius: 6px;
    transform: rotate(var(--tilt));
    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.08),
      0 2px 6px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
  }
  .paper-card:hover {
    transform: rotate(calc(var(--tilt) * 0.4));
  }

  .tape-slot {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }

  .paper-inner {
    position: relative;
    z-index: 1;
  }
</style>
