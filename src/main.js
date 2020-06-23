import { createApp } from 'vue';
import App from './components/app/app.vue';
import 'todomvc-app-css/index.css';
import { createStore } from './store/index';
import './web-components/username';

const app = createApp(App);
app.config.isCustomElement = tag => /^x-/.test(tag);
app.use(createStore());
app.mount('app-root');
