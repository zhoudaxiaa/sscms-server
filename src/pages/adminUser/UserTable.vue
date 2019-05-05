<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户数据表格
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-13 21:57:55
 * @LastEditTime: 2019-05-05 22:22:15
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

        label="昵称">
      </el-table-column>

      <el-table-column
        prop="username"

        label="账号名">
      </el-table-column>

      <el-table-column
        prop="role.name"
        label="角色组">
      </el-table-column>

      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>

      <el-table-column
        label="是否启用">
        <template slot-scope="scope">
          <i
            :class="scope.row.is_active ? 'el-icon-success' : 'el-icon-error'"
            :style="scope.row.is_active ? green : red">
          </i>
        </template>
      </el-table-column>

      <el-table-column
        width="100"
        label="操作">
        <template slot-scope="op">
          <div>
            
            <el-button
              @click="handleEditData(op.$index, op.row.id)"
              size="small"
              type="primary"
              icon="el-icon-edit"
              circle>
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
     * @param {String} id 操作数据的id
     * @return: 
     */
    handleEditData (i, id) {

      this.$emit('formOperation', 'editDataOp', i, id)

    },

    /**
     * @description: 删除数据
     * @param {String} id 要删除的数据id 
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
