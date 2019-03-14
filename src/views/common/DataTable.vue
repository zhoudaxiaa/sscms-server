<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 数据表格组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 13:40:15
 * @LastEditTime: 2019-03-14 21:25:28
 -->

<template>
  <el-table
    class="table-container"
    :data="tableData">

    <!-- 选择框 -->
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>


    <!-- 循环输出数据，取数据的第一项循环，得出属性名 - name，填入 -->
    <el-table-column
      v-for="(value, key) in tableData[0]"
      :key="key"
      :prop="key"
      :width="tableTile[key].width"
      :label="tableTile[key].title">

      <template slot-scope="scope">

        <!-- 根据属性值是不是布尔值来条件渲染，是布尔，就展示一个图标，否则展示数据 -->
        <i
          v-if="typeof scope.row[key] === 'boolean'"
          :class="scope.row[key] ? 'el-icon-success' : 'el-icon-error'"
          :style="scope.row[key] ? green : red">
        </i>

        <div v-else>
          {{scope.row[key]}}
        </div>

      </template>

    </el-table-column>

    <slot></slot>

  </el-table>
</template>

<script>
export default {
  name: 'dataTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableTile: {
      type: Object,
      default: () => {}
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