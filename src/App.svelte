<script lang="ts">
  import Navbar from "./lib/components/Navbar.svelte";
  import Home from "./lib/components/Home.svelte";
  import About from "./lib/components/About.svelte";
  import Resume from "./lib/components/Resume.svelte";
  import Portfolio from "./lib/components/Portfolio.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import Divider from "./lib/components/Divider.svelte";

  const navs = [
    { hash: "home", icon: "bx bx-home", text: "Home" },
    { hash: "about", icon: "bx bx-user", text: "About" },
    { hash: "resume", icon: "bx bx-layout", text: "Resume" },
    { hash: "portfolio", icon: "bx bx-code-alt", text: "Portfolio" },
  ];
</script>

<div class="wrapper box-wrapper theme-soft-bg">
  <div class="container position-relative">
    <Navbar {navs} />
    <main class="content box-content-2 bg-white">
      <section id="home">
        <Home />
      </section>
      <Divider />
      <section id="about">
        <About />
      </section>
      <Divider />
      <section id="resume">
        <Resume />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
    </main>
    <Footer />
  </div>
</div>
