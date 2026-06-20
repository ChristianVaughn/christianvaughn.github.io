<script lang="ts">
  import Squiggle from "./decor/Squiggle.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
</script>

<div class="scrap-divider">
  <span class="dec end-l">
    <Sparkle size={18} color="var(--c-secondary)" rotation={-20} />
  </span>
  <div class="squiggle-wrap">
    <Squiggle width={220} height={20} color="var(--c-primary)" strokeWidth={2.5} />
  </div>
  <span class="dec end-r">
    <Sparkle size={18} color="var(--c-secondary)" rotation={20} />
  </span>
</div>

<style>
  .scrap-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 2.5rem 0 3rem;
  }
  .squiggle-wrap {
    line-height: 0;
    opacity: 0.85;
  }
  .dec {
    display: inline-flex;
  }
</style>
