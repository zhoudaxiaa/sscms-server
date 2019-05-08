<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 22:05:59
 * @LastEditTime: 2019-05-08 15:53:03
 -->
<template>
  <div>
    <el-table
      class="table-container"
      :data="tableData"
      @selection-change="handleSelectionChange">

      <!-- 选择框 -->
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        width="50"
        label="推荐">

        <template slot-scope="scope">
          <div>
            {{scope.row.is_top ? '是' : '否'}}
          </div>
        </template>

      </el-table-column>

      <el-table-column
        width="1"
        label="id">
        <template slot-scope="scope">
          <input
            type="hidden"
            :value="scope.row.id">
        </template>
      </el-table-column>

      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>

      <el-table-column
        prop="author.name"
        label="作者">
      </el-table-column>

      <el-table-column
        prop="category[0].name"
        label="文档类别">
      </el-table-column>

      <el-table-column
        label="来源">
        <template slot-scope="scope">
          <div>
            {{scope.row.form ? '原创' : '转载'}}
          </div>
        </template>
      </el-table-column>

      <el-table-column
        prop="view_num"
        label="浏览量">
      </el-table-column>

      <el-table-column
        prop="like_num"
        label="喜欢人数">
      </el-table-column>

      <el-table-column
        prop="comment.length"
        label="评论数">
      </el-table-column>

      <el-table-column
        label="是否显示">
        <template slot-scope="scope">
          <i
            :class="scope.row.is_active ? 'el-icon-success' : 'el-icon-error'"
            :style="scope.row.is_active ? green : red">
          </i>
        </template>
      </el-table-column>

      <el-table-column
        prop="publish_time"
        label="创建时间">
      </el-table-column>

      <el-table-column
        width="100"
        label="操作">
        <template slot-scope="op">
          <div>
            
            <router-link to="">
              <el-button
                @click='handleEditData(op.row.id)'
                size="small"
                type="primary"
                icon="el-icon-edit"
                circle>
              </el-button>
            </router-link>

            <el-button
              @click='handleDeleteData(op.row.id)'
              size="small"
              type="danger"
              icon="el-icon-delete"
              circle>
            </el-button>

          </div>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ArticleTable',

  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      green: { color: "#13CE66" },
      red: { color: "#FF4949" },
    }
  },

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
     * @description: 删除数据
     * @param {number} id 要删除的数据id 
     * @return: 
     */
    handleDeleteData (id) {
      this.$emit("selectionOperation", id)
      this.$emit('formOperation', 'deleteDataOp')
    },
  },
  
}
</script>

<style lang="scss" scoped>

</style>