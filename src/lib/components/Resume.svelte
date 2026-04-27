<script lang="ts">
  import resume from "../data/resume.json";
  import skills from "../data/skills.json";
  import { reveal } from "../actions/reveal";
</script>

<section class="section">
  <div class="pb-50">
    <div class="section-title style-2">
      <h2 class="h3">Resume</h2>
    </div>
    <div class="row">
      <div class="col-md-6 mb-30">
        <ul class="timeline ms-15 ps-15">
          <li
            use:reveal={{ delay: 400, duration: 400 }}
            data-reveal="fade-right"
          >
            <i class="bx bx-briefcase" aria-hidden="true"></i>
            <h2 class="timeline-title">Work History</h2>
          </li>
          {#each resume.workingHistory as item, idx (item.title + idx)}
            <li
              class:active={idx === 0}
              use:reveal={{ delay: 400, duration: idx * 100 + 400 }}
              data-reveal="fade-down"
            >
              <h6 class="mb-0">{item.title}</h6>
              <span>{item.year}</span>
              <p>{item.text}</p>
            </li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6 mb-30">
        <ul class="timeline ms-15 ps-15">
          <li
            use:reveal={{ delay: 400, duration: 500 }}
            data-reveal="fade-left"
          >
            <i class="bx bxs-graduation" aria-hidden="true"></i>
            <h2 class="timeline-title">Education History</h2>
          </li>
          {#each resume.educationHistory as item, idx (item.title + idx)}
            <li
              use:reveal={{ delay: 400, duration: idx * 100 + 400 }}
              data-reveal="fade-down"
            >
              <h6 class="mb-0">{item.title}</h6>
              <span>{item.year}</span>
              <p>{item.text}</p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>

  <div class="skills-box pt-80 bg-light box-content-inner">
    <div class="section-title">
      <h3>Languages &amp; Frameworks</h3>
    </div>
    {#each skills as skill, idx (skill.title)}
      <div
        class="card border-radius-1x border-0"
        use:reveal={{ delay: idx * 100 + 400, duration: idx * 100 + 400 }}
        data-reveal="fade-up"
      >
        <div class="card-body">
          <div class="media align-items-center">
            <div class="avatar">
              <img
                src="/images/logos/{skill.img}"
                class="h-100"
                width="36"
                height="36"
                loading="lazy"
                alt=""
              />
            </div>
            <div class="media-body ms-3">
              <h6 class="mb-0 fw-normal">{skill.title}</h6>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
