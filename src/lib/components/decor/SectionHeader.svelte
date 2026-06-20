<script lang="ts">
  // Section header — washi-tape band with the section title on it, plus
  // an optional handwritten kicker label above. Strong visual "page break"
  // for the scrapbook layout.
  type Props = {
    title: string;
    kicker?: string;
    tapeColor?: string;
    tapePattern?: "solid" | "stripes" | "dots" | "checker";
    tilt?: number;
  };
  let {
    title,
    kicker = "",
    tapeColor = "var(--c-primary)",
    tapePattern = "stripes",
    tilt = -1.5,
  }: Props = $props();
</script>

<header
  class="section-header"
  style="
    --tape-color: {tapeColor};
    --tilt: {tilt}deg;
  "
>
  {#if kicker}
    <span class="kicker">{kicker}</span>
  {/if}
  <div class="tape-band pattern-{tapePattern}">
    <h2 class="title">{title}</h2>
  </div>
</header>

<style>
  .section-header {
    text-align: center;
    margin-bottom: 2.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Kicker is the dominant handwritten voice — it's the "human" speaking.
     Sits big and tilted, slightly overlapping the tape band so they read
     as a single hand-arranged unit instead of two stacked rows. */
  .kicker {
    font-family: var(--font-accent);
    color: var(--c-primary);
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1;
    display: inline-block;
    transform: rotate(-5deg);
    margin: 0 0 0.3rem -1.5rem;
    position: relative;
    z-index: 2;
  }

  .tape-band {
    display: inline-block;
    background-color: var(--tape-color);
    padding: 0.55rem 2.2rem;
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.12),
      inset 0 0 0 1px rgba(255, 255, 255, 0.18);
    transform: rotate(var(--tilt));
    opacity: 0.95;
    position: relative;
    z-index: 1;
    margin-right: -1rem;
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

  .title {
    font-family: var(--font-heading);
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    text-transform: lowercase;
    letter-spacing: 0.04em;
    line-height: 1.1;
  }

  @media (max-width: 575.98px) {
    .kicker {
      font-size: 2.2rem;
      margin-left: -0.5rem;
    }
    .tape-band {
      padding: 0.5rem 1.5rem;
    }
    .title {
      font-size: 1.4rem;
    }
  }
</style>
