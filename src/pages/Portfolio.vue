<template>
  <Layout>
    <main class="portfolio">
      <div class="portfolio__title">
        <h1>Archive of work from various agencies, clients, and personal projects.</h1>
      </div>
      <article
        class="portfolio__item"
        v-for="portfolio in $page.portfolio.edges"
        :key="portfolio.node.id"
      >
        <figure>
          <g-image v-if="portfolio.node.image" :src="portfolio.node.image" />
        </figure>
        <div class="portfolio__item-content">
          <h2>{{portfolio.node.title}}</h2>
          <g-link :to="portfolio.node.link_url">{{ portfolio.node.link_name }}</g-link>
          <div v-html="portfolio.node.content" />
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