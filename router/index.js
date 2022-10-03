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
import faceimportrec2 from '@/components/mainstu/faceimportrec2'
import namerec from '@/components/mainstu/namerec'
import teaclass from '@/components/maintea/teaclass'
import classdetail from '@/components/maintea/classdetail'
import teaclass2 from '@/components/maintea/teaclass2'
import classdetail2 from '@/components/maintea/classdetail2'
import stuclass from '@/components/maintea/stuclass'
import stuclassdetail from '@/components/maintea/stuclassdetail'
import classshow from '@/components/maintea/classshow'
import classshowdet from '@/components/maintea/classshowdet'




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
      children:[
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
        {
          path:'/classdetail',
          name:'classdetail',
          component:classdetail
        },
        {
          path:'/classdetail2',
          name:'classdetail2',
          component:classdetail2
        },
        {
          path:'/teaclass2',
          name:'teaclass2',
          component:teaclass2
        },
        {
          path:'/stuclass',
          name:'stuclass',
          component:stuclass
        },
        {
          path:'/stuclassdetail',
          name:'stuclassdetail',
          component:stuclassdetail
        },
        {
          path:'/classshow',
          name:'classshow',
          component:classshow
        },
        {
          path:'/classshowdet',
          name:'classshowdet',
          component:classshowdet
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
      {
        path:'/faceimportrec',
        name:'faceimportrec',
        component:faceimportrec
      },
      {
        path:'/faceimportrec2',
        name:'faceimportrec2',
        component:faceimportrec2
      },
      
    ]
    },
    
  ]
})
