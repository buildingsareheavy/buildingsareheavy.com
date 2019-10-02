<template>
  <Layout>
    <main class="writing">
      <div class="writing__title">
        <h1>Writing Archive</h1>
      </div>
      <article class="writing__item" v-for="writing in $page.writing.edges" :key="writing.node.id">
        <g-link :to="writing.node.path">
          <div class="writing__item-content">
            <h2>{{writing.node.title}}</h2>
            <small>{{ writing.node.date }}</small>
            <p>{{writing.node.excerpt }}</p>
            <!-- <p>
              Tags:
              <span v-for="tags in writing.node.tags" :key="tags.id">{{ tags.id}}</span>
            </p>-->
          </div>
        </g-link>
      </article>
      <Pager class="writing__pagination pagination" :info="$page.writing.pageInfo" />
    </main>
  </Layout>
</template>

<page-query>
query Writing($page: Int) {
    writing: allWriting(perPage: 4, page: $page) @paginate {
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
.writing {
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
    &:hover {
      transform: scale(0.95);
      box-shadow: 0px 0px 12px 12px var(--bg-code);
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