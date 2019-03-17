/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单相关store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 17:04:28
 * @LastEditTime: 2019-03-16 19:43:59
 */

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    
    dialogFormVisible: false, // 表单框的显示状态

    isFormEditOp: true, // 是不是表单修改操作


    adminUser: {  // 管理员
      form: null,  // 表单
      currentPage: 0, // 当前页码
    },
  },
  
  getters: {
    
    // 读取表单框的显示状态
    dialogFormVisible (state) {
      return getter(state, 'dialogFormVisible')
    },

    // 读取是不是表单修改操作
    isFormEditOp (state) {
      return getter(state, 'isFormEditOp')
    },

    // 读取管理员信息表单
    adminUserForm (state) {
      return getter(state, 'adminUser', 'form')
    },

    // 读取管理员页面的当前页码
    adminUserCurrentPage (state) {
      return getter(state, 'adminUser', 'currentPage')
    }
  },

  mutations: {
    
    // 切换表单框显示状态
    [types.TOGGLE_DIALOG_FORM_VISIBLE] (state) {
      let visible = !this.getters.dialogFormVisible
      setMutation(state, visible, 'dialogFormVisible')
    },

    // 改变表单是不是修改操作
    [types.CHANGE_IS_FORM_EDIT_OP] (state, isEdit = true) {
      setMutation(state, isEdit, 'isFormEditOp')
    },

    // 存储管理员信息表单
    [types.SET_ADMIN_USER_FORM] (state, form) {
      setMutation(state, form, 'adminUser', 'form')
    },

    // 存储管理员页面的当前页码
    [types.SET_ADMIN_USER_CURRENT_PAGE] (state, page) {
      setMutation(state, page, 'adminUser', 'currentPage')
    }
  }
}