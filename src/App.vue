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
</style>
