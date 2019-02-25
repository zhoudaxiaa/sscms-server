/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 布局组件
 * @Version: 1.0
 * @Date: 2019-01-09 16:34:10
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-11 11:58:40
 */

<template>
  <div class="app-wrap">
    <sidebar class="sidebar-wrap"></sidebar>
    <div class="main">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components/index'
export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style lang="scss" scoped>

.app-wrap {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.sidebar-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 180px;
  height: 100%;
}

.main {
  margin-left: -180px;
  height: 100%;
}
</style>