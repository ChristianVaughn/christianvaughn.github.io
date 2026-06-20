<script lang="ts">
  import resume from "../data/resume.json";
  import { reveal } from "../actions/reveal";
  import PaperCard from "./decor/PaperCard.svelte";
  import SectionHeader from "./decor/SectionHeader.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Star from "./decor/Star.svelte";

  // Vary tilts slightly per entry so the stack feels hand-arranged
  const tilts = [-1.5, 1.2, -0.8, 1.5, -1.2, 0.8];

  function tiltFor(i: number) {
    return tilts[i % tilts.length] ?? 0;
  }
</script>

<section class="section resume-scrap">
  <SectionHeader
    title="resume"
    kicker="where i've been"
    tapeColor="var(--c-primary)"
    tapePattern="checker"
    tilt={-1.5}
  />

  <div class="row">
    <!-- Work History column -->
    <div class="col-md-6 mb-30">
      <div class="col-head">
        <i class="bx bx-briefcase me-2" aria-hidden="true"></i>
        <h3 class="col-title">Work History</h3>
        <span class="decor-icon">
          <Sparkle size={44} color="pink" variant={2} rotation={12} />
        </span>
      </div>

      <div class="entries">
        {#each resume.workingHistory as item, idx (item.title + idx)}
          <div
            class="entry"
            use:reveal={{ delay: 400 + idx * 50, duration: 300 }}
            data-reveal="fade-up"
          >
            <PaperCard
              tilt={tiltFor(idx)}
              tape={idx === 0}
              tapeColor="var(--c-primary)"
              tapePattern="stripes"
              padding="1.25rem 1.5rem"
            >
              <h6 class="entry-title">{item.title}</h6>
              <span class="entry-year">{item.year}</span>
              {#if item.text}
                <p class="entry-text">{item.text}</p>
              {/if}
            </PaperCard>
          </div>
        {/each}
      </div>
    </div>

    <!-- Education column -->
    <div class="col-md-6 mb-30">
      <div class="col-head">
        <i class="bx bxs-graduation me-2" aria-hidden="true"></i>
        <h3 class="col-title">Education History</h3>
        <span class="decor-icon">
          <Star size={44} color="purple" variant={1} rotation={-12} />
        </span>
      </div>

      <div class="entries">
        {#each resume.educationHistory as item, idx (item.title + idx)}
          <div
            class="entry"
            use:reveal={{ delay: 400 + idx * 50, duration: 300 }}
            data-reveal="fade-up"
          >
            <PaperCard
              tilt={tiltFor(idx + 3)}
              tape={idx === 0}
              tapeColor="var(--c-secondary)"
              tapePattern="dots"
              padding="1.25rem 1.5rem"
            >
              <h6 class="entry-title">{item.title}</h6>
              <span class="entry-year">{item.year}</span>
              {#if item.text}
                <p class="entry-text">{item.text}</p>
              {/if}
            </PaperCard>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .resume-scrap {
    position: relative;
  }

  .col-head {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    color: var(--c-heading);
    position: relative;
  }
  .col-head i {
    color: var(--c-primary);
    font-size: 1.5rem;
  }
  .col-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    margin: 0;
    color: var(--c-heading);
  }
  .decor-icon {
    margin-left: 0.5rem;
  }

  .entries {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 0 0.5rem;
  }
  .entry-title {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 600;
    color: var(--c-heading);
    margin: 0 0 0.15rem;
  }
  .entry-year {
    font-family: var(--font-accent);
    font-size: 1.25rem;
    line-height: 1;
    color: var(--c-primary);
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  .entry-text {
    font-family: var(--font-body);
    font-size: 0.92rem;
    color: var(--c-body);
    margin: 0;
    line-height: 1.6;
  }
</style>
