<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-03-08 18:12:17
 -->

<template>
  <div>
    <user-form
      :formData="formData">
    </user-form>

    <div class="table-wrap">

      <!-- 添加数据组件 -->
      <add-data></add-data>
      
      <!-- 数据table展示组件 -->
      <data-table
        :tableData="tableData"
        :tableTile="tableTile">

        <el-table-column
          width="100"
          label="操作">
          <template>
            <div>
              <i
                class="op-icon el-icon-edit"
                @click="editData">
              </i>
              <i class="op-icon el-icon-delete"></i>
            </div>
          </template>
        </el-table-column>

      </data-table>
      
      <!-- 分页组件 -->
      <pagination></pagination>
      
    </div>
  </div>
</template>

<script>
import DataTable from '@/views/common/DataTable'
import UserForm from './UserForm'
import AddData from '@/views/common/AddData'
import Pagination from '@/components/Pagination'

export default {
  name: 'adminUser',
  components: {
    DataTable,
    UserForm,
    AddData,
    Pagination
  },
  data () {
    return {
      tableData: [
        {
          id: 'lghjslajg',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          enable: true
        }, {
          id: 'lghjslajg',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          enable: false
        }, {
          id: 'lghjslajg',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          enable: true
        }, {
          id: 'lghjslajg',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          enable: false
        }
      ],

      tableTile: {
        date: {
          title: '日期',
          width: '120'
        },
        name: {
          title: '姓名',
          width: ''
        },
        address: {
          title: '地址'
        },
        enable: {
          title: '展示',
          width: '50'
        }
      },

      formData: {
        id: '7fx9RQ6gH',
        name: '管理员',
        avatar: 'https://www.html-js.cn/upload/images/defaultlogo.png',
        userName: 'admin',
        passWord: '',
        email: '1250198256@qq.com',
        role: [
          {
            id: 'sghj340olE',
            name: 'admin'
          }
        ],
        isActive: true,
        instroduce: '超级管理员'

      }
    
    }
  },
  
  methods: {
    editData (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>