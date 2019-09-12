<template>
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
</template>

<script>
export default {
  name: "home-connect"
};
</script>

<style lang="scss">
.home {
  &__connect {
    background: var(--green);
    padding: 5vw;
    margin-bottom: 0; // for footer
    h2 {
      display: inline-block;
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