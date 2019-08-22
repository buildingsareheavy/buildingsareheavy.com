<template>
  <div id="app">
    <nav id="nav-main">
      <h1>
        <router-link to="/">
          Buildings Are
          <br />Heavy
        </router-link>
      </h1>
      <router-link to="/about">About</router-link>|
      <router-link to="/portfolio">Portfolio</router-link>|
      <router-link to="/photography">Photography</router-link>|
      <router-link to="/writing">Writing</router-link>
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
  img {
    max-width: 100%;
  }
}
#nav-main {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
