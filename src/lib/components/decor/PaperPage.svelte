<script lang="ts">
  // A discrete "page" of the scrapbook. Each gets a thin colored notepad
  // header strip at the top, its own bg pattern, tilt, and drop shadow.
  // Section titles live INSIDE the page content (via SectionHeader) —
  // the notepad strip is purely a page-break affordance, like the
  // colored top edge on a legal pad.
  type Pattern = "grid" | "lined" | "dotted" | "hatch";
  type Props = {
    tilt?: number;
    pattern?: Pattern;
    headerBg?: string;
    children?: import("svelte").Snippet;
  };
  let {
    tilt = -1.5,
    pattern = "grid",
    headerBg = "var(--c-primary)",
    children,
  }: Props = $props();
</script>

<article
  class="paper-page pattern-{pattern}"
  style="--tilt: {tilt}deg; --header-bg: {headerBg};"
>
  <div class="page-strip" aria-hidden="true"></div>
  <div class="page-perf" aria-hidden="true"></div>
  <div class="page-inner">
    {@render children?.()}
  </div>
</article>

<style>
  .paper-page {
    position: relative;
    background-color: var(--c-bg);
    border-radius: 10px;
    transform: rotate(var(--tilt));
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.12),
      0 8px 16px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  /* Notepad strip — colored band at the very top */
  .page-strip {
    height: 50px;
    background-color: var(--header-bg);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  }

  /* Dashed perforation immediately below the strip */
  .page-perf {
    height: 0;
    border-bottom: 2px dashed rgba(0, 0, 0, 0.15);
  }

  .page-inner {
    padding: 3.5rem 3rem 4rem;
  }

  /* Patterns apply to the inner content area only */
  .pattern-grid .page-inner {
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22'><path d='M22 0 L0 0 L0 22' fill='none' stroke='rgba(74,59,92,0.08)' stroke-width='1'/></svg>");
    background-size: 22px 22px;
  }

  .pattern-lined .page-inner {
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='28'><line x1='0' y1='27' x2='100' y2='27' stroke='rgba(74,59,92,0.10)' stroke-width='1'/></svg>");
    background-size: 100% 28px;
  }

  .pattern-dotted .page-inner {
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22'><circle cx='2' cy='2' r='1.4' fill='rgba(74,59,92,0.16)'/></svg>");
    background-size: 22px 22px;
  }

  /* Diagonal hatch — visually distinct from the outer grid, used on
     Portfolio so the page doesn't blend with the wrapper backdrop. */
  .pattern-hatch .page-inner {
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'><line x1='-1' y1='19' x2='19' y2='-1' stroke='rgba(74,59,92,0.10)' stroke-width='1'/></svg>");
    background-size: 18px 18px;
  }

  /* ============================================================ */
  /* Mobile — kill tilt, reduce padding                            */
  /* ============================================================ */
  @media (max-width: 767.98px) {
    .paper-page {
      transform: none;
      border-radius: 8px;
    }
    .page-strip {
      height: 36px;
    }
    .page-inner {
      padding: 2rem 1.25rem 2.5rem;
    }
  }
</style>
