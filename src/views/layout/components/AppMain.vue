<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 主显示区域
 * @Version: 1.0
 * @Date: 2019-01-17 17:49:50
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-02-27 15:40:24
 -->

<template>
  <div class="main-container">
    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route + new Date()
    }
  }
}
</script>

<style scoped>
</style>