import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '归零@you',
        },
        component: () =>
          import(/* webpackChunkName: "Index" */ '../views/Index.vue'),
      },
      {
        path: '/discover',
        name: 'discover',
        meta: {
          title: '发现',
        },
        component: () =>
          import(/* webpackChunkName: "CategoryIndex" */ '../views/category/Category.vue'),
      },
      {
        path: '/aboutus',
        name: 'aboutUs',
        meta: {
          title: '关于我们',
        },
        component: () =>
          import(/* webpackChunkName: "AboutUs" */ '../views/AboutUs.vue'),
      },
      {
        path: '/myblog',
        name: 'myBlog',
        meta: {
          title: '我的博客',
        },
        component: () =>
          import(/* webpackChunkName: "Mylog" */ '../views/MyBlog.vue'),
      },
      {
        path: '/siteCollect',
        name: 'siteCollect',
        meta: {
          title: '网址收录',
        },
        component: () =>
          import(
            /* webpackChunkName: "SiteCollect" */ '../views/SiteCollect.vue'
          ),
      },
      {
        path: '/onlineTool',
        name: 'onlineTool',
        meta: {
          title: '在线工具',
        },
        component: () =>
          import(
            /* webpackChunkName: "OnlineTool" */ '../views/OnlineTool.vue'
          ),
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: 'Not Found',
        },
        component: () =>
          import(/* webpackChunkName: '404' */ '../views/404.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      title: 'Not Found',
    },
    redirect: '/404',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title.toString();
  }
  next();
});

export default router;
