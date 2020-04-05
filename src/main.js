import { createApp } from 'vue';
import App from './components/app/app.vue';
import 'todomvc-app-css/index.css';
import { createStore } from './store/index';

const app = createApp(App);
app.use(createStore());
app.mount('app-root');
