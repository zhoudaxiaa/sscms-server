<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 广告编辑
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-27 16:07:29
 * @LastEditTime: 2019-06-09 12:41:26
 -->

<template>
  <div class="ads-wrap">

    <!-- 图片表单 -->
    <item-form
      @changeFormVisible="toggleFormVisible"
      @formOperation="formOperation"
      :formData="imgFormData"
      :categoryId="categoryId"
      :opId="itemId"
      :formOp="formOp"
      :formVisible="formVisible">
    </item-form>

    <el-form
      :model="formData"
      ref="form"
      label-width="120px">
      <el-form-item
        prop="name"
        required
        label="广告分类">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>

      <el-form-item
        label="是否显示">
        <el-switch v-model="formData.is_show"></el-switch>
      </el-form-item>

      <el-form-item
        label="是否轮播">
        <el-switch v-model="formData.is_carousel"></el-switch>
      </el-form-item>

      <el-form-item
        class="input-height"
        label="高度">
        <el-input
          v-model="formData.height"
          placeholder="可为空">
          <template slot="append">px</template>
        </el-input>
      </el-form-item>

      <el-form-item
        label="图片列表">
        <div
          class="btn-add-img"
          @click="handleAddImg">
          添加图片
        </div>

        <ul class="ads-img-list">
          <template v-for="item in adsList">
            <li
              class="ads-img-item"
              :key="item.id">

              <div class="ads-img-attr">
                <img :src="item.img_url">
                <p>描述：{{item.introduce}}</p>
                <p>链接：{{item.link}}</p>
              </div>
              
              <div class="ads-item-op">
                <el-button
                  @click="handleEditImg(item.id)"
                  type="primary"
                  icon="el-icon-edit"
                  class="btn-img-edit"
                  size="mini"
                  circle>
                </el-button>
              </div>

              <i
                @click="handleDeleteImg(item.id)"
                class="el-icon-close">
              </i>
            </li>
          </template>

        </ul>
      </el-form-item>

      <el-form-item>
        <el-button
          @click="handleUpdateSubmit"
          v-if="$route.params.id"
          type="primary">
          更新
        </el-button>

        <el-button
          @click="handleAddSubmit"
          v-else
          type="primary">
          添加
        </el-button>

        <el-button>
          返回
        </el-button>

      </el-form-item>

    </el-form>

  </div>

</template>

<script>
import ItemForm from './ItemForm'

import { deleteAds, getAllAds, getOneAds } from '@/api/ads'
import { addAdsCategory, updateAdsCategory, getOneAdsCategory } from '@/api/adsCategory'

export default {
  name: 'AdsForm',

  components: {
    ItemForm,
  },

  data () {
    return {
      id: this.$route.params.id,  // 广告id

      initFormData: {
        name: '',
        is_show: true,
        is_carousel: true,
        height: '',
      },

      initImgFormData: {
        introduce: '',
        img_url: '',
        link: '',
        is_show: true,
      },

      categoryId: '',  // 当前分类数据id

      itemId: '',  // 当前广告数据id

      formOp: '',  // 表单操作名（新增还是更新）

      formVisible: false,  // 表单显示状态

      formData: {},  // 广告表单

      imgFormData: {},  // 图片表单

      adsList: [],  // 广告图片列表
    }
  },
  
  created () {
    this.initData()
  },

  methods: {

    /**
     * @description: 初始化数据
     * @param {type} 
     * @return: 
     */    
    async initData () {
      let id = this.id
      let adsCategoryData
      let adsData

      if (id) {
        this.categoryId = id
        adsCategoryData = await getOneAdsCategory(id)
        adsData = await getAllAds('category_id', id)

        adsCategoryData && (this.formData = adsCategoryData)
        adsData && (this.adsList = adsData)
      } else {
        this.formData = this.initFormData
      }
    },

    /**
     * @description: 监听表单操作，子组件触发
     * @param {String} op 触发的表单操作名称
     * @param {Number} i 当前操作的表格列的索引
     * @param {String} id 当前操作的id
     * @return: 
     */
    formOperation ({op, i, id, data}) {
      
      this.formOp = op  // 表单操作名称（新增还是更新）

      switch (op) {
        case 'initData': this.initData(); break
        case 'addImg': this.addImg(data); break
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
     * @description: 添加图片
     * @param {type} 
     * @return: 
     */
    addImg (data) {
      this.adsList.push(data)
    },

    /**
     * @description: 添加图片
     * @param {type} 
     * @return: 
     */    
    handleAddImg () {
      this.formOp = 'add'
      this.toggleFormVisible()

      this.imgFormData = this.initFormData
    },

    /**
     * @description: 修改图片
     * @param {String} id 当前操作的id
     * @return: 
     */   
    async handleEditImg (id) {
      this.formOp = 'edit'
      this.itemId = id
      this.toggleFormVisible()

      this.imgFormData = await getOneAds(id)
    },

    /**
     * @description: 删除图片
     * @param {String} idList 多个id组成的字符串，逗号隔开
     * @return: 
     */  
    async handleDeleteImg (idList) {
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

        this.initData()  // 更新数据

      }).catch ((err) => {
        this.$message({
          type: 'error',
          message: '删除失败！'
        })
      })

    },

    /**
     * @description: 表单数据删除操作
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */  
    deleteDataOp (id) {
      return deleteAds(id)
    },
  
    /**
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateAdsCategory(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addAdsCategory(formData)
    },

    /**
     * @description: 表单更新数据操作
     * @param {type} 
     * @return: 
     */
    async handleUpdateSubmit () {

      this.$refs.form.validate(async (valid) => {

        if (valid) {

          await this.updateData (this.formData, this.categoryId)

          this.initData()  // 更新表格

          this.$message({
            type: 'success',
            message: '更新成功！'
          })

        } else {
          return false
        }
      })
    },

    /**
     * @description: 表单新增数据操作
     * @param {type} 
     * @return: 
     */
    async handleAddSubmit () {

      this.$refs.form.validate(async (valid) => {

        if (valid) {
          await this.addData (this.formData)

          this.$message({
            type: 'success',
            message: '添加成功！'
          })

        } else {
          return false
        }
      })
      
    },
    
  },

}
</script>

<style lang="scss" scoped>
.input-height {
  width: 250px;
}

.btn-add-img {
  display: inline-block;
  padding: 8px 10px;
  border: 1px solid #b3d8ff;
  border-radius: 30px;
  background-color: #ecf5ff;;
  color: #409EFF;
  line-height: 16px;
  cursor: pointer;

  &:hover {
    background-color: #409EFF;
    color: #fff;
  }
}

.ads-img-item {
  @include clearfix;

  margin-top: 15px;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.ads-img-attr {
  float: left;
  width: 70%;

  img {
    float: left;
    width: 100px;
    height: 70px;
  }

  p {
    padding-left: 115px;
    color: #48576a;
    line-height: 36px;
  }
}

.ads-item-op {
  float: right;
  position: relative;
}

.btn-img-edit {
  position: absolute;
  right: 20px;
  top: 25px;
}

.el-icon-close {
  float: right;
  font-size: 18px;
}

</style>