<template>
  <main class="home">
    <section class="home__intro">
      <h1>Ethan Bradford Barrett is a Latinx user-focused designer who codes, eats korean food and loves architectural photography.</h1>
      <!-- TODO: FIX SVG IMPORT -->
      <!-- <object data="../assets/logo.svg" type="image/svg+xml"> -->
      <img src="../assets/logo.svg" alt />
      <!-- </object> -->
    </section>

    <section class="home__current">
      <h2>Currently Working On</h2>
      <div class="home__current-item">Plant Database on Github</div>
      <div class="home__current-item">Daily Project #24 on Codepen</div>
      <div class="home__current-item">Notes about Vuejs in "Writings"</div>
    </section>

    <section class="home__connect">
      <h2>Connect</h2>
      <div class="home__connect-item">
        <a
          href="https://www.instagram.com/buildingsareheavy/"
          target="_blank"
          rel="noopener"
        >Instagram</a>
      </div>
      <div class="home__connect-item">
        <a href="https://twitter.com/heavybuildings/" target="_blank" rel="noopener">Twitter</a>
      </div>
      <div class="home__connect-item">
        <a href="mailto:hello@buildingsareheavy.com">Email</a>
      </div>
      <div class="home__connect-item">
        <a href="https://github.com/buildingsareheavy/" target="_blank" rel="noopener">Github</a>
      </div>
      <div class="home__connect-item">
        <a href="https://codepen.io/buildingsareheavy/" target="_blank" rel="noopener">Codepen</a>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
.home {
  &__intro {
    max-width: 800px; // if not supported by flex or grid
    margin: 0 auto; // if not supported by flex or grid
    padding: 2rem 0 4rem;
    * {
      padding: 2.5rem 0;
    }
    img {
      text-align: center; // if not supported by flex or grid
      filter: drop-shadow(0px 0px 10px var(--bg-code));
    }
    h1 {
      line-height: 2rem;
      font-weight: normal;
    }
    @supports (display: flex) and (display: grid) {
      @include bigger-than($tablet) {
        max-width: 100%; // reset
        display: grid;
        grid-template-columns: 1.25fr 1fr;
        h1,
        img {
          text-align: left;
          place-self: center;
        }
        h1 {
          max-width: var(--width);
          font-size: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
  &__current {
    background: var(--yellow);
    padding: 5vw;
    margin: -2rem;
    h2 {
      background: var(--pink);
    }
    &-item {
      background: var(--text-color);
      color: var(--bg-color);
      max-width: var(--width);
      margin: 0 auto;
      text-align: center;
      padding: 2rem;
      margin: 4rem auto;
    }
  }
  &__connect {
    background: var(--green);
    padding: 5vw;
    margin: -2rem;
    margin-bottom: 0; // for footer
    h2 {
      background: var(--pink);
    }
    a {
      color: var(--text-color);
      text-decoration: none;
      border-bottom: 5px solid var(--blue);
    }
  }
}
</style>

