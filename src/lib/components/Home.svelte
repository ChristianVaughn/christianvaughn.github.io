<script lang="ts">
  import profile from "../data/profile.json";
  import { reveal } from "../actions/reveal";
  import Typewriter from "./Typewriter.svelte";
</script>

<section class="section home-profile">
  <div class="row">
    <div
      class="col-md-6 mb-30"
      use:reveal={{ delay: 400, duration: 400 }}
      data-reveal="fade-right"
    >
      <figure class="profile-illustration text-center">
        <img
          src="/images/pixel2.png"
          alt=""
          class="character"
          fetchpriority="high"
        />
      </figure>
    </div>
    <div
      class="col-md-6 mb-30"
      use:reveal={{ delay: 500, duration: 400 }}
      data-reveal="fade-left"
    >
      <div class="profile-info">
        <h6 class="mb-15">
          <span class="d-inline-block text-white">{profile.greeting}</span>
        </h6>
        <h1 class="mb-0">{profile.name}</h1>
        <h4 class="mb-0">
          <span id="typewriter">
            <Typewriter strings={profile.roles} />
          </span>
        </h4>
        <ul class="list-unstyled my-30">
          <li class="py-1">
            <i class="bx bx-envelope me-2 align-middle fs-18"></i>
            <a href="mailto:{profile.email}">{profile.email}</a>
          </li>
          <li class="py-1">
            <i class="bx bx-map me-2 align-middle fs-18"></i>
            {profile.location}
          </li>
        </ul>
        <div class="socials-icons socials-grey">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i class="bx bxl-github"></i>
          </a>
          <a
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
