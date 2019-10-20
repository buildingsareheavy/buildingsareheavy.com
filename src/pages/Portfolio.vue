<template>
  <Layout>
    <main class="portfolio">
      <h1>Portfolio</h1>
      <p>Archive of work from various agencies, clients, and personal projects.</p>

      <hr />

      <article
        class="portfolio__item"
        v-for="portfolio in $page.portfolio.edges"
        :key="portfolio.node.id"
      >
        <figure>
          <g-image v-if="portfolio.node.image" :src="portfolio.node.image" />
        </figure>
        <div class="portfolio__item-content">
          <h2 class="underline">{{portfolio.node.title}}</h2>
          <div v-html="portfolio.node.content" />
          <g-link :to="portfolio.node.link_url">{{ portfolio.node.link_name }}</g-link>
        </div>
      </article>
      <Pager class="portfolio__pagination pagination" :info="$page.portfolio.pageInfo" />
    </main>
  </Layout>
</template>

<page-query>
query Portfolio($page: Int) {
  portfolio: allPortfolio(sort: { by: "order", order: ASC }, perPage: 5, page: $page ) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        order
        title
        image
        link_name
        link_url
        content
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  name: "portfolio",
  components: {
    Pager
  }
};
</script>

<style lang="scss">
.portfolio {
  &__item {
    margin: 2rem 0;
    padding: 2rem;
    border-radius: var(--radius);
    background: var(--white);
    img {
      box-shadow: 0px -5px 12px 2px var(--bg-code);
    }
    @include bigger-than($tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
    &-content {
      align-self: start;
      padding: 1rem;
      padding-top: 0;
      h2 {
        margin-top: 0;
      }
    }
  }
}
</style>