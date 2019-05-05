/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 基础路由
 * @Version: 1.0
 * @Date: 2018-12-10 09:18:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-05 14:43:07
 */

import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/pages/layout'

/**
 * @msg: 路由懒加载
 * @param {string} page 路由页面地址
 * @return: Function 懒加载匿名函数
 */
function loadPage(page) {
  return () => import(`@/pages/${page}`)
}

Vue.use(Router)

// 路由配置
export const constantRouterMap = [
  {
    // 登录
    path: '/login',
    component: loadPage('login')
  },
  {
    path: '/404',
    component: loadPage('errorPage/404'),
    hidden: true
  },
  {
    // 根路径时，重定向到dashboard路由
    path: '/',
    component: layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: loadPage('dashboard'),
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
