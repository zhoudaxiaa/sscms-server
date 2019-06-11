<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 后台首页
 * @Version: 1.0
 * @Date: 2019-01-17 21:57:22
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-07 15:38:44
 -->

<template>
  <div>
    <!-- <component :is="componentId"></component> -->
    <div class="dashboard-container">
      <admin-dashboard></admin-dashboard>
    </div>
  </div>
</template>

<script>
import adminDashboard from "./admin";
export default {
  name: 'dashboard',
  components: {
    adminDashboard
  }
}
</script>

<style scoped>
</style>