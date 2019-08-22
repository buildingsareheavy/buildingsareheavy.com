<template>
  <div class="home">
    <div class="home__intro">
      <p>Ethan Bradford Barrett is a Latinx user-focused designer who codes, and loves korean food and architectural photography.</p>
    </div>

    <!-- TODO: FIX SVG IMPORT -->
    <!-- <object data="../assets/logo.svg" type="image/svg+xml"> -->
    <img src="../assets/logo.svg" alt />
    <!-- </object> -->

    <div class="home__current">
      <h2>Currently Working On</h2>
      <div class="home__current-item">Plant Database on Github</div>
      <div class="home__current-item">Daily Project #24 on Codepen</div>
      <div class="home__current-item">Notes about Vuejs in "Writings"</div>
    </div>

    <div class="home__connect">
      <h2>Connect</h2>
      <div class="home__connect-item">Instagram</div>
      <div class="home__connect-item">Twitter</div>
      <div class="home__connect-item">Email</div>
      <div class="home__connect-item">Github</div>
      <div class="home__connect-item">Codepen</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
</style>

