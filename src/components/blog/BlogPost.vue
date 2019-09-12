<template>
  <div class="post">
    <div class="post__header">
      <h1>{{ post.data.title }}</h1>
      <small>{{ post.data.published | moment("Do MMMM YYYY") }}</small>
      <div class="summary" v-html="post.data.summary"></div>
    </div>
    <hr />
    <div class="content" v-html="post.data.body"></div>
    <hr />
    <nav>
      <router-link
        class="post__previous"
        v-if="post.meta.previous_post"
        :to="/blog/ + post.meta.previous_post.slug"
      >{{ post.meta.previous_post.title }}</router-link>
      <router-link
        class="post__next"
        v-if="post.meta.next_post"
        :to="/blog/ + post.meta.next_post.slug"
      >{{ post.meta.next_post.title }}</router-link>
    </nav>
  </div>
</template>

<script>
import "prismjs/prism";
import { butter } from "@/buttercms";
export default {
  name: "blog-post",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data;
        })
        .catch(res => {
          // eslint-disable-next-line
          console.log(res);
        });
    }
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.getPost();
    }
  },
  created() {
    this.getPost();
  }
};
</script>

<style lang="scss">
.post {
  nav {
    clear: both;
    overflow: auto;
  }
  &__previous {
    float: left;
    &::before {
      content: "\2190 ";
    }
  }
  &__next {
    float: right;
    &::after {
      content: " \2192";
    }
  }
  &__header {
    text-align: center;
    margin: 3rem auto;
    max-width: var(--width);
    h1,
    small {
      margin: 0;
    }
    .summary {
      margin: 1rem 0;
    }
  }
}
</style>