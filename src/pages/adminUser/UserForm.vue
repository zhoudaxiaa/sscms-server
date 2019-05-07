<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户表单提交组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 13:39:19
 * @LastEditTime: 2019-05-07 14:13:08
 -->

<template>
  <el-dialog
    title="填写用户信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        ref="form"
        :model="formData"
        :rules="rules"
        label-width="80px">

        <el-form-item
          label="帐号昵称"
          prop="name">

          <el-input v-model="formData.name"></el-input>

        </el-form-item>

        <el-form-item label="头像">
          
          <el-upload
            class="avatar-wrap"
            :show-file-list="false"
            :action="apiPath.uploadFile"
            :on-success="uploadImgSuccess"
            :before-upload="beforeImgUpload">

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
          prop="username">

          <el-input v-model="formData.username"></el-input>

        </el-form-item>

        <el-form-item
          label="密码"
          prop="password">
          
          <el-input
            type="password"
            v-model="formData.password">
          </el-input>

        </el-form-item>

        <el-form-item
          label="确认密码"
          prop="check_pass">

          <el-input
            type="password"
            v-model="formData.check_pass">
          </el-input>

        </el-form-item>

        <el-form-item
          label="邮箱"
          prop="email">

          <el-input v-model="formData.email"></el-input>

        </el-form-item>

        <el-form-item
          label="角色组"
          prop="role_id">
          <el-select
            v-model="formData.role_id"
            placeholder="请选择角色组">
            
            <el-option
              v-for="data in roleList"
              :key="data.id"
              :label="data.name"
              :value="data.id">
            </el-option>

          </el-select>
        </el-form-item>

        <el-form-item label="是否开启">
          <el-switch v-model="formData.is_active"></el-switch>
        </el-form-item>

        <el-form-item
          label="描述">

          <el-input
            type="textarea"
            v-model="formData.introduce">
          </el-input>

        </el-form-item>

        <el-form-item>

          <el-button
            @click="handleUpdateSubmit"
            v-if="formOp === 'edit'"
            type="primary">
            更新
          </el-button>

          <el-button
            @click="handleAddSubmit"
            v-else
            type="primary">
            添加
          </el-button>
          
          <el-button @click="closeForm">取消</el-button>

        </el-form-item>

      </el-form>
  </el-dialog>
</template>

<script>

import { addAdminUser, updateAdminUser } from '@/api/admin'
import { getAllRole } from '@/api/role'

import apiPath from '@/api/apiPath'

export default {
  name: 'UserForm',

  props: {

    formData: {  // 表单数据
      type: Object,
      default: () => {},
    },

    opId: {  // 当前操作的id
      type: String,
      default: '',
    },

    formOp: {  // 当前表单操作（新增还是更新）
      type: String,
      default: '',
    },

    formVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      apiPath,  // 上传头像要用到的url地址

      roleList: [],  // 角色列表

      rules: {  // 表单验证规则
        name: [
          {
            required: true,
            message: '请输入用户昵称',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 10,
            message: '长度在2到10个字符',
            trigger: 'change'
          }
        ],
        username: [
          {
            required: true,
            message: '请输入登录账号',
            trigger: 'blur'
          }
        ],
        password: [
          {
            // 使用箭头函数绑定this
            validator: (rule, value, callback) => {

              // 如果是新增数据，必须输入密码
              if (this.formOp === 'add' && !value) callback(new Error('请输入密码'))

              // 如果是修改密码，输入了就必须符合规范
              if (value && !/^(\d|[a-zA-Z]|_){6,}$/.test(value)) {
                callback(new Error('6 到 12 位,只能包含字母、数字和下划线!'))
              }
              
              callback()
            },
            trigger: 'blur'
          }
        ],
        check_pass: [
          {
            // 使用箭头函数绑定this
            validator: (rule, value, callback) => {

              // 如果输入了密码，这个确认密码也得输入
              if (this.formData.password && !value) callback(new Error('请再次输入密码'))

              // 一致就通过
              if (value !== this.formData.password) callback(new Error('两次输入的密码不一致！'))

              callback()
            },
            trigger: 'blur'
          }
        ],
        email: [
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'change'
          }
        ],
        role_id: [
          {
            required: true,
            message: '请选择一个角色组',
            trigger: 'change'
          }
        ],

      }
    }
  },

  created () {
    // 请求所有角色组列表数据并commit
    (async () => {

      const data = await getAllRole() // 获取所有角色列表
      
      if (data) this.roleList = data
    })()
  },

  methods: {
    /**
     * @description: 触发父级初始化数据（更新）
     * @param {type} 
     * @return: 
     */
    initData () {
      this.$emit('formOperation', 'initData')
    },
    
    /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadImgSuccess (res) {
      // 把本地上传的图片地址转化为网络地址
      this.formData.avatar = res
    },
    
    /**
     * @description: 上传之前的回调函数
     * @param {object} 上传的文件对象（element-ui提供）
     * @return: 
     */
    beforeImgUpload (file) {
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
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateAdminUser(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addAdminUser(formData)
    },

    /**
     * @description: 表单更新数据操作
     * @param {type} 
     * @return: 
     */
    async handleUpdateSubmit () {

      this.$refs.form.validate(async (valid) => {

        if (valid) {

          await this.updateData (this.formData, this.opId)

          this.initData()  // 更新表格

          this.$message({
          type: 'success',
          message: '更新成功！'
          })

          this.closeForm()

        } else {
          return false
        }
      })

    },

    /**
     * @description: 表单新增数据操作
     * @param {type} 
     * @return: 
     */
    async handleAddSubmit () {

      this.$refs.form.validate(async (valid) => {

        if (valid) {
          await this.addData (this.formData)

          this.initData()  // 更新表格

          this.$message({
            type: 'success',
            message: '添加成功！'
          })

          this.closeForm()

        } else {
          return false
        }
      })
      
    },

    /**
     * @description: 关闭表单框之前把表单的显示状态切换下
     * @param {type} 
     * @return: 
     */  
    closeForm () {
      this.$emit('changeFormVisible')
    },

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