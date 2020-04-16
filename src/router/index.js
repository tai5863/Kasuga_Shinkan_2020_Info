import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/study',
    name: 'Study',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Study.vue')
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import(/* webpackChunkName: "about" */ '../views/Life.vue')
  },
  {
    path: '/senior',
    name: 'Senior',
    component: () => import(/* webpackChunkName: "about" */ '../views/Senior.vue')
  },
  {
    path: '/Authentication_for_committee_member',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/Authentication_for_committee_member/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: '/Authentication_for_committee_member/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router