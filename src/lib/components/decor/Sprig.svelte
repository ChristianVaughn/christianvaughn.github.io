<script lang="ts">
  // [PLACEHOLDER] — simple sprig / leaf branch. Hand-drawn botanical
  // would feel much warmer here — swap when ready.
  type Props = {
    size?: number;
    color?: string;
    rotation?: number;
  };
  let {
    size = 40,
    color = "var(--c-secondary)",
    rotation = 0,
  }: Props = $props();
</script>

<svg
  class="sprig"
  width={size}
  height={size}
  viewBox="0 0 32 32"
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
>
  <path
    d="M16 30 Q16 18 16 6"
    fill="none"
    stroke={color}
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M16 22 Q22 19 24 14 Q19 15 16 22 Z M16 17 Q10 14 8 9 Q13 10 16 17 Z M16 12 Q22 9 24 4 Q19 5 16 12 Z"
    fill={color}
    opacity="0.85"
  />
</svg>

<style>
  .sprig {
    display: inline-block;
  }
</style>
