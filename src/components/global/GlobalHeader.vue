<template>
  <header class="header container">
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

<style>
.header a {
  margin-right: 1rem;
}
</style>