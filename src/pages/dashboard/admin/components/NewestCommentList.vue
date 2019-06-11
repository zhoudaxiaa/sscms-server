<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 最新评论
 * @Version: 1.0
 * @Date: 2019-06-07 18:37:23
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-10 23:54:23
 -->
<template>
  <div class="dash-box">
    <h2 class="dash-title">最新评论</h2>
    <div class="dash-content comments-pannel">

      <template v-if="comments && comments.length > 0">
        
        <div class="direct-chat-msg" v-for="item in comments" :key="item.id">
          <div class="direct-chat-info clearfix">
            <span class="direct-chat-name pull-left">
              <a href="#">{{item.author.name}}</a>
              在
              <a class="direct-chat-contentTitle" href="details/" target="_blank">{{item.article.title | cutWords(20)}}</a>
              说
            </span>
            <span class="direct-chat-timestamp pull-right">

              <svg-icon icon-class="time"></svg-icon>
              
              <span>{{item.publish_time}}</span>
            </span>
          </div>

          <img class="direct-chat-img" :src="item.author.avatar" alt="">

          <div class="direct-chat-text">{{item.content}}</div>

        </div>

      </template>

      <div v-else>暂无评论</div>
      
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'NewestCommentList',
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },

  filters: {
    /**
     * @description: 根据length裁剪长度
     * @param {String} str 要裁剪字符串
     * @param {String} length 要裁剪的长度
     * @return: 
     */
    cutWords (str, length) {
      var newStr = ""
      if (!str) return ''
      if (str.replace(/[\u0391-\uFFE5]/g, "aa").length > length) {
          newStr = str.substring(0, length) + '...'
      } else {
          newStr = str
      }
      return newStr
    },
  },
  
}
</script>
<style lang="scss" scoped>
.comments-pannel {
  font-size: 14px;
  position: relative;
  overflow: hidden;
  color: #666;
}
.direct-chat-msg {
  margin-bottom: 20px;
  a:link,
  a:visited {
    color: #409eff;
  }
}

.direct-chat-contentTitle {
  font-size: 14px;
}
.direct-chat-contentTitle:link,
.direct-chat-contentTitle:visited {
  color: #878d99;
  font-style: italic;
}
.direct-chat-info {
  margin-bottom: 10px;
}
.direct-chat-timestamp {
  color: #b4bccc;
  font-size: 12px;
}
.direct-chat-img {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  float: left;
}
.direct-chat-text {
  border-radius: 5px;
  position: relative;
  padding: 10px;
  margin: 5px 0 0 50px;
  color: #5a5e66;
  background-color: #edf2fc;
  font-size: 13px;
}
.direct-chat-text:after,
.direct-chat-text:before {
  position: absolute;
  right: 100%;
  top: 15px;
  border: solid transparent;
  border-right-color: #edf2fc;
  content: " ";
  height: 0;
  width: 0;
  pointer-events: none;
  box-sizing: border-box;
}
.direct-chat-text:before {
  border-width: 6px;
  margin-top: -6px;
}
.direct-chat-text:after {
  border-width: 5px;
  margin-top: -5px;
}
</style>