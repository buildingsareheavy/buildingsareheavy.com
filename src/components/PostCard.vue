<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : post.poster}">
    <h2 class="post-card__title" v-html="post.title" />
    <PostMeta class="post-card__meta" :post="post" />
    <div class="post-card__image">
      <g-image alt="Cover image" v-if="post.cover_image" :src="post.cover_image" />
    </div>
    <div class="post-card__content">
      <p class="post-card__description" v-html="post.description" />
      <PostTags class="post-card__tags" :post="post" />
      <g-link class="post-card__link" :to="post.path">Link</g-link>
    </div>
  
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post'],
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;
  display: grid;
  @media screen and (max-width: 650px) {
  display: block;
  }
  grid-gap: calc(var(--space) / 3);
  grid-template-columns: 1fr 1fr;

  &__image {
    align-self: center;
    img {
        min-width: 100%;
      border-radius: var(--radius);
    }
    

    &:empty {
      display: none;
    }
  }

&__content {
  grid-column: 2 / 3;
}

  &__title {
    margin: 0;
    justify-self: center;
    grid-column: 1 / 3;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

&__meta {
  margin: -10px 0 0 0; 
    @media screen and (max-width: 650px) {
  margin: 5px 0 10px;
  }
  justify-self: center;
  grid-column: 1 / 3;
}

  &__tags {
    grid-column: 2 / 3;
    justify-self: end;
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>