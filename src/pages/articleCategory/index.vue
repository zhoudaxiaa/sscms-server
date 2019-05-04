<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章类别管理
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-24 22:00:03
 * @LastEditTime: 2019-04-25 21:15:14
 -->
<template>
  <div>

    <!-- 分类表单 -->
    <category-form
      class="form-wrap"
      @changeFormVisible="toggleFormVisible"
      :formData="formData"
      :formOp="formOp"
      :formVisible="formVisible">
    </category-form>

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

      <category-tree
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="tableData">
      </category-tree>
      
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

import mainMixins from '@/pages/common/mainMixins'

import CategoryTree from './CategoryTree'
import CategoryForm from './CategoryForm'

// import { getArticle } from '@/api/article'

import * as types from '@/store/mutation-types'

export default {
  name: 'articleCategory',
  
  components: {
    AddDataBtn,
    DeleteDataBtn,
    CategoryTree,
    CategoryForm,
  },

  mixins: [mainMixins],
  
  methods: {
    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      // this.currentPage = this.$store.state.form.article.CurrentPage  // 从store 从获取当前页码

      // const data = await getArticle(0,10)  // 从第一条数据开始，10条数据

      // // 请求成功
      // if (data) {
      //   this.tableData = data.list  // 数据数组
      //   this.total = data.total  // 数量
      // }

      this.tableData =  [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }]

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
        case 'addData': this.addData(); break // 表单修改操作
        case 'editData': this.editData(i); break // 表单修改操作
        case 'deleteData': this.deleteData(this.deleteId); break  // 表单删除操作
        case 'deleteMultData': this.deleteData(this.deleteIdList); break  // 表单多选删除操作
      }
    },

    /**
     * @description: 表单修改操作
     * @param {Number} 当前操作的表格列的索引（第几个表格数据）
     * @return: 
     */    
    addData () {
      this.toggleFormVisible()
    },

    /**
     * @description: 表单修改操作
     * @param {Number} 当前操作的表格列的索引（第几个表格数据）
     * @return: 
     */    
    editData (i) {
      this.toggleFormVisible()
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
      console.log('click')
    }

  },
}
</script>

<style lang="scss" scoped>

</style>