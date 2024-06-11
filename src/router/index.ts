import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import therrView from '@/views/three/therrView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'three',
    component: therrView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
