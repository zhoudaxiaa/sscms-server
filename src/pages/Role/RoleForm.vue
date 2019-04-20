<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-18 11:22:10
 * @LastEditTime: 2019-04-20 18:34:13
 -->

<template>
  <el-dialog
    title="填写角色信息"
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
import { addRole, updateRole } from '@/api/role'
import formMixins from '@/pages/common/formMixins'
export default {
  name: 'RoleForm',
  mixins: [formMixins],
  data() {
    return {
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
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    updateOp (formData) {
      return updateRole(formData)
    },
    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addOp (formData) {
      return addRole(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>