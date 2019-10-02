<template>
  <header class="header">
    <g-link to="/" class="header__link">
      <h1>
        Buildings Are
        <br />Heavy
      </h1>
    </g-link>

    <nav class="header__nav">
      <div class="empty">
        <!-- EMPTY -->
      </div>
      <div class="header__nav-item">
        <g-link to="/about/" class="header__nav-link">About</g-link>
        <g-link to="/portfolio/" class="header__nav-link">Portfolio</g-link>
      </div>
      <div class="header__nav-item">
        <g-link to="/photography/" class="header__nav-link">Photography</g-link>
        <g-link to="/writing/" class="header__nav-link">Writing</g-link>
      </div>
    </nav>
    <hr class="slant" />
  </header>
</template>

<script>
export default {
  name: "global-header"
};
</script>


<style lang="scss">
.header {
  font-size: 1.5rem;
  &__link {
    display: inline-block;
    h1 {
      margin-top: 1.5rem;
      margin-bottom: 0.25rem;
      line-height: 2.75rem;
    }
  }
  &__link, // title (header__link)
  &__nav-link // other pages in nav (header-nav__link)
 {
    text-decoration: none;
    background: none;
  }
  &__nav-link.router-link-exact-active {
    opacity: 0.8;
  }

  &__nav {
    @include bigger-than($tablet) {
      margin-top: -8rem; // if not supported by flex or grid
      margin-right: 1rem; // if not supported by flex or grid
    }
    &-item {
      a {
        display: block; // if not supported by flex or grid
        padding: 0.25rem 1rem;
        margin: 0 auto;
        text-align: right;
      }
    }
  }
  @supports (display: grid) {
    @include bigger-than($tablet) {
      &__nav {
        padding: 1.75rem 0 1.25rem 0;
        display: grid;
        grid-template-columns: 4.5fr 1fr 1fr;
        a {
          text-align: left;
        }
        .empty {
          z-index: -1;
        }
        &__item {
          display: block;
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