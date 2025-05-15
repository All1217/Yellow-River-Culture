import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/secondPage',
    name: 'secondPage',
    component: () => import('@/views/DataCenter.vue')
  },
  {
    path: '/thirdPage',
    name: 'thirdPage',
    component: () => import('@/views/ThirdPage.vue'),
  },
  {
    path: '/sunView',
    name: 'sunView',
    component: () => import('@/views/SunView.vue'),
  },
  {
    path: '/govView',
    name: 'GovView',
    component: () => import('@/views/Gov.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
