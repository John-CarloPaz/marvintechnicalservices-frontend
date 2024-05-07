import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    imageData: [],
    userToken: null
  },
  mutations: {
    setImageData(state, data) {
      state.imageData = data;
    },
    setUserToken: (state, token) => {
      state.userToken = token
    }
  },
  actions: {
    setImageData({ commit }, data) {
      commit('setImageData', data);
    },
    setUserToken({commit}, token) { 
      commit('setUserToken', token);
    }
  }
});