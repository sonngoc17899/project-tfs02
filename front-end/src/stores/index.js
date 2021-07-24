import Vue from 'vue'
import Vuex from 'vuex'
import common from './common'
import auth from "./auth"
import cart from "./cart"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
    auth,
    cart
  }
})

export default store
