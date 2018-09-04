import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import resource from './resource';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  resource,
  render: h => h(App),
}).$mount('#app');
