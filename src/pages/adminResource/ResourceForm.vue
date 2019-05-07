<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 资源表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-25 21:41:25
 * @LastEditTime: 2019-05-07 16:54:30
 -->
<template>
  <el-dialog
    title="填写资源信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        ref="form"
        :model="formData"
        :rules="rules"
        label-width="100px">

        <el-form-item
          label="资源名称"
          prop="name">

          <el-input v-model="formData.name"></el-input>

        </el-form-item>

        <el-form-item label="是否开启">
          <el-switch v-model="formData.is_active"></el-switch>
        </el-form-item>

        <el-form-item label="资源类型">
          <el-select
            :disabled="formOp === 'edit'"
            v-model="formData.type">
            <el-option
              label="基础菜单"
              :value="0">
            </el-option>
            <el-option
              label="功能操作"
              :value="1">
            </el-option>
          </el-select>
        </el-form-item>

        <template v-if="formData.type === 0">
          <el-form-item label="菜单Icon">
            <el-input v-model="formData.icon"></el-input>
          </el-form-item>

          <template v-if="formData.pid">
            <el-form-item label="前端路由地址">
              <el-input v-model="formData.route_path"></el-input>
            </el-form-item>

            <el-form-item label="模板地址">
              <el-input v-model="formData.component_path"></el-input>
            </el-form-item>
          </template>

        </template>

        <el-form-item v-else label="api地址">
          <el-input v-model="formData.api"></el-input>
        </el-form-item>

        <el-form-item
          label="描述">

          <el-input
            type="textarea"
            v-model="formData.introduce">
          </el-input>

        </el-form-item>

        <el-form-item>
          <el-input-number v-model="formData.sort"></el-input-number>
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

import { addResource, updateResource } from '@/api/resource'

export default {
  name: 'ResourceForm',

  props: {

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
            message: '请输入资源名',
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

  computed: {
    roleList () {
      return this.$store.state.app.roleList  // 从store里获取角色组列表
    },
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
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateResource(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addResource(formData)
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