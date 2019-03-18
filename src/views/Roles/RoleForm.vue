<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: new project
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-18 11:22:10
 * @LastEditTime: 2019-03-18 17:06:31
 -->

<template>
  <el-dialog
    title="填写用户信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="80px">

        <el-form-item
          label="帐号昵称"
          prop="name">

          <el-input v-model="formData.name"></el-input>

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
            @click="updateSubmit"
            v-if="isEdit"
            type="primary">
            更新
          </el-button>

          <el-button
            @click="addSubmit"
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
import apiPath from '@/api/apiPath'
import { mapGetters } from 'vuex'

import { addRole, updateRole } from '@/api/roles'

import * as types from '@/store/mutation-types'

export default {
  // name: 'RoleForm',
  data() {
    return {
      apiPath,  // api路径表
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
      }
    }
  },

  methods: {
    /**
     * @description: 表单更新数据操作
     * @param {type} 
     * @return: 
     */
    async updateSubmit () {
      try {
        const data = await updateRole (this.formData)

        if (data.code === 0) {
          this.$message({
            type: 'success',
            message: '更新成功！'
          })
        }

        this.closeForm();
        
      } catch (e) {
        this.message({
          type: 'error',
          message: e
        })
      }

    },

    /**
     * @description: 表单新增数据操作
     * @param {type} 
     * @return: 
     */
    async addSubmit () {
      try {
        const data = await addRole (this.formData)

        if (data.code === 0) {
          this.$message({
            type: 'success',
            message: '添加成功！'
          })
        }

        this.closeForm();

      } catch (e) {
        this.message({
          type: 'error',
          message: e
        })
      }
    },

    /**
     * @description: 关闭表单框之前把表单的显示状态切换下
     * @param {type} 
     * @return: 
     */  
    closeForm () {
      this.$store.commit(types.TOGGLE_DIALOG_FORM_VISIBLE)
    },
  },

  computed: {
    ...mapGetters({
      formData: 'rolesForm',
      roles: 'rolesList',  // 从store里获取角色组列表
      formVisible: 'dialogFormVisible',  // 从store里读取表单框显示状态
      isEdit: 'isFormEditOp',  // 从store里读取是不是表单修改操作
    })
  },
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