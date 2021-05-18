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
import Footer from "./commons/Footer.vue";
import ArticleSummaryCard from "../components/Common/ArticleSummaryCard.vue";
import ProfileCard from "./commons/ProfileCard.vue";
import PromotionCard from "./commons/PromotionCard.vue";
import CategoryCard from "./commons/CategoryCard.vue";
import TagsCard from "./commons/TagsCard.vue";

export default {
  name: 'Gallery',
  components: {
    Footer,
    ArticleSummaryCard,
    ProfileCard,
    PromotionCard,
    CategoryCard,
    TagsCard,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
