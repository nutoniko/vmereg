import Vue from 'vue'
import Vuex from 'vuex'
import votes from './votes'

Vue.use(Vuex)

const modules = {
  votes,
}

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {

}

const plugins = [

]

const store = new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
  plugins
})

export default store