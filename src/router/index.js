import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
  },
  {
    path: '/guide',
    name: 'Guide',
    component: () => import(/* webpackChunkName: "guide" */ '../views/Guide.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue'),
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue'),
  },
  {
    path: '/cabinet',
    name: 'Cabinet',
    component: () => import(/* webpackChunkName: "cabinet" */ '../views/Cabinet.vue'),
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: () => import(/* webpackChunkName: "confirm" */ '../components/Confirm.vue'),
  },
  {
    path: '/confirmed',
    name: 'Confirmed',
    component: () => import(/* webpackChunkName: "confirmed" */ '../components/Confirmed.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
