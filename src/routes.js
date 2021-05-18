export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./pages/Home.vue')
    },
    // 解决手贱带来的问题
    {
        path: '/index:suffix*',
        name: 'index',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('./pages/Blog.vue')
    },
    {
        path: '/blog/post/:title',
        name: 'post',
        component: () => import('./pages/Blog/ArticlePost.vue')
    },
    {
        path: '/blog/:category(category/\\d+)?/:tags(tags/\\d+)?/:page(page/\\d+)?',
        name: 'blogposts',
        component: () => import('./pages/Blog.vue')
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import('./pages/Archive.vue')
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: () => import('./pages/Gallery.vue')
    },
    {
        path: '/works',
        name: 'works',
        component: () => import('./pages/Works.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./pages/About.vue')
    }
];
