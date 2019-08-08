<template>
  <div id="app">
    <nav id="nav-main">
      <router-link to="/">About</router-link>|
      <router-link to="/blog">Blog</router-link>|
      <router-link to="/portfolio">Portfolio</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  img {
    max-width: 100%;
  }
}
#nav-main {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
