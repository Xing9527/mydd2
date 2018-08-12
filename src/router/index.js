import Vue from 'vue'
import Router from 'vue-router'
import apply from '@/views/apply'
import diamond from '@/views/diamond'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/apply',
      name: 'apply',
      component: apply
    },
    {
      path:'/mydidi',
      name:'mydidi',
      component:()=>import('@/views/mydidi.vue'),
    },
    {
      path:'/',
      name:'homepage',
      component:()=>import('@/views/homepage.vue')
    },
    {
      path:'/project',
      name:'project',
      component:()=>import('@/views/project.vue'),
      children:[
        {
          path:'/project',
          name:'diamond',
          component:diamond,
        },
        {
          path:'gold',
          name:'gold',
          component:()=>import('@/views/gold.vue')
        },
        {
          path:'silver',
          name:'silver',
          component:()=>import('@/views/silver.vue')
        }
      ]
    },
    {
      path:'/file',
      name:'file',
      component:()=>import('@/views/file.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('@/views/login.vue')
    },
    {
      path:'/register',
      name:'register',
      component:()=>import('@/views/register.vue')
    },
    {
      path:'/news',
      name:'news',
      component:()=>import('@/views/news.vue')
    },
    {
      path:'/newsDetail',
      name:'newsDetail',
      component:()=>import('@/views/newsDetail.vue')
    },
    {
      path:'/client',
      name:'client',
      component:()=>import('@/views/client.vue')
    },
    {
      path:'/case',
      name:'case',
      component:()=>import('@/views/case.vue')
    },
    {
      path:'/changePwd',
      name:'changePwd',
      component:()=>import('@/views/changePwd.vue')
    },
    {
      path:'/addClient',
      name:'addClient',
      component:()=>import('@/views/addClient.vue')
    }
    ,
    {
      path:'/balance',
      name:'balance',
      component:()=>import('@/views/balance.vue')
    },
    {
      path:'/cash',
      name:'cash',
      component:()=>import('@/views/cash.vue')
    },
    {
      path:'/cashZero',
      name:'cashZero',
      component:()=>import('@/views/cashZero.vue')
    }
    
  ]
})
