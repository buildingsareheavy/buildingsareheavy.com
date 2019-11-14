<template>
  <footer class="footer">
    <nav class="footer-nav">
      <span class="heading">Navigation</span>
      <g-link class="btn" to="/">Home</g-link>
      <g-link class="btn" to="/about/">About</g-link>
      <g-link class="btn" to="/portfolio/">Portfolio</g-link>
      <g-link class="btn" to="/photography/">Photography</g-link>
      <g-link class="btn" to="/writing/">Writing</g-link>
    </nav>
    <p>Copyright © {{ new Date().getFullYear() }}</p>
    <p>Ethan Bradford Barrett</p>
  </footer>
</template>

<script>
export default {
  name: "global-footer"
};
</script>


<style lang="scss">
.footer {
  margin-top: var(--spacing);
  border-top: 1px solid var(--text-color);
  text-align: center;
  &-nav {
    padding: 2em;
    border-bottom: 1px solid var(--text-color);
    span {
      display: block;
      margin-bottom: 0.25em;
      font-size: 1.25em;
    }
    a.btn {
      margin: 0.5em;
      background: transparent;
      &.active.active--exact {
        background: var(--bg-code);
      }
      @include smaller-than(390px) {
        display: block;
      }
    }
  }
}
</style>