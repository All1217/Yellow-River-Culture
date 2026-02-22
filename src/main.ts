import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.css'
import '@/styles/animation.less'
import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcon from '@element-plus/icons-vue'
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(ElementPlus)
// 注册 Element Plus 图标
Object.entries(ElIcon).forEach(([key, component]) => {
    app.component(key, component)
})
app.mount('#app')
