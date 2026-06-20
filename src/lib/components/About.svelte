<script lang="ts">
  import profile from "../data/profile.json";
  import { reveal } from "../actions/reveal";
  import PaperCard from "./decor/PaperCard.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Sprig from "./decor/Sprig.svelte";
  import Heart from "./decor/Heart.svelte";
</script>

<section class="section about-scrap">
  <div class="about-head">
    <span class="kicker">about me</span>
    <h2 class="title">a few things about me</h2>
  </div>

  <div class="about-decor">
    <span class="d d-1">
      <Sparkle size={28} color="var(--c-secondary)" rotation={20} />
    </span>
    <span class="d d-2">
      <Sprig size={48} color="var(--c-secondary)" rotation={-25} />
    </span>
    <span class="d d-3">
      <Heart size={22} color="var(--c-primary)" rotation={15} />
    </span>
  </div>

  <div class="row align-items-stretch">
    <div
      class="col-md-6 mb-30"
      use:reveal={{ delay: 400 }}
      data-reveal="fade-right"
    >
      <PaperCard tilt={-1.5} tapeColor="var(--c-secondary)" tapePattern="dots">
        <p class="paper-text">{@html profile.about[0]}</p>
      </PaperCard>
    </div>
    <div
      class="col-md-6 mb-30"
      use:reveal={{ delay: 500 }}
      data-reveal="fade-left"
    >
      <PaperCard tilt={2} tapeColor="var(--c-primary)" tapePattern="stripes">
        <p class="paper-text">{@html profile.about[1]}</p>
        <a
          class="resume-sticker"
          href="mailto:{profile.email}?subject=Resume%20Request"
        >
          email for resume
        </a>
      </PaperCard>
    </div>
  </div>
</section>

<style>
  .about-scrap {
    position: relative;
  }

  .about-head {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .kicker {
    font-family: var(--font-accent);
    color: var(--c-primary);
    font-size: 1.5rem;
    line-height: 1;
    display: inline-block;
    transform: rotate(-3deg);
  }
  .title {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--c-heading);
    margin: 0.25rem 0 0;
  }

  .about-decor {
    position: relative;
  }
  .d {
    position: absolute;
    pointer-events: none;
    z-index: 0;
  }
  .d-1 {
    top: 20px;
    left: 0;
  }
  .d-2 {
    top: 60px;
    right: 4%;
  }
  .d-3 {
    bottom: -10px;
    left: 45%;
  }

  .paper-text {
    font-family: var(--font-body);
    color: var(--c-body);
    line-height: 1.7;
    margin: 0;
  }

  /* Email-for-resume as a sticker button */
  .resume-sticker {
    display: inline-block;
    margin-top: 1.25rem;
    background: var(--c-primary);
    color: #fff !important;
    font-family: var(--font-accent);
    font-size: 1.35rem;
    line-height: 1;
    padding: 0.45rem 1.1rem 0.55rem;
    border-radius: 999px;
    text-decoration: none;
    transform: rotate(-2deg);
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.10),
      inset 0 0 0 3px #fff,
      0 0 0 4px var(--c-primary);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
  .resume-sticker:hover {
    transform: rotate(0deg) scale(1.04);
    box-shadow:
      0 6px 14px rgba(0, 0, 0, 0.14),
      inset 0 0 0 3px #fff,
      0 0 0 4px var(--c-primary);
  }
</style>
