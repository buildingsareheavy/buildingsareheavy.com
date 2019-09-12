<template>
  <section class="home__intro">
    <h1>Ethan Bradford Barrett is a Latinx user-focused designer who codes, eats korean food and loves architectural photography.</h1>
    <!-- TODO: FIX SVG IMPORT -->
    <!-- <object data="../assets/logo.svg" type="image/svg+xml"> -->
    <img src="@/assets/logo.svg" alt />
    <!-- </object> -->
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
    margin: 0 var(--spacing);
    padding: 2rem 0 6rem 0;
    img {
      padding-top: 4rem;
      display: block;
      margin: 0 auto;
      filter: drop-shadow(0px 0px 10px var(--bg-code));
    }
    h1 {
      line-height: 2rem;
      font-weight: normal;
    }
    @supports (display: flex) and (display: grid) {
      @include bigger-than($tablet) {
        display: grid;
        grid-template-columns: 1.25fr 1fr;
        grid-gap: var(--spacing);
        h1,
        img {
          align-self: center;
          justify-self: center;
        }
        h1 {
          max-width: var(--width);
          font-size: 3rem;
          line-height: 3rem;
        }
      }
    }
  }
}
</style>