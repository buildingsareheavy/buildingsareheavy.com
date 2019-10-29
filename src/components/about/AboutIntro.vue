<template>
  <section class="about__intro">
    <div class="about__intro-text">
      <p class="subheading bold">Hi I’m Ethan Bradford Barrett</p>
      <p>I’m a front-end web developer and designer based in Denver, CO.</p>
      <p>I specialize in custom Wordpress development and progressive web applications built in JavaScript.</p>
    </div>
    <figure>
      <img src="@/assets/portrait.jpg" alt="Portrait of Ethan Barrett" />
    </figure>
  </section>
</template>

<script>
export default {
  name: "about-intro"
};
</script>

<style lang="scss">
.about {
  &__intro {
    @include bigger-than($tablet) {
      margin: calc(var(--spacing) / -2) calc(var(--spacing) / 2);
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      grid-gap: calc(var(--spacing) / 1.5);
      * {
        align-self: center;
        justify-self: center;
        font-size: 1.5rem;
      }
    }
    figure {
      margin: 0 auto;
      max-width: calc(var(--width) / 2);
    }
  }
}
</style>