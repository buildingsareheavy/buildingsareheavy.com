<template>
  <header class="header">
    <nav>
      <mq-layout mq="lg" class="header__desktop">
        <g-link to="/" class="heading">
          Buildings Are
          <span>Heavy</span>
        </g-link>

        <g-link to="/about/" class="header-item">About</g-link>
        <g-link to="/portfolio/" class="header-item">Portfolio</g-link>

        <g-link to="/photography/" class="header-item">Photography</g-link>
        <g-link to="/writing/" class="header-item">Writing</g-link>
      </mq-layout>

      <mq-layout :mq="['sm', 'md']" class="header-mobile" :class="accordionClasses">
        <div class="header__mobile-static">
          <g-link to="/" class="heading">
            Buildings Are
            <span>Heavy</span>
          </g-link>
          <button @click="toggleAccordion" class="subheading header-item">Menu</button>
        </div>

        <div class="header__mobile-toggle">
          <g-link to="/about/" class="header-item">About</g-link>
          <g-link to="/portfolio/" class="header-item">Portfolio</g-link>

          <g-link to="/photography/" class="header-item">Photography</g-link>
          <g-link to="/writing/" class="header-item">Writing</g-link>
        </div>
      </mq-layout>
    </nav>
  </header>
</template>

<script>
// VueMq from "vue-mq" is imported in main.js;
export default {
  name: "global-header",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    accordionClasses() {
      return {
        "is-closed": !this.isOpen,
        "is-open": this.isOpen
      };
    }
  }
};
</script>


<style lang="scss">
.header {
  nav {
    border-bottom: 2px solid var(--divider-color);
    a {
      text-decoration: none;
    }
    .heading {
      font-size: 2rem;
      line-height: 2rem;
      padding-top: 1.25rem;
    }
    .header-item {
      font-size: 1.25rem;
    }
    .header__desktop {
      display: grid;
      grid-template-columns: 250px 3fr 1fr 1fr;
      grid-template-rows: 3rem 3rem;
      grid-gap: 0.5rem;
      padding-bottom: 0.25rem;
      .header-item {
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
    }

    .header__mobile {
      &-static {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 3rem 3rem auto;
        button.header-item {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          align-self: center;
          justify-self: end;
          border: none;
          background: var(--bg-color);
          padding: 0.5rem;
          border-radius: var(--radius);
          transition: all 0.5s;
          &:hover,
          &:active {
            transform: scale(0.9);
            opacity: 0.8;
          }
        }
      }
      &-toggle {
        display: grid;
        grid-template-columns: 1fr auto auto 1fr;
        grid-template-rows: 2.5rem 2.5rem;
        overflow: hidden;
        max-height: 6rem; // need to clarify for transition
        transition: 0.5s ease all;
        .header-item {
          align-self: center;
          padding: 0 0.75rem;
          &:nth-child(1) {
            // About
            grid-column: 2 / 3;
            grid-row: 1 / 2;
          }
          &:nth-child(2) {
            // Portfolio
            grid-column: 2 / 3;
            grid-row: 2 / 3;
          }

          &:nth-child(3) {
            // Photography
            grid-column: 3 / 4;
            grid-row: 1 / 2;
          }
          &:nth-child(4) {
            // Writing
            grid-column: 3 / 4;
            grid-row: 2 / 3;
          }
        }
      }
    }
  }
  .is-open .header__mobile-toggle {
    height: 6rem;
  }
  .is-closed .header__mobile-toggle {
    max-height: 0;
  }
}
</style>