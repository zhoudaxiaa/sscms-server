<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 22:05:59
 * @LastEditTime: 2019-04-25 22:11:15
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
        prop="title"
        label="广告名">
      </el-table-column>

      <el-table-column
        prop="author.name"
        label="广告类型">
      </el-table-column>

      <el-table-column
        label="是否显示">
        <template slot-scope="scope">
          <i
            :class="scope.row.is_active ? 'el-icon-success' : 'el-icon-error'"
            :style="scope.row.is_active ? green : red">
          </i>
        </template>
      </el-table-column>

      <el-table-column
        label="广告描述">
      </el-table-column>

      <el-table-column
        prop="publish_time"
        label="创建时间">
      </el-table-column>

      <el-table-column
        width="100"
        label="操作">
        <template slot-scope="op">
          <div>
            
            <router-link to="">
              <el-button
                size="small"
                type="primary"
                icon="el-icon-edit"
                circle>
              </el-button>
            </router-link>

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
  name: 'AdsTable',

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
  },
  
}
</script>

<style lang="scss" scoped>

</style>