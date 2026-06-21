<script lang="ts">
  import Header from "./Header.svelte";
  import SectionTape from "./SectionTape.svelte";
  import AboutCard from "./AboutCard.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import FindMeCard from "./FindMeCard.svelte";
  import FooterRow from "./FooterRow.svelte";
</script>

<!--
  Page that renders every README asset for the Playwright screenshot
  script. Each asset has a [data-asset="..."] attribute on its outer
  stage div; the script targets those for individual exports.
  Open via `?readme=1` query string.
-->
<div class="assets-page">
  <Header />

  <SectionTape title="about me" kicker="a few things" asset="tape-about" />
  <AboutCard />

  <SectionTape
    title="currently building"
    kicker="lately"
    asset="tape-building"
  />

  <ProjectCard
    asset="project-1"
    title="Cv Bladers Ranked"
    description="Ranked leaderboard and stats site for the Beyblade X community."
    tags={["SvelteKit", "TypeScript", "Bun"]}
    tape="primary"
    tilt={-1.8}
  />
  <ProjectCard
    asset="project-2"
    title="Unggoy.xyz"
    description="Community hub for Halo Infinite custom maps and modes."
    tags={["SvelteKit", "TypeScript", "Bun"]}
    tape="secondary"
    tilt={1.5}
  />
  <ProjectCard
    asset="project-3"
    title="Unggoy API"
    description="Type-safe ElysiaJS backend powering Unggoy.xyz."
    tags={["ElysiaJS", "TypeScript", "Bun"]}
    tape="primary"
    tilt={-1.2}
  />

  <SectionTape title="find me" kicker="say hi" asset="tape-findme" />
  <FindMeCard />

  <FooterRow />
</div>

<style>
  .assets-page {
    /* Each asset rendered on its own row for visual review.
       Playwright targets [data-asset] elements individually. */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2.5rem;
    background: var(--c-bg-soft);
    min-height: 100vh;
  }
</style>
