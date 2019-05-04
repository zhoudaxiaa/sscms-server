<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章类别树
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-24 22:04:03
 * @LastEditTime: 2019-04-25 22:11:57
 -->
<template>
  <el-tree
    class="category-tree"
    show-checkbox
    default-expand-all
    :expand-on-click-node="false"
    :data="tableData"
    :render-content="renderContent">
  </el-tree>
</template>

<script>

export default {
  name: 'CategoryTree',

  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  methods: {

    /**
     * @description: 新增分类事件
     * @param {type} 
     * @return: 
     */    
    handleAddData () {
      this.$emit('formOperation', 'addData')
    },

    /**
     * @description: selection-change时触发
     * @param {object} 表格数据对象 
     * @return: string id组成的字符串
     */
    handleSelectionChange (val) {
      let ids = []

      if (val && val.length > 0) {
        ids = val.map((item, index) => {
          return item.id;
        });
      }
      
      this.$emit("selectionOperation", ids.join(','));
    },

    /**
     * @description: 修改数据
     * @param {number} i 操作的表格索引 
     * @return: 
     */
    handleEditData (i) {

      this.$emit('formOperation', 'editData', i)

    },

    /**
     * @description: 删除数据
     * @param {number} id 要删除的数据id 
     * @return: 
     */
    handleDeleteData (id) {
      this.$emit("selectionOperation", id)
      this.$emit('formOperation', 'deleteData')
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
              type="danger"
              size="mini"
              on-click={ () => this.handleEditData(data) }
              icon="el-icon-edit"
              circle>
            </el-button>
            <el-button
              type="success"
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
.category-tree {
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