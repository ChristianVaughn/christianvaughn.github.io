<script lang="ts">
  import profile from "../data/profile.json";
  import { reveal } from "../actions/reveal";
  import WashiTape from "./decor/WashiTape.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Star from "./decor/Star.svelte";
  import Heart from "./decor/Heart.svelte";
</script>

<section class="hero">
  <div
    class="stage"
    use:reveal={{ delay: 200, duration: 400 }}
    data-reveal="fade"
  >
    <!-- Character — anchors the left side -->
    <div class="character-block">
      <span class="tape tape-tl">
        <WashiTape
          width={120}
          height={22}
          color="var(--c-secondary)"
          pattern="stripes"
          rotation={-32}
        />
      </span>
      <span class="tape tape-tr">
        <WashiTape
          width={120}
          height={22}
          color="var(--c-primary)"
          pattern="dots"
          rotation={28}
        />
      </span>
      <img
        src="/images/pixel2.png"
        alt=""
        class="character"
        fetchpriority="high"
      />
    </div>

    <!-- Hello / name block - lives on the right -->
    <div class="name-block">
      <span class="hello">{profile.greeting},</span>
      <h1 class="name-anchor">{profile.name}</h1>
    </div>

    <!-- Contact scrap notes -->
    <div class="scrap-note note-email">
      <i class="bx bx-envelope" aria-hidden="true"></i>
      <a href="mailto:{profile.email}">{profile.email}</a>
    </div>
    <div class="scrap-note note-location">
      <i class="bx bx-map" aria-hidden="true"></i>
      <span>{profile.location}</span>
    </div>

    <!-- Social stickers (scattered) -->
    <div class="socials-row">
      <a
        class="social-sticker social-github"
        href={profile.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <i class="bx bxl-github"></i>
      </a>
      <a
        class="social-sticker social-linkedin"
        href={profile.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i class="bx bxl-linkedin"></i>
      </a>
    </div>

    <!-- Scattered decorative sparkles/stars/hearts -->
    <span class="deco deco-1">
      <Sparkle size={64} color="pink" variant={1} rotation={15} />
    </span>
    <span class="deco deco-2">
      <Star size={60} color="purple" variant={2} rotation={-12} />
    </span>
    <span class="deco deco-3">
      <Sparkle size={56} color="purple" variant={2} rotation={-20} />
    </span>
    <span class="deco deco-4">
      <Heart size={52} color="pink" variant={2} rotation={-15} />
    </span>
    <span class="deco deco-5">
      <Sparkle size={48} color="pink" variant={1} rotation={30} />
    </span>
    <span class="deco deco-6">
      <Heart size={48} color="purple" variant={1} rotation={12} />
    </span>
    <span class="deco deco-7">
      <Star size={56} color="pink" variant={1} rotation={-8} />
    </span>
  </div>
</section>

<style>
  .hero {
    padding: 2rem 0 4rem;
  }

  .stage {
    position: relative;
    min-height: 560px;
    width: 100%;
  }

  /* ---------- Character ---------- */
  .character-block {
    position: absolute;
    left: 2%;
    top: 6%;
    width: 340px;
    max-width: 42%;
    z-index: 2;
  }
  .character {
    display: block;
    width: 100%;
    height: auto;
    transform: rotate(-3deg);
    filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.14));
  }
  .tape {
    position: absolute;
    z-index: 3;
    pointer-events: none;
  }
  .tape-tl {
    top: 2%;
    left: -4%;
  }
  .tape-tr {
    top: 4%;
    right: -2%;
  }

  /* ---------- Name block (hello + name together on right) ---------- */
  .name-block {
    position: absolute;
    top: 12%;
    right: 4%;
    width: 50%;
    z-index: 1;
    text-align: left;
  }
  .hello {
    display: inline-block;
    font-family: var(--font-accent);
    font-size: 2.4rem;
    color: var(--c-primary);
    line-height: 1;
    transform: rotate(-4deg);
    margin-bottom: 0.4rem;
  }
  .name-anchor {
    margin: 0;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: clamp(3rem, 6vw, 5.5rem);
    line-height: 0.95;
    color: var(--c-heading);
  }

  /* ---------- Scrap notes (contact info) ---------- */
  .scrap-note {
    position: absolute;
    background: var(--c-bg);
    border: 1px dashed var(--c-muted);
    padding: 0.5rem 0.85rem;
    border-radius: 4px;
    font-family: var(--font-body);
    font-size: 0.92rem;
    color: var(--c-body);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    z-index: 4;
  }
  .scrap-note a {
    color: var(--c-body);
    text-decoration: none;
  }
  .scrap-note a:hover {
    color: var(--c-primary);
  }
  .scrap-note i {
    color: var(--c-primary);
    font-size: 1.1rem;
  }
  .note-email {
    top: 58%;
    right: 14%;
    transform: rotate(2deg);
  }
  .note-location {
    top: 70%;
    right: 26%;
    transform: rotate(-3deg);
  }

  /* ---------- Social stickers ---------- */
  .socials-row {
    position: absolute;
    bottom: 4%;
    right: 18%;
    display: inline-flex;
    gap: 18px;
    z-index: 5;
  }
  .social-sticker {
    width: 52px;
    height: 52px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-primary);
    font-size: 1.4rem;
    text-decoration: none;
    box-shadow:
      0 0 0 3px var(--c-primary),
      0 0 0 6px #fff,
      0 6px 14px rgba(0, 0, 0, 0.12);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
  .social-github {
    transform: rotate(-7deg);
  }
  .social-linkedin {
    transform: rotate(6deg);
  }
  .social-sticker:hover {
    transform: rotate(0deg) scale(1.06);
  }

  /* ---------- Decorative scatter ---------- */
  .deco {
    position: absolute;
    pointer-events: none;
    z-index: 1;
  }
  .deco-1 {
    top: 2%;
    right: 2%;
  }
  .deco-2 {
    top: 40%;
    left: 36%;
  }
  .deco-3 {
    bottom: 20%;
    right: 4%;
  }
  .deco-4 {
    /* pink heart near the character + pink sparkle (lower-left area) */
    bottom: 18%;
    left: 6%;
  }
  .deco-5 {
    top: 55%;
    left: 0;
  }
  .deco-6 {
    /* purple heart — to the right of the character, in the gap above
       "hello i'm" and between the character's washi tape and the name */
    top: 8%;
    left: 38%;
  }
  .deco-7 {
    top: 68%;
    right: 28%;
  }

  /* ============================================================ */
  /* Mobile fallback — vertical stack                              */
  /* ============================================================ */
  @media (max-width: 767.98px) {
    .stage {
      min-height: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.25rem;
    }
    .character-block,
    .name-block,
    .scrap-note,
    .socials-row,
    .deco {
      position: static;
      inset: auto;
      transform: none;
      max-width: 100%;
      width: auto;
    }
    .character-block {
      width: 280px;
      max-width: 80%;
      order: 1;
    }
    .name-block {
      order: 2;
      text-align: center;
    }
    .hello {
      font-size: 2rem;
      transform: rotate(-2deg);
    }
    .name-anchor {
      font-size: 2.5rem;
      text-align: center;
      line-height: 1;
    }
    .scrap-note {
      order: 4;
      align-self: center;
      transform: rotate(-1deg);
    }
    .note-location {
      transform: rotate(1deg);
    }
    .socials-row {
      order: 6;
      align-self: center;
      gap: 14px;
    }
    .social-github {
      transform: rotate(-4deg);
    }
    .social-linkedin {
      transform: rotate(4deg);
    }
    .deco {
      display: none;
    }
  }
</style>
