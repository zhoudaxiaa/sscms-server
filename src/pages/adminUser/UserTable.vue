<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户数据表格
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-13 21:57:55
 * @LastEditTime: 2019-04-14 22:26:08
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
        prop="role_name"

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
              @click="handleEditData(op.$index)"
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
import tableMixins from '@/pages/common/tableMixins'

export default {
  name: 'UserTable',
  
  mixins: [tableMixins],

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

}
</script>

<style scoped>
.table-container {
  width: 100%;
  margin-bottom: 20px;
}
</style>
