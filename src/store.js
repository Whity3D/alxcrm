import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allClients: [
      {
        name: 'alex',
        phone: '1111111',
      },
    ],
    carsBrands: [

    ],
    carsModels: [

    ],
  },
  mutations: {
    addClient(state, newClient) {
      state.allClients.push(newClient);
    },
    addCarsBrand(state, brandTitle) {
      state.carsBrands.push(brandTitle)
    },
    updateCarsList(state, newBrandList) {
      state.carsBrands = newBrandList;
    },
  },
  actions: {
    saveCarsBrand({ commit, state, dispatch }, brandTitle) {
      Vue.http.post('http://localhost:8081/cars', {title: brandTitle}).then(
        () => { dispatch('updateCarsList', brandTitle) })
    },
    updateCarsList({ commit }) {
      Vue.http.get('http://localhost:8081/cars').then(
        (response) => { commit('updateCarsList', response.body) }
      )
    }
  },
});
