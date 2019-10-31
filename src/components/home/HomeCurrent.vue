<template>
  <section class="home__current">
    <h1 class="text-center">Currently Working On</h1>

    <div class="home__current-container">
      <div class="home__current-item" v-for="project in projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <p>{{ project.desc }}</p>
        <a class="btn" v-if="project.link" :href="project.link" target="_blank" rel="noopener">Link</a>
      </div>
    </div>
  </section>
</template>

<script>
import currentJson from "@/data/home-current.json";
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
    margin: calc(var(--spacing) / -2) 0;
    h1 {
      padding: 1rem 0;
    }
    &-item {
      padding: 1em 0.25em;
      border-bottom: 1px solid var(--divider-color);
      h2 {
        margin-bottom: 0;
      }
      p {
        margin-top: 0;
      }
      a.btn {
        margin-bottom: 1em;
      }
      @include bigger-than($tablet) {
        display: grid;
        grid-template-columns: 1fr auto;
        p {
          grid-row-start: 2;
        }
        a.btn {
          grid-row: span 2;
          align-self: center;
          margin-bottom: 0; // reset
        }
      }
    }
  }
}
</style>