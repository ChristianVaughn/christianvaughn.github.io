<script lang="ts">
  const year = new Date().getFullYear();
</script>

<footer class="sticky-footer">
  <div class="sticky-note">
    <p>&copy; {year} Christian Vaughn</p>
  </div>
</footer>

<style>
  .sticky-footer {
    text-align: center;
    padding: 0;
    background: transparent;
    color: inherit;
  }

  .sticky-note {
    display: inline-block;
    background: var(--c-accent);
    color: var(--c-heading);
    padding: 0.75rem 1.5rem 0.85rem;
    font-family: var(--font-accent);
    font-size: 1.35rem;
    line-height: 1;
    border-radius: 3px;
    transform: rotate(-2.5deg);
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.08),
      0 8px 18px rgba(0, 0, 0, 0.12);
    /* Slight inset gradient at top simulates Post-It adhesive shadow */
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      transparent 6px
    );
  }

  .sticky-note p {
    margin: 0;
  }
</style>
