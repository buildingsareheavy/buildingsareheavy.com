<template>
  <section class="home__intro">
    <div class="home__intro-container">
      <p>
        <span class="heading">Ethan Bradford Barrett</span>
        <span class="subheading">
          A Latinx designer who codes, architectural photographer, and
          korean food evangelist.
        </span>
      </p>
      <!-- TODO: FIX SVG IMPORT -->
      <!-- <object data="../assets/logo.svg" type="image/svg+xml"> -->
      <!-- <img src="@/assets/svg/logo.svg" alt /> -->
      <!-- </object> -->
      <figure>
        <svg
          version="1.1"
          id="SVG__Logo"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="441px"
          height="479px"
          viewBox="0 0 441 479"
          enable-background="new 0 0 441 479"
          xml:space="preserve"
        >
          <path
            fill="#242424"
            d="M59.9,22.469C15.813,31.204,1.597,138.939,0,191.715C0,369.15,26.356,451.044,47.92,471.518  s232.411-6.824,299.499-13.648c67.087-6.825,95.839-96.907,93.443-156.963c-2.396-60.055-43.128-244.315-64.692-278.438  C358.919-4.829,274.74-1.645,234.807,3.36C194.874,6.09,103.986,13.733,59.9,22.469z"
          />
          <rect
            id="logo-pink"
            x="120.5"
            y="162.546"
            fill="none"
            stroke="var(--pink)"
            stroke-width="5"
            width="175"
            height="175"
          />
          <rect
            id="logo-yellow"
            x="144"
            y="140"
            fill="none"
            stroke="var(--yellow)"
            stroke-width="5"
            width="175"
            height="175"
          />
        </svg>
      </figure>
      <div class="home__intro-more">
        <p>I take pride in detail-oriented and user-focused front-end web development. Specializing in custom Wordpress websites and JavaScript-based web applications, I also have experience in consulting, leadership, and team management.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-intro"
};
</script>

<style lang="scss">
.home {
  &__intro {
    &-container {
      margin: calc(var(--spacing) / -2) 0;
      p {
        font-size: 1.5em;
        span {
          display: block;
        }
        span:first-of-type {
          font-size: 1.75rem;
          padding-bottom: 1em;
        }
      }
      figure {
        margin: 0 auto;
        max-width: calc(var(--width) / 2);
        svg {
          #logo-pink,
          #logo-yellow {
            transition: transform 500ms;
          }
          &:hover {
            #logo-pink {
              transform: translate(-0.25em, 0.25em) rotate(2deg);
            }
            #logo-yellow {
              transform: translate(0.25em, -0.25em) rotate(-2deg);
            }
          }
        }
      }
      @include bigger-than($tablet) {
        padding: calc(var(--spacing) / 2) calc(var(--spacing) / 2);
        display: grid;
        grid-template-columns: 1.25fr 1fr;
        grid-gap: calc(var(--spacing) / 1.5);
        p,
        figure {
          align-self: center;
          justify-self: center;
        }
      }
    }
    &-more {
      grid-column: span 2;
      font-size: 0.75em;
      margin-bottom: calc(var(--spacing) / 2);
    }
  }
}
</style>
