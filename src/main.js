import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/app/app.vue';
import 'todomvc-app-css/index.css';
import { createStore } from './store/index';

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  store: createStore(),
  render: h => h(App)
}).$mount('app-root');
