<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员面板
 * @Version: 1.0
 * @Date: 2019-06-07 14:47:22
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-09 18:06:40
 -->

<template>
  <div class="dashboard-editor-container">

    <github-corner style="position: absolute; top: 0px; border: 0; right: 0;"/>

    <panel-group :basicInfo="basicInfo"/>

    <ul class="data-list">
      <li class="data-list-item comment-wrap">
        <newest-comment-list :comments="newestComments" />
      </li>
      <li class="data-list-item user-wrap">
        <newest-user-list :users="newestUsers" />
      </li>
      <li class="data-list-item box-wrap">
        <box-card :loginInfo="loginInfo" />
      </li>
    </ul>

  </div>
</template>

<script>
import GithubCorner from "@/components/GithubCorner"
import PanelGroup from "./components/PanelGroup"
import NewestCommentList from "./components/NewestCommentList"
import NewestUserList from "./components/NewestUserList";
import BoxCard from "./components/BoxCard";

import { getAdminUser } from '@/api/admin'
import { getUser, getNewestUser } from '@/api/user'
import { getArticle } from '@/api/article'
import { getComment, getNewestComment } from '@/api/comment'

export default {
  name: "DashboardAdmin",
  components: {
    GithubCorner,
    PanelGroup,
    NewestCommentList,
    NewestUserList,
    BoxCard,
  },
  data() {
    return {
      basicInfo: {  // 基础信息
        adminUserCount: 0,  // 管理员数
        regUserCount: 0,  // 用户数
        articleCount: 0,  // 文章数
        commentCount: 0  // 评论数
      },

      newestComments: [],  // 最新评论

      newestUsers: [],  // 最新用户

      loginInfo: {},  // 登录信息

    }
  },

  created () {
    this.initData()
  },

  methods: {
    /**
     * @description: 初始化数据
     * @param {type} 
     * @return: 
     */  
    async initData () {
      this.getBasicInfo()
      this.getNewestComments()
      this.getNewestUsers()
      this.getLoginInfo()
    },

    /**
     * @description: 获取基础数据
     * @param {type} 
     * @return: 
     */    
    async getBasicInfo () {
      let adminUserData
      let regUserData
      let articleData
      let commentData

      adminUserData = await getAdminUser(0, 1)
      regUserData = await getUser(0, 1)
      articleData = await getArticle(0, 1)
      commentData = await getComment(0, 1)

      adminUserData && (this.basicInfo.adminUserCount = adminUserData.total)
      regUserData && (this.basicInfo.regUserCount = regUserData.total)
      articleData && (this.basicInfo.articleCount = articleData.total)
      commentData && (this.basicInfo.commentCount = commentData.total)
    },

    /**
     * @description: 获取最新评论
     * @param {Number} start 开始位置
     * @param {Number} count 数量 
     * @return: 
     */   
    async getNewestComments (start = 0, count = 10) {
      const commentData = await getNewestComment(start, count)

      commentData && (this.newestComments = commentData.list)
    }, 

    /**
     * @description: 获取最新用户
     * @param {Number} start 开始位置
     * @param {Number} count 数量 
     * @return: 
     */   
    async getNewestUsers (start = 0, count = 10) {
      const userData = await getNewestUser(start, count)

      userData && (this.newestUsers = userData.list)
    }, 

    /**
     * @description: 
     * @param {type} 
     * @return: 
     */    
    getLoginInfo () {
      let loginInfo = {}

      loginInfo.admin_name = sessionStorage.getItem('admin_name')
      loginInfo.admin_avatar = sessionStorage.getItem('admin_avatar')
      loginInfo.ip_address = sessionStorage.getItem('ip_address')
      loginInfo.login_time = sessionStorage.getItem('login_time')

      this.loginInfo = loginInfo
    },
  },

};
</script>

<style lang="scss">
.dash-box {
  background: #fff;
  -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  .dash-title {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.45);
    margin: 0;
    padding: 15px;
    font-weight: 400;
    border-bottom: 1px solid #eee;
    background: rgba(0, 0, 0, 0.003);
    -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
  .dash-content {
    padding: 15px;
  }
}
</style>

<style lang="scss" scoped>
.dashboard-editor-container {
  @include clearfix;

  padding: 32px;
  background-color: rgb(240, 242, 245);
}

.data-list {
  @include clearfix;

  margin: 0 -10px;
}

.data-list-item {
  float: left;
  padding: 0 10px;
}

.comment-wrap {
  width: 45%;
}

.user-wrap {
  width: 25%;
}

.box-wrap {
  width: 30%;
}
</style>