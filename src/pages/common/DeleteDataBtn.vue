<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单删除操作组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 20:15:59
 * @LastEditTime: 2019-06-07 12:59:48
 -->

<template>
  <el-button
    @click="handleDeleteForm"
    type="danger"
    icon="el-icon-delete"
    circle>
  </el-button>
</template>

<script>

export default {
  name: 'DeleteTable',
  methods: {
    /**
     * @description: 删除表格（传入子组件的方法)
     * @param {type} 
     * @return: 
     */    
    handleDeleteForm () {
      this.$emit('formOperation', {op: 'deleteMultDataOp'})
    },
  }
}
</script>

<style scoped>

</style>
