<template>
  <Layout>
    <main class="photography-post">
      <div class="photography-post__header">
        <h1>{{ $page.photography.title }}</h1>
        <small class="subheading">{{ $page.photography.date }}</small>
        <p class="subheading">{{ $page.photography.excerpt }}</p>
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
.photography-post {
  &__header {
    text-align: center;
    padding: calc(var(--spacing) / 2) 0;
    h1 {
      margin-bottom: 0;
    }
  }
}
</style>