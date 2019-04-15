import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    app
  },
  getters
})

export default store
