// 引入createApp用於建立應用
import { createApp } from "vue";
// 引入App根元件
import App from "./App.vue";

import { createPinia } from "pinia";

// 創建Pinia實例
const pinia = createPinia();

// 將Pinia實例掛載到應用
createApp(App)
   .use(pinia)
   .mount("#app");


