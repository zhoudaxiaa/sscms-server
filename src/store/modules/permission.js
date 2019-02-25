/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限的store
 * @Version: 1.0
 * @Date: 2019-01-09 14:42:53
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-19 16:36:38
 */

import { getter, setMutation } from '@/utils/store' // 简化getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    dynamicRoutes: '' // 动态路由
  },
  getters: {
    // 获取动态路由
    getDynamicRoutes(state) {
      return getter(state, 'dynamicRoutes')
    }
  },
  mutations: {
    // 存储动态路由
    [types.SET_DYNAMIC_ROUTES](state, routes) {
      setMutation(state, 'dynamicRoutes', routes)
    }
  }
}
