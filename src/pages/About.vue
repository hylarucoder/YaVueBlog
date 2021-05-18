<template>
  <div class="resume-page">
    <div class="columns">
      <div class="column col-8 col-mx-auto resume-container">
        <header class="navbar">
          <section class="navbar-section">
            <a href="#basic-info" class="btn btn-link">基本信息</a>
            <a href="#skill-info" class="btn btn-link">技能信息</a>
            <a href="#work-info" class="btn btn-link">工作经历</a>
            <a href="#work-info" class="btn btn-link">项目经验</a>
            <a href="#hobby-project-info" class="btn btn-link">业余项目</a>
          </section>
        </header>
      </div>
      <basic-info></basic-info>
      <skill-info></skill-info>
      <work-info></work-info>
      <!--<hobby-info></hobby-info>-->
      <hobby-project-info></hobby-project-info>
    </div>
  </div>
</template>

<script>
import BasicInfo from './About/BasicInfo.vue'
import SkillInfo from './About/SkillInfo.vue'
import WorkInfo from './About/WorkInfo.vue'
import ProjectInfo from './About/ProjectInfo.vue'
import HobbyInfo from './About/HobbyInfo.vue'
import HobbyProjectInfo from './About/HobbyProjectInfo.vue'

export default {
  name: 'AboutPage',
  components: {
    BasicInfo,
    SkillInfo,
    WorkInfo,
    ProjectInfo,
    HobbyInfo,
    HobbyProjectInfo,
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
