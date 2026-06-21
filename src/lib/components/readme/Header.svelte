<script lang="ts">
  import Heart from "../decor/Heart.svelte";
  import Sparkle from "../decor/Sparkle.svelte";
  import Star from "../decor/Star.svelte";
</script>

<div class="header-stage" data-asset="header">
  <div class="header-card">
    <span class="hello">Hello, I'm</span>
    <h1 class="name">Christian Vaughn</h1>

    <span class="deco d-tl">
      <Sparkle size={42} color="pink" variant={1} rotation={15} />
    </span>
    <span class="deco d-tr">
      <Star size={46} color="purple" variant={2} rotation={-10} />
    </span>
    <span class="deco d-br">
      <Heart size={40} color="pink" variant={2} rotation={-15} />
    </span>
    <span class="deco d-bl">
      <Sparkle size={36} color="purple" variant={2} rotation={20} />
    </span>
  </div>
</div>

<style>
  .header-stage {
    /* Padding gives the drop shadow room so it isn't clipped by the
       Playwright element screenshot. */
    padding: 40px 60px;
    display: inline-block;
    background: transparent;
  }
  .header-card {
    position: relative;
    width: 760px;
    min-height: 200px;
    padding: 2rem 3rem;
    background-color: var(--c-bg);
    border-radius: 10px;
    transform: rotate(-1.5deg);
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.12),
      0 8px 16px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hello {
    font-family: var(--font-accent);
    font-size: 3rem;
    line-height: 1;
    color: var(--c-primary);
    transform: rotate(-3deg);
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  .name {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 5rem;
    line-height: 0.95;
    color: var(--c-heading);
  }
  .deco {
    position: absolute;
    pointer-events: none;
  }
  .d-tl {
    top: 8%;
    right: 32%;
  }
  .d-tr {
    top: 6%;
    right: 6%;
  }
  .d-br {
    bottom: 8%;
    right: 4%;
  }
  .d-bl {
    bottom: 10%;
    left: 6%;
  }
</style>
