<template>
  <section class="home__connect">
    <h1 class="text-center">Connect</h1>
    <div class="home__connect-container">
      <a v-for="link in links" :key="link.name" class="btn" :href="link.url">{{ link.name }}</a>
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
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ethan-barrett-535a18109"
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
    text-align: center;
    &-container {
      padding: 1em;
      @include bigger-than($tablet) {
        a.btn {
          padding: 0.75em 1em;
        }
      }
      a.btn {
        margin: 0.5em;
      }
    }
  }
}
</style>