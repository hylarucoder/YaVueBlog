<template>
  <div class="m-category-card">
    <h5>
      文章分类
    </h5>
    <ul>
      <li v-for="item in categories" :key="item.id">
        <router-link :to="`/blog/category/${item.id}`">
          <span class="label label-rounded">
            {{ item.name + " - " + item.count }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchPostCategroy } from "../../api/blog"

export default {
  name: "CategoryCard",
  data() {
    return {
      categories: [],
    }
  },
  created() {
    fetchPostCategroy().then((res) => {
      this.categories = res.results
    })
  },
}
</script>

<style></style>
