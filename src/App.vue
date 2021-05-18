<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './pages/commons/Header.vue'
import Footer from './pages/commons/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
  $primary-color: #37b24d;
  $dark-color: #2b5732;
  $body-bg: #f9f9f9;
  @import '../node_modules/spectre.css/src/spectre-icons.scss';
  @import '../node_modules/spectre.css/src/spectre.scss';
  @import '../node_modules/spectre.css/src/spectre-exp.scss';
  // @import './assets/theme-future/index.css';
  a {
    &:focus,
    &:hover,
    &:active,
    &.active {
      text-decoration: none;
      box-shadow: 0 0 0 0;
    }
  }
  #app {
  }
</style>
