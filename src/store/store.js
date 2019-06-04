import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutation/mutation'
import getters from './getters/getters'
import actions from './actions/actions'
const idDev = process.env.NODE_ENV === 'developement' ? true : false //判断开发环境

export default () => {
  const store = new Vuex.Store({
    strict: idDev, //不允许外部修改
    state: defaultState,
    mutations,
    getters,
    actions,
    plugins: [
      //插件
    ]
    // modules: {
    //   a: {
    //     namespaced: true,
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updateText(state, text) {
    //         console.log('a state', state)
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       textplue(state, getters, rootState) {
    //         return state.text + rootState.count
    //       }
    //     },
    //     actions: {
    //       add({
    //         state,
    //         commit,
    //         rootState
    //       }) {
    //         commit('updateText', 12, {
    //           root: true
    //         })
    //       }

    //     }
    //   },
    //   b: {
    //     state: {
    //       text: 2
    //     }
    //   }
    // }
  })
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutation/mutation',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutation = require('./mutation/mutation').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default
      store.hotUpdate({
        state: newState,
        mutations: newMutation,
        actions: newActions,
        getters: newGetters
      })
    })
  }
  return store
}
