<template>
  <Layout>
    <div class="writing" v-for="writing in $page.writing.edges" :key="writing.node.id">
      <g-link :to="writing.node.path">
        <p>{{writing.node.title}}</p>
      </g-link>
      <p>{{writing.node.excerpt }}</p>
      <p>
        Tags:
        <span v-for="tags in writing.node.tags" :key="tags.id">{{ tags.id}}</span>
      </p>
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