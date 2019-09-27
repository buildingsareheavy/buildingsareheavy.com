<template>
  <Layout>
    <h1>boo</h1>
    <div
      class="photographys"
      v-for="photography in $page.photography.edges"
      :key="photography.node.id"
    >
      <g-link :to="photography.node.path">
        <p>{{photography.node.title}}</p>
      </g-link>
      <p>{{photography.node.excerpt }}</p>
      <p>
        Tags:
        <span v-for="tags in photography.node.tags" :key="tags.id">{{ tags.id}}</span>
      </p>
      <g-image v-if="photography.node.cover_image" :src="photography.node.cover_image" />
      <hr />
    </div>
  </Layout>
</template>

<page-query>
query Photography {
    photography: allPhotography {
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
  name: "photography-archive"
};
</script>

<style lang="scss">
</style>