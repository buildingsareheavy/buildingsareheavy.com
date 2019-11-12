<template>
  <Layout>
    <main class="about">
      <h1 class="page-title">About</h1>
      <AboutIntro />
      <AboutSkills />
    </main>
  </Layout>
</template>

<script>
import AboutIntro from "@/components/about/AboutIntro";
import AboutSkills from "@/components/about/AboutSkills";

export default {
  name: "about",
  metaInfo: {
    title: "About"
  },
  components: {
    AboutIntro,
    AboutSkills
  }
};
</script>


<style lang="scss">
.about {
  section {
    padding: var(--spacing) 0;
  }
}
</style>