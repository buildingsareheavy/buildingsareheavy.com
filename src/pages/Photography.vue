<template>
  <Layout>
    <main class="photography">
      <p>Photography Archive</p>
      <hr />
      <div
        class="photography__item"
        v-for="photography in $page.photography.edges"
        :key="photography.node.id"
      >
        <figure>
          <g-image v-if="photography.node.cover_image" :src="photography.node.cover_image" />
        </figure>
        <div class="photography__item-content">
          <g-link :to="photography.node.path">
            <h1>{{photography.node.title}}</h1>
          </g-link>
          <small>{{photography.node.date }}</small>
          <p>{{photography.node.excerpt }}</p>
          <p>
            Tags:
            <span v-for="tags in photography.node.tags" :key="tags.id">{{ tags.id}}</span>
          </p>
        </div>
        <hr />
      </div>
      <Pager class="photography__pagination pagination" :info="$page.photography.pageInfo" />
    </main>
  </Layout>
</template>

<page-query>
query Photography($page: Int) {
    photography: allPhotography(perPage: 6, page: $page) @paginate {
       pageInfo {
      totalPages
      currentPage
    }
        edges {
            node {
                title
                excerpt
                path
                date (format: "D MMMM YYYY")
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
import { Pager } from "gridsome";

export default {
  name: "photography-archive",
  components: {
    Pager
  }
};
</script>

<style lang="scss">
</style>