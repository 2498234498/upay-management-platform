import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})
