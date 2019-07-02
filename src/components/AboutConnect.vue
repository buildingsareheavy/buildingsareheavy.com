<template>
  <div class="about__connect">
    <div>
      <h3>Connect:</h3>
      <p>
        When I post something on my
        <g-link to="/blog">blog</g-link>, I will make sure to share something about it on my
        <!-- -->
        <a
          href="https://www.instagram.com/buildingsareheavy/"
          target="_blank"
          rel="noopener"
        >Instagram</a>.
      </p>
      <p>
        I have all my most recent projects on my
        <!-- -->
        <a href="https://github.com/buildingsareheavy" target="_blank" rel="noopener">Github</a>, as well as host my daily projects on
        <!-- -->
        <a href="https://codepen.io/buildingsareheavy/#" target="_blank" rel="noopener">Codepen</a>.
      </p>
      <p>
        If you prefer email, you can always reach me at
        <!-- -->
        <a href="mailto:hello@buildingsAreHeavy.com">hello@buildingsAreHeavy.com</a>
      </p>
    </div>
    <div class="cta-container__connect">
      <ul>
        <li>
          <g-link to="/blog">Blog</g-link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/buildingsareheavy/"
            target="_blank"
            rel="noopener"
          >Instagram</a>
        </li>
        <li>
          <a href="https://github.com/buildingsareheavy" target="_blank" rel="noopener">Github</a>
        </li>
        <li>
          <a href="https://codepen.io/buildingsareheavy/#" target="_blank" rel="noopener">Codepen</a>
        </li>
        <li>
          <a href="mailto:hello@buildingsAreHeavy.com">Email</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  @media screen and (min-width: 768px) {
    &__connect {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
  }
  .cta-container__connect {
    background-image: url("../assets/images/cta-connect.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
}
</style>

