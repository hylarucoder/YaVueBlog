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
                <div class="h3">最近更新</div>
                <div class="columns">
                  <ArticleSummaryCard
                    v-for="article in articles"
                    :article="article"
                    :key="article.id"
                  >
                  </ArticleSummaryCard>
                  <div class="col-12">
                    <Pagination
                      :total="page_total"
                      :current="page_current"
                      @page-item-clicked="onPageItemClicked"
                    ></Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav class="g-holygrail__nav"></nav>
      <aside class="g-holygrail__ads"></aside>
    </div>
  </div>
</template>

<script>
import { fetchPostSummaryList } from "../api/blog"
import Footer from "./commons/Footer.vue"
import ArticleSummaryCard from "../components/Common/ArticleSummaryCard.vue"
import ProfileCard from "./commons/ProfileCard.vue"
import PromotionCard from "./commons/PromotionCard.vue"
import CategoryCard from "./commons/CategoryCard.vue"
import TagsCard from "./commons/TagsCard.vue"

export default {
  name: "BlogPage",
  data() {
    return {
      page_total: 1,
      page_current: 1,
      articles: [],
    }
  },
  components: {
    Footer,
    ArticleSummaryCard,
    ProfileCard,
    PromotionCard,
    CategoryCard,
    TagsCard,
  },
  watch: {
    "$route.params": function () {
      this.fetchArticles()
    },
  },
  created() {
    this.fetchArticles()
  },
  mounted() {},
  methods: {
    fetchArticles: function (pageStr) {
      let { category, tags, page } = this.$route.params
      if (pageStr) {
        page = pageStr
      }
      let params = {}
      if (category) {
        params.category = category.split("/")[1]
      }
      if (tags) {
        params.tags = tags.split("/")[1]
      }
      if (page) {
        params.page = page.split("/")[1]
        this.page_current = parseInt(params.page)
      }
      if (!this.$route.params.name) {
        fetchPostSummaryList({
          ...params,
          ordering: "-publish_date",
        }).then((res) => {
          this.articles = res.results
          this.page_total = Math.ceil(res.count / 10)
        })
      } else {
        let { name, value } = this.$route.params
        let params = {
          ordering: "-publish_date",
        }
        params[name] = value
        fetchPostSummaryList(params).then((res) => {
          this.articles = res.results
          this.page_total = Math.ceil(res.count / 10)
        })
      }
    },
    onPageItemClicked: function (value) {
      this.page_current = parseInt(value)
      this.fetchArticles("page/" + value)
      /**
       * 居然把param给转义了,那只能华南个方式来了.
       *this.$routes.replace(
       *  {
       *    name: 'blogposts',
       *    params: {
       *      ...params,
       *      page: 'page/' + value
       *    }
       *  }
       *);
       */
      // let params = this.$route.params;
      // this.$routes.replace(
      //   {
      //     name: 'blogposts',
      //     params: {
      //       ...params,
      //       page: 'page/' + value
      //     }
      //   }
      // );
    },
  },
}
</script>

<style></style>
