import * as types from '../types'

const app = {
  state: {
    sidebar: []
  },
  mutations: {
    [types.SET_SIDEBAR_LIST]: (state, sidebarList) => {
      state.sidebar = sidebarList
    }
  },
  actions: {
    getSidebarList: ({ commit }, sidebarList) => {
      commit('SET_SIDEBAR_LIST', sidebarList)
    }
  }
}

export default app
