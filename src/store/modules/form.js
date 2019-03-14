/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单相关store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 17:04:28
 * @LastEditTime: 2019-03-14 17:07:37
 */

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {
    
    dialogFormVisible: false, // 表单框的显示状态

    isFormEditOp: true, // 是不是表单修改操作
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
  }
}