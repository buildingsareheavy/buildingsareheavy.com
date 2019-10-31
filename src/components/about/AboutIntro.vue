<template>
  <section class="about__intro">
    <div class="about__intro-headline">
      <p class="subheading bold">Hi I’m Ethan Bradford Barrett</p>
      <p>I’m a front-end web developer and designer based in Denver, CO.</p>
      <p>I specialize in custom Wordpress development and progressive web applications built in JavaScript.</p>
    </div>
    <figure>
      <img src="@/assets/portrait.jpg" alt="Portrait of Ethan Barrett" />
    </figure>
    <div class="about__intro-more">
      <p>I have been professionally creating on the web since 2011. I come from an art and design background, and received a Bachelor of Fine Arts from "Rocky Mountain College of Art + Design," with an emphasis in Photo / Video and Sculpture.</p>
    </div>
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
    margin: calc(var(--spacing) / -2) 0;
    &-headline {
      font-size: 1.25rem;
    }
    @include bigger-than($tablet) {
      margin: 0 calc(var(--spacing) / 2);
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      grid-gap: calc(var(--spacing) / 1.5);
      * {
        align-self: center;
        justify-self: center;
        font-size: 1.5rem;
      }
      &-more {
        grid-column: span 2;
        p {
          font-size: 0.75em;
        }
      }
    }
    figure {
      margin: 0 auto;
      max-width: calc(var(--width) / 2);
    }
  }
}
</style>