<template>
  <Layout>
    <main class="writing">
      <h1 class="page-title">Writing</h1>
      <writing class="writing__container">
        <article
          class="writing__item"
          v-for="writing in $page.writing.edges"
          :key="writing.node.id"
          @click="ArticlePath(writing.node.path)"
        >
          <figure v-if="writing.node.cover_image">
            <g-image :src="writing.node.cover_image" :alt="`Cover Image of ` + writing.node.title" />
          </figure>
          <div class="writing__item-content">
            <h2>{{writing.node.title}}</h2>
            <small>{{writing.node.date }}</small>
            <p>{{writing.node.excerpt }}</p>
            <!-- <p>
            Tags:
            <span v-for="tags in writing.node.tags" :key="tags.id">{{ tags.id}}</span>
            </p>-->
          </div>
        </article>
      </writing>
      <Pager class="writing__pagination pagination" :info="$page.writing.pageInfo" />
    </main>
  </Layout>
</template>

<page-query>
query Writing($page: Int) {
    writing: allWriting(perPage: 6, page: $page) @paginate {
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
                cover_image (blur: 10)
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
  },
  methods: {
    ArticlePath(path) {
      return this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
.writing {
  &__container {
    @include bigger-than($tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
    }
  }
  &__item {
    background: var(--white);
    border-radius: var(--radius);
    margin: 1rem auto;
    transition: all 0.5s;
    box-shadow: 0px 0px 12px 2px var(--bg-code);

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
      box-shadow: 0px 0px 12px 12px var(--bg-code);
    }
    img {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: 0px -5px 12px 2px var(--bg-code);
    }
    &-content {
      padding: 1rem 2rem;
      margin-top: -2rem;
      h2 {
        margin-top: 2rem;
        margin-bottom: 0;
      }
    }
  }
}
</style>