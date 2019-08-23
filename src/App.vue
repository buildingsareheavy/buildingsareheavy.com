<template>
  <div id="app">
    <nav class="nav-main">
      <div class="nav-main__item-main">
        <h1>
          <router-link to="/">
            Buildings Are
            <br />Heavy
          </router-link>
        </h1>
      </div>
      <div class="nav-main__item">
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </div>
      <div class="nav-main__item">
        <router-link to="/photography">Photography</router-link>
        <router-link to="/writing">Writing</router-link>
      </div>
    </nav>
    <hr />
    <ToggleTheme />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    ToggleTheme,
    Footer
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0.25rem 2rem;
  img {
    max-width: 100%;
  }
}
.nav-main {
  @supports (display: flex) and (display: grid) {
    @include bigger-than($mobile) {
      display: grid;
    }
    grid-template-columns: 8fr 1fr 1fr;
    &__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      a {
        padding: 0.25rem 1rem;
      }
    }
  }
  a {
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
