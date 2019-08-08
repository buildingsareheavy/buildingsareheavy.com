<template>
  <div id="footer">
    <hr />
    <p>Buildings Are Heavy © {{ new Date().getFullYear() }}</p>
    <p>All Rights Reserved</p>
    <small>
      Powered by:
      <img src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH" alt />
    </small>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss">
#footer {
  text-align: center;
}
</style>