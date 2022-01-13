import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    filmes_curtidos: [],
    filmes_nao_curtidos: [],
    filmes_nao_curados: [],
    total_pages: 1,
    genero_page: 1
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
    UPDATE_TOTAL_PAGES(state, payload){
      state.total_pages = payload.total_pages;
    },
    UPDATE_GENERO_PAGE(state, payload){
      state.genero_page += payload.genero_page;
    }
  },
  actions: {
  },
  modules: {
  }
})
