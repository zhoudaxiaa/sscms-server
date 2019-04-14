/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表格主要混入
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-14 21:12:23
 * @LastEditTime: 2019-04-14 21:14:27
 */

export default {
  methods: {
    /**
     * @description: selection-change时触发
     * @param {object} 表格数据对象 
     * @return: string id组成的字符串
     */
    handleSelectionChange (val) {
      let ids = []

      if (val && val.length > 0) {
        ids = val.map((item, index) => {
          return item.id;
        });
      }
      
      this.$emit("selectionOperation", ids.join(','));
    },

    /**
     * @description: 修改数据
     * @param {number} i 操作的表格索引 
     * @return: 
     */
    handleEditData (i) {

      this.$emit('formOperation', 'edit', i)

    },

    /**
     * @description: 删除数据
     * @param {number} id 要删除的数据id 
     * @return: 
     */
    handleDeleteData (id) {
      this.$emit("selectionOperation", id)
      this.$emit('formOperation', 'delete')
    },
  },
}