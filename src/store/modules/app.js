/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 系统相关的 store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 16:59:39
 * @LastEditTime: 2019-03-01 16:54:15
 */

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {

    // 侧边栏
    sidebar: {
      collapse: false // Boolean 侧边栏展开状态
    },

    // 切换页面标签
    tagView: [
      {
        name: '', // String 切换页面的标签名
        path: '', // 标签指向的页面
        active: false // Boolean 当前标签是否激活状态
      }
    ]
  },

  getters: {
    // 读取侧边栏展开状态
    sidebarCollapse (state) {

      let isCollapse
      
      isCollapse = getter(state, 'sidebar', 'collapse')

      return isCollapse === undefined ? false : isCollapse
    },

    // 读取切换页面标签状态
    tagView (state) {

      return getter(state, 'tagView')
    }
  },

  mutations: {
    // 切换并存储侧边栏展开状态
    [types.TOGGLE_SIDEBAR_COLLAPSE] (state) {
      let isCollapse = !this.getters.sidebarCollapse
      setMutation(state, isCollapse, 'sidebar', 'collapse')
    },

    // 添加 切换页面标签 的状态
    [types.ADD_TAG_VIEW] (state, tag) {
      let tagView = this.getters.tagView
      tagView.push(tag)
      
      setMutation(state, tagView, 'tagView')
    },
  }
}