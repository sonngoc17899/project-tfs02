import ApiService from '../../services/ApiService';
import {ACTION_SET_BEFORE_ROUTER, ACTION_SET_ERROR,
    ACTION_CLEAR_ERROR, ACTION_SET_LOADING, ACTION_FINISH_LOADING, ACTION_CLEAR_LOADING
} from "./actions";

import {
    SET_LOADING,
    FINISH_LOADING,
    CLEAR_LOADING,
    SET_BEFORE_ROUTER
  } from './mutations'
  
  const SUCCESS = 200;
  const state = {
    loading: 0
}
const getters = {
    isLoading(state) {
      return state.loading > 0
    },
    error(state) {
      return state.error
    },
    message(state) {
      return state.message
    },
    dialog(state) {
      return state.dialog
    },
    dialogReportEvent(state) {
      return state.dialogReportEvent
    },
    cancelevent(state) {
      return state.cancel
    },
    subscrible(state) {
      return state.subscrible
    },
    follow(state) {
      return state.follow
    },
    stream(state) {
      return state.stream
    },
    listColors(state) {
      return state.listColors
    },
    beforeRouter(state) {
      return state.beforeRouter
    },
    countViewer(state) {
      return state.countViewer
    },
    resultSearch() {
      return state.resultSearch
    }
  
  }
  
  const actions = {
    [ACTION_SET_ERROR](context, error) {
      context.commit(SET_ERROR, error);
    },
    [ACTION_CLEAR_ERROR](context) {
      context.commit(CLEAR_ERROR);
    },
    [ACTION_SET_LOADING](context) {
      context.commit(SET_LOADING)
    },
    [ACTION_FINISH_LOADING](context) {
      context.commit(FINISH_LOADING)
    },
    [ACTION_CLEAR_LOADING](context) {
      context.commit(CLEAR_LOADING)
    },
    
    [ACTION_SET_BEFORE_ROUTER](context, beforeRouter) {
      context.commit(SET_BEFORE_ROUTER, beforeRouter)
    }
  }
  
  const mutations = {
    [SET_LOADING](state) {
      state.loading++
    },
    [FINISH_LOADING](state) {
      if (state.loading > 0) {
        state.loading--
      }
    },
    [CLEAR_LOADING](state) {
      state.loading = 0
    },
    [SET_BEFORE_ROUTER](state, beforeRouter) {
        state.beforeRouter = beforeRouter
    },
  }
  
  export default {
    state,
    getters,
    actions,
    mutations
  }