/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 基础路由
 * @Version: 1.0
 * @Date: 2018-12-10 09:18:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-01 13:45:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout'

/**
 * @msg: 路由懒加载
 * @param {string} view 路由页面地址
 * @return: Function 懒加载匿名函数
 */
function loadView(view) {
  return () => import(`@/views/${view}`)
}

Vue.use(Router)

// 路由配置
export const constantRouterMap = [
  {
    // 登录
    path: '/login',
    component: loadView('login')
  },
  {
    path: '/404',
    component: loadView('errorPage/404'),
    hidden: true
  },
  {
    path: '/',
    component: layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: loadView('dashboard'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  }
]

const baseRouter = [{ path: '*', redirect: '/404', hidden: true }]

export default new Router({
  routes: constantRouterMap
})

// 导出构建动态菜单的方法供src/permission.js使用
export { baseRouter }
