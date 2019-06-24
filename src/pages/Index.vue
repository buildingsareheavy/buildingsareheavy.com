<template>
  <Layout :show-logo="false">

<h2 class="page__title">Blog</h2>
    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
{
  posts: allPost(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        path
        tags {
          id
          title
          path
        }
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
            id
            title
            path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Home"
  }
};
</script>

<style lang="scss">
.page__title {
  margin: 5px 0 25px;
  font-size: calc(var(--base-font-size) * 1.25);
  font-weight: normal;
}
</style>
