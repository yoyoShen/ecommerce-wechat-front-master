import Vue from 'vue'
import Vuex from 'vuex'
import TabBar from '@/model/tabBar'

Vue.use(Vuex)
const state = {
  menu: {
    list: TabBar.menus
  },
  title: '',
  showTabs: true
}
const mutations = {
  setMenuActive (state, name) {
    state.menu.list.forEach(m => {
      m.active = m.name === name
    })
  },
  setTitle (state, title) {
    state.title = title
  },
  setTabsState (state, s) {
    state.showTabs = s
  }
}
const actions = {
  routeTo ({commit}, param) {
    commit('setMenuActive', param.menu.name)
    commit('setTitle', param.menu.text)
    param.router.push({name: param.menu.name})
  },
  setTitle ({commit}, title) {
    commit('setTitle', title)
  },
  setTabsState ({commit}, state) {
    commit('setTabsState', state)
  }
}
const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
