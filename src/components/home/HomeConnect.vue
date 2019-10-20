<template>
  <section class="home__connect">
    <h1>Connect</h1>
    <div class="home__conntect-container">
      <p v-for="link in links" :key="link.name">
        <a :href="link.url">{{link.name}}</a>
      </p>
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
          name: "Email",
          url: "mailto:hello@buildingsareheavy.com"
        },

        {
          name: "Instagram",
          url: "https://www.instagram.com/buildingsareheavy/"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/heavybuildings/"
        },
        {
          name: "Codepen",
          url: "https://codepen.io/buildingsareheavy/"
        },
        {
          name: "Github",
          url: "https://github.com/buildingsareheavy/"
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.home {
  &__connect {
    &-title {
    }
  }
}
</style>