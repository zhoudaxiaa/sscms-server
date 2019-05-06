<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-05-06 13:36:29
 -->

<template>
  <div>

    <!-- 用户表单 -->
    <user-form
      class="form-wrap"
      @changeFormVisible="toggleFormVisible"
      @formOperation="formOperation"
      :formData="formData"
      :opId="opId"
      :formOp="formOp"
      :formVisible="formVisible">
    </user-form>

    <div class="table-wrap">

      <!-- 公共操作 -->
      <div class="public-op-wrap">

        <!-- 添加数据按钮 -->
        <add-data-btn
          @formOperation="formOperation">
        </add-data-btn>

        <!-- 删除数据按钮 -->
        <delete-data-btn
          @formOperation="formOperation">
        </delete-data-btn>
        
      </div>

      <user-table
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="tableData">
      </user-table>
      
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

import UserForm from './UserForm'
import UserTable from './UserTable'

import { getAdminUser, deleteAdminUser } from '@/api/admin'

import * as types from '@/store/mutation-types'

export default {
  components: {
    AddDataBtn,
    DeleteDataBtn,
    UserForm,
    UserTable
  },
  data () {
    return {
      initFormData: {  // 初始表单
        name: '',
        avatar: '',
        username: '',
        password: '',
        check_pass: '',  // 非必要字段，只为了表单效验
        email: '',
        role_id: '',
        is_active: true,
        introduce: '',
      },

      deleteId: '',  //要删除的id

      opId: '',  // 当前操作数据id

      deleteIdList:'',  // 要删除的id 字符串组合
      
      formData: {},  // 表单数据

      formOp: '',  // 表单操作名（新增还是更新）

      formVisible: false,  // 表单显示状态

      tableData: [],  // 表格数据(对象数组)

      total: 0,  // 数据总数量
    
    }
  },

  created () {
    this.initData() // 初始化数据
  },
  
  methods: {
    /**
     * @description: 获取页数据操作
     * @param {Number} start 从第几条开始获取
     * @param {Number} count 一次获取多少条数据
     * @return: 
     */
    getPageData (start, count) {
      return getAdminUser(start, count)
    },

    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      this.currentPage = this.$store.state.form.adminUser.CurrentPage  // 从store 从获取当前页码

      const data = await this.getPageData(0,10)  // 从第一条数据开始，10条数据

      // 请求成功
      if (data) {
        this.tableData = data.list  // 数据数组
        this.total = data.total  // 数量
      }

    },

    /**
     * @description: 监听表单操作，子组件触发
     * @param {String} op 触发的表单操作名称
     * @param {Number} i 当前操作的表格列的索引
     * @param {String} id 当前操作的id
     * @return: 
     */
    formOperation (op, i, id) {
      
      this.formOp = op  // 表单操作名称（新增还是更新）

      switch (op) {
        case 'initData': this.initData(); break
        case 'addDataOp': this.addDataOp(); break  // 表单新增操作
        case 'editDataOp': this.editDataOp(i, id); break // 表单修改操作
        case 'deleteDataOp': this.deleteDataOp(this.deleteId); break  // 表单删除操作
        case 'deleteMultDataOp': this.deleteDataOp(this.deleteIdList); break  // 表单多选删除操作
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
    addDataOp () {
      this.toggleFormVisible()
      this.formOp = 'add'
      
      this.formData = this.initFormData
    },

    /**
     * @description: 表单修改操作
     * @param {Number} 当前操作的表格列的索引（第几个表格数据）
     * @param {String} 操作的id
     * @return: 
     */    
    editDataOp (i, id) {
      this.toggleFormVisible()
      this.formOp = 'edit'
      this.opId = id
      
      this.formData = { ...this.tableData[i], check_pass:'', password: '' }
    },

    /**
     * @description: 删除表格
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteDataOp (idList) {

      // id 不能为空
      if (idList) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          return this.deleteData(idList)

        }).then((result) => {
          if (!result.code) {
            this.initData()  // 删除成功，刷新数据

            this.$message({
              type: 'success',
              message: '删除成功！'
            })
          } else {
            this.$message({
              type: 'error',
              message: '删除失败！'
            })
          }
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
     * @description: 删除数据
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteData (idList) {
      return deleteAdminUser(idList)
    },

    /**
     * @description: 当前页面改变时调用，获取数据
     * @param {Number} page 当前页码 
     * @return: 
     */
    async pageChange (page) {
      let count = 10

      this.setPageNum(page)

      const data = await this.getPageData(page*count, count)  // 从第几条开始获取，10条数据

      if (data) this.tableData = data.list  // 数据数组
        
    },

    /**
     * @description:   // 存储当前的页码
     * @param {Number} page 当前页码
     * @return: 
     */
    setPageNum (page) {
      this.$store.commit(types.SET_ADMIN_USER_CURRENT_PAGE, page)
    },

  },
}
</script>

<style lang="scss" scoped>

</style>