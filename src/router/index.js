import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      layout: 'MainLayout'
    }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/Help.vue'),
    meta:{
      layout: 'MainLayout'
    }
  },
  
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/Auth.vue'),
    meta:{
      layout: 'AuthLayout'
    }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
