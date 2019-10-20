<template>
  <footer class="footer">
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
}
</style>