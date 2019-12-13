<template>
  <section class="home__current">
    <h1 class="text-center">Current Projects</h1>

    <div class="home__current-container">
      <div class="home__current-item" v-for="project in projects" :key="project.title">
        <h2>{{ project.title }}</h2>
        <p>{{ project.desc }}</p>
        <div class="home__current-item--links">
          <a
            class="btn source"
            v-if="project.source"
            :href="project.source"
            target="_blank"
            rel="noopener"
          >
            <svg
              height="128"
              width="128"
              class="octicon octicon-mark-github"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
            Source
          </a>
          <a
            class="btn view"
            v-if="project.view"
            :href="project.view"
            target="_blank"
            rel="noopener"
          >View</a>
          <span class="bold in-progress" v-if="project.inProgress">In Progress</span>
          <span class="bold launched" v-else>Launched</span>
        </div>
      </div>
      <div class="view-portfolio">
        <g-link class="btn" to="/portfolio/">View Full Portfolio</g-link>
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
      padding: 0.5em 0;
    }
    &-item {
      padding: 1em 0.25em;
      border-bottom: 1px solid var(--divider-color);
      h2 {
        margin-bottom: 0.25em;
      }
      p {
        margin-top: 0;
      }
      &--links {
        text-align: center;
        @include smaller-than($tablet) {
          padding-bottom: 1em;
          a,
          span {
            margin: 0 0.5em;
          }
        }
        a.view {
          background: var(--code-yellow);
          grid-column-start: 2;
          justify-self: end;
        }
        a.btn {
          margin-bottom: 1em;
        }
        a.source {
          svg {
            height: 0.5em;
            width: 0.5em;
            transform: scale(2) translate(-0em, -0.05em);
            padding: 0 0.25em;
          }
        }
        span {
          display: inline-block;
          text-align: center;
          padding: 0.5em 0.75em;
          &.in-progress {
            color: var(--code-red);
          }
          &.launched {
            filter: brightness(90%);
            color: var(--code-green);
            &::before {
              content: "\02714";
              margin-right: 0.5em;
            }
          }
        }
      }
      @include bigger-than($tablet) {
        display: grid;
        grid-template-columns: 1fr 10em;
        column-gap: 1em;
        p {
          grid-row-start: 2;
        }
        &--links {
          grid-row: span 2;
          align-self: center;
          display: grid;
          grid-template-columns: auto auto;
          column-gap: 1em;
          a {
            align-self: end;
            margin-bottom: 0;
          }
          span {
            grid-column: span 2;
            justify-self: stretch;
          }
        }
      }
    }
    .view-portfolio {
      margin: 2.5em auto;
      text-align: center;
      a {
        padding: 0.75em 1em;
        background: var(--text-color);
        color: var(--bg-color);
      }
    }
  }
}
</style>
