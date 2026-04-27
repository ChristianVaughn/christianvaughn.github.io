<script lang="ts">
  import { scrollspy } from "../actions/scrollspy";

  type Nav = { hash: string; icon: string; text: string };
  type Props = { navs: Nav[] };
  let { navs }: Props = $props();

  let isActive = $state(false);
  let scrolled = $state(false);
  let atBottom = $state(false);
  let activeId = $state("");

  $effect(() => {
    const onScroll = () => {
      scrolled = window.pageYOffset > 80;
      atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  function go(id: string) {
    return (e: MouseEvent) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        isActive = false;
      }
    };
  }
</script>

<svelte:body
  use:scrollspy={{
    ids: navs.map((n) => n.hash),
    onActive: (id) => (activeId = id),
  }}
/>

<header
  class="v-header-2 {scrolled ? (atBottom ? 'bottom-header' : 'sticky-header') : ''}"
>
  <button
    type="button"
    class="navbar-toggler"
    class:active={isActive}
    aria-controls="basic-navbar-nav"
    aria-label="Toggle navigation"
    onclick={() => (isActive = !isActive)}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="navbar-collapse theme-bg" class:active={isActive}>
    <figure class="profile-img mb-0">
      <img
        src="/images/profile.jpg"
        class="rounded-circle mx-auto img-fluid"
        width="70"
        height="70"
        fetchpriority="high"
        alt=""
      />
    </figure>
    <ul class="nav">
      {#each navs as item (item.hash)}
        <li>
          <a
            href="#{item.hash}"
            class:active={activeId === item.hash}
            onclick={go(item.hash)}
          >
            <i class="{item.icon} avatar rounded-circle bg-gray-100 link-circle fs-18"></i>
            <span> {item.text}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>
