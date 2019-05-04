<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 登录页面
 * @Version: 1.0
 * @Date: 2018-12-17 17:05:56
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-04 21:52:10
 -->

<template>
  <div class="login-wrapper">
    <div class="title-container">系统登录</div>

    <form class="login-form">
      <div class="form-item">
        <span class="svg-container">
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <input type="text"
          class="input-text"
          v-model="loginForm.adminName"
          placeholder="请输入用户名">/>
      </div>

      <div class="form-item">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <input type="password"
          class="input-text"
          v-model="loginForm.passWord"
          placeholder="请输入密码">/>
      </div>

      <!-- 滑动验证 -->
      <drag-verify :width="width"
        :height="height"
        :text="text"
        :success-text="successText"
        :background="background"
        :progress-bar-bg="progressBarBg"
        :completed-bg="completedBg"
        :handler-bg="handlerBg"
        :handler-icon="handlerIcon"
        :text-size="textSize"
        :success-icon="successIcon"
        ref="Verify">
      </drag-verify>

      <button class="submit"
              @click.prevent="handleLogin">登录</button>
    </form>
  </div>
</template>

<script>
import dragVerify from 'vue-drag-verify' // 滑动验证插件

import { login } from '@/api/admin'

import * as types from '@/store/mutation-types'

export default {
  components: {
    dragVerify
  },
  data() {
    return {
      // 滑动验证配置
      background: '#cccccc',
      progressBarBg: '#4b0',
      completedBg: '#66cc66',
      handlerIcon: '',
      successIcon: '',
      handlerBg: '#fff',
      text: '请将滑块拖动到右侧',
      successText: '验证成功',
      width: 340,
      height: 42,
      textSize: '18px',
      isCircle: 'true',
      loginForm: {
        adminName: '', // 用户名
        passWord: '' // 密码
      }
    }
  },

  methods: {
    /**
     * @msg: 用户名认证
     * @param {string} 用户名
     * @return: 验证通过返回true，否则false
     */
    validateAdminName() {
      if (/[a-zA-Z0-9]{5,20}/.test(this.loginForm.adminName)) return true
      this.$message('用户名需大于5位小于20位且字母或数字')
      return false
    },
    /**
     * @msg: 密码验证
     * @param {string} 密码
     * @return: 验证通过返回ture，否则false
     */
    validatePassword() {
      if (/[<>&]/.test(this.loginForm.passWord)) {
        this.$message.warning('警告！非法字符串！！！')
        return false
      }
      if (this.loginForm.passWord.length < 5) {
        this.$message.warning('密码需大于5位')
        return false
      }
      return true
    },
    /**
     * @msg: 登录
     * @return: 无
     */
    async handleLogin() {
      if (this.validateAdminName() && this.validatePassword()) {
        // 滑动验证
        if (!this.$refs.Verify.isPassing) {
          this.$message.warning('请滑动已验证！')
          return
        }

        // loading 状态
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })

        // 发送登录请求
        const data = await login(this.loginForm)

        // 登录成功，进入存储帐号信息并跳转页面
        if (data) {
          // 登录成功
          this.$store.commit(types.SET_TOKEN, data.token) // 更新store 和 本地的token

          this.$store.commit(types.SET_ADMIN_ID, data.id)
          this.$store.commit(types.SET_ADMIN_ROLE_ID, data.role_id)
          this.$store.commit(types.SET_ADMIN_NAME, data.name)
          this.$store.commit(types.SET_ADMIN_AVATAR, data.avatar)

          this.$router.replace({ path: '/' })
        }


        loading.close()
      }

    }
  }
}
</script>

<style lang='scss' scoped>
// 颜色变量
$bg: #283443; // 背景颜色
$fontColor: #454545; // 输入框字体颜色
$svgColor: #889aa4; // svg 图标颜色

.login-wrapper {
  height: 100%;
  background-color: #283443;
}

.title-container {
  padding: 120px 0 30px;
  color: #eee;
  font-size: 26px;
  font-weight: bold;
  text-align: center;
}

.login-form {
  width: 340px;
  margin: 0 auto;
}

.form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  color: $fontColor;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.svg-container {
  display: inline-block;
  padding: 6px 5px 11px 15px;
  width: 22px;
  vertical-align: bottom;
  color: $svgColor;
}

.input-text {
  outline: none;
  color: #fff;
  font-size: 14px;
  height: 47px;
  width: 76%;
  border: none;
  background: 0, 0;

  &::-webkit-input-placeholder {
    color: #aab2bd;
    font-size: 12px;
  }
}

.submit {
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  height: 35px;
  width: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background-color: #1f8dff;

  &:hover {
    background-color: #0074eb;
  }
}
</style>

<style>
/* 滑动块提示字居中 */
.drag_verify .dv_text {
  width: 100%;
  text-align: center;
}
</style>
