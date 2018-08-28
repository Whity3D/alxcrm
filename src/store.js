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

  },
  mutations: {
    addClient(state, newClient) {
      state.allClients.push(newClient);
    },
  },
  actions: {

  },
});
