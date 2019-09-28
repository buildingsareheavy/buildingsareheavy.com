<template>
  <Layout>
    <div class="writing" v-for="writing in $page.writing.edges" :key="writing.node.id">
      <g-link :to="writing.node.path">
        <p>{{writing.node.title}}</p>
      </g-link>
      <p>{{writing.node.excerpt }}</p>
      <p>
        Tags:
        <span v-for="tags in writing.node.tags" :key="tags.id">{{ tags.id}}</span>
      </p>
      <hr />
    </div>
    <Pager class="writing__pagination pagination" :info="$page.writing.pageInfo" />
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