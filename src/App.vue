<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "游ゴシック", "Yu Gothic", "游ゴシック体", YuGothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#footer {
  margin-top: 50px;
}
</style>
