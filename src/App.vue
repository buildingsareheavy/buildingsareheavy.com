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
  margin: 0.25rem 3rem;
  img {
    max-width: 100%;
  }
}
</style>
