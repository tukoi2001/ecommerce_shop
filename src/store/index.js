import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    dataProduct: null,
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setDataProduct(state, dataProduct) {
      state.dataProduct = dataProduct;
    }
  },
  actions: {
    actionSetUserInfo({commit}, userInfo) {
      commit('setUserInfo', userInfo);
    },
    actionSetDataProduct({commit}, dataProduct) {
      commit('setDataProduct', dataProduct);
    }
  },
  modules: {
  }
})
