/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限的store
 * @Version: 1.0
 * @Date: 2019-01-09 14:42:53
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-04 09:35:49
 */

import { getter, setMutation } from '@/utils/store' // 简化getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    dynamicMenus: null // 动态菜单（用来生成侧边栏导航）
  },
  getters: {
    // 获取动态菜单
    dynamicMenus(state) {
      return getter(state, 'dynamicMenus')
    }
  },
  mutations: {
    // 存储动态菜单
    [types.SET_DYNAMIC_MENUS](state, routes) {

      // 过滤掉动态路由的component 对象 再进行存储
      let dynamicMenus = routes.map( (value) => {
        delete value.component
        
        value.children.forEach( (v) => {
          delete v.component
        })

        return value
      })
      setMutation(state, dynamicMenus, 'dynamicMenus' )
    }
  }
}
