<template>
  <Layout>
    <main class="photography">
      <div class="photography__title">
        <h1>Photography Archive</h1>
      </div>
      <article
        class="photography__item"
        v-for="photography in $page.photography.edges"
        :key="photography.node.id"
      >
        <g-link :to="photography.node.path">
          <figure>
            <g-image v-if="photography.node.cover_image" :src="photography.node.cover_image" />
          </figure>
          <div class="photography__item-content">
            <h2>{{photography.node.title}}</h2>
            <small>{{photography.node.date }}</small>
            <p>{{photography.node.excerpt }}</p>
            <!-- <p>
            Tags:
            <span v-for="tags in photography.node.tags" :key="tags.id">{{ tags.id}}</span>
            </p>-->
          </div>
        </g-link>
      </article>
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
.photography {
  &__title {
    margin: calc(-0.75rem);
    padding: 1rem;
    text-align: center;
  }
  &__item {
    background: var(--white);
    border-radius: var(--radius);
    margin: 3rem auto;
    max-width: $mobile;
    transition: all 0.5s;
    box-shadow: 0px 0px 12px 2px var(--bg-code);
    &:hover {
      transform: scale(0.95);
      box-shadow: 0px 0px 12px 12px var(--bg-code);
    }
    img {
      border-top-right-radius: var(--radius);
      border-top-left-radius: var(--radius);
      box-shadow: 0px -5px 12px 2px var(--bg-code);
    }
    &-content {
      padding: 1rem 2rem;
      margin-top: -2rem;
      h2 {
        font-size: 2rem;
        margin-bottom: 10px;
        line-height: 110%;
      }
    }
  }
}
</style>