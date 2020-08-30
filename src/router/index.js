import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const cart = () => import('../views/cart/Cart.vue')
const category = () => import('../views/category/Category.vue')
const home = () => import('../views/home/Home.vue')
const profile = () => import('../views/profile/Profile.vue')
const detail = () =>import('../views/detail/detail.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router