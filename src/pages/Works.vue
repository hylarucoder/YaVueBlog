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
              <div class="g-article-row">
                <h1>我的博客</h1>
                <article>
                  文章1
                </article>
                <article>
                  文章2
                </article>
                <article>
                  文章3
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="g-article-row">
                <h1>热门文章</h1>
                <article>
                  文章1
                </article>
                <article>
                  文章2
                </article>
                <article>
                  文章3
                </article>
              </div>
            </div>
            <div class="columns">
              <div class="g-article-row">
                <h1>热门文章</h1>
                <article>
                  文章1
                </article>
                <article>
                  文章2
                </article>
                <article>
                  文章3
                </article>
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
  export default {
    name: 'Gallery',
    components: {
      Footer: () => import('./commons/Footer.vue'),
      PromotionCard: () => import('./commons/PromotionCard.vue'),
      CategoryCard: () => import('./commons/CategoryCard.vue'),
      TagsCard: () => import('./commons/TagsCard.vue'),
      ProfileCard: () => import('./commons/ProfileCard.vue')
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
</style>
