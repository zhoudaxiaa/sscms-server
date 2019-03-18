/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 混入
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-18 16:52:41
 * @LastEditTime: 2019-03-18 16:58:14
 */

import * as types from '@/store/mutation-types'

export default {
  methods: {
    
    /**
     * @description: 切换表单显示状态和切换表单是不是修改操作，多次使用，提取出来
     * @param {boolean} isEdit 是不是修改操作，默认是 
     * @return: 
     */
    toggleOperation (isEdit = true) {
      this.$store.commit(types.TOGGLE_DIALOG_FORM_VISIBLE)  // 切换表单显示状态
      this.$store.commit(types.CHANGE_IS_FORM_EDIT_OP, isEdit)  // 切换表单是不是修改操作
    },
  }
}