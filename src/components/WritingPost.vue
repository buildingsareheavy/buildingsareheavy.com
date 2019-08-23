<template>
  <div class="writing-post">
    <nav>
      <router-link
        class="writing-post__previous"
        v-if="post.meta.previous_post"
        :to="/writing/ + post.meta.previous_post.slug"
      >{{ post.meta.previous_post.title }}</router-link>

      <router-link
        class="writing-post__next"
        v-if="post.meta.next_post"
        :to="/writing/ + post.meta.next_post.slug"
      >{{ post.meta.next_post.title }}</router-link>
    </nav>
    <hr />
    <h1>{{ post.data.title }}</h1>
    <h4>{{ post.data.published }}</h4>
    <div class="summary" v-html="post.data.summary"></div>
    <hr />
    <div class="content" v-html="post.data.body"></div>
  </div>
</template>

<script>
import { butter } from "@/buttercms";
import "prismjs/prism";
export default {
  name: "writing-post",
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
          // console.log(res.data);
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
.writing-post {
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
}
</style>