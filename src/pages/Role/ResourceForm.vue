<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 资源树形表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-14 21:44:44
 * @LastEditTime: 2019-04-15 22:36:29
 -->
<template>
  <el-dialog
    title="分配角色资源"
    :visible.sync="resourceVisible"
    :before-close="closeForm">
    
    <el-tree
      class="resource-tree"
      :data="resourceFormData"
      show-checkbox
      node-key="id">
    </el-tree>

    <el-button
      @click="handleAddSubmit"
      type="primary">
      更新
    </el-button>

    <el-button @click="closeForm">取消</el-button>

  </el-dialog>
</template>

<script>
import formMixins from '@/pages/common/formMixins'

export default {
  name: 'ResourceForm',

  mixins: [formMixins],
  
  props: {
    resourceFormData: {
      type: Array,
      default: () => []
    },
    resourceVisible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     * @description: 表单更新数据操作
     * @param {type} 
     * @return: 
     */
    async handleAddSubmit () {
      const data = await this.updateOp (this.resourceFormData)

      if (data) {
        this.$message({
          type: 'success',
          message: '更新成功！'
        })
      }

      this.closeForm();

    },

    updateOp (formData) {
      console.log(formData)
    }
  }

}
</script>

<style lang="scss" scoped>
.resource-tree {
  margin-bottom: 20px;
}
</style>