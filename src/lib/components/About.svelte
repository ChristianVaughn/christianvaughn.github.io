<script lang="ts">
  import profile from "../data/profile.json";
  import { reveal } from "../actions/reveal";
  import PaperCard from "./decor/PaperCard.svelte";
  import SectionHeader from "./decor/SectionHeader.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Sprig from "./decor/Sprig.svelte";
  import Heart from "./decor/Heart.svelte";
</script>

<section class="section about-scrap">
  <SectionHeader
    title="about me"
    kicker="a few things"
    tapeColor="var(--c-secondary)"
    tapePattern="dots"
    tilt={1.5}
  />

  <span class="post-header-heart" aria-hidden="true">
    <Heart size={48} color="pink" variant={1} rotation={15} />
  </span>

  <div class="about-decor">
    <span class="d d-1">
      <Sparkle size={52} color="purple" variant={1} rotation={20} />
    </span>
    <span class="d d-2">
      <Sprig size={48} color="var(--c-secondary)" rotation={-25} />
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

  /* Pink heart that lives in the gap between the "about me" tape header
     and the top of the paper cards. Pulled up via negative margin into
     the SectionHeader's bottom space, offset left of center. */
  .post-header-heart {
    display: block;
    width: max-content;
    margin: -2.75rem 0 0.5rem 33%;
    position: relative;
    z-index: 1;
    pointer-events: none;
  }
  @media (max-width: 575.98px) {
    .post-header-heart {
      margin-left: 18%;
    }
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
