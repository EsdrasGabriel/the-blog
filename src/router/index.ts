import { createRouter, createWebHistory } from 'vue-router'
import HomeBlog from '../views/home/HomeBlog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeBlog
    },
  ]
})

export default router
