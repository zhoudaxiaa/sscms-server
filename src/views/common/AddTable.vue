<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单添加操作组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 20:15:59
 * @LastEditTime: 2019-03-18 17:01:12
 -->

<template>
  <el-button
    @click="addTable"
    type="primary"
    icon="el-icon-plus"
    circle>
  </el-button>
</template>

<script>
import * as types from '@/store/mutation-types'

import mixins from '@/views/common/mixins.js'

export default {
  name: 'AddTable',
  props: {
    initForm: {  // 添加数据时，初始的表单项
      type: Object,
      default: () => {}
    }
  },
  mixins: [mixins],
  methods: {
    /**
     * @description: 添加表格(传入子组件的方法)
     * @param {type} 
     * @return: 
     */
    addTable () {
      this.toggleOperation(false)
      
      // 添加表格时，传入初始的表单项
      this.$store.commit(types.SET_ADMIN_USER_FORM, this.initForm)
    },

    
  }
}
</script>

<style scoped>

</style>
