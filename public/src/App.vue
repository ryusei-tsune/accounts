<template>
  <div id="app">
    <AppBar></AppBar>
    <router-view />
  </div>
</template>
<script>
import AppBar from "@/components/app-bar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
