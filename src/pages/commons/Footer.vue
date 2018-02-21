<template>
  <footer class="g-footer">
    <div class="g-footer-inner">
      <div class="g-footer-social-links">
        <a href="https://github.com/twocucao"> <span class="iconfont iconfont-github"></span> </a>
        <a href="https://juejin.im/user/57ad70476be3ff006b93abb1"> <span class="iconfont iconfont-juejin"></span> </a>
        <a href="https://juejin.im/user/57ad70476be3ff006b93abb1"> <span class="iconfont iconfont-zhihu"></span> </a>
        <a href="https://juejin.im/user/57ad70476be3ff006b93abb1"> <span class="iconfont iconfont-jianshu"></span> </a>
      </div>
      <div class="copyright">
        © 2014 - 2017
        <span class="author">@twocucao</span>
      </div>
      <div class="powered">
        Powered by Django VueJS
      </div>
      <div class="visited-count">
        网站 UV: 123090
        网站 PV: 123090
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'gfooter',
    data () {
      return {}
    }
  }
</script>

<style lang="scss">
  .g-footer {
    width: 100%;
    padding: 2.5rem 0 1.5rem 0;
    text-align: center;
    .g-footer-social-links {
      display: block;
      >a {
        >span {
          font-size: 1.4rem;
          margin: 0 0.5rem;
          color: #555;
        }
      }
    }

    .copyright, .powered , .visited-count {
      line-height: 1.2rem;
      font-size: 0.8rem;
    }
  }
</style>
