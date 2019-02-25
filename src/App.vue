<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 入口页面
 * @Version: 1.0
 * @Date: 2018-12-10 09:18:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2018-12-24 20:14:15
 -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  position: fixed;
  top: 0;  
  bottom: 0;
  width: 100%;
}
</style>
