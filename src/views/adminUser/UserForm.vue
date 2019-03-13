<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户表单提交组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 13:39:19
 * @LastEditTime: 2019-03-13 21:45:44
 -->

<template>
  <el-dialog
    title="填写用户信息"
    :visible.sync="formVisible">
      <el-form
        :model="formData"
        label-width="80px">

        <input type="hidden" value="formData.id">

        <el-form-item
          label="帐号昵称"
          prop="formData.name"
          required>

          <el-input v-model="formData.name"></el-input>

        </el-form-item>

        <el-form-item label="头像">
          
          <el-upload
            action="https://www.zhoudaxiaa.com">

            <img
              v-if="formData.avatar"
              :src="formData.avatar">

            <i
              v-else
              class="el-icon-plus">
            </i>

          </el-upload>
        </el-form-item>

        <el-form-item
          label="登录名"
          prop="formData.userName"
          required>

          <el-input v-model="formData.userName"></el-input>

        </el-form-item>

        <el-form-item
          label="密码"
          prop="formData.passWord"
          required>
          
          <el-input
            type="password"
            v-model="formData.passWord">
          </el-input>

        </el-form-item>

        <el-form-item
          label="确认密码"
          required>

          <el-input
            type="password"
            v-model="formData.passWord">
          </el-input>

        </el-form-item>

        <el-form-item
          label="邮箱"
          prop="formData.email">

          <el-input v-model="formData.email"></el-input>

        </el-form-item>

        <el-form-item label="角色组">
          <el-select
            v-model="formData.role"
            placeholder="请选择角色组">
            
            <el-option
              v-for="data in formData.role"
              :key="data.id"
              :label="data.name"
              :value="data.id">
            </el-option>

          </el-select>
        </el-form-item>

        <el-form-item label="是否开启">
          <el-switch v-model="formData.isActive"></el-switch>
        </el-form-item>

        <el-form-item label="描述">
          <el-input
            type="textarea"
            v-model="formData.introduce">
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">更新</el-button>
          <el-button>取消</el-button>
        </el-form-item>
         
      </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'userForm',
  props: {
    formData: {
      type: Object,
      default: () => {}
    },

    formVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>