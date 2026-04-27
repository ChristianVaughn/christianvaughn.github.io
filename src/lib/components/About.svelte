<script lang="ts">
  import profile from "../data/profile.json";
  import { reveal } from "../actions/reveal";
</script>

<section class="section">
  <div class="pb-50">
    <div class="section-title style-2">
      <h2 class="h3">About Me</h2>
    </div>
    <div class="row">
      <div
        class="col-md-6 mb-30"
        use:reveal={{ delay: 400 }}
        data-reveal="fade-right"
      >
        <p>{@html profile.about[0]}</p>
        <div class="mt-30 mb-30 mb-md-0">
          <a
            href="mailto:{profile.email}?subject=Resume%20Request"
            class="btn btn-primary me-3 mb-2 mb-sm-0"
          >
            Email for Resume
          </a>
        </div>
      </div>
      <div
        class="col-md-6 ps-lg-5 mb-30"
        use:reveal={{ delay: 500 }}
        data-reveal="fade-left"
      >
        <p>{@html profile.about[1]}</p>
      </div>
    </div>
  </div>
</section>
