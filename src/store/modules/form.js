/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单相关store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 17:04:28
 * @LastEditTime: 2019-04-14 20:41:36
 */

import { getter, setMutation } from '@/utils/localStore' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    
    dialogFormVisible: false, // 表单框的显示状态

    adminUser: {  // 管理员
      currentPage: 1, // 当前页码
    },

    role: {  // 角色
      currentPage: 1, // 当前页码
    },
  },
  
  getters: {
    
    // 读取表单框的显示状态
    dialogFormVisible (state) {
      return getter(state, 'dialogFormVisible')
    },

    // 读取管理员页面的当前页码
    adminUserCurrentPage (state) {
      return getter(state, 'adminUser', 'currentPage')
    },

    // 读取角色页面的当前页码
    roleCurrentPage (state) {
      return getter(state, 'role', 'currentPage')
    }
  },

  mutations: {
    
    // 切换表单框显示状态
    [types.TOGGLE_DIALOG_FORM_VISIBLE] (state) {
      let visible = !this.getters.dialogFormVisible
      setMutation(state, visible, 'dialogFormVisible')
    },

    // 存储管理员页面的当前页码
    [types.SET_ADMIN_USER_CURRENT_PAGE] (state, page) {
      setMutation(state, page, 'adminUser', 'currentPage')
    },

    // 存储角色页面的当前页码
    [types.SET_ROLE_CURRENT_PAGE] (state, page) {
      setMutation(state, page, 'role', 'currentPage')
    },

  },


}