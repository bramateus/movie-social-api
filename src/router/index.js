import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NaoCurtidos from '../views/NaoCurtidos.vue'
import Curtidos from '../views/Curtidos.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nao-curtidos',
    name: 'NaoCurtidos',
    component: NaoCurtidos
    // component: Home
  },
  {
    path: '/curtidos',
    name: 'Curtidos',
    component: Curtidos
    // component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
