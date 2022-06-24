import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../views/main/Dashboard'

const routes = [
  {
    path:"/",
    component:DashboardLayout,
    props:true,
    meta: {
      requiresAuth: true,
    },
    children:[
      
      {
         path: '/',
          name: 'home',
         
          component: () => import( '../views/main/Dashboard.vue')
         },
        
          {
            path: '/stats',
            name: 'stats',
           
            component: () => import('../views/Stats.vue')
          }
      
      
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
