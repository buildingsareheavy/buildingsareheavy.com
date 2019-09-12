<template>
  <section class="home__current">
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
        <h3>
          <a :href="project.link">{{ project.title }}</a>
        </h3>

        <p>Description</p>
      </div>
    </div>
  </section>
</template>

<script>
import currentJson from "../../data/current.json";
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
    background: var(--yellow);
    padding: 5vw;
    &-title {
      display: inline-block;
      &-bg {
        background: var(--pink);
        padding: 5.25rem;
        clip-path: url("#current-title");
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
          transform: translateX(1rem);
        }
      }
    }
    &-container {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(9, 5rem);
      transform: translateY(-20rem);
    }
    &-item {
      background: var(--text-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      h3 a,
      p {
        text-decoration: none;
        color: var(--bg-color);
        margin: 0;
      }
      h3 {
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--bg-color);
      }
      &:nth-child(1) {
        grid-column: 1 / 5;
        grid-row: 4 / 8;
      }
      &:nth-child(2) {
        grid-column: 7 / 11;
        grid-row: 2 / 5;
      }
      &:nth-child(3) {
        grid-column: 4 / 9;
        grid-row: 8 / 10;
        transform: rotate(-20deg);
      }
    }
  }
}
</style>