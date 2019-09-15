<template>
  <section class="home__connect">
    <div class="spacer"></div>
    <div class="home__connect-title">
      <h2>Connect</h2>
    </div>
    <div class="home__connect-container">
      <div class="home__connect-item" v-for="link in links" :key="link.index">
        <h3>
          <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-connect",
  data() {
    return {
      links: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/buildingsareheavy/"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/heavybuildings/"
        },
        {
          name: "Email",
          url: "mailto:hello@buildingsareheavy.com"
        },
        {
          name: "Github",
          url: "https://github.com/buildingsareheavy/"
        },
        {
          name: "Codepen",
          url: "https://codepen.io/buildingsareheavy/"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.home {
  &__connect {
    padding: 5vw;
    &-title {
      display: inline-block;
      background: var(--blue);
      border-radius: 100%;
      padding: 2rem 1.5rem;
      margin: 3rem 0 2.5rem;
      transform: translate(5rem, -1rem);
      h2 {
        font-size: 2.75rem;
        transform: translate(-3.4rem, -2.5rem);
      }
      @include smaller-than($mobile) {
        transform: translate(-3rem, -1rem);
        h2 {
          transform: translateX(4.5rem);
        }
      }
    }
    &-container {
      margin-top: 4rem;
      transform: translateY(-7rem);
      text-align: center;
    }
    @supports (display: grid) {
      @include bigger-than($desktop) {
        &-container {
          margin: 0 auto;
          display: grid;
          grid-template-rows: repeat(5, 5vw);
          grid-template-columns: repeat(5, 1fr);
        }
        @for $i from 1 through 6 {
          &-item:nth-child(#{$i}) {
            grid-column-start: $i;
            grid-column-end: $i + 1;
            grid-row-start: 7 - $i;
            grid-row-end: 6 - $i;
          }
        }
      }
    }
    &-item {
      margin: -1rem 0;
      padding: 1rem;
      justify-self: center;
      align-self: center;
      border-left: 5px solid var(--white);
      border-right: 5px solid var(--yellow);
      h3 {
        font-size: 1.5rem;
        transform: rotate(10deg);
        transition: all 0.2s;
        padding: 0 0.5rem;
        &:hover {
          transform: rotate(-10deg);
        }
        a {
          color: var(--text-color);
          text-decoration: none;
          border-bottom: 6px solid var(--blue);
        }
      }
    }
  }
}
</style>