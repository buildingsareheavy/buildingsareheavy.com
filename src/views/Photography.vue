<template>
  <main :class="`${page_title} container`">
    <h1 :class="page_title__header">{{ page_title }} archive</h1>
    <hr />
    <p class="test">sadfgdsdfgd</p>
    <BlogArchive :blogType="page_title" />
  </main>
</template>

<script>
import BlogArchive from "@/components/blog/BlogArchive.vue";
export default {
  name: "photography",
  components: {
    BlogArchive
  },
  data() {
    return {
      page_title: "photography"
    };
  },
  computed: {
    page_title__header() {
      return this.page_title + "__header";
    }
  }
};
</script>

<style lang="scss">
.photography {
  &__header {
    text-align: center;
    text-transform: capitalize;
    margin: 3rem auto;
  }
}
</style>
