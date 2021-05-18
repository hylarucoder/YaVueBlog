<template>
  <article
    class="article-summary-card col-sm-12 col-md-6 col-xl-6 col-lg-6 col-4"
  >
    <div class="article-summary-inner">
      <router-link class="thumbnail" :to="'/blog/post/' + article.title">
        <span
          style="background-image: url(/static/images/shoes.jpg);"
          alt=""
          class="thumbnail-image"
        ></span>
        <div class="article-meta thumbnail-meta">
          <div class="article-favor u-gutter">
            <span class="iconfont iconfont-heart"></span>
            {{ article.vote_num }}
          </div>
          <div class="article-reading u-gutter">
            <span class="iconfont iconfont-reading"></span>
            {{ Math.floor(article.char_num / 300) }}min
          </div>
          <div class="article-wordcount u-gutter">
            <span class="iconfont iconfont-wordcount"></span>
            {{ article.char_num }}
          </div>
        </div>
      </router-link>
      <router-link class="article-title" :to="'/blog/post/' + article.title">
        <h2>
          {{ article.title }}
        </h2>
      </router-link>
      <div class="article-meta">
        <div class="article-category u-gutter">
          <router-link
            class="article-category-link"
            :to="'/blog/category/' + article.category.id"
          >
            {{ article.category.name }}
          </router-link>
        </div>
        <div class="article-date">
          {{ article.publish_date | formatDate }}
        </div>
      </div>
      <div class="article-meta">
        <div class="article-tags">
          <router-link
            :to="`/blog/tags/${item.id}`"
            v-for="item in article.tags"
            :key="item.id"
          >
            <span class="label label-rounded">
              {{ item.name }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
// {{ article.content.length }}
export default {
  name: "article-summary-card",
  data() {
    return {}
  },
  props: ["article"],
}
</script>

<style></style>
