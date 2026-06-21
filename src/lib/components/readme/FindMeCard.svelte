<script lang="ts">
  import profile from "../../data/profile.json";
  import WashiTape from "../decor/WashiTape.svelte";
  import Heart from "../decor/Heart.svelte";
</script>

<div class="findme-stage" data-asset="findme-card">
  <div class="findme-card">
    <span class="tape">
      <WashiTape
        width={120}
        height={20}
        color="var(--c-primary)"
        pattern="checker"
        rotation={5}
        opacity={0.85}
      />
    </span>

    <ul class="lines">
      <li>
        <i class="bx bx-envelope"></i>
        <span>{profile.email}</span>
      </li>
      <li>
        <i class="bx bxl-github"></i>
        <span>github.com/{(profile.socials.github.split("/").pop()) || ""}</span>
      </li>
      <li>
        <i class="bx bxl-linkedin"></i>
        <span>LinkedIn</span>
      </li>
      <li>
        <i class="bx bx-map"></i>
        <span>{profile.location}</span>
      </li>
    </ul>

    <span class="deco">
      <Heart size={36} color="pink" variant={2} rotation={-12} />
    </span>
  </div>
</div>

<style>
  .findme-stage {
    padding: 36px 44px;
    display: inline-block;
  }
  .findme-card {
    position: relative;
    width: 460px;
    padding: 1.75rem 2.25rem 1.9rem;
    background-color: var(--c-bg);
    border-radius: 8px;
    transform: rotate(1deg);
    box-shadow:
      0 16px 36px rgba(0, 0, 0, 0.12),
      0 6px 14px rgba(0, 0, 0, 0.06);
  }
  .tape {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    pointer-events: none;
  }
  .lines {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .lines li {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--c-body);
  }
  .lines i {
    color: var(--c-primary);
    font-size: 1.3rem;
    width: 24px;
    text-align: center;
  }
  .deco {
    position: absolute;
    bottom: -18px;
    right: -14px;
    z-index: 3;
    pointer-events: none;
  }
</style>
