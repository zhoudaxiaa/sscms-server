<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 单个菜单
 * @Version: 1.0
 * @Date: 2019-01-17 20:46:58
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-02-26 09:43:58
 -->

<template>
  <div class="sidebar-item">
    <el-submenu :index="item.name || item.path">
      <!-- 主菜单 -->
      <template slot="title">
        <!-- 菜单名和icon -->
        <item :icon="item.meta.icon" :title="item.meta.title"></item>
      </template>

      <!-- 二级菜单 -->
      <template v-for="child in item.children">
        <router-link :to="child.path" :key="child.name">
          <el-menu-item :index="child.name">
            <!-- 菜单名和icon -->
            <item :icon="child.meta.icon" :title="child.meta.title"></item>
          </el-menu-item>
        </router-link>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
.sidebar-item {
  /deep/ .svg-icon{
    margin-right: 16px;
  }
}
</style>
