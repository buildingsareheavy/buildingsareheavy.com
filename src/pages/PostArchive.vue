<template>
  <Layout>
    <h1>boo</h1>
    <div class="posts" v-for="post in $page.post.edges" :key="post.node.id">
      <g-link :to="post.node.path">
        <p>{{post.node.title}}</p>
      </g-link>
      <p>{{post.node.excerpt }}</p>
      <p>
        Tags:
        <span v-for="tags in post.node.tags" :key="tags.id">{{ tags.id}}</span>
      </p>
      <g-image v-if="post.node.cover_image" :src="post.node.cover_image" />
      <hr />
    </div>
  </Layout>
</template>

<page-query>
query Post {
    post: allPost {
        edges {
            node {
                title
                excerpt
                path
                cover_image (width: 720, blur: 10)
                 tags {
            id
        }
            }
        }
    }
}
</page-query>

<script>
export default {
  name: "post-archive"
};
</script>

<style lang="scss">
</style>