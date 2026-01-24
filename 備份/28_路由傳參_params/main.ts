// 引入createApp用於建立應用
import { createApp } from "vue";
// 引入App根元件
import App from "./App.vue";
// 引入路由器
import router from "./router";
// 使用路由器
createApp(App)
   .use(router)
   .mount("#app");

