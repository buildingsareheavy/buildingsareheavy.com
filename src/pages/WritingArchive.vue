<template>
  <Layout>
    <h1>boo</h1>
    <div class="writings" v-for="writing in $page.writing.edges" :key="writing.node.id">
      <g-link :to="writing.node.path">
        <p>{{writing.node.title}}</p>
      </g-link>
      <p>{{writing.node.excerpt }}</p>
      <p>
        Tags:
        <span v-for="tags in writing.node.tags" :key="tags.id">{{ tags.id}}</span>
      </p>
      <g-image v-if="writing.node.cover_image" :src="writing.node.cover_image" />
      <hr />
    </div>
  </Layout>
</template>

<page-query>
query writing {
    writing: allWriting {
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
  name: "writing-archive"
};
</script>

<style lang="scss">
</style>