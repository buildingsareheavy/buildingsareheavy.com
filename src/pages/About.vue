<template>
  <Layout>
    <main class="about">
      <h1 class="page-title">About</h1>
      <AboutIntro />
      <AboutSkills />
      <AboutInterests />
    </main>
  </Layout>
</template>

<script>
import AboutIntro from "@/components/about/AboutIntro";
import AboutSkills from "@/components/about/AboutSkills";
import AboutInterests from "@/components/about/AboutInterests";

export default {
  name: "about",
  metaInfo: {
    title: "About"
  },
  components: {
    AboutIntro,
    AboutSkills,
    AboutInterests
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