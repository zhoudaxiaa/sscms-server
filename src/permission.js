/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 路由守卫，动态生成可访问路由
 * @Version: 1.0
 * @Date: 2018-12-24 19:43:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-19 16:57:11
 */

import router, { buildRouter, baseRouter } from '@/router/index.js'
import store from './store/index.js'
import NProgress from 'nprogress' // 加载条插件
import 'nprogress/nprogress.css'
// import router from '@/router/index'

import { Message } from 'element-ui'

import * as types from '@/store/mutation-types'

// 路由守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start() //加载条开始

  // 判断是否登录了，没登录就不去获取动态路由
  if (store.getters.getToken) {
    // 判断是否已经获取到了角色资源信息
    if (store.getters.getResource.length === 0) {
      //没有就去获取角色资源信息
      try {
        await store.dispatch('GetAdminResource')
      } catch (err) {
        Message.error(err)
        // NProgress.done()
        next(false)
      }
      // 根据角色资源生产动态路由，并连接基础路由
      const dynamicRoutes = buildRouter(store.getters.getResource)

      store.commit(types.SET_DYNAMIC_ROUTES, dynamicRoutes) // 存储动态路由

      router.addRoutes(store.getters.getDynamicRoutes.concat(baseRouter)) // 加载动态路由
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
    } else {
      next() // 已登录，已获取角色资源
    }
  } else if (to.path !== '/login') {
    // 没登录，且去往的页面也不是登录页，跳转登录页
    Message('登录超时，请重新登录')
    next('login')
  } else {
    next() // 没登录，跳转的是登录页
  }
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done() //加载条结束
})
