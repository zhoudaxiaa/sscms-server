/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单混入
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-14 22:14:36
 * @LastEditTime: 2019-04-25 22:16:07
 */

export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },

    formData: {  // 表单数据
      type: Object,
      default: () => {},
    },

    formOp: {  // 当前表单操作，新增还是修改
      type: String,
      default: '',
    },

    formVisible: {
      type: Boolean,
      default: false
    }
  },
  
  created () {
    if (this.roleList.length === 0) this.$store.dispatch('GetAllRole')  // 没有就分发获取并存储角色组列表
  },

  methods: {
    /**
     * @description: 表单更新数据操作
     * @param {type} 
     * @return: 
     */
    async handleUpdateSubmit () {
      const data = await this.updateOp (this.formData)

      if (data) {
        this.$message({
          type: 'success',
          message: '更新成功！'
        })
      }

      this.closeForm();

    },

    /**
     * @description: 表单新增数据操作
     * @param {type} 
     * @return: 
     */
    async handleAddSubmit () {
      const data = await this.addOp (this.formData)

      if (data) {
        this.$message({
          type: 'success',
          message: '添加成功！'
        })
      }

      this.closeForm();
    },

    /**
     * @description: 关闭表单框之前把表单的显示状态切换下
     * @param {type} 
     * @return: 
     */  
    closeForm () {
      this.$emit('changeFormVisible')
    },
  },

  computed: {
    roleList () {
      return this.$store.state.app.roleList  // 从store里获取角色组列表
    }
  },

}