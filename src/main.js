// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import store from './store'
import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {routes} from "./routes";


// import './directives'
// import './filters'
import * as VueMarkdown from './components/Common/VueMarkdown.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(router)
app.component('vue-markdown', VueMarkdown)
app.mount('#app')
