<script lang="ts">
  // Washi tape strip — a translucent paper-tape decoration. Use to "hold
  // down" cards, character stickers, section headings, etc.
  //
  // The pattern variants are simple CSS gradients. For more authentic
  // texture, swap the .pattern-* classes with PNG/SVG textures later.
  type Pattern = "solid" | "stripes" | "dots" | "checker";
  type Props = {
    width?: number;
    height?: number;
    color?: string;
    pattern?: Pattern;
    rotation?: number;
    opacity?: number;
  };
  let {
    width = 160,
    height = 28,
    color = "var(--c-primary)",
    pattern = "stripes",
    rotation = 0,
    opacity = 0.7,
  }: Props = $props();
</script>

<span
  class="washi pattern-{pattern}"
  style="
    --w: {width}px;
    --h: {height}px;
    --c: {color};
    --o: {opacity};
    transform: rotate({rotation}deg);
  "
  aria-hidden="true"
></span>

<style>
  .washi {
    display: inline-block;
    width: var(--w);
    height: var(--h);
    background-color: var(--c);
    opacity: var(--o);
    box-shadow:
      0 2px 6px rgba(0, 0, 0, 0.08),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15);
    pointer-events: none;
  }

  .pattern-stripes {
    background-image: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18) 0 6px,
      transparent 6px 12px
    );
  }

  .pattern-dots {
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.3) 1.5px,
      transparent 2px
    );
    background-size: 8px 8px;
  }

  .pattern-checker {
    background-image:
      linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.18) 25%,
        transparent 25%,
        transparent 75%,
        rgba(255, 255, 255, 0.18) 75%
      ),
      linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.18) 25%,
        transparent 25%,
        transparent 75%,
        rgba(255, 255, 255, 0.18) 75%
      );
    background-size: 10px 10px;
    background-position:
      0 0,
      5px 5px;
  }
</style>
