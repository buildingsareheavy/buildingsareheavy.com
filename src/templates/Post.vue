<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <p class="intro">{{ $page.post.excerpt }}</p>
    <p>{{ $page.post.date }}</p>
    <p>
      Tags:
      <span v-for="tags in $page.post.tags" :key="tags.id">{{ tags.id}}</span>
    </p>
    <g-image v-if="$page.post.cover_image" :src="$page.post.cover_image" />
    <hr />
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
    post(id: $id) {
        title
        excerpt
        date (format: "D MMMM YYYY")
        cover_image (width: 720, blur: 10)
        tags {
            id
        }
    }
}
</page-query>

<script>
export default {
  name: "post"
};
</script>

<style lang="scss">
</style>