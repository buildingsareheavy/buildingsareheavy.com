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
        cover_image
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
export default {
  name: "photography-post",
  metaInfo() {
    return {
      title: this.$page.photography.title,
      meta: [
        {
          name: "description",
          content: this.$page.photography.excerpt
        },
        {
          property: "og:title",
          content: this.$page.photography.title
        },
        {
          property: "og:description",
          cotent: this.$page.photography.excerpt
        },
        {
          property: "og:image",
          content: this.$page.photography.cover_image || ""
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.photography-post {
  &__header {
    text-align: center;
    padding: calc(var(--spacing) / 2) 0;
    border-bottom: 2px solid var(--divider-color);
    h1 {
      margin-bottom: 0;
    }
  }
}
</style>