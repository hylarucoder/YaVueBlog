<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Header: () => import('./pages/commons/Header.vue'),
    Footer: () => import('./pages/commons/Footer.vue'),
  }
}
</script>

<style lang="scss">

  $primary-color: #37b24d;
  $dark-color: #2b5732;
  $body-bg: #f9f9f9;
  @import '~spectre.css/src/spectre-icons.scss';
  @import '~spectre.css/src/spectre.scss';
  @import '~spectre.css/src/spectre-exp.scss';
  @import './assets/theme-future/index.css';
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
