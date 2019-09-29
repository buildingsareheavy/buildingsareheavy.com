<template>
  <Layout>
    <div class="portfolio" v-for="portfolio in $page.portfolio.edges" :key="portfolio.node.id">
      <h1>{{portfolio.node.title}}</h1>
      <g-link :to="portfolio.node.link_url">{{ portfolio.node.link_name }}</g-link>
      <g-image v-if="portfolio.node.image" :src="portfolio.node.image" />
      <div v-html="portfolio.node.content" />
    </div>
    <Pager class="portfolio__pagination pagination" :info="$page.portfolio.pageInfo" />
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
  name: "portfolio-archive",
  components: {
    Pager
  }
};
</script>

<style lang="scss">
</style>