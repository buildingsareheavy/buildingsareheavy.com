<template>
  <section class="home__connect">
    <h1>Connect</h1>
    <div class="home__connect-container">
      <div>
        <h2>Email</h2>
        <a :href="links[0].url">{{ links[0].name }}</a>
      </div>
      <div>
        <h2>Social</h2>
        <a :href="links[1].url">{{ links[1].name }}</a>
        <a :href="links[2].url">{{ links[2].name }}</a>
      </div>
      <div>
        <h2>Code</h2>
        <a :href="links[3].url">{{ links[3].name }}</a>
        <a :href="links[4].url">{{ links[4].name }}</a>
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
          name: "Hello@BuildingsAreHeavy.com",
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
    &-container {
      @include bigger-than($tablet) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
      }
      div:not(:first-child) {
        justify-self: center;
      }
      a {
        padding-bottom: 10px;
        display: block;
      }
    }
  }
}
</style>