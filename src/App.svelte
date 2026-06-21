<script lang="ts">
  import FloatingNav from "./lib/components/FloatingNav.svelte";
  import Home from "./lib/components/Home.svelte";
  import About from "./lib/components/About.svelte";
  import Resume from "./lib/components/Resume.svelte";
  import Portfolio from "./lib/components/Portfolio.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import PaletteSwitcher from "./lib/components/PaletteSwitcher.svelte";
  import PaperPage from "./lib/components/decor/PaperPage.svelte";
  import ReadmeAssets from "./lib/components/readme/ReadmeAssets.svelte";

  const isDev = import.meta.env.DEV;

  // Render the README asset board when /?readme=1 is in the URL. Used by
  // scripts/render-readme-assets.mjs to screenshot each asset for the
  // GitHub profile README.
  const isReadme =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("readme");

  const navs = [
    { hash: "about", icon: "bx bx-user", text: "About" },
    { hash: "resume", icon: "bx bx-book-open", text: "Resume" },
    { hash: "portfolio", icon: "bx bx-palette", text: "Portfolio" },
  ];
</script>

{#if isReadme}
  <ReadmeAssets />
{:else}

<FloatingNav {navs} />

<div class="wrapper box-wrapper theme-soft-bg">
  <div class="container position-relative">
    <main class="pages-stack">
      <!-- Page 1 — About (hero + about copy, one continuous page) -->
      <PaperPage tilt={-1.8} pattern="dotted" headerBg="var(--c-primary)">
        <section id="about">
          <Home />
          <About />
        </section>
      </PaperPage>

      <!-- Page 2 — Resume -->
      <PaperPage tilt={1.5} pattern="lined" headerBg="var(--c-primary)">
        <section id="resume">
          <Resume />
        </section>
      </PaperPage>

      <!-- Page 3 — Portfolio -->
      <PaperPage tilt={-1.5} pattern="grid" headerBg="var(--c-primary)">
        <section id="portfolio">
          <Portfolio />
        </section>
      </PaperPage>
    </main>
    <Footer />
  </div>
</div>

{#if isDev}
  <PaletteSwitcher />
{/if}
{/if}

<style>
  .pages-stack {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 2rem;
  }
</style>
