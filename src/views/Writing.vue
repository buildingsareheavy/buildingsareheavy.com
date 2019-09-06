<template>
  <main :class="page_title">
    <h1 :class="page_title__header">{{ page_title }} archive</h1>
    <hr />
    <BlogArchive :blogType="page_title" />
  </main>
</template>

<script>
import BlogArchive from "@/components/BlogArchive.vue";
export default {
  name: "writing",
  components: {
    BlogArchive
  },
  data() {
    return {
      page_title: "writing"
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
.writing {
  &__header {
    text-align: center;
    text-transform: capitalize;
    margin: 3rem auto;
  }
}
</style>
