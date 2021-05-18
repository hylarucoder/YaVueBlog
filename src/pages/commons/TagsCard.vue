<template>
  <div class="m-tags-card">
    <h5>
      标签页面
    </h5>
    <div>
      <router-link
        :to="`/blog/tags/${item.id}`"
        v-for="item in tags"
        :key="item.id"
      >
        <span class="label label-rounded" v-if="item.count > 3">
          {{ item.name + " - " + item.count }}
        </span>
        <span class="label label-rounded" v-else="item.count">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { fetchPostTags } from "../../api/blog"

export default {
  name: "ProfileCard",
  data() {
    return {
      tags: [],
    }
  },
  created() {
    fetchPostTags().then((res) => {
      this.tags = res.results
    })
  },
}
</script>

<style></style>
