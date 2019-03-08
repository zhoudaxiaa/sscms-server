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
    <div
    class="main-wrap"
    :class="{'sidebar-close':sidebarCollapse}">

      <!-- 顶部导航 -->
      <navbar></navbar>

      <!-- 标签切换页面 -->
      <tag-view></tag-view>

      <!-- 内容显示区域 -->
      <app-main></app-main>

    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagView } from './components'
export default {
  name: 'layout',
  components: {
    Navbar,
    TagView,
    Sidebar,
    AppMain
  },
  computed: {

    // 侧边栏展开状态
    sidebarCollapse () {
      return this.$store.getters.sidebarCollapse
    }
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
  width: 200px;
  height: 100%;

  // 重置element-ui 的样式
  /deep/ {
    .el-scrollbar__view {
      height: 100%;
    }

    .el-scrollbar__wrap {
      overflow-x:hidden;
    }

    .el-menu {
      border-right: none;
    }
  }

}

.main-wrap {
  // 脱离文档流加速动画
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-left: 200px;
  height: 100%;
  transition: margin .3s ease-in-out
}

.sidebar-close {
  margin-left: 55px;
}
</style>