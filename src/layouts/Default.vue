<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <h1 class="header__name">
          <span>Buildings Are</span>
          <span>Heavy</span>
        </h1>
      </div>

      <div class="header__right">
        <g-link class="navigation" to="/">About</g-link>
        <g-link class="navigation" to="/portfolio">Portfolio</g-link>
        <g-link class="navigation" to="/blog">Blog</g-link>
      </div>
    </header>

<ToggleTheme/>

<Logo v-if="showLogo"/>

    <main class="main">
      
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">{{ $static.metaData.siteName }} © {{ new Date().getFullYear() }}</span>
      <span class="footer__reserved">
        All Rights Reserved
      </span>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  }
};
</script>

<style lang="scss">
.header {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  grid-gap: 1rem;
  max-width: var(--content-width);
  margin: 0 auto;
  min-height: var(--header-height);
  padding: calc(var(--space) / 3) 15px;
  z-index: 10;
  border-bottom: 1px solid var(--title-color);

 &__left,
  &__right {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

&__left {
  margin-left: 10px;
  border-right: 1px solid var(--title-color);
}

 &__name {
    margin: 0;
    span {
      display: block;
    }
  }

@media screen and (max-width: 650px) {
  display: block;
  &__left {
    border: none;
    margin-bottom: calc(var(--space) * -1.5);
       @media screen and (max-width: 650px) {
        margin-top: 10px;
    }
  }
  &__right {
      @media screen and (max-width: 650px) {
        align-items: flex-end;
        margin-top: -60px;
        margin-bottom: 20px;
    }
  }

}

  .navigation {
    padding: 2px 1rem;
    text-decoration: none;
    color: currentColor;
    &.active--exact {
      text-decoration: line-through;
    }
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  max-width: var(--content-width);
}

.footer {
  margin: 0 auto;
  padding: 3rem calc(var(--space) / 2) 2rem;
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
  background: url("../assets/images/footer.svg");
  background-size: cover;
  background-size: 100% 100%;
  @media screen and (max-width: 650px) {
  margin: -10px 15px;
  }

  > span {
    margin: 0 0.35em;
    display: block;
    color: #eeeeee;
  }
}
</style>
