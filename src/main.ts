import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import '@/styles/animation.less'
import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.mount('#app')
