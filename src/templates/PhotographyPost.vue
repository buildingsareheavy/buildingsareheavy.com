<template>
  <Layout>
    <main class="photography-post">
      <div class="photography-post__header">
        <h1>{{ $page.photography.title }}</h1>
        <small>{{ $page.photography.date }}</small>
        <p class="photography-post__header-summary">{{ $page.photography.excerpt }}</p>
        <hr />
      </div>
      <div class="photography-post__content">
        <VueRemarkContent />
      </div>
    </main>
  </Layout>
</template>

<page-query>
query Photography($id: ID!) {
    photography(id: $id) {
        title
        excerpt
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
export default {
  name: "photography-post"
};
</script>

<style lang="scss">
</style>