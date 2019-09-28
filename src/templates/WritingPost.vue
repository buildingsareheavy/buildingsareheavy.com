<template>
  <Layout>
    <h1>{{ $page.writing.title }}</h1>
    <p class="intro">{{ $page.writing.excerpt }}</p>
    <p>{{ $page.writing.date }}</p>
    <p>
      Tags:
      <span v-for="tags in $page.writing.tags" :key="tags.id">{{ tags.id}}</span>
    </p>
    <hr />
    <VueRemarkContent />
  </Layout>
</template>

<page-query>
query Writing($id: ID!) {
    writing(id: $id) {
        title
        excerpt
        date (format: "D MMMM YYYY")
        tags {
            id
        }
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