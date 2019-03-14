<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户表单提交组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 13:39:19
 * @LastEditTime: 2019-03-14 17:00:32
 -->

<template>
  <el-dialog
    title="填写用户信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        :model="formData"
        label-width="80px">

        <!-- 当是修改数据，存在数据id时才显示 -->
        <input
          v-if="formData.id"
          type="hidden"
          :value="formData.id">

        <el-form-item
          label="帐号昵称"
          prop="formData.name"
          required>

          <el-input v-model="formData.name"></el-input>

        </el-form-item>

        <el-form-item label="头像">
          
          <el-upload
            class="avatar-wrap"
            :show-file-list="false"
            :action="apiPath.avatar"
            :on-success="uploadAvatarSuccess"
            :before-upload="beforeAvatarUpload">

            <img
              class="avatar-img"
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
          prop="formData.user_name"
          required>

          <el-input v-model="formData.user_name"></el-input>

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
            v-model="roleId"
            placeholder="请选择角色组">
            
            <el-option
              v-for="data in roles"
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

          <el-button
            v-if="isEdit"
            type="primary">
            更新
          </el-button>

          <el-button
            v-else
            type="primary">
            添加
          </el-button>
          
          <el-button>取消</el-button>

        </el-form-item>
         
      </el-form>
  </el-dialog>
</template>

<script>
import apiPath from '@/api/apiPath'

import * as types from '@/store/mutation-types'

export default {
  name: 'userForm',
  props: {
    formData: {  // 表单数据
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      apiPath,  // api路径表
      roleId: ''  // 要提交的角色id
    }
  },

  methods: {
    /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadAvatarSuccess (res) {
      // 把本地上传的图片地址转化为网络地址
      this.formData.avatar = res.data.url
    },
    
    /**
     * @description: 上传之前的回调函数
     * @param {object} 上传的文件对象（element-ui提供）
     * @return: 
     */
    beforeAvatarUpload (file) {
      const isPass = 'image/jpeg,image/png'.indexOf(file.type) > -1
      const isOverZise = file.size >= 200 * 1024

        if (!isPass) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return false
        }
        if (isOverZise) {
          this.$message.error('上传头像图片大小不能超过 300KB!');
          return false
        }
    },

    /**
     * @description: 关闭表单框之前把表单的显示状态切换下
     * @param {type} 
     * @return: 
     */  
    closeForm () {
      this.$store.commit(types.TOGGLE_DIALOG_FORM_VISIBLE)
    }
  },

  computed: {
    // 从store里获取角色组列表
    roles () {
      return this.$store.getters.roles
    },

    // 从store里读取表单框显示状态
    formVisible () {
      return this.$store.getters.dialogFormVisible
    },

    // 从store里读取是不是表单修改操作
    isEdit () {
      return this.$store.getters.isFormEditOp
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrap {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  .avatar-img {
    width: 100%;
    height: 100%;
  }

  .el-icon-plus {
    width: 80px;
    height: 80px;
    font-size: 36px;
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    line-height: 80px;

    &:hover {
      border-color: #409EFF;
    }
  }
}
</style>