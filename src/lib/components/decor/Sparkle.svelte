<script lang="ts">
  // Hand-drawn crayon-style sparkle (rendered as a diamond shape).
  // Uses PNG assets at /images/{color}_diamond{variant}.png.
  // Each asset was drawn at slight natural angles, so the rotation prop
  // adds *on top of* the baked-in angle of the chosen variant.
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
  class="sparkle"
  src="/images/{color}_diamond{variant}.png"
  alt=""
  width={size}
  height={size}
  style="transform: rotate({rotation}deg)"
  aria-hidden="true"
  loading="lazy"
/>

<style>
  .sparkle {
    display: inline-block;
    object-fit: contain;
  }
</style>
