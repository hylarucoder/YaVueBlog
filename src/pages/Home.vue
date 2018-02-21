<template>
  <div class="p-home g-holygrail">
    <div class="g-holygrail__body">
      <main class="g-holygrail__content">
        <div class="columns">
          <div class="col-3">
            <profile-card></profile-card>
            <category-card></category-card>
            <tags-card></tags-card>
            <promotion-card></promotion-card>
          </div>
          <div class="col-9">
            <div class="columns">
              <div class="terminal-window">
                <header class="terminal-header">
                  <div class="btn-close"></div>
                  <div class="btn-max"></div>
                  <div class="btn-min"></div>
                </header>
                <section class="terminal" id="terminal-input">
                </section>
              </div>
            </div>
            <div class="columns" v-show="false">
              <div class="g-article-row">
                <div class="h3">最近活动</div>
                <div class="columns">
                  <div class="column col-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="card-title h5">
                          本站
                        </div>
                        <div class="card-subtitle text-gray">最近活跃时间 2 小时前</div>
                      </div>
                      <div class="card-body">
                        最近一周
                        <ul>
                          <li>
                            新增文章
                          </li>
                          <li>
                            更新文章
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-primary">查看</button>
                      </div>
                    </div>
                  </div>
                  <div class="column col-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="card-title h5">Github</div>
                        <div class="card-subtitle text-gray">最近活跃时间 2 小时前</div>
                      </div>
                      <div class="card-body">
                        最近一月:
                        <ul>
                          <li>
                            新增 commit
                          </li>
                          <li>
                            新增 commit
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-primary">地址</button>
                      </div>
                    </div>
                  </div>
                  <div class="column col-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="card-title h5">掘金</div>
                        <div class="card-subtitle text-gray">最近活跃时间 3 小时前</div>
                      </div>
                      <div class="card-body">
                        最近一周
                        <ul>
                          <li>
                            更新专栏一篇
                          </li>
                          <li>
                            新增 commit
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-primary">地址</button>
                      </div>
                    </div>
                  </div>
                  <div class="column col-6">
                    <div class="card">
                      <div class="card-header">
                        <div class="card-title h5">知乎/简书</div>
                        <div class="card-subtitle text-gray">最近活跃时间 2 小时前</div>
                      </div>
                      <div class="card-body">
                        最近一周
                        <ul>
                          <li>
                            更新回答一篇
                          </li>
                          <li>
                            更新专栏一篇
                          </li>
                        </ul>
                      </div>
                      <div class="card-footer">
                        <button class="btn btn-primary">地址</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="g-article-row">
                <div class="h3">最近更新</div>
                <div class="columns">
                  <ArticleSummaryCard
                    v-for="article in articles"
                    :article="article"
                    :key="article.id">
                  </ArticleSummaryCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav class="g-holygrail__nav">
      </nav>
      <aside class="g-holygrail__ads">
      </aside>
    </div>
  </div>
</template>

<script>
  import Typed from 'typed.js';
  import {fetchPostSummaryList} from '../api/blog';

  let lines = [
    '$ <span class="text-warning">pyenv</span> `<span class="text-error">activate</span>` `<span class="text-success">3.6.3/envs/py3-daily</span>`',
    '^1000 `<span class="text-success">(3.6.3/envs/py3-daily)</span> $ `ipython',
    '^1000 `Python 3.6.3 (default, Oct 18 2017, 21:27:44)',
    'Type \'copyright\', \'credits\' or \'license\' for more information',
    'IPython 6.2.1 -- An enhanced Interactive Python. Type \'?\' for help.`',
    '`<span class="text-success">In  [1]:</span>` import this',
    '`<span class="text-success">Out [1]:</span>` `Hello, Welcome to \'MG的编程小屋\'',
    '',
    '在数据爆炸时代, 我们还能在这个小站相遇',
    '这既是您有眼光, 也是你我的一种缘分呢',
    '谈谈 Python / JavaScript',
    '聊聊各种我所知道的技术`',
    '^500 Life is Short , I use `<span class="text-success">Python</span>`'
  ];

  lines = [lines.join('<br>')];

  export default {
    name: 'HomePage',
    components: {
      Footer: () => import('./commons/Footer.vue'),
      ArticleSummaryCard: () => import('../components/Common/ArticleSummaryCard.vue'),
      ProfileCard: () => import('./commons/ProfileCard.vue'),
      PromotionCard: () => import('./commons/PromotionCard.vue'),
      CategoryCard: () => import('./commons/CategoryCard.vue'),
      TagsCard: () => import('./commons/TagsCard.vue'),
    },
    data() {
      return {
        articles: []
      }
    },
    created() {
      this.fetchArticles()
    },
    mounted() {
      let options = {
        strings: lines,
        typeSpeed: 60,
        backSpeed: 0,
        loop: false
      };
      let typed = new Typed('.terminal', options);
      typed.start();
    },
    methods: {
      fetchArticles: function () {
        if (!this.$route.params.name) {
          fetchPostSummaryList({
            'ordering': '-publish_date'
          }).then(res => {
            this.articles = res.results;
          })
        }
      }
    }
  }
</script>

<style>
</style>
