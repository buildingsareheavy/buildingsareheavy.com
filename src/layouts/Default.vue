<template>
  <div class="layout">
    <GlobalHeader />
    <slot />
    <GlobalFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GlobalHeader from "../components/global/GlobalHeader";
import GlobalFooter from "../components/global/GlobalFooter";
export default {
  name: "layout-default",
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>

<style lang="scss">
.layout {
  max-width: $desktop;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
main {
  animation: fadein 1.25s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
