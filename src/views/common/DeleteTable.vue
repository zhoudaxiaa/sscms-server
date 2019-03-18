<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单删除操作组件
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 20:15:59
 * @LastEditTime: 2019-03-18 13:38:05
 -->

<template>
  <el-button
    @click="deleteTable"
    type="danger"
    icon="el-icon-delete"
    circle>
  </el-button>
</template>

<script>

export default {
  name: 'DeleteTable',
  props: {
    httpDeleteMethod: {  // http删除方法
      type: Function,
      default: () => {}
    },
    deleteIdList: {  // 删除项的id列表
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * @description: 删除表格（传入子组件的方法)
     * @param {type} 
     * @return: 
     */    
    async deleteTable () {
      const idList = this.deleteIdList

      console.log(idList)

      if (!idList) {
        this.$message({
          type: 'error',
          message: '请至少选择一项进行删除操作！'
        })
        return
      }

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        return this.httpDeleteMethod(idList)

      }).then((result) => {
        if (result.code === 0) {
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        }
      }).catch ((err) => {
        this.$message({
          type: 'error',
          message: '删除失败！'
        })
      })
    },
  }
}
</script>

<style scoped>

</style>
