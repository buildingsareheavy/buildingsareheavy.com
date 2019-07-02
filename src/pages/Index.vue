<template>
  <Layout :show-logo="false">
    <div class="info">
      <h1 class="page-title text-center space-bottom">About</h1>
      <object class="svg-logo" data="../assets/img/logo.svg" type="image/svg+xml">
        <img src="../assets/images/logo.svg" alt />
      </object>
      <AboutBio />
      <AboutConnect />
    </div>
  </Layout>
</template>

<script>
import AboutBio from "../components/AboutBio";
import AboutConnect from "../components/AboutConnect";

export default {
  components: {
    AboutBio,
    AboutConnect
  },
  metaInfo: {
    title: "Index"
  }
};
</script>

<style lang="scss">
.info {
  .svg-logo {
    height: 60vh;
    display: block;
    max-width: 100%;
    margin: calc(var(--space) / 2) auto;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
}
</style>

