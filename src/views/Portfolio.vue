<template>
  <main class="portfolio container">
    <p>Archive of work from various agencies, clients, friends and personal projects.</p>
    <hr />
    <div v-for="(item,index) in items" :key="item.image + '_' + index">
      <article>
        <figure>
          <img :src="item.image" alt />
        </figure>
        <div class="content">
          <h2>{{ item.title }}</h2>
          <div v-html="item.desc"></div>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import { butter } from "@/buttercms";
export default {
  name: "portfolio",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getItems() {
      butter.page
        .retrieve("*", "portfolio", { page: 1, page_size: 10 })
        .then(res => {
          // eslint-disable-next-line
          console.log(res.data.data.fields.portfolio_item);
          this.items = res.data.data.fields.portfolio_item;
        })
        .catch(res => {
          // eslint-disable-next-line
          console.log("NOPE" + res);
        });
    }
  },
  created() {
    this.getItems();
  }
};
</script>

<style lang="scss">
</style>
