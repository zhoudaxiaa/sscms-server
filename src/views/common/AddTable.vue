<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单添加操作组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 20:15:59
 * @LastEditTime: 2019-03-14 21:04:14
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
export default {
  name: 'AddTable',
  props: {
    addTable: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
