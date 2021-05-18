<template>
  <div class="column col-8 col-mx-auto resume-container">
    <div class="columns">
      <div class="column col-12">
        <div class="h3 resume-container-header" id="basic-info">
          基本信息
        </div>
      </div>
      <div class="column col-3 u-flex-center">
        <img class="resume-avatar" src="https://avatars3.githubusercontent.com/u/5625783" alt="">
      </div>
      <div class="column col-3 u-flex-center">
        <a class="resume-name" target="_blank" href="https://github.com/twocucao">
          twocucao
        </a>
      </div>
      <div class="column col-6">
        <blockquote>
          <p>Life is short, I use Python / JavaScript</p>
          <cite> - twocucao</cite>
        </blockquote>
        <blockquote>
          <kbd>后端🐶</kbd>
          <kbd>爬虫🕷</kbd>
          <kbd>数据分析🦁</kbd>
          偶尔也写写
          <kbd>前端</kbd>
        </blockquote>
      </div>
      <div class="column col-3">
        <div class="ft-social-card">
          <span class="iconfont iconfont-zhihu"></span>
          B 乎
          <p>分享刚编的故事</p>
        </div>
      </div>
      <div class="column col-3">
        <div class="ft-social-card">
          <span class="iconfont iconfont-juejin"></span>
          掘金
          <p>挖掘更多的前端</p>
        </div>
      </div>
      <div class="column col-3">
        <div class="ft-social-card">
          <span class="iconfont iconfont-jianshu"></span>
          简书
          <p>喝掉更浓的鸡汤</p>
        </div>
      </div>
      <div class="column col-3">
        <div class="ft-social-card">
          <span class="iconfont iconfont-github"></span>
          Github
          <p>复制更多的代码</p>
        </div>
      </div>
      <div class="column col-6">
        <div class="datagrid">
          <table>
            <tbody>
            <tr>
              <td>电子邮箱</td>
              <td>twocucao@gmail.com</td>
            </tr>
            <tr>
              <td>我的小站</td>
              <td>http://twocucao.xyz</td>
            </tr>
            <tr>
              <td>知乎专栏</td>
              <td>http://zhuanlan.zhihu.com/twocucao</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column col-6">
        <div class="datagrid">
          <table>
            <tbody>
            <tr>
              <td>爱Python</td>
              <td>http://love-python.cn</td>
            </tr>
            <tr>
              <td>学校</td>
              <td>常州大学本科</td>
            </tr>
            <tr>
              <td>专业</td>
              <td>软件工程系</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicInfo',
  components: {},
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
