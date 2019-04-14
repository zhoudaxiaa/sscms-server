<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单添加操作组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 20:15:59
 * @LastEditTime: 2019-04-14 20:14:00
 -->

<template>
  <el-button
    @click="handleAddForm"
    type="primary"
    icon="el-icon-plus"
    circle>
  </el-button>
</template>

<script>

export default {
  name: 'AddTable',
  methods: {
    /**
     * @description: 添加表格(传入子组件的方法)
     * @param {type} 
     * @return: 
     */
    handleAddForm () {
      // 触发表单新增操作
      this.$emit('formOperation', 'add')
    },

    
  }
}
</script>

<style scoped>

</style>
