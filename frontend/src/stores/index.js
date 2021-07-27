import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import auth from "./auth"


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    auth,
  }
})

export default store
