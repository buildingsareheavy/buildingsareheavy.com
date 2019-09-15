<template>
  <div id="app">
    <GlobalHeader />
    <ToggleTheme />
    <router-view />
    <GlobalFooter />
  </div>
</template>

<script>
import ToggleTheme from "@/components/global/ToggleTheme.vue";
import GlobalHeader from "@/components/global/GlobalHeader.vue";
import GlobalFooter from "@/components/global/GlobalFooter.vue";

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
  .spacer {
    height: 1rem;
    border-radius: 2px;
    background: var(--white);
    transform: rotate(7.5deg);
  }
}
</style>
