<template>
  <Layout>
    <main class="portfolio container">
      <p>Archive of work from various agencies, clients, friends and personal projects.</p>
      <hr />
      <div
        class="portfolio__item"
        v-for="portfolio in $page.portfolio.edges"
        :key="portfolio.node.id"
      >
        <figure>
          <g-image v-if="portfolio.node.image" :src="portfolio.node.image" />
        </figure>
        <div class="portfolio__item-content">
          <h1>{{portfolio.node.title}}</h1>
          <div v-html="portfolio.node.content" />
        </div>
        <g-link :to="portfolio.node.link_url">{{ portfolio.node.link_name }}</g-link>
        <hr />
        <br />
      </div>
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
</style>