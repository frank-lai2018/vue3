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
    //路由傳參只能這樣傳，因為你沒有機會跟一般組件上寫屬性傳參一樣寫法 例如<Person :id="xxx" :name="yyy"/>，因為這是路由組件，所以不是自己寫的標籤
      //第一種props傳參數的寫法，值為true，代表把路由params參數映射為組件的props屬性
    // {
    //     name:'xinwen',
    //     path: '/news',
    //     component: News,
    //     children:[
    //       {
    //         name:'detailAA',
    //         path:'detail/:id/:title/:content',
    //         component: () => import('@/pages/Detail.vue'),
    //           //第一種props傳參數的寫法，值為true，代表把路由params參數映射為組件的props屬性
    //         props:true //開啟props傳參數模式
    //       }
    //   ]

    // },
    // 第二種寫法：函數寫法，可以自己決定將什麼當作props給路由元件
    {
        name:'xinwen',
        path: '/news',
        component: News,
        children:[
          {
            name:'detailAA',
            path:'detail',
            component: () => import('@/pages/Detail.vue'),
            props(route){
              return route.query
            }
          }
      ]

    },
    // 第三種寫法：物件寫法，可以自己決定將什麼當作props給路由元件
    // {
    //     name:'xinwen',
    //     path: '/news',
    //     component: News,
    //     children:[
    //       {
    //         name:'detailAA',
    //         path:'detail',
    //         component: () => import('@/pages/Detail.vue'),
    //         props:{
    //           a:100,
    //           b:200,
    //           c:300
    //         }
    //       }
    //   ]

    // },
    {
        name:'guanyu',
        path: '/about',
        component: About
    },
    {
      path:'/',
      redirect:'/home' //重定向到首頁
    }
  ]
})

//暴露路由器
export default router