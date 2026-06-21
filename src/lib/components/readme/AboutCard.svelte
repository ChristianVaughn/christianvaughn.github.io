<script lang="ts">
  import profile from "../../data/profile.json";
  import WashiTape from "../decor/WashiTape.svelte";
  import Sparkle from "../decor/Sparkle.svelte";
</script>

<div class="about-stage" data-asset="about-card">
  <div class="about-card">
    <span class="tape">
      <WashiTape
        width={150}
        height={22}
        color="var(--c-secondary)"
        pattern="dots"
        rotation={-6}
        opacity={0.85}
      />
    </span>

    <div class="paragraphs">
      <p>{@html profile.about[0]}</p>
      <p>{@html profile.about[1]}</p>
    </div>

    <span class="deco">
      <Sparkle size={36} color="purple" variant={1} rotation={20} />
    </span>
  </div>
</div>

<style>
  .about-stage {
    /* Padding gives drop shadow + decoration room outside the card. */
    padding: 40px 50px;
    display: inline-block;
  }
  .about-card {
    position: relative;
    width: 640px;
    padding: 2.5rem 3rem 2.75rem;
    background-color: var(--c-bg);
    border-radius: 8px;
    transform: rotate(-1.2deg);
    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.12),
      0 6px 14px rgba(0, 0, 0, 0.06);
    /* Inner dotted pattern to mimic the site's About page */
    background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22'><circle cx='2' cy='2' r='1.4' fill='rgba(74,59,92,0.12)'/></svg>");
    background-size: 22px 22px;
  }
  .tape {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }
  .paragraphs {
    position: relative;
    z-index: 1;
  }
  .paragraphs p {
    font-family: var(--font-body);
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--c-body);
    margin: 0 0 1.1rem;
  }
  .paragraphs p:last-child {
    margin-bottom: 0;
  }
  :global(.paragraphs strong) {
    color: var(--c-heading);
    font-weight: 700;
  }
  .deco {
    position: absolute;
    bottom: -22px;
    right: -16px;
    z-index: 3;
    pointer-events: none;
  }
</style>
