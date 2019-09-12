<template>
  <main class="home">
    <HomeIntro />
    <HomeCurrent />
    <HomeConnect />
  </main>
</template>

<script>
import HomeIntro from "../components/home/HomeIntro";
import HomeCurrent from "../components/home/HomeCurrent";
import HomeConnect from "../components/home/HomeConnect";
export default {
  name: "home",
  components: {
    HomeIntro,
    HomeCurrent,
    HomeConnect
  }
};
</script>

<style lang="scss">
</style>

