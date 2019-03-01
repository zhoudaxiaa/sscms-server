<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户头像菜单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-28 13:03:29
 * @LastEditTime: 2019-02-28 16:18:31
 -->

<template>
  <el-dropdown trigger="click">
    <div>
      <img
        :src="avatar"
        alt="img"
        class="img-avatar">
      <i class="el-icon-caret-bottom"></i>
    </div>

    <el-dropdown-menu slot="dropdown">
      <template v-for="item in menuList">

        <!-- 区别外链跟内链 -->
        <template v-if="checkLink(item.link)">

            <!-- 外链 -->
            <a
              :key="item.link"
              :href="item.link">

              <el-dropdown-item
                :disabled="item.disabled"
                :divided="item.divided">
                {{item.title}}
              </el-dropdown-item>
            </a>
          
        </template>
        
        <template v-else>

          <!-- 区别要不要在这上添加点击事件，特定的格式 '/func',事件在func 属性上 -->
          <template v-if="item.link === '/func'">
            <el-dropdown-item
              @click.native="item.func"
              :key="item.link"
              :disabled="item.disabled"
              :divided="item.divided">
              {{item.title}}
            </el-dropdown-item>
          </template>

          <template v-else>
            <router-link
              :key="item.link"
              :to="item.link">

              <el-dropdown-item
                :disabled="item.disabled"
                :divided="item.divided">
                {{item.title}}
              </el-dropdown-item>
            </router-link>
          </template>

        </template>

      </template>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'AvatarMenu',
  props: {
    avatar: {
      type: String,
      default: 'https://www.html-js.cn/upload/images/defaultlogo.png'
    },
    menuList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    checkLink (link) {
      return /\/{2}/.test(link)
    }
  }
}
</script>

<style scoped>
.img-avatar {
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
}
</style>