/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 系统相关的 store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 16:59:39
 * @LastEditTime: 2019-05-05 18:30:20
 */

import { getter, setMutation } from '@/utils/localStore' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

import { getAllRole } from '@/api/role'

export default {
  state: {
    token: getter('token') || '',

    // 侧边栏
    sidebar: {
      collapse: getter('sidebar.collapse') || false,  // Boolean 侧边栏展开状态
    },

    // 切换页面标签
    tagView: getter('tagView') || [
      {
        name: '首页',  // String 切换页面的标签名
        path: '/dashboard',  // String 标签指向的页面
      },
    ],

    // 角色列表
    roleList: getter('roleList') || []

  },

  getters: {

  },

  mutations: {
    // 存储并本地缓存token
    [types.SET_TOKEN] (state, token) {
      setMutation(state, 'token', token )
    },

    // 删除state 和缓存的token
    [types.DELETE_TOKEN] (state) {
      setMutation(state, 'token', '' )
    },
    
    // 切换并存储和本地缓存侧边栏展开状态
    [types.TOGGLE_SIDEBAR_COLLAPSE] (state) {
      let isCollapse = !state.sidebar.collapse
      setMutation(state, 'sidebar.collapse', isCollapse )
    },
    
    // 存储并本地缓存页面标签
    [types.SET_TAG_VIEW] (state, tag) {
      setMutation(state, 'tagView', tag )
    },

    // 添加并本地缓存页面标签
    [types.ADD_TAG_VIEW] (state, tag) {
      let tagView = [ ...state.tagView ]
      tagView.push(tag)
      
      this.commit(types.SET_TAG_VIEW, tagView)
    },

    // 删除页面标签
    [types.DELETE_TAG_VIEW] (state, path) {
      let newTagView, // 处理后得到的新标签列表
          tagView = state.tagView

      newTagView = tagView.filter((tag) => tag.path !== path)

      if (newTagView.length === 0) {  // 当tagview 为空时，添加首页的tagview
        newTagView = [{
          name: '首页',
          path: '/dashboard'
        }]
      }
      
      this.commit(types.SET_TAG_VIEW, newTagView)
    },

    // 存储角色组列表
    [types.SET_ROLE_LIST] (state, role) {
      setMutation(state, 'roleList', role)
    },

  },
  
  actions: {
    // 请求所有角色组列表数据并commit
    async GetAllRole ({ commit }) {

      const data = await getAllRole() // 获取所有角色列表
      
      if (data) commit(types.SET_ROLE_LIST, data)
    }
  },

  
}