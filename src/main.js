// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './icons' // svg注册
import 'normalize.css/normalize.css' // 重置样式
import './scss/global.scss' // 全局样式
import './permission' // 权限控制

// ui 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

process.env.MOCK && require('./mock/') // 使用mock数据

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
