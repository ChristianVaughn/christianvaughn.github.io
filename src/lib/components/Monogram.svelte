<script lang="ts">
  type Props = {
    size?: number;
    initials?: string;
    ring?: boolean;
  };
  let { size = 400, initials = "CV", ring = false }: Props = $props();
</script>

<svg
  class="monogram"
  class:has-ring={ring}
  width={size}
  height={size}
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="{initials} monogram"
>
  <circle cx="100" cy="100" r="100" fill="var(--c-primary)" />
  <text
    x="100"
    y="100"
    text-anchor="middle"
    dominant-baseline="central"
    font-family="var(--font-heading)"
    font-weight="500"
    font-size="92"
    fill="var(--c-bg)"
    letter-spacing="-2"
  >{initials}</text>
</svg>

<style>
  .monogram {
    display: block;
    border-radius: 50%;
  }
  .has-ring {
    border: 20px solid rgba(var(--c-accent-rgb), 0.6);
    box-sizing: content-box;
  }
</style>
