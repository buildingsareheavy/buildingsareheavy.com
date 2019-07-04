<template>
  <div>
    <h1>Portfolio Item</h1>
    <div class="portfolio__item" v-for="item in $static.portfolioItems.edges" :key="item.node.id">
      <h2>{{ item.node.title }}</h2>
      <p>{{ item.node.description_1 }}</p>

      <p v-if="item.node.description_2">{{ item.node.description_2 }}</p>
      <a :href="item.node.url_full">{{item.node.url_name}}</a>
      <!-- This only works if you call the image somewhere else. I called "Put It On The Blog" below so that one should come up, but not the other ones... -->
      <!-- You can try switching it to Portfolio.vue inside the pages directory and from <static-query> to <page-query> but I think it's still the same -->
      <img :src="item.node.image" />
    </div>
    <img src="../assets/images/put-it-on-the-blog.jpg" />
  </div>
</template>


<static-query>
{
  portfolioItems: allPortfolioItems(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        title
        description_1
        description_2
        url_full
        url_name
        image (width:200)
      }
    }
  }
}
</static-query>

<script>
export default {};
</script>

<style>
</style>
