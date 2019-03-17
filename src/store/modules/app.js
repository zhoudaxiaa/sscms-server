/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 系统相关的 store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 16:59:39
 * @LastEditTime: 2019-03-16 17:24:48
 */

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

import { getRoles } from '@/api/roles'

export default {
  state: {

    // 侧边栏
    sidebar: {
      collapse: false // Boolean 侧边栏展开状态
    },

    // 切换页面标签
    tagView: [
      {
        name: '首页', // String 切换页面的标签名
        path: '/dashboard', // String 标签指向的页面
      }
    ],

    roles: []  // 角色组列表
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
    },

    // 读取角色组里列表
    roles (state) {
      return getter(state, 'roles')
    }
  },

  mutations: {
    // 切换并存储侧边栏展开状态
    [types.TOGGLE_SIDEBAR_COLLAPSE] (state) {
      let isCollapse = !this.getters.sidebarCollapse
      setMutation(state, isCollapse, 'sidebar', 'collapse')
    },

    // 添加页面标签
    [types.ADD_TAG_VIEW] (state, tag) {
      let tagView = this.getters.tagView
      tagView.push(tag)
      
      setMutation(state, tagView, 'tagView')
    },

    // 删除页面标签
    [types.DELETE_TAG_VIEW] (state, path) {
      let newTagView, // 处理后得到的新标签列表
          tagView = this.getters.tagView

      newTagView = tagView.filter((tag) => tag.path !== path)

      if (newTagView.length === 0) {  // 当tagview 为空时，添加首页的tagview
        newTagView = [{
          name: '首页',
          path: '/dashboard'
        }]
      }
      
      setMutation(state, newTagView, 'tagView')
    },

    // 存储角色组列表
    [types.SET_ROLES] (state, roles) {
      setMutation(state, roles, 'roles')
    }
  },

  actions: {
    // 请求角色组列表数据并commit
    async getRoles ({ commit }) {
      const data = await getRoles()

      commit(types.SET_ROLES, data.data.list)
    }
  }
}