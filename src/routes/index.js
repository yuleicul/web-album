import Vue from 'vue'
import VueRouter from 'vue-router'
import layouts from '../layouts'
import login from './login'
import home from './home'
import share from './share'
import Page404 from './404/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layouts.DefaultLayout,
    children: [
      home,
      login,
      share
    ]
  },
  {
    path: '*',
    name: 'errorPage',
    component: Page404
  }
]

const router = new VueRouter({
  routes
})

export default router
