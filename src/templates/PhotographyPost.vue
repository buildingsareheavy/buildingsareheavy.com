<template>
  <Layout>
    <h1>{{ $page.photography.title }}</h1>
    <h1>BOO</h1>
    <p class="intro">{{ $page.photography.excerpt }}</p>
    <p>{{ $page.photography.date }}</p>
    <p>
      Tags:
      <span v-for="tags in $page.photography.tags" :key="tags.id">{{ tags.id}}</span>
    </p>
    <g-image v-if="$page.photography.cover_image" :src="$page.photography.cover_image" />
    <hr />
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Photography($id: ID!) {
    photography(id: $id) {
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
  name: "photography-post"
};
</script>

<style lang="scss">
</style>