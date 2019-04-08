// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './config/ElementUI'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api'
import './styles/reset.scss'

import QueryBar from '@/components/QueryBar'

Vue.config.productionTip = false

Vue.prototype.$api = api

Vue.component(QueryBar.name, QueryBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
