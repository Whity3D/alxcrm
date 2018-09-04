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
    addCarsBrand: function (state, brandTitle) {
      Vue.http.post('http://localhost:8081/cars', {title: brandTitle}).then(
      () => {
        state.carsBrands.push(brandTitle)
      }
     );
    },
  },
  actions: {

  },
});
