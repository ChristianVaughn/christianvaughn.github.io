<script lang="ts">
  // [PLACEHOLDER] — heart shape. Swap for a hand-drawn squiggle heart later.
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
    filled = true,
  }: Props = $props();
</script>

<svg
  class="heart"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
>
  <path
    d="M12 21 C12 21 3 14 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 12 4.5 12 6.5 C12 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 14 12 21 12 21 Z"
    fill={filled ? color : "none"}
    stroke={color}
    stroke-width="1.5"
  />
</svg>

<style>
  .heart {
    display: inline-block;
  }
</style>
