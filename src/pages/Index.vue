<template>
  <Layout>
    <main class="home">
      <HomeIntro />
      <HomeCurrent />
      <HomeConnect />
    </main>
  </Layout>
</template>

<script>
import HomeIntro from "../components/home/HomeIntro";
import HomeCurrent from "../components/home/HomeCurrent";
import HomeConnect from "../components/home/HomeConnect";

export default {
  name: "home",
  metaInfo: {
    title: "Buildings Are Heavy"
  },
  components: {
    HomeIntro,
    HomeCurrent,
    HomeConnect
  }
};
</script>

<style lang="scss">
.home {
  section {
    padding: var(--spacing) 0;
  }
}
</style>
