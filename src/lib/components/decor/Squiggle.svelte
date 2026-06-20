<script lang="ts">
  // [PLACEHOLDER] — wavy hand-drawn-feeling line. A real hand-drawn version
  // would have stroke variation (thick/thin). Swap when ready.
  type Props = {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
  };
  let {
    width = 200,
    height = 24,
    color = "var(--c-primary)",
    strokeWidth = 2.5,
  }: Props = $props();
</script>

<svg
  class="squiggle"
  {width}
  {height}
  viewBox="0 0 200 24"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <path
    d="M2 12 Q14 2, 26 12 T 50 12 T 74 12 T 98 12 T 122 12 T 146 12 T 170 12 T 198 12"
    fill="none"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
  />
</svg>

<style>
  .squiggle {
    display: block;
  }
</style>
