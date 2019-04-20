<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: new project
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-13 22:51:00
 * @LastEditTime: 2019-04-15 21:23:49
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
        label="管理员名">
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
              @click="handleEditReource(op.$index)"
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
import tableMixins from '@/pages/common/tableMixins'

export default {
  name: 'RoleTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  mixins: [tableMixins],

  data() {
    return {
      green: { color: "#13CE66" },
      red: { color: "#FF4949" },
    }
  },

  methods: {
    /**
     * @description: 修改角色资源
     * @param {Number} 当前操作的表格列的索引
     * @return: 
     */
    handleEditReource (i) {

      this.$emit('formOperation', 'editResource', i)

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