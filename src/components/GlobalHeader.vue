<template>
  <header class="header">
    <h1>
      <router-link to="/" class="header__link">
        Buildings Are
        <br />Heavy
      </router-link>
    </h1>
    <nav class="header-nav">
      <div class="header-nav__item">
        <!-- EMPTY -->
      </div>
      <div class="header-nav__item">
        <router-link to="/about" class="header-nav__link">About</router-link>
        <router-link to="/portfolio" class="header-nav__link">Portfolio</router-link>
      </div>
      <div class="header-nav__item">
        <router-link to="/photography" class="header-nav__link">Photography</router-link>
        <router-link to="/writing" class="header-nav__link">Writing</router-link>
      </div>
    </nav>
    <hr class="slant" />
  </header>
</template>

<script>
</script>

<style lang="scss">
.header {
  h1 {
    margin-top: 1.75rem;
    margin-bottom: 0.5rem;
    line-height: 2.5rem;
    .header__link {
      font-size: 3rem;
    }
  }
  // all links
  .header__link,
  .header-nav__link {
    text-decoration: none;
  }
  nav {
    .header-nav__link {
      font-size: 1.5rem;
      &.router-link-exact-active {
        text-decoration: underline;
      }
    }
  }
  &-nav {
    @include bigger-than($mobile) {
      margin-top: -8rem; // if not supported by flex or grid
      margin-right: 1rem; // if not supported by flex or grid
    }
    &__item {
      a {
        display: block; // if not supported by flex or grid
        padding: 0.25rem 1rem;
        text-align: right;
      }
    }
  }
  @supports (display: flex) and (display: grid) {
    @include bigger-than($tablet) {
      &-nav {
        padding: 1.5rem 0 2.5rem 0;
        display: grid;
        grid-template-columns: 4.5fr 1fr 1fr;
        a {
          text-align: left;
        }
        &__item {
          &:first-child {
            z-index: -1;
          }
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    @include smaller-than($tablet) {
      .slant {
        transform: rotate(7deg) translateY(3rem);
        margin-bottom: 3rem;
      }
    }
  }
}
</style>