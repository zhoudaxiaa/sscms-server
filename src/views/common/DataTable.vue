<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 数据表格组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 13:40:15
 * @LastEditTime: 2019-03-16 22:21:04
 -->

<template>
  <el-table
    class="table-container"
    :data="tableData"
    @selection-change="selectionChange">

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

        <input
          v-if="key === 'id'"
          type="hidden"
          value="scope.row[key]">

        <!-- 根据属性值是不是布尔值来条件渲染，是布尔，就展示一个图标，否则展示数据 -->
        <i
          v-else-if="typeof scope.row[key] === 'boolean'"
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
  name: 'DataTable',
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

  methods: {
    selectionChange (val) {
      let ids = []

      val.forEach((v) => {
        ids.push(v.id)
      })

      this.$emit('selectionOperation', ids.join(','))
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