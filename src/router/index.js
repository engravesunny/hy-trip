import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            name: 'home',
            component:()=>import('@/view/home/index.vue')
        },{
            path:"/message",
            name: 'message',
            component:()=>import('@/view/message/index.vue')
        },
        {
            path:'/order',
            name: 'order',
            component:()=>import('@/view/order/index.vue')
        },
        {
            path:'/favor',
            name: 'favor',
            component:()=>import('@/view/favor/index.vue')
        },
        {
            path:'/city',
            name: 'city',
            component:()=>import('@/view/city/index.vue')
        }
    ]
})

export default router