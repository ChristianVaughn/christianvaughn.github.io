<script lang="ts">
  import Heart from "../decor/Heart.svelte";
  import Sparkle from "../decor/Sparkle.svelte";
  import Star from "../decor/Star.svelte";

  const year = new Date().getFullYear();
</script>

<div class="footer-stage" data-asset="footer">
  <div class="footer-inner">
    <span class="d">
      <Heart size={44} color="pink" variant={1} rotation={-10} />
    </span>
    <span class="d">
      <Star size={48} color="purple" variant={2} rotation={-15} />
    </span>
    <span class="sticky-note">
      &copy; {year} Christian Vaughn
    </span>
    <span class="d">
      <Sparkle size={44} color="pink" variant={1} rotation={20} />
    </span>
    <span class="d">
      <Heart size={40} color="purple" variant={2} rotation={12} />
    </span>
  </div>
</div>

<style>
  .footer-stage {
    padding: 30px 40px;
    display: inline-block;
  }
  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
  }
  .d {
    display: inline-flex;
    align-items: center;
  }
  .sticky-note {
    display: inline-block;
    background: var(--c-accent);
    color: var(--c-heading);
    padding: 0.75rem 1.5rem 0.85rem;
    font-family: var(--font-accent);
    font-size: 1.4rem;
    line-height: 1;
    border-radius: 3px;
    transform: rotate(-2.5deg);
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.08),
      0 8px 18px rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      transparent 6px
    );
  }
</style>
