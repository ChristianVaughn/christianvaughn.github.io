<script lang="ts">
  // Hand-drawn crayon-style star. Uses PNG assets at
  // /images/{color}_star{variant}.png. The assets were drawn at slight
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
  class="star"
  src="/images/{color}_star{variant}.png"
  alt=""
  width={size}
  height={size}
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
  loading="lazy"
/>

<style>
  .star {
    display: inline-block;
    object-fit: contain;
  }
</style>
