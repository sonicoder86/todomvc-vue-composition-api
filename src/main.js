import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import 'todomvc-app-css/index.css';
import { storeFactory } from './store/factory';
import { routerFactory } from './routes';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
  store: storeFactory(),
  router: routerFactory(),
  render: h => h(App)
}).$mount('#app');
