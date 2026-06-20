<script lang="ts">
  // Hand-drawn crayon-style heart. Uses PNG assets at
  // /images/{color}_heart{variant}.png. The assets were drawn at slight
  // natural angles; rotation prop adds on top.
  type Color = "pink" | "purple";
  type Variant = 1 | 2;
  type Props = {
    size?: number;
    color?: Color;
    variant?: Variant;
    rotation?: number;
  };
  let {
    size = 32,
    color = "pink",
    variant = 1,
    rotation = 0,
  }: Props = $props();
</script>

<img
  class="heart"
  src="/images/{color}_heart{variant}.png"
  alt=""
  width={size}
  height={size}
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
  loading="lazy"
/>

<style>
  .heart {
    display: inline-block;
    object-fit: contain;
  }
</style>
