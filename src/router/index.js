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
    path: '/authentication_for_committee_member',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/authentication_for_committee_member/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/authentication_for_committee_member/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "about" */ '../views/Question.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/authentication_for_committee_member/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.isPass = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    
    if (router.isPass == false) {
      next({
        path: '/authentication_for_committee_member/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})

export default router