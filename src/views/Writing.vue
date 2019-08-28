<template>
  <div :id="page_title">
    <h1>{{ page_title }}</h1>
    <hr />
    <BlogArchive :blogType="page_title" />
  </div>
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
  }
};
</script>

<style>
</style>
