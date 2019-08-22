<template>
  <div id="photography">
    <h1>{{ page_title }}</h1>
    <hr />

    <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
      <router-link :to="'/photography/' + post.slug">
        <article>
          <figure>
            <img v-if="post.featured_image" :src="post.featured_image" alt />
            <img v-else src="http://via.placeholder.com/250x250" alt />
          </figure>

          <div class="content">
            <h2>{{ post.title }}</h2>
            <div>{{ post.summary }}</div>
          </div>
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
import { butter } from "@/buttercms";
export default {
  name: "photography",
  data() {
    return {
      page_title: "Photography",
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
          // category_slug: "ethan"
        })
        .then(res => {
          // console.log(res.data)
          this.posts = res.data.data;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style>
</style>
