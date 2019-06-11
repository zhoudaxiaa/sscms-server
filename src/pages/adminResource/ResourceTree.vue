<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 资源树
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-25 21:41:08
 * @LastEditTime: 2019-06-08 11:07:13
 -->
<template>
  <el-tree
    class="tree-wrap"
    @check-change="handleSelectionChange"
    ref="tree"
    show-checkbox
    default-expand-all
    node-key="id"
    :check-strictly="true"
    :expand-on-click-node="false"
    :data="tableData"
    :render-content="renderContent">
  </el-tree>
</template>

<script>
export default {
  name: 'ResourceTree',

  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  methods: {

    /**
     * @description: 新增分类事件
     * @param {Object} data 操作数据对象，element-ui 提供 
     * @return: 
     */    
    handleAddData (data) {
      this.$emit('formOperation', {op: 'addDataOp', id: data.id})
    },

    /**
     * @description: 修改数据
     * @param {Object} data 操作数据对象，element-ui 提供 
     * @return: 
     */
    handleEditData (data) {
      this.$emit('formOperation', {op: 'editDataOp', id: data.id})

    },

    /**
     * @description: 删除数据
     * @param {Object} data 操作数据对象，element-ui 提供 
     * @return: 
     */
    handleDeleteData (data) {
      this.$emit("selectionOperation", data.id)
      this.$emit('formOperation', {op: 'deleteDataOp'})
    },

    /**
     * @description: selection-change时触发
     * @param {object} 表格数据对象 
     * @return: string id组成的字符串
     */
    handleSelectionChange () {
      let ids = this.$refs.tree.getCheckedKeys()

      this.$emit("selectionOperation", ids.join(','));
    },

    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span class="tree-text">{node.label}</span>
          <span class="tree-op">
            <el-button
              type="primary"
              size="mini"
              on-click={ () => this.handleAddData(data) }
              icon="el-icon-plus"
              circle>
            </el-button>
            <el-button
              type="success"
              size="mini"
              on-click={ () => this.handleEditData(data) }
              icon="el-icon-edit"
              circle>
            </el-button>
            <el-button
              type="danger"
              size="mini"
              on-click={ () => this.handleDeleteData(data) }
              icon="el-icon-delete"
              circle>
            </el-button>
          </span>
        </span>);
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-wrap {
  margin-top: 20px;
  padding: 0 20px;

  /deep/ {
    .custom-tree-node {
      display: block;
      width: 100%;
    }
    .tree-text {
    }

    .tree-op {
      float: right;
      margin-left: 100px
    }

    .el-tree-node {
      margin: 5px 0;
    }
  }
}

</style>