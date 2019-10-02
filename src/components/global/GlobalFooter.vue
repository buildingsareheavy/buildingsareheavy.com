<template>
  <footer class="footer">
    <hr />
    <p>Buildings Are Heavy © {{ new Date().getFullYear() }}</p>
    <p>All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
  name: "global-footer"
};
</script>


<style lang="scss">
.footer {
  text-align: center;
  small img {
    height: 1.25rem;
    vertical-align: bottom;
  }
}
</style>