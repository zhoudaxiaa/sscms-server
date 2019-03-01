<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 顶部导航
 * @Version: 1.0
 * @Date: 2019-01-11 12:45:36
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-01 11:06:32
 -->

<template>
  <div class="navbar-wrap">
    <!-- 汉堡菜单折叠 -->
    <hamburger
      class="hamburger-wrap fl"
      :isActive="sidebarCollapse"
      :toggleClick="toggleSidebar">
      </hamburger>

    <!-- 面包屑导航 -->
    <breadcrumb class="breadcrumb-wrap fl"></breadcrumb>

    <div class="right-menu fr">
      <el-tooltip
        effect="dark"
        content="全屏"
        placement="bottom">

        <!-- 全屏组件 -->
        <screenfull class="right-menu-item screenfull-wrap"></screenfull>
      </el-tooltip>

      <!-- 头像菜单组件 -->
      <avatar-menu
        :avatar="avatar"
        :menuList="menuList"
        class="right-menu-item avatar-menu-wrap">
      </avatar-menu>


    </div>

  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import Screenfull from '@/components/Screenfull'
import AvatarMenu from '@/components/AvatarMenu'
import { mapGetters } from 'vuex';

import * as types from '@/store/mutation-types'

export default {
  name: 'Navbar',
  data () {
    return {
      avatar: this.$store.getters.adminAvatar,
      menuList: [
        {
          link: '/systemNotify',
          title: '我的消息',
          disabled: false, // 是否禁用
          divided: false // 是否用分割线
        },
        {
          link: '/systemConfig',
          title: '设置',
          disabled: false,
          divided: false
        },
        {
          link: '/func', // 传入事件的指定格式
          title: '退出',
          disabled: false,
          divided: true,
          func: this.logout // 传入一个点击事件
        }
      ]
    }
  },
  components: {
    Hamburger,
    Breadcrumb,
    Screenfull,
    AvatarMenu
  },
  methods: {
    // 切换侧边栏展开状态
    toggleSidebar () {
      this.$store.commit(types.TOGGLE_SIDEBAR_COLLAPSE)
    },

    // 系统登出
    logout () {
      localStorage.clear();

      this.$message({
        message: '登出成功！',
        type: 'success'
      })

      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters([
      'sidebarCollapse'
    ])
  }
}
</script>

<style lang="scss" scoped>
.navbar-wrap {
  @include clearfix;
  height: 50px;
}

.hamburger-wrap {
  line-height: 58px;
  padding: 0 10px;
}

.breadcrumb-wrap {
  line-height: 50px;
  margin-left: 10px;
}

.right-menu {
  height: 50px;
  line-height: 50px;
}

.right-menu-item {
  display: inline-block;
  margin: 0 8px
}

.screenfull-wrap {
  vertical-align: top;
  line-height: 60px;
}

.avatar-menu-wrap {
  cursor: pointer;
  font-size: 16px;
  margin-right: 30px;

  /deep/ .img-avatar {
    margin-top: 5px;
  }
}
</style>
