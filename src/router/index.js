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
    component: () => import(/* webpackChunkName: "home" */ '../views/Form.vue'),
  },
  {
    path: '/guide',
    name: 'Guide',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    component: () => import(/* webpackChunkName: "cabinet" */ '../components/Confirm.vue'),
  },
  {
    path: '/confirmed',
    name: 'Confirmed',
    component: () => import(/* webpackChunkName: "cabinet" */ '../components/Confirmed.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
