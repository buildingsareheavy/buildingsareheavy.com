<template>
  <Layout>
    <main class="writing-post">
      <div class="writing-post__header">
        <h1>{{ $page.writing.title }}</h1>
        <small class="subheading">{{ $page.writing.date }}</small>
        <p class="subheading">{{ $page.writing.excerpt }}</p>
      </div>
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
        cover_image
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
export default {
  name: "writing-post",
  metaInfo() {
    return {
      title: this.$page.writing.title,
      meta: [
        {
          name: "description",
          content: this.$page.writing.excerpt
        },
        {
          property: "og:title",
          content: this.$page.writing.title
        },
        {
          property: "og:description",
          cotent: this.$page.writing.excerpt
        },
        {
          property: "og:image",
          content: this.$page.writing.cover_image || ""
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.writing-post {
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