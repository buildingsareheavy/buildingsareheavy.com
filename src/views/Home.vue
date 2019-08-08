<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <details>
      <summary>This is a summary</summary>
      <p>A p tag</p>
      <p>Another p tag...</p>
      <hr>
    </details>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
details {
  summary {
    cursor: pointer;
  }
}

details[open] summary ~ * {
  animation: sweep 0.75s ease-in-out;
}

@keyframes sweep {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>

