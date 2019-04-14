<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 主显示区域
 * @Version: 1.0
 * @Date: 2019-01-17 17:49:50
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-17 16:39:22
 -->

<template>
  <div class="main-container">
    <!-- <keep-alive> -->
      <router-view :key="key"></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.main-container {
  padding: 20px 15px;
}
</style>