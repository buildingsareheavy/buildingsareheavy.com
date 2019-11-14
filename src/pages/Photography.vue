<template>
  <Layout>
    <main class="photography">
      <h1 class="page-title">Photography</h1>
      <div class="photography__container">
        <article
          class="photography__item"
          v-for="photography in $page.photography.edges"
          :key="photography.node.id"
          @click="ArticlePath(photography.node.path)"
          tabindex="0"
          v-on:keyup.enter="ArticlePath(photography.node.path)"
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
      </div>
      <Pager
        class="photography__pagination pagination"
        :info="$page.photography.pageInfo"
        linkClass="btn"
      />
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
    margin: var(--spacing) auto;
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
    cursor: pointer;
    transition: transform 0.5s, box-shadow 0.5s;
    box-shadow: 0 0.25em 0.75em 0.25em var(--grey);
    &:hover {
      transform: scale(0.95);
      box-shadow: 0 0.25em 0.75em 0.25em var(--bg-code);
    }
    img {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
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