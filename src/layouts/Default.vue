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

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

img {
  width: 100%;
}
</style>
