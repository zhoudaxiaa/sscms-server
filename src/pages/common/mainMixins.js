/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单主要混入
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-18 16:52:41
 * @LastEditTime: 2019-04-15 21:50:59
 */

export default {
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
     * @description: 监听表单操作，子组件触发
     * @param {String} 触发的表单操作名称
     * @param {Number} 当前操作的表格列的索引
     * @return: 
     */
    formOperation (op, i) {
      
      this.formOp = op  // 表单操作名称

      switch (op) {
        case 'editData': this.editData(i); break // 表单修改操作
        case 'editResource': this.editResource(i); break // 资源表单修改操作
        case 'addData': this.addData(); break  // 表单新增操作
        case 'deleteData': this.deleteData(this.deleteId); break  // 表单删除操作
        case 'deleteMultData': this.deleteData(this.deleteIdList); break  // 表单多选删除操作
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
  }
}