<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 二次封装element-ui 的breadcrumb 组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-25 15:50:51
 * @LastEditTime: 2019-03-14 20:30:55
 -->

<template>
  <el-breadcrumb separator="/">

  <transition-group name="breadcrumb">
    <template v-for="(item, index) in list">

      <el-breadcrumb-item
        v-if="item.meta.title"
        :key="item.path">
        <!-- 根据是不是当前页面，生成文字或链接 -->
        <span
          v-if="index === list.length-1">
          {{item.meta.title === 'dashboard' ? '首页' : item.meta.title}}
        </span>

        <router-link
          v-else :to="item.path">
          {{item.meta.title}}
        </router-link>

      </el-breadcrumb-item>
        
      </template>
    
    </transition-group>

  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {
      list: ''
    }
  },

  watch: {
    // 改变页面时触发创建面包屑导航
    $route () {
      this.createBreadcrumb()
    }
  },

  methods: {
    createBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      this.list = matched
    }
  },

  // 进入页面时触发创建面包屑导航
  created () {
    this.createBreadcrumb()
  }
}
</script>

<style scoped>
/* 动画 */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  /* 脱离文档流，加快动画效果 */
  position: absolute;
}
</style>