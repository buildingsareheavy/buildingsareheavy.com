<template>
  <Layout :show-logo="false">
    <div class="portfolio">
      <h1 class="page-title text-center space-bottom">Portfolio</h1>

      <div class="portfolio__item" v-for="item in $page.portfolioItems.edges" :key="item.node.id">
        <h2>{{ item.node.title }}</h2>
        <p>{{ item.node.description_1 }}</p>

        <p v-if="item.node.description_2">{{ item.node.description_2 }}</p>
        <a :src="item.node.url_full">{{item.node.url_name}}</a>
        <g-image :src="item.node.image" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
{
  portfolioItems: allPortfolioItems {
    edges {
      node {
        id
        title
        description_1
        description_2
        url_full
        url_name
        image
      }
    }
  }
}
</page-query>

<script>
export default {
  components: {},
  metaInfo: {
    title: "Portfolio"
  }
};
</script>

<style lang="scss">
.portfolio {
}
</style>

