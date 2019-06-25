<template>
  <Layout :show-logo="false">

<div class="blog posts">
      <div class="content-box">
        <h1>Blog</h1>
      </div>
  
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
    title: "Blog"
  }
};
</script>

<style lang="scss">

</style>
