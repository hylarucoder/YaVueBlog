<template>
  <ul class="pagination">
    <li class="page-item" :class="{'disabled': previous_page_disabled}">
      <a href="#" tabindex="-2" @click.prevent.stop="pageItemClicked">首页</a>
    </li>
    <li class="page-item" :class="{'disabled': previous_page_disabled}" @click.prevent.stop="pageItemClicked">
      <a href="#" tabindex="-1">上页</a>
    </li>
    <template v-if="has_first">
      <li class="page-item">
        <a href="#" @click.prevent.stop="pageItemClicked">1</a>
      </li>
    </template>
    <template v-if="has_beginning">
      <li class="page-item">
        <a href="#" @click.prevent.stop="pageItemClicked">1</a>
      </li>
      <li class="page-item">
        <span>...</span>
      </li>
    </template>
    <li class="page-item" :class="{'active': current === page}" v-for="page in pages">
      <a href="#" @click.prevent.stop="pageItemClicked">{{ page }}</a>
    </li>
    <template v-if="has_ending">
      <li class="page-item">
        <span>...</span>
      </li>
      <li class="page-item">
        <a href="#" @click.prevent.stop="pageItemClicked">{{ total }}</a>
      </li>
    </template>
    <template v-if="has_last">
      <li class="page-item">
        <a href="#" @click.prevent.stop="pageItemClicked">{{ total }}</a>
      </li>
    </template>
    <li class="page-item" :class="{'disabled': next_page_disabled}">
      <a href="#" @click.prevent.stop="pageItemClicked">下页</a>
    </li>
    <li class="page-item" :class="{'disabled': next_page_disabled}">
      <a href="#" @click.prevent.stop="pageItemClicked">尾页</a>
    </li>
  </ul>
</template>

<script>
  // {{ article.content.length }}
  export default {
    name: 'pagination',
    data() {
      return {
        has_first: false,
        has_last: false,
        has_beginning: true,
        has_ending: true,
      }
    },
    props: {
      'total': {
        default: 10
      },
      'current': {
        default: 1
      }
    },
    computed: {
      pages: function () {
        let step = 1;
        let min = this.current - step;
        let max = this.current + step;
        min = Math.max(...[min, 1]);
        max = Math.min(...[max, this.total]);
        if (min === 2) {
          min = 1
        }
        if (max === this.total - 1) {
          max = this.total
        }
        let pages = [];
        for (let i = min; i < max + 1; i++) {
          pages.push(i)
        }
        if (min - step - 1 >= 1) {
          this.has_beginning = true
        } else {
          this.has_beginning = false
        }

        if (max + step + 1 <= this.total) {
          this.has_ending = true
        } else {
          this.has_ending = false
        }

        return pages
      },
      previous_page_disabled: function () {
        if (this.current === 1) {
          return true
        }
        return false
      },
      next_page_disabled: function () {
        if (this.current === this.total) {
          return true
        }
        return false
      }
    },
    mounted() {
    },
    methods: {
      pageItemClicked: function (e) {
        // e.stopPropagation();
        let pagenum = e.target.innerHTML;
        this.$emit('page-item-clicked', pagenum)
      }
    }
  }
</script>

<style>
</style>
