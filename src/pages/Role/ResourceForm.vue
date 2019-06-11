<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 资源树形表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-14 21:44:44
 * @LastEditTime: 2019-06-07 13:01:08
 -->
<template>
  <el-dialog
    title="分配角色资源"
    :visible.sync="resourceVisible"
    :before-close="closeForm">
    
    <template v-if="isShow">
      <el-tree
        class="resource-tree"
        @check-change="checkChange"
        ref="tree"
        :default-expanded-keys="selectedResource"
        :data="resourceTreeData"
        show-checkbox
        node-key="id">
      </el-tree>
    </template>

    <el-button
      @click="handleUpdateSubmit"
      type="primary">
      更新
    </el-button>

    <el-button @click="closeForm">取消</el-button>

  </el-dialog>
</template>

<script>
import { updateRole } from '@/api/role'

export default {
  name: 'ResourceForm',
  
  props: {
    selectedResource: {  // 当前角色拥有的资源
      type: Array,
      default: () => []
    },

    opId: {  // 当前操作的id
      type: String,
      default: '',
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

  data () {
    return {
      isShow: true,  // 切换树的显示状态来刷新展开的节点
      formData: {},  // 表单数据
    }
  },

  watch:{
    selectedResource () {
      this.isShow = true
      this.$nextTick(() => {
        if (this.$refs.tree) {
        
          let selectedResource = this.selectedResource

          this.$refs.tree.setCheckedKeys(selectedResource)
        }
      })
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
     * @description: 选中的项发生变化时触发，element-ui 提供
     * @param {type} 
     * @return: 
     */    
    checkChange () {
      this.formData = {
        resource_id: this.$refs.tree.getCheckedKeys()
      }
    },

    /**
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateRole(formData, id)
    },


    /**
     * @description: 角色资源更新操作
     * @param {type} 
     * @return: 
     */
    async handleUpdateSubmit () {

      await this.updateData (this.formData, this.opId)

      this.initData()  // 更新表格

      this.$message({
      type: 'success',
      message: '更新成功！'
      })

      this.closeForm()

    },

    /**
     * @description: 关闭表单框之前把表单的显示状态切换下
     * @param {type} 
     * @return: 
     */  
    closeForm () {
      this.$emit('changeFormVisible')
      this.isShow = false
    },

  }

}
</script>

<style lang="scss" scoped>
.resource-tree {
  margin-bottom: 20px;
}
</style>