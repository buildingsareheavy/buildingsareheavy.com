<template>
  <div id="footer">
    <hr />
    <p>Buildings Are Heavy © {{ new Date().getFullYear() }}</p>
    <p>All Rights Reserved</p>
    <small>
      Built with:
      <a href="https://buttercms.com">
        <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt="Butter CMS" />
      </a>, HTML, SCSS and Vuejs.
    </small>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss" scoped>
#footer {
  text-align: center;
  small img {
    height: 1.25rem;
    vertical-align: bottom;
  }
}
</style>