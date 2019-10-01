<template>
  <Layout>
    <main class="writing">
      <p>Writing Archive</p>
      <hr />
      <div class="writing__item" v-for="writing in $page.writing.edges" :key="writing.node.id">
        <div class="writing__item-content">
          <g-link :to="writing.node.path">
            <p>{{writing.node.title}}</p>
          </g-link>
          <small>{{ writing.node.date }}</small>
          <p>{{writing.node.excerpt }}</p>
          <p>
            Tags:
            <span v-for="tags in writing.node.tags" :key="tags.id">{{ tags.id}}</span>
          </p>
          <hr />
        </div>
      </div>
      <Pager class="writing__pagination pagination" :info="$page.writing.pageInfo" />
    </main>
  </Layout>
</template>

<page-query>
query Writing($page: Int) {
    writing: allWriting(perPage: 2, page: $page) @paginate {
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
  name: "writing-archive",
  components: {
    Pager
  }
};
</script>

<style lang="scss">
</style>