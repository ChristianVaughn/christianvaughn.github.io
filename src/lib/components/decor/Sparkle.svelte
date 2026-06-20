<script lang="ts">
  // [PLACEHOLDER] — 4-point sparkle. Swap for a hand-drawn version when ready.
  type Props = {
    size?: number;
    color?: string;
    rotation?: number;
  };
  let {
    size = 32,
    color = "var(--c-primary)",
    rotation = 0,
  }: Props = $props();
</script>

<svg
  class="sparkle"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
>
  <path
    d="M12 2 C12.4 8 13.6 9.5 22 12 C13.6 14.5 12.4 16 12 22 C11.6 16 10.4 14.5 2 12 C10.4 9.5 11.6 8 12 2 Z"
    fill={color}
  />
</svg>

<style>
  .sparkle {
    display: inline-block;
  }
</style>
