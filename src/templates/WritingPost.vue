<template>
  <Layout>
    <main class="writing-post">
      <div class="writing-post__header">
        <h1>{{ $page.writing.title }}</h1>
        <small>{{ $page.writing.date }}</small>
        <p class="writing-post__header-summary">{{ $page.writing.excerpt }}</p>
      </div>
      <hr />
      <div class="writing-post__content">
        <VueRemarkContent />
      </div>
    </main>
  </Layout>
</template>

<page-query>
query Writing($id: ID!) {
    writing(id: $id) {
        title
        excerpt
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
export default {
  name: "writing-post"
};
</script>

<style lang="scss">
</style>