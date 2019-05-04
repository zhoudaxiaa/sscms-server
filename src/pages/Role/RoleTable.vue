<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: new project
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-13 22:51:00
 * @LastEditTime: 2019-04-27 18:24:17
 -->
<template>
  <div>
    <el-table
      class="table-container"
      :data="tableData"
      @selection-change="handleSelectionChange">

      <!-- 选择框 -->
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        width="1"
        label="id">
        <template slot-scope="scope">
          <input
            type="hidden"
            :value="scope.row.id">
        </template>
      </el-table-column>

      <el-table-column
        prop="name"
        width="200"
        label="角色名">
      </el-table-column>

      <el-table-column
        prop="introduce"
        label="描述">
      </el-table-column>

      <el-table-column
        width="200"
        label="操作">
        <template slot-scope="op">
          <div>
            
            <el-button
              @click="handleEditData(op.$index)"
              size="small"
              type="primary"
              icon="el-icon-edit"
              circle>
            </el-button>

            <el-button
              @click="handleEditReource(op.row.id)"
              size="small"
              type="success"
              circle>
              <svg-icon icon-class="tree"></svg-icon>
            </el-button>

            <el-button
              @click='handleDeleteData(op.row.id)'
              size="small"
              type="danger"
              icon="el-icon-delete"
              circle>
            </el-button>

          </div>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'RoleTable',
  
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      green: { color: "#13CE66" },
      red: { color: "#FF4949" },
    }
  },
  methods: {
    /**
     * @description: 点击修改角色资源事件
     * @param {String} id 当前操作的角色id
     * @return: 
     */
    handleEditReource (id) {
      this.$emit('formOperation', 'editResourceOp', id)
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

      this.$emit('formOperation', 'editDataOp', i)

    },

    /**
     * @description: 删除数据
     * @param {number} id 要删除的数据id 
     * @return: 
     */
    handleDeleteData (id) {
      this.$emit("selectionOperation", id)
      this.$emit('formOperation', 'deleteDataOp')
    },
    
  }
}
</script>

<style scoped>
.table-container {
  width: 100%;
  margin-bottom: 20px;
}
</style>