/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单相关store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 17:04:28
 * @LastEditTime: 2019-03-14 20:48:29
 */

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    
    dialogFormVisible: false, // 表单框的显示状态

    isFormEditOp: true, // 是不是表单修改操作


    adminUserForm: {}, // 管理员表单
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
      return getter(state, 'adminUserForm')
    }
  },

  mutations: {
    
    // 切换表单框显示状态
    [types.TOGGLE_DIALOG_FORM_VISIBLE] (state) {
      let visible = !this.getters.dialogFormVisible
      setMutation(state, visible, 'dialogFormVisible')
    },

    // 改变表单是不是修改操作
    [types.CHANGE_IS_FORM_EDIT_OP] (state) {
      let isEdit = !this.getters.isFormEditOp
      setMutation(state, isEdit, 'isFormEditOp')
    },

    // 存储管理员信息表单
    [types.SET_ADMIN_USER_FORM] (state, form) {
      setMutation(state, form, 'adminUserForm')
    }
  }
}