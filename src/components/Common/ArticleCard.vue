<template>
  <article class="g-article">
    <div class="posts-expand">
      <article class="post post-type-normal"
               style="opacity: 1; display: block; transform: translateY(0px);">
        <link itemprop="mainEntityOfPage" href="http://twocucao.xyz/2017/12/28/AllStuffAboutCSS/">

        <span>
          <meta itemprop="name" content="Micheal Gardner">
          <meta itemprop="description" content="">
          <meta itemprop="image" content="http://oh1n2bfoj.bkt.clouddn.com/avatar.png">
        </span>

        <span>
          <meta itemprop="name" content="MG的编程小屋">
        </span>
        <header class="post-header">
          <h1 class="post-title" itemprop="name headline">{{ article["title"] }} </h1>
          <div class="post-meta">
          <span class="post-time">
              <span class="post-meta-item-icon">
                <i class="fa fa-calendar-o"></i>
              </span>
                <span class="post-meta-item-text">发表于</span>
              <time title="创建于" itemprop="dateCreated datePublished" datetime="2017-12-28T18:41:47+08:00">
                {{ article["publish_date"] | formatDate }}
              </time>
          </span>
            <span class="post-category">
              <span class="post-meta-divider">|</span>
              <span class="post-meta-item-icon">
                <i class="fa fa-folder-o"></i>
              </span>
                <span class="post-meta-item-text">分类于</span>
                <span>
                  <router-link :to="`/blog/category/${article.category.id}`" v-if="article.category">
                    <span>
                      {{ article["category"]["name"] }}
                    </span>
                  </router-link>
                </span>
            </span>
            <div class="post-wordcount">
              <span class="post-meta-divider">|</span>
              <span class="post-meta-item-icon">
                  <i class="fa fa-file-word-o"></i>
                </span>
              <span class="post-meta-item-text">字数统计</span>
              <span title="字数统计">
                   {{ article["char_num"] }}
                </span>
              <span class="post-meta-divider">|</span>
              <span class="post-meta-item-icon">
                  <i class="fa fa-clock-o"></i>
                </span>
              <span class="post-meta-item-text">阅读时长</span>
              <span title="阅读时长">
                  {{ Math.floor(article["char_num"] / 300) * 1 }}min
                </span>
            </div>
          </div>
          <div class="post-tags">
            <router-link :to="`/blog/tags/${item.id}`" v-for="item in article['tags']" :key="item.id">
              <span class="label label-rounded">
                {{ item.name }}
              </span>
            </router-link>
          </div>
        </header>
        <div class="post-body" itemprop="articleBody">
          <vue-markdown :markdownContent="article['content']" @mdTocReady="handleTocReady"></vue-markdown>
        </div>

        <footer class="post-footer">
          <div>
            <h5>
              文档信息
            </h5>
            <p>
              版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）
            </p>
          </div>
        </footer>
      </article>
      <div class="post-spread">
      </div>
    </div>
  </article>
</template>

<script>
import * as VueMarkdown from './VueMarkdown.vue'

export default {
  name: 'article-card',
  props: {
    article: {
      type: [Object, String],
      default: {
        'id': 61,
        'title': '关于 CSS 你应该知道的一切',
        'content': '',
        'vote_num': 0,
        'category': {
          'id': 14,
          'name': '未分类',
          'order_num': 0
        },
        'tags': [
          {
            'id': 65,
            'name': '前端开发',
            'order_num': 0
          },
          {
            'id': 66,
            'name': 'CSS',
            'order_num': 0
          }
        ],
        'author': 1,
        'publish_date': '2017-12-28T18:41:47+08:00'
      }
    },
  },
  data() {
    return {}
  },
  components: {
    VueMarkdown
  },
  methods: {
    handleTocReady: function (v) {
      this.$emit('articleTocReady', v)
    }
  }
}
</script>

<style lang="scss">
</style>
