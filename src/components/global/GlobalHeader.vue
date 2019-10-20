<template>
  <header class="header">
    <nav>
      <g-link to="/" class="heading">
        Buildings Are
        <span>Heavy</span>
      </g-link>

      <g-link to="/about/" class="header-item">About</g-link>
      <g-link to="/portfolio/" class="header-item">Portfolio</g-link>

      <g-link to="/photography/" class="header-item">Photography</g-link>
      <g-link to="/writing/" class="header-item">Writing</g-link>
    </nav>
    <hr />
    <mq-layout :mq="['sm', 'md']">
      <h1>MOBILE: {{ $mq }}</h1>
    </mq-layout>

    <mq-layout mq="lg">
      <h1>DESKTOP: {{ $mq }}</h1>
    </mq-layout>
  </header>
</template>

<script>
// VueMq from "vue-mq" is imported in main.js;
export default {
  name: "global-header"
};
</script>


<style lang="scss">
.header {
  nav {
    display: grid;
    grid-template-columns: 3fr 4fr 1fr 1fr;
    grid-template-rows: 3rem 3rem;
    grid-gap: 0.5rem;
    .header-item {
      font-size: 1.25rem;
      &:nth-child(2), // About & Portfolio
      &:nth-child(3) {
        grid-column: 3 / 4;
      }
      &:nth-child(4), // Photography & Writing
      &:nth-child(5) {
        grid-column: 4 / 5;
      }
      &:nth-child(4) {
        grid-row: 1; // Move Photography back up to top row
      }
      &:nth-child(2),
      &:nth-child(4) {
        align-self: end; // Move About and Photography to bottom of row
      }
    }
    a {
      text-decoration: none;
    }
    .heading {
      font-size: 2rem;
      line-height: 2rem;
      padding-top: 1.5rem;
      span {
        /* display: block; */
      }
    }
  }
}
</style>