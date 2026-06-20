<script lang="ts">
  // [PLACEHOLDER] — 5-point star outline (hand-drawn scribble style would
  // be ideal). Swap for hand-drawn SVG when ready.
  type Props = {
    size?: number;
    color?: string;
    rotation?: number;
    filled?: boolean;
  };
  let {
    size = 32,
    color = "var(--c-primary)",
    rotation = 0,
    filled = false,
  }: Props = $props();
</script>

<svg
  class="star"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
>
  <path
    d="M12 2 L14.5 8.5 L21.5 9 L16 13.5 L18 20.5 L12 16.5 L6 20.5 L8 13.5 L2.5 9 L9.5 8.5 Z"
    fill={filled ? color : "none"}
    stroke={color}
    stroke-width="1.5"
    stroke-linejoin="round"
  />
</svg>

<style>
  .star {
    display: inline-block;
  }
</style>
