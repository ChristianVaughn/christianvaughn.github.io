<script lang="ts">
  import WashiTape from "../decor/WashiTape.svelte";

  type Props = {
    asset: string;
    title: string;
    description: string;
    tags: string[];
    tape?: "primary" | "secondary";
    tilt?: number;
  };
  let {
    asset,
    title,
    description,
    tags,
    tape = "primary",
    tilt = -1.5,
  }: Props = $props();

  const tapeColor = $derived(
    tape === "primary" ? "var(--c-primary)" : "var(--c-secondary)",
  );
  const tapePattern = $derived(tape === "primary" ? "stripes" : "dots");
</script>

<div class="project-stage" data-asset={asset}>
  <div class="project-card" style="--tilt: {tilt}deg;">
    <span class="tape">
      <WashiTape
        width={120}
        height={20}
        color={tapeColor}
        pattern={tapePattern}
        rotation={-8}
        opacity={0.85}
      />
    </span>

    <h3 class="title">{title}</h3>
    <p class="desc">{description}</p>
    <div class="tags">
      {#each tags as tag (tag)}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  .project-stage {
    padding: 32px 38px;
    display: inline-block;
  }
  .project-card {
    position: relative;
    width: 420px;
    padding: 1.5rem 1.75rem 1.75rem;
    background-color: var(--c-bg);
    border-radius: 8px;
    transform: rotate(var(--tilt));
    box-shadow:
      0 14px 32px rgba(0, 0, 0, 0.11),
      0 5px 12px rgba(0, 0, 0, 0.06);
  }
  .tape {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }
  .title {
    margin: 0 0 0.4rem;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--c-heading);
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.2;
  }
  .desc {
    font-family: var(--font-body);
    font-size: 0.92rem;
    line-height: 1.55;
    color: var(--c-body);
    margin: 0 0 0.7rem;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .tag {
    background: rgba(var(--c-primary-rgb), 0.14);
    color: var(--c-primary);
    border: 1.5px solid rgba(var(--c-primary-rgb), 0.4);
    padding: 0.15rem 0.55rem;
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 999px;
    line-height: 1.4;
  }
</style>
