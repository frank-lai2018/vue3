//創建一個路由器，並暴露出去

//引入創建路由器的函數
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'


//創建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 在這裡配置路由
    {
        name:'zhuye',
        path: '/home',
        component:Home
    },
    {
        name:'xinwen',
        path: '/news',
        component: News,
        children:[
          {
            path:'detail',
            component: () => import('@/pages/Detail.vue')
          }
      ]

    },
    {
        name:'guanyu',
        path: '/about',
        component: About
    }
  ]
})

//暴露路由器
export default router