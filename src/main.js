// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
// import 'lib-flexible';
import "./assets/css/main.css";
import "./directive/main.js";
import Vuelazyload from 'vue-lazyload';
import http from './utils/http';
Vue.prototype.http = http   //放入全局

Vue.config.productionTip = false;

// 使用VueLazyload并传入相应的配置
Vue.use(Vuelazyload, {
  error: '',
  // loading:'./assets/load.gif'
  loading: 'http://g1.dfcfw.com/g3/201908/20190805141103.gif',// 懒加载使用的图片
})

// import remconfig from "../config/remconfig";
// remconfig()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default new Vue({
  el: "#app",
  router, // 传入路由能力
  render: h => h(App)
});