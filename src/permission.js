/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 路由守卫，动态生成可访问路由
 * @Version: 1.0
 * @Date: 2018-12-24 19:43:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 20:26:34
 */
import router, { baseRouter } from '@/router/index.js'
import { buildRouter } from '@/utils/router.js'  // 构建动态路由方法

import store from './store/index.js'
import NProgress from 'nprogress' // 加载条插件
import 'nprogress/nprogress.css'

import * as types from '@/store/mutation-types'

// 路由守卫
router.beforeEach(async (to, from, next) => {

  NProgress.start() //加载条开始
  
  // 判断是否登录了，没登录就不去获取动态路由
  if (store.state.app.token) {
    // // 判断是否已经获取到了角色资源信息
    if (store.state.admin.resource === null) {

      //没有就去获取角色资源信息（刷新浏览器也重新获取，来重新生成动态路由）
      await store.dispatch('GetRoleOpResource')
        // 根据角色资源生产动态路由，并连接基础路由
      const dynamicRoutes = buildRouter(store.state.admin.resource)

      router.addRoutes(dynamicRoutes.concat(baseRouter)) // 加载动态路由

      store.commit(types.SET_DYNAMIC_MENUS, dynamicRoutes) // 存储动态路由(用来生成侧边栏菜单)

      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成

      NProgress.done()

    } else {
      next() // 已登录，已获取角色资源
    }
  } else if (to.path === '/login') {
    next()
  } else {
    // 没登录，跳转登录页
    next('login')
  }

  NProgress.done() //加载条结束
})

router.afterEach(() => {
  NProgress.done() //加载条结束
})
