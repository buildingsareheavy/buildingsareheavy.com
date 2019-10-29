<template>
  <Layout>
    <main class="photography">
      <h1 class="page-title">Photography</h1>
      <photography class="photography__container">
        <article
          class="photography__item"
          v-for="photography in $page.photography.edges"
          :key="photography.node.id"
          @click="ArticlePath(photography.node.path)"
        >
          <figure v-if="photography.node.cover_image">
            <g-image
              :src="photography.node.cover_image"
              :alt="`Cover Image of ` + photography.node.title"
            />
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
        </article>
      </photography>
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
  },
  methods: {
    ArticlePath(path) {
      return this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
.photography {
  &__container {
    @include bigger-than($tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }
  &__item {
    background: var(--white);
    border-radius: var(--radius);
    margin: 1rem auto;
    transition: all 0.5s;
    box-shadow: 0px 0px 12px 2px var(--bg-code);

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
      box-shadow: 0px 0px 12px 12px var(--bg-code);
    }
    img {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: 0px -5px 12px 2px var(--bg-code);
    }
    &-content {
      padding: 1rem 2rem;
      margin-top: -2rem;
      h2 {
        margin-top: 2rem;
        margin-bottom: 0;
      }
    }
  }
}
</style>