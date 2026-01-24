//創建一個路由器，並暴露出去

//引入創建路由器的函數
import { createRouter, createWebHistory } from 'vue-router'


//創建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 在這裡配置路由
    {
        path: '/home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/news',
        component: () => import('../components/News.vue')
    },
    {
        path: '/about',
        component: () => import('../components/About.vue')
    }
  ]
})

//暴露路由器
export default router