<script lang="ts">
  import profile from "../data/profile.json";
  import { reveal } from "../actions/reveal";
  import Typewriter from "./Typewriter.svelte";
  import WashiTape from "./decor/WashiTape.svelte";
  import Sparkle from "./decor/Sparkle.svelte";
  import Star from "./decor/Star.svelte";
  import Heart from "./decor/Heart.svelte";
</script>

<section class="section home-scrap">
  <div class="row align-items-center">
    <!-- LEFT: character with tape and decor -->
    <div
      class="col-md-6 mb-30 character-col"
      use:reveal={{ delay: 400, duration: 400 }}
      data-reveal="fade-right"
    >
      <div class="character-wrap">
        <span class="tape tape-tl">
          <WashiTape
            width={110}
            height={22}
            color="var(--c-secondary)"
            pattern="stripes"
            rotation={-32}
          />
        </span>
        <span class="tape tape-tr">
          <WashiTape
            width={110}
            height={22}
            color="var(--c-primary)"
            pattern="dots"
            rotation={28}
          />
        </span>
        <span class="deco deco-tl">
          <Sparkle size={28} color="var(--c-primary)" rotation={15} />
        </span>
        <span class="deco deco-tr">
          <Star size={26} color="var(--c-secondary)" rotation={-12} />
        </span>
        <span class="deco deco-br">
          <Sparkle size={22} color="var(--c-secondary)" rotation={-20} />
        </span>
        <span class="deco deco-bl">
          <Heart size={20} color="var(--c-primary)" rotation={-15} />
        </span>
        <img
          src="/images/pixel2.png"
          alt=""
          class="character"
          fetchpriority="high"
        />
      </div>
    </div>

    <!-- RIGHT: greeting, name, role, contact, socials -->
    <div
      class="col-md-6 mb-30 info-col"
      use:reveal={{ delay: 500, duration: 400 }}
      data-reveal="fade-left"
    >
      <div class="info-scrap">
        <p class="greeting-handwritten">{profile.greeting},</p>
        <h1 class="name-anchor">{profile.name}</h1>
        <div class="role-tape">
          <span class="role-tape-bg">
            <WashiTape
              width={300}
              height={36}
              color="var(--c-primary)"
              pattern="stripes"
              rotation={-2}
              opacity={0.85}
            />
          </span>
          <span class="role-tape-text">
            <Typewriter strings={profile.roles} />
          </span>
        </div>

        <ul class="contact-list list-unstyled my-30">
          <li class="py-1">
            <i class="bx bx-envelope me-2 align-middle fs-18"></i>
            <a href="mailto:{profile.email}">{profile.email}</a>
          </li>
          <li class="py-1">
            <i class="bx bx-map me-2 align-middle fs-18"></i>
            {profile.location}
          </li>
        </ul>

        <div class="socials-stickers">
          <a
            class="social-sticker"
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
            class="social-sticker"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .character-col,
  .info-col {
    position: relative;
  }

  /* Character stack */
  .character-wrap {
    position: relative;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }
  .character {
    display: block;
    width: 100%;
    max-width: 330px;
    height: auto;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    transform: translateX(-12px) rotate(-3deg);
    filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.12));
  }

  /* Tape pieces over character */
  .tape {
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }
  .tape-tl {
    top: 4%;
    left: -2%;
  }
  .tape-tr {
    top: 8%;
    right: -4%;
  }

  /* Decorative sparkles/stars around character */
  .deco {
    position: absolute;
    z-index: 3;
    pointer-events: none;
  }
  .deco-tl {
    top: -12px;
    left: 30%;
  }
  .deco-tr {
    top: 18%;
    right: 6%;
  }
  .deco-br {
    bottom: 14%;
    right: -4%;
  }
  .deco-bl {
    bottom: 6%;
    left: 6%;
  }

  /* Info column */
  .info-scrap {
    position: relative;
  }

  .greeting-handwritten {
    font-family: var(--font-accent);
    font-size: 2rem;
    line-height: 1;
    color: var(--c-primary);
    margin-bottom: 0.25rem;
    transform: rotate(-2deg);
    display: inline-block;
  }

  .name-anchor {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1;
    color: var(--c-heading);
    margin-bottom: 1rem;
  }

  /* Role typewriter inside a washi tape banner */
  .role-tape {
    position: relative;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  .role-tape-bg {
    position: absolute;
    inset: -2px -10px;
    z-index: 0;
    display: block;
  }
  .role-tape-text {
    position: relative;
    z-index: 1;
    font-family: var(--font-body);
    font-weight: 600;
    color: #fff;
    padding: 4px 18px;
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 0.02em;
  }

  /* Contact list - small scrap-note style */
  .contact-list {
    font-family: var(--font-body);
    margin-top: 1.5rem;
  }

  /* Social sticker buttons */
  .socials-stickers {
    display: flex;
    gap: 12px;
    margin-top: 0.5rem;
  }
  .social-sticker {
    width: 44px;
    height: 44px;
    background: var(--c-bg);
    border: 2px solid var(--c-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-primary);
    font-size: 1.2rem;
    transform: rotate(-4deg);
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.08),
      inset 0 0 0 3px var(--c-bg);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }
  .social-sticker:nth-child(2) {
    transform: rotate(4deg);
  }
  .social-sticker:hover {
    transform: rotate(0deg) scale(1.05);
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.12),
      inset 0 0 0 3px var(--c-bg);
  }
</style>
