/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限的store
 * @Version: 1.0
 * @Date: 2019-01-09 14:42:53
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-08 11:01:08
 */

import { getter } from '@/utils/localStore' // 简化getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    dynamicMenus: getter('dynamicMenus') || null // 动态菜单（用来生成侧边栏导航）
  },
  getters: {
  },
  mutations: {
    // 存储动态菜单
    [types.SET_DYNAMIC_MENUS](state, routes) {

      if (routes.length === 0) return

      // 过滤掉动态路由的component 对象 再进行存储
      let dynamicMenus = routes.map( (value) => {
        delete value.component
        
        value.children.forEach( (v) => {
          delete v.component
        })

        return value
      })
      state.dynamicMenus = dynamicMenus
    }
  }
}
