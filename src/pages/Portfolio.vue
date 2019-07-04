<template>
  <Layout :show-logo="false">
    <div class="portfolio">
      <h1 class="page-title text-center space-bottom">Portfolio</h1>

      <PortfolioItem />

      <!-- <img src="../assets/images/put-it-on-the-blog.jpg" /> -->
    </div>
  </Layout>
</template>



<script>
import PortfolioItem from "../components/PortfolioItem";
export default {
  components: {
    PortfolioItem
  },
  metaInfo: {
    title: "Portfolio"
  }
};
</script>

<style lang="scss">
.portfolio {
  &__item {
    border: 1px solid currentColor;
  }
}
</style>

