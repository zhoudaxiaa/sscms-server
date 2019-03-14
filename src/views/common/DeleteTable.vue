<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单删除操作组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 20:15:59
 * @LastEditTime: 2019-03-14 21:05:27
 -->

<template>
  <el-button
    @click="deleteTable"
    type="danger"
    icon="el-icon-delete"
    circle>
  </el-button>
</template>

<script>
export default {
  name: 'DeleteTable',
  props: {
    deleteTable: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
