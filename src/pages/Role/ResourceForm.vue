<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 资源树形表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-14 21:44:44
 * @LastEditTime: 2019-04-21 21:29:20
 -->
<template>
  <el-dialog
    title="分配角色资源"
    :visible.sync="resourceVisible"
    :before-close="closeForm">
    
    <el-tree
      class="resource-tree"
      ref="tree"
      :data="resourceTreeData"
      :default-expanded-keys="selectedResource"
      :default-checked-keys="selectedResource"
      show-checkbox
      node-key="id">
    </el-tree>

    <el-button
      @click="handleUpdateSubmit"
      type="primary">
      更新
    </el-button>

    <el-button @click="closeForm">取消</el-button>

  </el-dialog>
</template>

<script>

export default {
  name: 'ResourceForm',
  
  props: {
    selectedResource: {  // 当前角色拥有的资源
      type: Array,
      default: () => []
    },

    resourceTreeData: {  // 资源树
      type: Array,
      default: () => []
    },

    resourceVisible: {  // 资源表单显示状态
      type: Boolean,
      default: false
    }
  },

  

  methods: {

    /**
     * @description: 角色资源更新操作
     * @param {type} 
     * @return: 
     */
    async handleUpdateSubmit () {
      // const data = await this.updateOp (this.formData)

      // if (data) {
      //   this.$message({
      //     type: 'success',
      //     message: '更新成功！'
      //   })
      // }

      console.log(this.$refs.tree.getCheckedKeys())

      this.closeForm();

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
.resource-tree {
  margin-bottom: 20px;
}
</style>