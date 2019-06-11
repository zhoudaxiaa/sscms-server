<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员角色页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 11:07:59
 * @LastEditTime: 2019-06-07 13:05:07
 -->

<template>
  <div>

    <!-- 角色表单 -->
    <role-form
      class="form-wrap"
      @changeFormVisible="toggleFormVisible"
      @formOperation="formOperation"
      :formData="formData"
      :opId="opId"
      :formOp="formOp"
      :formVisible="formVisible">
    </role-form>

    <!-- 资源表单 -->
    <resource-form
      @changeFormVisible="toggleResourceFormVisible"
      :selectedResource = "selectedResource"
      :opId="opId"
      :resourceTreeData="resourceTreeData"
      :resourceVisible="resourceVisible">
    </resource-form>

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
      
      <!-- 数据table展示组件 -->
      <role-table
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="tableData">
      </role-table>
      
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
import RoleForm from './RoleForm'
import ResourceForm from './ResourceForm'
import RoleTable from './RoleTable'

import { getRole, deleteRole, getRoleAllResource } from '@/api/role'
import { getAllResource } from '@/api/resource'

import { buildResourceTree } from '@/utils/utils'

import * as types from '@/store/mutation-types'

export default {
  components: {
    AddDataBtn,
    DeleteDataBtn,
    RoleForm,
    RoleTable,
    ResourceForm
  },
  data () {
    return {
      selectedResource: [],  // 当前角色拥有的资源的id数组

      resourceTreeData: [],  // 树形资源表单数据
      
      resourceVisible: false,  // 树形资源表单显示状态

      initFormData: {  // 添加管理员信息初始表格
        name: '',
        introduce: '',
      }, 

      deleteId: '',  //要删除的id

      opId: '',  // 当前操作数据id

      deleteIdList:'',  // 要删除的id 字符串组合
      
      formData: {},  // 表单数据

      formOp: '',  // 表单操作名（新增还是更新）

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
     * @description: 获取页数据操作
     * @param {Number} start 从第几条开始获取
     * @param {Number} count 一次获取多少条数据
     * @return: 
     */
    getPageData (start, count) {
      return getRole(start, count)
    },

    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      let roleData,
          resourceData

      // 并行执行请求数据
      roleData = this.getPageData(0, 10)  // 获取第一页，20条数据
      resourceData = getAllResource()  // 获取所有资源

      roleData = await roleData

      if (roleData) {
        this.tableData = roleData.list  // 数据数组
        this.total = roleData.total  // 数量
      }

      resourceData = await resourceData

      if (resourceData) {

        this.resourceTreeData  = buildResourceTree(resourceData)
      }

    },
    
    /**
     * @description: 监听表单操作，子组件触发
     * @param {String} op 触发的表单操作名称
     * @param {Number} i 当前操作的表格列的索引 
     * @param {String} id 当前操作的id
     * @return: 
     */
    formOperation ({op, i, id}) {

      this.formOp = op  // 表单操作名称

      switch (op) {
        case 'initData': this.initData(); break        
        case 'editDataOp': this.editDataOp(i, id); break // 表单修改操作
        case 'editResourceOp': this.editResourceOp(id); break // 资源表单修改操作
        case 'addDataOp': this.addDataOp(); break  // 表单新增操作
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
      let idList = ids.split(',')

      if (idList.length > 2) {  // 多项删除
        this.deleteIdList = ids
      } else {
        this.deleteId = ids
        this.deleteIdList = ids
      }

    },

    /**
     * @description: // 切换资源表单显示状态
     * @return: 
     */
    toggleResourceFormVisible () {
      this.resourceVisible = !this.resourceVisible
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
          this.initData()  // 删除成功，刷新数据

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
     * @description: 角色资源修改
     * @param {String} 角色id
     * @return: 
     */    
    async editResourceOp (id) {
      let resourceData

      resourceData = await getRoleAllResource(id)

      this.opId = id

      // 获取当前角色拥有的所有资源的id
      this.selectedResource = resourceData.map((v) => {
        return v.id
      })

      this.toggleResourceFormVisible()
    },

    /**
     * @description: 删除数据操作
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteData (idList) {
      return deleteRole(idList)
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
      this.$store.commit(types.SET_ROLE_CURRENT_PAGE, page)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>