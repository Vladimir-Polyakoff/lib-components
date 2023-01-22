import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/pages/Home.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component:() => import('@/pages/Welcome.vue')
  },
  {
    path: '/fields',
    name: 'fields',
    component:() => import('@/pages/Fields.vue')
  },
  {
    path: '/table-page',
    name: 'table-page',
    component:() => import('@/pages/TablePage.vue')
  },
  {
    path: '/dropdown-page',
    name: 'dropdown-page',
    component:() => import('@/pages/DropdownPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
