<template>
  <div>
    <h1>Portfolio Item</h1>
    <div class="portfolio__item" v-for="item in $static.portfolioItems.edges" :key="item.node.id">
      <h2>{{ item.node.title }}</h2>
      <p>{{ item.node.description_1 }}</p>

      <p v-if="item.node.description_2">{{ item.node.description_2 }}</p>
      <a :href="item.node.url_full">{{item.node.url_name}}</a>
      <!-- Portfolio Images -->
      <img :src="item.node.image" />
    </div>
    <!-- Independently called image -->
    <img src="../assets/images/put-it-on-the-blog.jpg" />

    <!-- Calling portfolio.json from import, same problems -->
    <!-- <div v-for="item in portfolio" :key="item.id">
      <p>{{ item.title }}</p>
      <g-image :src="item.image" alt />
    </div>-->
  </div>
</template>



<script>
// import portfolio from "../data/portfolio.json";
export default {
  // JSON data stored in /src/data/portfolio.json
  // Config for calling JSON data is in gridsome.server.js
  //
  // Portfolio images only work if you call the image somewhere else outside of the v-for loop.
  // I called "Put It On The Blog" below so that one should come up, but not the other ones...
  // Below the independently called image, I also tried calling it without GraphQL, but it's the same problem. it won't GET the path of the images.
  // I've tried a variety of different paths in the portfolio.json, but the current paths are the only ones that will show up (with another independent request that is).
  // You can also try switching all of this to Portfolio.vue inside the pages directory and from <static-query> (for components) to <page-query> (for pages and templates) but I think it's still the same either way.
  //
  // REFERENCES: GRIDSOME LINKS
  // Image usage via GraphQL - https://gridsome.org/docs/images/#usage-via-graphql
  // Data - https://gridsome.org/docs/data/
  //
  // REFERENCES: GITHUB ISSUES
  // g-images with dynamic paths not correctly generating full feature set - https://github.com/gridsome/gridsome/issues/292
  // How to use g-image with graphQL? - https://github.com/gridsome/gridsome/issues/338
  // Image handling  - https://github.com/gridsome/gridsome/issues/60
  data() {
    return {
      portfolio
    };
  }
};
</script>

<style>
</style>
