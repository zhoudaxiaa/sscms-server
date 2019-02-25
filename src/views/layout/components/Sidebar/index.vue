<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 侧边栏
 * @Version: 1.0
 * @Date: 2019-01-11 12:56:22
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-02-25 11:25:49
 -->

<template>
  <!-- 侧边滑动区域 -->
  <el-scrollbar wrap-class="scrollbar">
    <!-- 菜单 -->
    <el-menu
      class="scrollbar-menu"
      mode="vertical"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfdbd9"
      active-text-color="#409eff"
    >
      <!-- logo -->
      <div class="logo">
        <router-link :to="{ path: '/dashboard'}">
          <img :src="imgLogo" alt>
        </router-link>
      </div>

      <!-- 单个菜单 -->
      <sidebar-item v-for="route in sidebar_menu" :key="route.name" :item="route"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import imgLogo from '@/assets/images/logo.png'

import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapse: false,
      imgLogo
    }
  },
  components: {
    SidebarItem
  },
  computed: mapGetters({
    sidebar_menu: 'getDynamicRoutes' // 路由菜单
  })
}
</script>

<style>
.el-scrollbar__view {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.scrollbar {
  overflow-x: hidden !important;
}

.scrollbar-menu:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}

.logo {
  img {
    width: 100%;
  }
}
</style>