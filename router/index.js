import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import resetpassword from '@/components/resetpassword'
import register from '@/components/register'
import mainpage from '@/components/mainpage'
import faceimportrec from '@/components/faceimportrec'
import onlinerec from '@/components/onlinerec'
import mynaming from '@/components/mynaming'
import stuinfo from '@/components/stuinfo'
import systext from '@/components/systext'
import mainpagestu from '@/components/mainpagestu'
import datashow from '@/components/datashow'
import stutext from '@/components/mainstu/stutext'
import namerec from '@/components/mainstu/namerec'
import teaclass from '@/components/maintea/teaclass'

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
    //老师主界面路由
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
        },
        {
          path:'/stuinfo',
          name:'stuinfo',
          component:stuinfo
        },
        {
          path:'/systext',
          name:'systext',
          component:systext
        },
        {
          path:'/datashow',
          name:'datashow',
          component:datashow
        },
        {
          path:'/teaclass',
          name:'teaclass',
          component:teaclass
        },
      ]
    },
    //学生主界面路由
    {
      path:'/mainpagestu',
      name:'mainpagestu',
      component:mainpagestu,
      children:[{
        path:'/mynaming',
        name:'mynaming',
        component:mynaming
      },
      {
        path:'/onlinerec',
        name:'onlinerec',
        component:onlinerec
      },
      {
        path:'/stutext',
        name:'stutext',
        component:stutext
      },
      {
        path:'/namerec',
        name:'namerec',
        component:namerec
      },
    ]
    },
    
  ]
})
