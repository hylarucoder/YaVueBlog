<template>
  <header class="g-header">
    <div class="m-search-form">
      <input
        type="text"
        placeholder="请输入搜索词"
        v-model="searched_words"
        @mouseenter="searchContentShow = true"
        @mouseleave="searchContentShow = false"
      />
      <div
        class="search-content"
        @mouseenter="searchContentShow = true"
        @mouseleave="searchContentShow = false"
        v-show="searchContentShow && searched_words.length > 1"
      >
        <div class="m-simple-card">
          <span>标签建议</span>
          <div class="keywords-suggestions">
            <ul>
              <li v-for="item in keywords_suggestions">
                <span class="label label-primary" @click="onTagClick">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-simple-card">
          <span>全文搜索</span>
          <div class="article-suggestions">
            <ul>
              <li v-for="item in articles_suggestions">
                <div class="article-suggestions-wrapper">
                  <div
                    class="article-suggestions-title"
                    :title="item.origin_title"
                    @click="onSearchedPostClick"
                    v-html="item.title"
                  ></div>
                  <div
                    class="article-suggestions-content"
                    v-html="item.content"
                    :title="item.origin_title"
                    @click="onSearchedPostClick"
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ul id="nav">
      <li v-for="item in menus" :key="item.name">
        <router-link :to="item.url">{{ item.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { searchBlogPost } from "../../api/blog"

const MENUS = [
  { url: "/", name: "首页", icon: "" },
  { url: "/blog", name: "博客", icon: "" },
  { url: "/archive", name: "归档", icon: "" },
  { url: "/works", name: "作品", icon: "" },
  { url: "/gallery", name: "画廊", icon: "" },
  { url: "/about", name: "关于我", icon: "" },
]

export default {
  name: "Header",
  data() {
    return {
      menus: MENUS,
      keywords_suggestions: [],
      articles_suggestions: [],
      searched_words: "",
      searchContentShow: false,
    }
  },
  created() {},
  mounted() {
    this.keywords_suggestions = []
    this.articles_suggestions = []
  },
  watch: {
    searched_words: function (value) {
      // 简单的限流
      if (this.searchTimer) {
        clearTimeout(this.searchTimer)
      }
      this.searchTimer = setTimeout(() => {
        this.searching(value)
      }, 500)
    },
  },
  methods: {
    searching: function (value) {
      searchBlogPost({
        search_words: value.toLowerCase(),
      }).then((res) => {
        this.keywords_suggestions = res.results.suggestions
        this.articles_suggestions = res.results.searched_posts
      })
    },
    onTagClick: function (e) {
      this.searched_words = e.target.innerText
    },
    onSearchedPostClick: function (e) {
      let title = e.target.getAttribute("title")
      if (!title) {
        title = e.currentTarget.getAttribute("title")
      }
      if (title) {
        this.$router.push("/blog/post/" + title)
      }
    },
  },
}
</script>

<style></style>
