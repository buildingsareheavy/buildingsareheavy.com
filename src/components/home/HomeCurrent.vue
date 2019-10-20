<template>
  <section class="home__current">
    <h1 class="underline">Currently Working On</h1>

    <div class="home__current-container">
      <div class="home__current-item" v-for="project in projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <div class="home__current-item--content">
          <p>{{ project.desc }}</p>
          <a v-if="project.link" :href="project.link" target="_blank" rel="noopener">Link</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import currentJson from "../../data/home-current.json";
export default {
  name: "home-current",
  data() {
    return {
      projects: currentJson
    };
  }
};
</script>


<style lang="scss">
.home {
  &__current {
    h1 {
      padding: 1rem 0;
    }
    &-item {
      border-bottom: 1px solid var(--text-color-muted);
      h2 {
        margin-bottom: 0;
      }
      &--content {
        padding-bottom: 1rem;
        p {
          margin-top: 0;
        }

        @include bigger-than($tablet) {
          display: grid;
          grid-template-columns: 1fr auto;
        }
      }
    }
  }
}
</style>