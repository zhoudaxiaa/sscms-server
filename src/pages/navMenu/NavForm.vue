<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 导航菜单表格
 * @Version: 1.0
 * @Date: 2019-06-08 17:05:50
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 08:36:47
 -->
<template>
  <el-dialog
    title="填写导航信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        ref="form"
        :model="formData"
        :rules="rules"
        label-width="80px">

        <el-form-item
          label="导航名"
          prop="name">

          <el-input v-model="formData.name"></el-input>

        </el-form-item>  

        <el-form-item
          label="链接">
          <el-input v-model="formData.link"></el-input>
        </el-form-item>

        <el-form-item label="是否显示">
          <el-switch v-model="formData.is_show"></el-switch>
        </el-form-item>

        <el-form-item
          label="排序">
          <el-input-number v-model="formData.sort"></el-input-number>
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

import { addNav, updateNav } from '@/api/nav'

import apiPath from '@/api/apiPath'

export default {
  name: 'NavForm',

  props: {
    tableData: {
      type: Array,
      default: () => []
    },

    formData: {  // 表单数据
      type: Object,
      default: () => {},
    },

    opId: {  // 操作数据的id
      type: String,
      default: ''
    },

    formOp: {  // 当前表单操作，新增还是修改
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

      rules: {  // 表单验证规则
        name: [
          {
            required: true,
            message: '请输入分类名',
            trigger: 'blur'
          },
          {
            min: 2,
            max: 20,
            message: '长度在2到20个字符',
            trigger: 'change'
          }
        ],

      }
    }
  },

  methods: {
/**
     * @description: 触发父级初始化数据（更新）
     * @param {type} 
     * @return: 
     */
    initData () {
      this.$emit('formOperation', {op: 'initData'})
    },

    /**
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateNav(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addNav(formData)
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
</style>