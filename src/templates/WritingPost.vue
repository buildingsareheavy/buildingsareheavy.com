<template>
  <Layout>
    <main class="writing-post">
      <div class="writing-post__header">
        <h1>{{ $page.writing.title }}</h1>
        <!-- <small class="subheading">{{ $page.writing.date }}</small> -->
        <p class="subheading">{{ $page.writing.excerpt }}</p>
      </div>
      <div class="writing-post__content">
        <VueRemarkContent />
        <div class="writing-post__content-end">
          <span>END</span>
        </div>
      </div>
    </main>
    <SyntaxHighlighting />
  </Layout>
</template>

<page-query>
query Writing($id: ID!) {
    writing(id: $id) {
        title
        excerpt
        cover_image
        date (format: "D MMMM YYYY")
    }
}
</page-query>

<script>
import SyntaxHighlighting from "../components/writing/SyntaxHighlighting";
export default {
  name: "writing-post",
  components: {
    SyntaxHighlighting,
  },
  metaInfo() {
    return {
      title: this.$page.writing.title,
      meta: [
        {
          name: "description",
          content: this.$page.writing.excerpt,
        },
        {
          property: "og:title",
          content: this.$page.writing.title,
        },
        {
          property: "og:description",
          cotent: this.$page.writing.excerpt,
        },
        {
          property: "og:image",
          content: this.$page.writing.cover_image || "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.writing-post {
  &__header {
    text-align: center;
    padding: calc(var(--spacing) / 2) 0;
    border-bottom: 2px solid var(--divider-color);
    h1 {
      margin-bottom: 0;
    }
  }
  &__content {
    padding-top: calc(var(--spacing) / 2);
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: calc(var(--spacing) / 2);
      margin-bottom: 0;
    }
    pre {
      margin-bottom: calc(var(--spacing) / 2);
    }
    img {
      margin: 1em auto;
    }
    &-end {
      padding-top: calc(var(--spacing) / 1);
      text-align: center;
    }
  }
  .code-toolbar {
    display: flex;
    flex-direction: column-reverse;
    pre {
      z-index: 1;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
    .toolbar {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0.25em 0.25em 0.75em 1em;
      margin-bottom: -1em;
      border-radius: calc(var(--radius) / 2);
      background: var(--divider-color);
      &-item:first-child {
        font-size: 0.85em;
        align-self: center;
        color: var(--text-color-muted);
      }
      &-item:nth-child(2) {
        justify-self: end;
        button {
          border-radius: calc(var(--radius) / 1.5);
          border: 1px solid var(--text-color-muted);
          color: var(--text-color-muted);
          background: transparent;
          font-size: 0.75em;
          padding: 0.25em 0.5em;
          /* transform: translateY(-0.15em); */
          transition: color 250ms, border 250ms, background 250ms;
          &:focus,
          &:hover {
            color: var(--text-color);
            border: 1px solid var(--text-color-muted);
            background: var(--text-color-muted);
          }
        }
      }
    }
  }
}
</style>
