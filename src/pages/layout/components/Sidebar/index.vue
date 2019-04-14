<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 侧边栏
 * @Version: 1.0
 * @Date: 2019-01-11 12:56:22
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-08 16:26:36
 -->

<template>
  <!-- 侧边滑动区域 -->
  <el-scrollbar wrap-class="scrollbar-container">
    <!-- 菜单 -->
    <el-menu
      class="scrollbar-menu"
      mode="vertical"
      :default-active="$route.path"
      :collapse="sidebarCollapse"
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
      <sidebar-item
        v-for="route in dynamicMenus"
        :key="route.name"
        :item="route"
        :basePath="route.path">
      </sidebar-item>
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
      imgLogo,
    }
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'dynamicMenus', // 路由菜单
      'sidebarCollapse'
    ])
  }
}
</script>

<style lang="scss" scoped>

// 重置element-ui 样式
.scrollbar-container {
  overflow-x: hidden !important;
}

.scrollbar-menu:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
}

.el-menu--collapse {
  height: 100%;
  width: 55px;

  /deep/ .el-submenu__title {
    span, i {
      transition: all .1s ease-in-out;
      visibility: hidden;
    }
  }
}

// 自身样式
.logo {

  a {
    display: block;
  }
  
  img {
    width: 100%;
  }
}
</style>