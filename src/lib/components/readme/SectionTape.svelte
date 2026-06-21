<script lang="ts">
  type Props = {
    title: string;
    kicker?: string;
    asset: string;
  };
  let { title, kicker = "", asset }: Props = $props();
</script>

<div class="tape-stage" data-asset={asset}>
  <div class="tape-inner">
    {#if kicker}
      <span class="kicker">{kicker}</span>
    {/if}
    <div class="tape-band">
      <h2 class="title">{title}</h2>
    </div>
  </div>
</div>

<style>
  .tape-stage {
    padding: 30px 40px;
    display: inline-block;
  }
  .tape-inner {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  .kicker {
    font-family: var(--font-accent);
    font-size: 2.4rem;
    line-height: 1;
    color: var(--c-primary);
    transform: rotate(-5deg);
    margin: 0 0 0.3rem -1.5rem;
    display: inline-block;
  }
  .tape-band {
    display: inline-block;
    background-color: var(--c-primary);
    padding: 0.55rem 2.2rem;
    transform: rotate(-1.5deg);
    background-image: repeating-linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18) 0 6px,
      transparent 6px 12px
    );
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.12),
      inset 0 0 0 1px rgba(255, 255, 255, 0.18);
  }
  .title {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.7rem;
    color: #fff;
    text-transform: lowercase;
    letter-spacing: 0.04em;
  }
</style>
