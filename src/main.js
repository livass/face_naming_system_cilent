// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.$axios = axios 
import global_ from './components/global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
import echarts from "echarts"
Vue.prototype.$echarts = echarts
Vue.use(VueAxios, axios)
//Vue.use(echarts)
Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h=>h(App)
})


