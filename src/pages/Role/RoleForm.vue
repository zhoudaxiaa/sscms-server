<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-18 11:22:10
 * @LastEditTime: 2019-05-06 14:02:26
 -->

<template>
  <el-dialog
    title="填写角色信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        ref="form"
        :model="formData"
        :rules="rules"
        label-width="80px">

        <el-form-item
          label="角色名"
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

export default {
  name: 'RoleForm',

  props: {
    tableData: {
      type: Array,
      default: () => []
    },

    formData: {  // 表单数据
      type: Object,
      default: () => {},
    },

    opId: {  // 当前操作的id
      type: String,
      default: '',
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
     * @description: 触发父级初始化数据（更新）
     * @param {type} 
     * @return: 
     */
    initData () {
      this.$emit('formOperation', 'initData')
    },

    /**
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateRole(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addRole(formData)
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

  },
  
}
</script>

<style lang="scss" scoped>
</style>