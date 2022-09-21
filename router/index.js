import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import resetpassword from '@/components/resetpassword'
import register from '@/components/register'
import mainpage from '@/components/mainpage'
import faceimportrec from '@/components/faceimportrec'
import onlinerec from '@/components/onlinerec'

Vue.prototype.$router = Router

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
      path:'/resetpassword',
      name:'resetpassword',
      component:resetpassword
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/mainpage',
      name:'mainpage',
      component:mainpage,
      children:[{
        path:'/faceimportrec',
        name:'faceimportrec',
        component:faceimportrec
        },
        {
          path:'/onlinerec',
          name:'onlinerec',
          component:onlinerec
        }
      ]
    }
  ]
})
