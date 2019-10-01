<template>
  <section class="home__connect">
    <div class="spacer"></div>
    <div class="home__connect-title">
      <h2>Connect</h2>
    </div>
    <div class="home__connect-container">
      <div class="home__connect-item" v-for="link in links" :key="link.index">
        <h3>
          <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-connect",
  data() {
    return {
      links: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/buildingsareheavy/"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/heavybuildings/"
        },
        {
          name: "Email",
          url: "mailto:hello@buildingsareheavy.com"
        },
        {
          name: "Github",
          url: "https://github.com/buildingsareheavy/"
        },
        {
          name: "Codepen",
          url: "https://codepen.io/buildingsareheavy/"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>