<template>
  <div id="app">
    <GlobalHeader />
    <ToggleTheme />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/GlobalFooter.vue";

export default {
  name: "app",
  components: {
    ToggleTheme,
    GlobalHeader,
    GlobalFooter
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
</style>
