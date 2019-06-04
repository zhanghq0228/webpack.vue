import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutation/mutation'
import getters from './getters/getters'
import actions from './actions/actions'
const idDev = process.env.NODE_ENV === 'developement' ? true : false //判断开发环境

export default () => {
  return new Vuex.Store({
    strict: idDev, //不允许外部修改
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updateText(state, text) {
            console.log('a state', state)
            state.text = text
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
