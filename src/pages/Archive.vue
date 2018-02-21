<template>
  <div class="p-blog g-holygrail">
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
                <div class="h3">文章归档</div>
                <div class="timeline" v-for="month in months">
                  <div class="timeline-item">
                    <div class="timeline-left">
                      <a class="timeline-icon" href="#"></a>
                    </div>
                    <div class="timeline-content">
                      <!-- tiles structure -->
                      <p class="tile-subtitle">{{ month.month }}</p>
                      <p class="tile-title" v-for="article in month.articles">
                        <router-link :to="'/blog/post/' + article.title">
                          {{ article.title }}
                        </router-link>
                      </p>
                    </div>
                  </div>
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
  import {fetchPostArchive} from '../api/blog';

  export default {
    name: 'ArchivePage',
    components: {
      ArticleSummaryCard: () => import('../components/Common/ArticleSummaryCard.vue'),
      PromotionCard: () => import('./commons/PromotionCard.vue'),
      CategoryCard: () => import('./commons/CategoryCard.vue'),
      TagsCard: () => import('./commons/TagsCard.vue'),
      ProfileCard: () => import('./commons/ProfileCard.vue')
    },
    data() {
      return {
        months: []
      }
    },
    created() {
      fetchPostArchive({ }).then(res => {
        this.months = res.results;
      })
    }
  }
</script>

<style>
</style>
