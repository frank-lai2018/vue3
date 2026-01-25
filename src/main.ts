import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'

//import emitter from './utils/emitter'



// 建立應用
const app = createApp(App)
// 建立pinia
const pinia = createPinia()

// 安裝插件
app.use(pinia)
// 安裝路由器
app.use(router)
// 掛載應用
app.mount('#app')