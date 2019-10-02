<template>
  <section class="home__current">
    <div class="spacer"></div>
    <div class="home__current-title-bg">
      <svg width="0" height="0">
        <defs>
          <clipPath id="current-title">
            <path
              d="M193.008,218.766c29.751,14.277,80.659,21.136,113.129,15.24l36.688-6.662
            c32.47-5.896,70.893-13.092,85.385-15.991c14.491-2.899,25.822-13.882,25.178-24.404c-0.644-10.522-23.202-26.269-50.131-34.99
            c-26.929-8.723-72.737-28.652-101.798-44.289l-95.16-51.204c-29.061-15.637-78.25-19.312-109.312-8.167L85.87,52.287
            c-31.061,11.145-45.798,40.62-32.749,65.5c13.049,24.88,48.068,56.918,77.82,71.195L193.008,218.766z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="home__current-title">
      <h2>
        Currently
        <span>Working On</span>
      </h2>
    </div>
    <div class="home__current-container">
      <div class="home__current-item" v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>
          {{ project.desc }}
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener"
          >Link</a>
        </p>
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
    padding: 5vw;
    &-title {
      display: inline-block;
      &-bg {
        background: var(--pink);
        padding: 5.25rem;
        clip-path: url("#current-title");
        @include smaller-than($mobile) {
          transform: translateX(5vw);
          padding: 6rem;
        }
      }
      h2 {
        font-size: 2.75rem;
        line-height: 3rem;
        transform: translate(6rem, -11rem);
        @include smaller-than($mobile) {
          transform: translate(0rem, -11rem);
        }
        span {
          display: block;
          transform: translateX(1.5rem);
        }
      }
    }
    &-container {
      margin-top: -7rem;
      max-width: var(--width);
      margin-left: auto;
      @include smaller-than($mobile) {
        margin-top: -10rem;
        margin-bottom: 2rem;
      }
    }
    &-item {
      margin: 0 auto;
      border-bottom: 5px solid var(--yellow);
      p {
        a {
          float: right;
          text-decoration: none;
        }
      }
    }
  }
}
</style>