import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    filmes_curtidos: [],
    filmes_nao_curtidos: [],
    filmes_nao_curados: [],
    page: 1
  },
  mutations: {
    UPDATE_LISTA_CURTIDAS(state, payload){
      state.filmes_curtidos.unshift(payload);
    },
    UPDATE_LISTA_NAO_CURTIDOS(state, payload){
      state.filmes_nao_curtidos.unshift(payload);
    },
    UPDATE_LISTA_NAO_CURADOS(state, payload){
      state.filmes_nao_curados.push(payload);
    },
    UPDATE_PAGE(state){
      state.page++;
    }
  },
  actions: {
  },
  modules: {
  }
})
