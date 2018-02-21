<template>
  <div>
    <!--<slot></slot>-->
    <div v-html="renderedArticle"></div>
    <!--asd-->
  </div>
</template>

<script>
  // https://github.com/eteplus/menote/blob/master/src/utils/markdown-it.js
  import MarkdownIt from 'markdown-it'
  import hljs from 'highlight.js'
  import emoji from 'markdown-it-emoji'
  import ins from 'markdown-it-ins'
  import mark from 'markdown-it-mark'
  import footnote from 'markdown-it-footnote'
  import sup from 'markdown-it-sup'
  import sub from 'markdown-it-sub'
  import todo from 'markdown-it-task-lists'

  import markdownItTocAndAnchor from 'markdown-it-toc-and-anchor';

  const markdown = new MarkdownIt({
    html: true,
    xhtmlout: true,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    highlight(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          // added line number
          const len = str.split(/\r\n|\n|\r/).length - 1
          const lineNumbers = []
          for (let i = 0; i < len; i++) {
            lineNumbers.push(`<span>${i + 1}</span>`)
          }
          const value = hljs.highlight(lang, str, true).value.replace(/\n/g, '<br />')
          return `<pre class="code-block" style="display: flex"><code class="hljs hljs-line-numbers" style="text-align: right;background: #dcd3ba;">${lineNumbers.join('<br />')}</code><code class="code hljs ${lang}" style="flex: 1">${value}</code></pre>`
        } catch (__) {
        }
      }

      return `<pre class="code-block"><code class="hljs">${markdown.utils.escapeHtml(str)}</code></pre>`
    }
  });

  markdown
    .use(emoji)
    .use(ins)
    .use(mark)
    .use(footnote)
    .use(sup)
    .use(sub)
    .use(markdownItTocAndAnchor)
    .use(todo, {label: true});

  export default {
    name: 'vue-markdown',
    props: {
      'markdownContent': {
        type: [Object, String],
        default: ''
      }
    },
    computed: {
      renderedArticle: function () {
        return markdown.set({
          tocCallback: (tocMarkdown, tocArray, tocHtml) => {
            this.$emit('mdTocReady', tocHtml);
          }
        }).render(this.markdownContent)
      }
    },
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    }
  }
</script>

<style>
</style>
