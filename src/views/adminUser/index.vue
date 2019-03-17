<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-03-17 22:36:25
 -->

<template>
  <div>
    <user-form class="form-wrap"></user-form>

    <div class="table-wrap">

      <!-- 公共操作 -->
      <div class="public-op-wrap">

        <!-- 添加数据 -->
        <addTable :addTable="handleAddTable"></addTable>

        <!-- 删除数据 -->
        <deleteTable :deleteTable="handleDeleteTable"></deleteTable>
        
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

import UserForm from './UserForm'

import { getAdminUser, deleteAdminUser } from '@/api/adminUser'

import { filterTableData } from '@/filter/dataFilter'  // 数据过滤器

import * as types from '@/store/mutation-types'

export default {
  name: 'adminUser',
  components: {
    DataTable,
    AddTable,
    DeleteTable,
    UserForm,
  },
  data () {
    return {
      tableData: [],  // 表格数据(对象数组)

      currentPage: 1, // 当前的页码

      total: 0, // 总计数据的数

      selectionIdList: '', // 多选的id字符串组合

      filterData: 'id,name,username,role_name,email,is_active',  // 需要数据的字段名的字符串组合
      
      tableTile: {  // 表格的标题和宽度，title为空，标示不显示
        id: {
          title: '',
          width: '1'
        },
        name: {
          title: '昵称',
          width: ''
        },
        username: {
          title: '帐号名',
          width: ''
        },
        role_name: {
          title: '角色组',
          width: ''
        },
        email: {
          title: '邮箱',
          width: ''
        },
        is_active: {
          title: '是否启用',
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
        const data = await getAdminUser(0, 10)  // 获取第一页，20条数据

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

      try {
        const data = await deleteAdminUser(idList)

        if (data.code === 0) {
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        }
      } catch (err) {
        this.$message.error(err)
      }

    },

    selectionOperation (ids) {
      this.selectionIdList = ids
    },

    /**
     * @description: 添加表格(传入子组件的方法)
     * @param {type} 
     * @return: 
     */
    handleAddTable () {

      this.toggleOperation(false)
      
      // 添加表格时，传入初始的表单项
      this.$store.commit(types.SET_ADMIN_USER_FORM, {
        name: '',
        avatar: '',
        username: '',
        password: '',
        check_pass: '',  // 非必要字段，只为了表单效验
        email: '',
        role_id: '',
        is_active: true,
        instroduce: '',
      })
    },

    /**
     * @description: 删除表格（传入子组件的方法)
     * @param {type} 
     * @return: 
     */    
    async handleDeleteTable () {
      const idList = this.selectionIdList

      if (!idList) {
        this.$message({
          type: 'error',
          message: '请至少选择一项进行删除操作！'
        })
        return
      }

      // let result = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })

      // console.log(result)

      try {
        const data = await deleteAdminUser(idList)

        if (data.code === 0) {
          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        }
      } catch (err) {
        this.$message.error(err)
      }
    },

    /**
     * @description: 当前页面改变时调用，获取数据
     * @param {type} 
     * @return: 
     */
    async pageChange (page) {

      this.$store.commit(types.SET_ADMIN_USER_CURRENT_PAGE, page)  // 存储当前的页码

      try {
        const data = await getAdminUser(page, 10)  // 获取第一页，20条数据

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