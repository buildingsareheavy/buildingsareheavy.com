<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Test</h2>
    <div v-for="post in posts" :key="post.url">
      <p>{{ post.title }}</p>
      <!-- <div v-html="post.body"></div> -->
    </div>
  </div>
</template>

<script>
import { butter } from "@/buttercms";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    fetchPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
          // category_slug: "ethan"
        })
        .then(res => {
          console.log("Content from ButterCMS");
          console.log(res.data.data);
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
