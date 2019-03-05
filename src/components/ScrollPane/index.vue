<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 封装elment-ui 的el-scrollbar 组件，使其可以heng'xiang滚动
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-01 14:36:19
 * @LastEditTime: 2019-03-04 15:15:12
 -->

<template>
  <el-scrollbar
    ref="scrollContainer"
    @wheel.native.prevent="scrollTraverse">
    <slot></slot>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'ScrollPane',
  methos: {
    scrollTraverse (e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 40
      const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
      $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
    }
  }
}
</script>
<style scoped>
.el-scrollbar {
  width: 100%;
  padding-left: 15px;
  top: -5px;
}
</style>