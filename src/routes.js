import VueRouter from 'vue-router';
import Todos from './components/Todos.vue';

const routes = [
  { path: '/', component: Todos },
  { path: '/:filter', component: Todos },
];

export const routerFactory = () => new VueRouter({ routes });
