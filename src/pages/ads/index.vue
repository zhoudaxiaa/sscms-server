<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 广告
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-27 15:16:31
 * @LastEditTime: 2019-04-27 16:55:24
 -->

<template>
  <div>

    <div class="table-wrap">

      <!-- 公共操作 -->
      <div class="public-op-wrap">

        <!-- 添加数据按钮 -->
        <add-data-btn
          @click.native="handelAddArticle">
        </add-data-btn>

        <!-- 删除数据按钮 -->
        <delete-data-btn
          @formOperation="formOperation">
        </delete-data-btn>
        
      </div>

      <ads-table
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="tableData">
      </ads-table>
      
      <!-- 分页组件，当数据大于10才显示 -->
      <el-pagination
        v-if="total > 10"
        class="pagination-wrap"
        layout="total, prev, pager, next"
        :total="total"
        :current-page.sync="currentPage"
        @current-change="pageChange">
      </el-pagination>
      
    </div>
  </div>
</template>

<script>
import AddDataBtn from '@/pages/common/AddDataBtn'
import DeleteDataBtn from '@/pages/common/DeleteDataBtn'

import AdsTable from './AdsTable'

import * as types from '@/store/mutation-types'

export default {
  components: {
    AddDataBtn,
    DeleteDataBtn,
    AdsTable,
  },

  data () {
    return {

      deleteId: '',  //要删除的id

      deleteIdList:'',  // 要删除的id 字符串组合
      
      formData: {},  // 表单数据

      formOp: '',  // 表单操作名

      formVisible: false,  // 表单显示状态

      tableData: [],  // 表格数据(对象数组)

      currentPage: 1, // 当前的页码

      total: 0, // 总计数据的数
    }
  },

  
  created() {
    this.initData() // 初始化数据
  },
  
  methods: {
    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      this.currentPage = this.$store.state.form.article.CurrentPage  // 从store 从获取当前页码


      // 请求成功
      // if (data) {
      //   this.tableData = data.list  // 数据数组
      //   this.total = data.total  // 数量
      // }

    },

    /**
     * @description: 监听表单操作，子组件触发
     * @param {String} op 触发的表单操作名称
     * @param {Number|String} i 当前操作的表格列的索引 或者id
     * @return: 
     */
    formOperation (op, i) {
      
      this.formOp = op  // 表单操作名称

      switch (op) {
        case 'editData': this.editData(i); break // 表单修改操作
        case 'deleteData': this.deleteData(this.deleteId); break  // 表单删除操作
        case 'deleteMultData': this.deleteData(this.deleteIdList); break  // 表单多选删除操作
      }
    },

    /**
     * @description: 监听表格多选，子组件触发
     * @param {String} 子组件选中的id 或者id组合字符串(逗号隔开)
     * @return: 
     */
    selectionOperation (ids) {

      if (ids.indexOf(',') >= 0) {  // 多项删除
        this.deleteIdList= ids
      } else {
        this.deleteId = ids
      }

    },

    /**
     * @description: // 切换表单显示状态
     * @return: 
     */
    toggleFormVisible () {
      this.formVisible = !this.formVisible
    },

    /**
     * @description: 表单新增操作
     * @return: 
     */    
    addData () {
      this.toggleFormVisible()
      this.formData = this.initFormData
    },

    /**
     * @description: 删除表格
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteData (idList) {

      // id 不能为空
      if (idList) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          return this.deleteDataOp(idList)

        }).then((result) => {
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        }).catch ((err) => {
          this.$message({
            type: 'error',
            message: '删除失败！'
          })
        })
      } else {
        this.$message({
          type: 'warning',
          message: '请至少选择一项删除！'
        })
      }

    },

    /**
     * @description: 当前页面改变时调用，获取数据
     * @param {Number} page 当前页码 
     * @return: 
     */
    async pageChange (page) {
      let count = 10

      this.setPageNum(page)

      const data = await this.getDataOp(page*count, count)  // 从第几条开始获取，10条数据

      if (data) this.tableData = data.list  // 数据数组
        
    },

    /**
     * @description: 表单修改操作
     * @param {Number} 当前操作的表格列的索引（第几个表格数据）
     * @return: 
     */    
    editData (i) {
      this.toggleFormVisible()
      this.$router.push('/editArticle/' + this.tableData[i].aid)
    },

    /**
     * @description: 删除数据操作
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteDataOp (idList) {
      // return deleteAdminUser(idList)
    },

    /**
     * @description:   // 存储当前的页码
     * @param {Number} page 当前页码
     * @return: 
     */
    setPageNum (page) {
      this.$store.commit(types.SET_ARTICLE_CURRENT_PAGE, page)
    },

    /**
     * @description: 
     * @param {type} 
     * @return: 
     */    
    handelAddArticle () {
      this.$router.push('/addArticle')
    }

  },
}
</script>

<style lang="scss" scoped>

</style>