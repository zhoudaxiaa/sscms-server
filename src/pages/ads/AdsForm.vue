<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 广告编辑
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-27 16:07:29
 * @LastEditTime: 2019-04-27 17:18:01
 -->

<template>
  <div class="ads-wrap">
    <item-form></item-form>

    <el-form
      label-width="120px">
      <el-form-item
        label="广告名">
        <el-input></el-input>
      </el-form-item>

      <el-form-item
        label="是否显示">
        <el-switch></el-switch>
      </el-form-item>

      <el-form-item
        label="备注">
        <el-input></el-input>
      </el-form-item>

      <el-form-item
        label="是否轮播">
        <el-switch></el-switch>
      </el-form-item>

      <el-form-item
        label="高度">
        <el-input placeholder="图片高度，可为空">
          <template slot="append">px</template>
        </el-input>
      </el-form-item>

      <el-form-item
        label="图片列表">
        <div class="btn-add-img">添加图片</div>
        <ul class="ads-img-list">
          <li class="ads-img-item">

            <div class="ads-img-lf">
              <img src="" alt="">
              <p>名称：</p>
              <p>链接：</p>
            </div>
            <el-button class="ads-img-lr">
            </el-button>
            <i class="img-delete"></i>

          </li>
        </ul>
      </el-form-item>

    </el-form>

  </div>

</template>

<script>
import ItemForm from './ItemForm'

export default {
  name: 'AdsForm',

  components: {
    ItemForm,
  },

  data () {
    return {
      formData: {
        avatar: ''
      },
    }
  },

  methods: {
        /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadAvatarSuccess (res) {
      // 把本地上传的图片地址转化为网络地址
      // this.formData.avatar = res.data.url
    },
    
    /**
     * @description: 上传之前的回调函数
     * @param {object} 上传的文件对象（element-ui提供）
     * @return: 
     */
    beforeAvatarUpload (file) {
      const isPass = 'image/jpeg,image/png'.indexOf(file.type) > -1
      const isOverZise = file.size >= 200 * 1024

        if (!isPass) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return false
        }
        if (isOverZise) {
          this.$message.error('上传头像图片大小不能超过 300KB!');
          return false
        }
    },
  }
}
</script>

<style lang="scss" scoped>
.article-wrap {
  padding: 0 20px;
}

.avatar-wrap {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  .avatar-img {
    width: 100%;
    height: 100%;
  }

  .el-icon-plus {
    width: 80px;
    height: 80px;
    font-size: 36px;
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    line-height: 80px;

    &:hover {
      border-color: #409EFF;
    }
  }
}

.mkd-wrap {
  margin-top: 40px;
}
</style>