<script lang="ts">
  import FloatingNav from "./lib/components/FloatingNav.svelte";
  import Home from "./lib/components/Home.svelte";
  import About from "./lib/components/About.svelte";
  import Resume from "./lib/components/Resume.svelte";
  import Portfolio from "./lib/components/Portfolio.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import PaletteSwitcher from "./lib/components/PaletteSwitcher.svelte";
  import PaperPage from "./lib/components/decor/PaperPage.svelte";
  import Sparkle from "./lib/components/decor/Sparkle.svelte";
  import Star from "./lib/components/decor/Star.svelte";

  const isDev = import.meta.env.DEV;

  const navs = [
    { hash: "about", icon: "bx bx-user", text: "About" },
    { hash: "resume", icon: "bx bx-book-open", text: "Resume" },
    { hash: "portfolio", icon: "bx bx-palette", text: "Portfolio" },
  ];
</script>

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

      <!-- Peek decoration between pages -->
      <div class="page-peek peek-1" aria-hidden="true">
        <Sparkle size={24} color="var(--c-primary)" rotation={20} />
      </div>

      <!-- Page 2 — Resume -->
      <PaperPage tilt={1.5} pattern="lined" headerBg="var(--c-primary)">
        <section id="resume">
          <Resume />
        </section>
      </PaperPage>

      <!-- Peek decoration between pages -->
      <div class="page-peek peek-2" aria-hidden="true">
        <Star size={22} color="var(--c-secondary)" rotation={-15} />
      </div>

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

<style>
  .pages-stack {
    display: flex;
    flex-direction: column;
    gap: 0; /* Peek decorations provide the spacing */
    padding-bottom: 2rem;
  }

  .page-peek {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
    position: relative;
    z-index: 1;
  }
  .peek-1 {
    /* Off-center slightly to feel hand-placed */
    justify-content: center;
    padding-left: 12%;
  }
  .peek-2 {
    justify-content: center;
    padding-right: 14%;
  }
</style>
