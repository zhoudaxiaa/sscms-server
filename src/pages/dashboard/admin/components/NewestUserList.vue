<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 新注册用户列表
 * @Version: 1.0
 * @Date: 2019-06-07 22:58:37
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-07 23:45:55
 -->
<template>
  <div class="dash-box">
    <h2 class="dash-title">新注册用户</h2>
      <div class="user-list">
        <ul>
          <li v-for="item in users" :key="item.id">
            <img :src="item.avatar" alt="">
            <h6>{{item.name}}</h6>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

export default {
  name: 'NewestUserList',
  props: {
    users: {
      type: Array,
      default: () => []
    },
  },
  filters: {},

};
</script>
<style lang="scss">
.user-list {
  padding: 0;
  ul {
    padding: 0;
    margin: 0;
    li {
      display: block;
      position: relative;
      width: 100%;
      border-bottom: 1px solid #eee;
      padding: 15px;

      img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
        float: left;
      }

      h6 {
        font-size: 18px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        margin-left: 50px;
      }
    }
  }
}
</style>