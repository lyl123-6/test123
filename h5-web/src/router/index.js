import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'

// 路由表：懒加载（import()），页面用到时才下载，保证首屏快
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页', tabbar: true }
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('@/views/weather/index.vue'),
    meta: { title: '气象监测', tabbar: true }
  },
  {
    path: '/lightning',
    name: 'Lightning',
    component: () => import('@/views/lightning/index.vue'),
    meta: { title: '雷电预警' }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/video/index.vue'),
    meta: { title: '视频监控', tabbar: true }
  },
  {
    path: '/fire',
    name: 'Fire',
    component: () => import('@/views/fire/index.vue'),
    meta: { title: '消防监控' }
  },
  {
    path: '/warning',
    name: 'Warning',
    component: () => import('@/views/warning/index.vue'),
    meta: { title: '预警中心', tabbar: true }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/mine/index.vue'),
    meta: { title: '我的', tabbar: true }
  },
  // 兜底：不存在的地址回首页
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫：没登录一律去登录页；已登录访问登录页则回首页
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path !== '/login') {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
  if (userStore.token && to.path === '/login') {
    return { path: '/' }
  }
  document.title = (to.meta.title ? to.meta.title + ' - ' : '') + '智慧景区'
})

export default router
