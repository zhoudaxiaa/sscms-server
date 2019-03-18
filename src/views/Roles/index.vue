<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员角色页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 11:07:59
 * @LastEditTime: 2019-03-18 15:15:46
 -->

<template>
  <div>
    <role-form class="form-wrap"></role-form>

    <div class="table-wrap">

      <!-- 公共操作 -->
      <div class="public-op-wrap">

        <!-- 添加数据 -->
        <addTable :initForm="initForm"></addTable>

        <!-- 删除数据 -->
        <deleteTable
          :httpDeleteMethod="deleteRoles"
          :deleteIdList="deleteIdList">
        </deleteTable>

      </div>
      
      <!-- 数据table展示组件 -->
      <data-table
        @selectionOperation="selectionOperation"
        :tableData="tableData | filterTableData(filterData)"
        :tableTile="tableTile">

        <el-table-column
          width="100"
          label="操作">
          <template slot-scope="op">
            <div>
              
              <el-button
                @click="editTable(op.$index)"
                size="small"
                type="primary"
                icon="el-icon-edit"
                circle>
              </el-button>

              <el-button
                @click='deleteTable(op.row.id)'
                size="small"
                type="danger"
                icon="el-icon-delete"
                circle>
              </el-button>

            </div>
          </template>
        </el-table-column>

      </data-table>
      
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
import DataTable from '@/views/common/DataTable'
import AddTable from '@/views/common/AddTable'
import DeleteTable from '@/views/common/DeleteTable'

import RoleForm from './RoleForm'

import { getRoles, deleteRoles } from '@/api/roles'

import { filterTableData } from '@/filter/dataFilter'  // 数据过滤器

import * as types from '@/store/mutation-types'

export default {
  name: 'Roles',
  components: {
    DataTable,
    AddTable,
    DeleteTable,
    RoleForm,
  },
  data () {
    return {
      deleteRoles,  // http删除方法，需要穿到子组件，所以先赋值给变量

      tableData: [],  // 表格数据(对象数组)

      currentPage: 1, // 当前的页码

      total: 0, // 总计数据的数

      deleteIdList: '', // 多选的id字符串组合

      initForm: {  // 添加管理员信息初始表格
        name: '',
        instroduce: '',
      }, 

      filterData: 'id,name,instroduce',  // 需要数据的字段名的字符串组合
      
      tableTile: {  // 表格的标题和宽度，title为空，标示不显示
        id: {
          title: '',
          width: '1'
        },
        name: {
          title: '昵称',
          width: ''
        },
        introduce: {
          title: '角色描述',
          width: ''
        },

      },
    
    }
  },

  filters: {
    filterTableData
  },
  
  methods: {
    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      try {
        const data = await getRoles(0, 10)  // 获取第一页，20条数据

        this.tableData = data.data.list  // 数据数组
        this.total = data.data.total  // 数量
      } catch (err) {
        this.$message.error(err)
      }
    },

    /**
     * @description: 切换表单显示状态和切换表单是不是修改操作，多次使用，提取出来
     * @param {boolean} isEdit 是不是修改操作，默认是 
     * @return: 
     */
    toggleOperation (isEdit = true) {
      this.$store.commit(types.TOGGLE_DIALOG_FORM_VISIBLE)  // 切换表单显示状态
      this.$store.commit(types.CHANGE_IS_FORM_EDIT_OP, isEdit)  // 切换表单是不是修改操作
    },

    /**
     * @description: 修改表格
     * @param {number} i 操作的表格索引 
     * @return: 
     */
    editTable (i) {
      this.toggleOperation()

      this.$store.commit(  // 存储表单数据
        types.SET_ADMIN_USER_FORM,
        Object.assign(  // 把密码和验证密码字段合并到表单里
          this.tableData[i],
          {
            check_pass:'',
            password: ''
          })
        )

    },

    /**
     * @description: 删除表格
     * @param {number} i 操作的表格索引 
     * @return: 
     */
    async deleteTable (idList) {

      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        return deleteRoles(idList)

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

    selectionOperation (ids) {
      this.deleteIdList = ids
    },

    /**
     * @description: 当前页面改变时调用，获取数据
     * @param {type} 
     * @return: 
     */
    async pageChange (page) {

      this.$store.commit(types.SET_ADMIN_USER_CURRENT_PAGE, page)  // 存储当前的页码

      try {
        const data = await getRoles(page, 10)  // 获取第一页，20条数据

        this.tableData = data.data.list  // 数据数组
        
      } catch (err) {
        this.$message.error(err)
      }
    },

  },

  created() {
    this.initData() // 初始化数据

    this.currentPage = this.$store.getters.adminUserCurrentPage  // 从store 从获取当前页码

    this.$store.dispatch('getRoles')  // 分发获取并存储角色组列表
  },
}
</script>

<style lang="scss" scoped>

</style>