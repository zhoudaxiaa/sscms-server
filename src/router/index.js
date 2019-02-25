/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 基础路由
 * @Version: 1.0
 * @Date: 2018-12-10 09:18:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-19 17:58:14
 */

import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout'

/**
 * @msg: 路由懒加载
 * @param {string} view 路由页面地址
 * @return: 懒加载匿名函数
 */
function loadView(view) {
  return () => import(`@/views${view}`)
}

Vue.use(Router)

// 路由配置
export const constantRouterMap = [
  {
    // 登录
    path: '/login',
    component: loadView('/login')
  },
  {
    path: '/404',
    component: loadView('/errorPage/404'),
    hidden: true
  },
  {
    path: '/',
    component: layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: loadView('/dashboard'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  }
]

/**
 * @description: 根据后台传来的一维资源菜单，转成二维资源菜单
 * @param {array} 一维资源菜单
 * @return: 二维资源菜单数组
 */
function buildRouter(list) {
  let temp = {},
    rootRouter = []

  if (!(list instanceof Array)) throw new Error('list 必须是数组')

  // 过滤掉不显示的路由
  list
    .filter(v => v.isActive)
    .forEach(v => {
      // 转成对象数组循环
      temp[v._id] = v // 建立以_id 为属性的对象
    })

  for (let v in temp) {
    let current = temp[v] // 当前资源
    if (current.parentId && current.parentId != '0') {
      // 是否是子菜单
      let parent = temp[current.parentId] // 子菜单的父菜单
      let childrenRouter = renderRouter(current)
      if (!parent.children) parent.children = [] // 父菜单没有children属性就建一个
      parent.children.push(childrenRouter)
    } else {
      // 父菜单
      rootRouter.push(renderRouter(current, true))
    }
  }

  return rootRouter
}

/**
 * @description: 渲染路由菜单
 * @param {object} source 资源菜单对象
 * @param {boolean} parent 是否是根菜单
 * @return: 路由菜单对象
 */
function renderRouter(source, parent = false) {
  let router = {}

  if (parent) {
    router.path = '/'
    router.children = source.children
  } else {
    router.path = source.routePath
    router.component = loadView(source.componentPath) // 导入菜单组件
  }

  router.name = source.name
  router.meta = {
    title: source.comments,
    icon: source.icon
  }

  return router
}

const baseRouter = [{ path: '*', redirect: '/404', hidden: true }]

export default new Router({
  routes: constantRouterMap
})

export { buildRouter, baseRouter }
