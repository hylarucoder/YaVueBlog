<template>
  <div class="p-article-post">
    <div class="columns">
      <div class="col-1 hide-xl">
      </div>
      <div class="col-2 col-xl-3">
        <div class="g-sidebar">
          <h4>本文目录</h4>
          <div v-html="articleToc"></div>
        </div>
      </div>
      <div class="col-6 col-xl-8">
        <ArticleCard :article="article" @articleTocReady="initArticleToc"></ArticleCard>
      </div>
      <div class="col-2 col-xl-3">
        <div class="g-sidebar">
          <h4>公告</h4>
          <div>
            <p>
              MG 的编程小屋，其实就是我整理笔记,写写文章的地方。
            </p>
            <p>
              专注 Python / JavaScript ,爱折腾的全干工程师(Full Stuff Engineer)
            </p>
            <p>
              如果我的文章给您的日常开发带来很大帮助的话
            </p>
            <p>
              您可以关注我的公众号
            </p>
            <div>
              <img src="/static/images/mp_wechat.jpg" alt="" style="width: 200px">
            </div>
            <p>
              也可以扫描二维码进行投喂
            </p>
            <div>
              <img src="/static/images/tips_wechat.jpeg" alt="" style="width: 200px">
            </div>
            <p>
              听说关注或者进行投喂的人,技术都越来越牛咯.
            </p>
          </div>
        </div>
      </div>
      <div class="col-1 hide-xl">
      </div>
    </div>
  </div>
</template>

<script>
import {fetchBlogPost} from '../../api/blog';

export default {
  name: 'BlogPage',
  data() {
    return {
      article: '',
      articleToc: undefined
    }
  },
  watch: {
    '$route.params': function () {
      this.initArticle()
    }
  },
  created() {
    this.initArticle()
  },
  mounted() {
  },
  methods: {
    initArticleToc: function (v) {
      this.articleToc = v;
    },
    initArticle: function () {
      let title = this.$route.params.title;
      fetchBlogPost(title).then((res) => {
        this.article = res;
      })
    }
  }
}
</script>

<style>
</style>
