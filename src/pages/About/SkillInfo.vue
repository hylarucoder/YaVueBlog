<template>
  <div class="column col-8 col-mx-auto resume-container">
    <div class="columns">
      <div class="column col-12">
        <div class="h3 resume-container-header" id="skill-info">
          技能信息
        </div>
      </div>
      <div class="column col-12">
        <div class="filter">
          <input
            type="radio"
            id="tag-0"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-1"
            class="filter-tag"
            name="filter-radio"
            hidden
            checked
          />
          <input
            type="radio"
            id="tag-2"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-3"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-4"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-5"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-6"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-7"
            class="filter-tag"
            name="filter-radio"
            hidden
          />
          <input
            type="radio"
            id="tag-8"
            class="filter-tag"
            name="filter-radio"
            hidden
          />

          <div class="filter-nav">
            <label class="chip" for="tag-0">所有</label>
            <label
              class="chip"
              :for="`tag-${index + 1}`"
              v-for="(skillBoard, index) in skillBoards"
              :key="index"
              >{{ skillBoard.name }}</label
            >
          </div>

          <div class="filter-body">
            <div
              class="filter-item ft-intro-card"
              :data-tag="`tag-${index + 1}`"
              v-for="(skillBoard, index) in skillBoards"
              :key="index"
            >
              <div class="columns">
                <div class="column col-3 u-flex-center">
                  <figure class="m-avatar">
                    <img :src="skillBoard.avatar" class="img-responsive" />
                  </figure>
                </div>
                <div class="column col-9">
                  <div class="ft-intro-card__title">
                    <span class="ft-intro-card__name">
                      {{ skillBoard.domainName }}</span
                    >
                    <span class="ft-intro-card__quote">
                      {{ skillBoard.domainMemo }}</span
                    >
                  </div>
                  <div class="ft-intro-card__content">
                    <div
                      class="ft-intro-card__content-item"
                      :key="index"
                      v-for="(summaryItem,
                      index) in skillBoard.contentSummaryItems"
                    >
                      <span class="ft-intro-card__content-item-label">
                        {{ summaryItem.name }}
                      </span>
                      <span class="ft-intro-card__content-item-value">
                        {{ summaryItem.value }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column col-12">
                  <div class="ft-intro-card__desc">
                    <p class="h5">{{ skillBoard.contentDetailTitle }}</p>
                    <p
                      :key="index"
                      v-for="(detailItem,
                      index) in skillBoard.contentDetailItems"
                    >
                      <span class="m-label">
                        {{ detailItem.name }}
                      </span>
                      <span class="m-value">
                        {{ detailItem.value }}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let skillBoards = [
  {
    name: "语言 - Python",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "Python",
    domainMemo: "Life is Short, I use Python",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "Web 开发 / 数据分析 / 爬虫",
      },
      {
        name: "实际项目:",
        value: "公司项目 / 本项目",
      },
    ],
    contentDetailTitle: "Python 基础扎实，熟悉 Python 常用标准库常用第三方库",
    contentDetailItems: [
      {
        name: "日常开发常用",
        value: "Pyenv / Pipenv / Pip / Twine / VirtualEnv",
      },
      {
        name: "爬虫开发常用",
        value: "Requests / MitmProxy / 各种解析库 / NodeJS (执行JS)",
      },
      {
        name: "网站开发常用",
        value: "Django (详情查看Django选项卡) / DjangoORM / SQLAlchemy",
      },
      {
        name: "部署运维常用",
        value: "Ansible / Glances",
      },
      {
        name: "数据分析常用",
        value: "Pandas / Numpy / Jupyter Notebook / concurrent",
      },
      {
        name: "其他开发常用",
        value: "Click",
      },
    ],
  },
  {
    name: "语言 - JavaScript",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "JavaScript",
    domainMemo: "升级到ES6之后, 配上VueJS 开发之后, 世界安静了",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "前后端开发 / 爬虫",
      },
      {
        name: "实际项目:",
        value: "公司项目 / 本项目",
      },
    ],
    contentDetailTitle: "自从有了新语法, 写起来还是有些愉悦感哒",
    contentDetailItems: [
      {
        name: "基本常识",
        value: "HTML5 + CSS3",
      },
      {
        name: "MVC 时代",
        value: "JQuery + BootStrap 快速搭建页面",
      },
      {
        name: "SPA 时代",
        value: "ES6 plus + VueJS 全家桶 + Element UI",
      },
      {
        name: "其他常用",
        value: "cmake / npm script / webpack",
      },
      {
        name: "数据爬取",
        value: "Headless Chrome",
      },
      {
        name: "其他开发",
        value: "--",
      },
    ],
  },
  {
    name: "框架 - Django",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "Django",
    domainMemo: "完美主义搞定 Deadline 的必备框架",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "Web 开发",
      },
      {
        name: "实际项目:",
        value: "工作项目以及本项目",
      },
    ],
    contentDetailTitle: "熟悉内置包和少量第三方包",
    contentDetailItems: [
      {
        name: "日常开发常用",
        value:
          "migration / ORM / Cache / signal / middleware / URLdispatch / CBV",
      },
      {
        name: "内置Contrib包",
        value: "Auth / Session / GIS / Postgres / admin",
      },
      {
        name: "第三方库",
        value:
          "Django Debug Toolbar / Django Extensions / grappelli / guardian / rest_framework",
      },
      {
        name: "项目结构",
        value: "Core模块 / 12-Factors / Ansible",
      },
      {
        name: "其他组件通讯",
        value: "ElasticSearch / PostgreSQL / Redis",
      },
      {
        name: "测试驱动开发",
        value: "TDD",
      },
    ],
  },
  {
    name: "框架 - VueJS",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "VueJS",
    domainMemo: "Less Code But More Productive",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "Web 开发",
      },
      {
        name: "实际项目:",
        value: "本博客的前端",
      },
    ],
    contentDetailTitle: "ES6 赛高",
    contentDetailItems: [
      {
        name: "项目骨架",
        value:
          "基于 Vue-CLI 改进而成, 离线IconFont 打包/DLL 打包/单独的SASS模块",
      },
      {
        name: "Vue 全家桶",
        value: "vuex / vue-routes",
      },
      {
        name: "开发时依赖",
        value: "font-carrier / autodll-webpack-plugin",
      },
      {
        name: "运行时依赖",
        value:
          "Element UI / Spectre / moment / hightlight.js / Axios / ECharts",
      },
      {
        name: "组件化开发",
        value: "语义化命名, 组件化开发",
      },
      {
        name: "其他开发常用",
        value: "Click",
      },
    ],
  },
  {
    name: "组件 - 后端组件",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "后端组件",
    domainMemo: "别人家的砖头才是好砖头",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "Web 开发 / 数据分析 / 爬虫",
      },
      {
        name: "实际项目:",
        value: "工作项目 / 本站",
      },
    ],
    contentDetailTitle: "了解日常开发过程中的常见的后端组件",
    contentDetailItems: [
      {
        name: "关系数据库",
        value:
          "熟知关系数据库基本常识, 比如索引，视图，存储过程，事务,优化。 熟知 PostgreSQL/PostGIS.",
      },
      {
        name: "文档数据库",
        value: "了解 MongoDB , 我一般用于临时存储抓取结果",
      },
      {
        name: "内存数据库",
        value: "了解 Redis, 用于缓存和异步任务",
      },
      {
        name: "消息队列",
        value: "本网站中的Celery 用的是 Redis / 而不是 RabbbitMQ",
      },
      {
        name: "搜索组件",
        value: "本网站中的搜索功能后端即使采用 ElasticSearch 进行编写",
      },
      {
        name: "反向代理",
        value: "本网站中的Nginx相关, 了解基本的HTTP常识.",
      },
    ],
  },
  {
    name: "系统 - Mac/Ubuntu",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "Mac/Ubuntu",
    domainMemo: "一入 Mac 深似海, 从此 Windows 是路人",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "日常开发与办公, 没有娱乐",
      },
      {
        name: "实际项目:",
        value: "lala",
      },
    ],
    contentDetailTitle: "好的工匠炫耀作品, 差的工匠炫耀工具",
    contentDetailItems: [
      {
        name: "终端命令",
        value: "太多了",
      },
      {
        name: "日常办公",
        value: "Office / Pages",
      },
      {
        name: "开发工具",
        value: "参考下文中",
      },
      {
        name: "媒体编辑",
        value: "Ansible / Glances",
      },
      {
        name: "系统工具",
        value: "Click",
      },
    ],
  },
  {
    name: "习惯 - 工作流",
    avatar: "https://picturepan2.github.io/spectre/img/macos-sierra.jpg",
    domainName: "工作流",
    domainMemo: "优秀的工作流是普通人最需要具备的才能",
    contentSummaryItems: [
      {
        name: "掌握程度:",
        value: "熟练",
      },
      {
        name: "常用领域:",
        value: "所有领域",
      },
      {
        name: "实际项目:",
        value: "本站点",
      },
    ],
    contentDetailTitle: "Lifelong Learner",
    contentDetailItems: [
      {
        name: "英语水平",
        value: "无障碍阅读英文技术资料，以及新技术的快速上手。",
      },
      {
        name: "开发工作流",
        value: "脚本化一个可以自动化的任务 / Tmuxnitor / watchdog",
      },
      {
        name: "团队工作流",
        value:
          "配置Gitlab 以及 Gitlab 的 Runner, 使得前/后端推送代码后, 触发更新脚本, 使局域网环境自动更新.",
      },
      {
        name: "GTD 爱好者",
        value: "习惯分解手头任务并输入到 OmniFocus 清单中,逐条完成任务",
      },
      {
        name: "数字化爱好者",
        value: "为知笔记 / Gitbook / 本站点",
      },
      {
        name: "其他",
        value: "Click",
      },
    ],
  },
]
export default {
  name: "BasicInfo",
  components: {},
  data() {
    return {
      skillBoards: skillBoards,
    }
  },
}
</script>
