import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';

const app = createApp(App);
app.use(router);
console.log("Vue app initialized");
app.mount('#app');

