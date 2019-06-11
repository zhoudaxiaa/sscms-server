<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 信息面板
 * @Version: 1.0
 * @Date: 2019-06-07 15:43:14
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-07 22:44:04
 -->
<template>
  <ul class="panel-group">
    <li class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="people" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">管理员总数</div>
          <count-to :start-val="0" :end-val="basicInfo.adminUserCount" :duration="26" class="card-panel-num"/>
        </div>
      </div>
    </li>
    <li class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">注册用户</div>
          <count-to :start-val="0" :end-val="basicInfo.regUserCount" :duration="600" class="card-panel-num"/>
        </div>
      </div>
    </li>
    <li class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="documentation" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">文章总数</div>
          <count-to :start-val="0" :end-val="basicInfo.articleCount" :duration="400" class="card-panel-num"/>
        </div>
      </div>
    </li>
    <li class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shoppingCard">
          <svg-icon icon-class="message" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">评论总数</div>
          <count-to :start-val="0" :end-val="basicInfo.commentCount" :duration="600" class="card-panel-num"/>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import CountTo from "vue-count-to"

export default {
  name: 'PanelGroup',
  props: {
    basicInfo: {
      type: Object,
      default: () => {},
    }
  },
  components: {
    CountTo
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.panel-group {
  @include clearfix;

  margin: 18px -20px 0;
}

.card-panel-col {
  float: left;
  width: 25%;
  padding: 0 20px 32px;
}
.card-panel {
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  
  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }
    .icon-people {
      background: #40c9c6;
    }
    .icon-message {
      background: #36a3f7;
    }
    .icon-money {
      background: #f4516c;
    }
    .icon-shoppingCard {
      background: #34bfa3;
    }
  }
  
}

.icon-people {
  color: #40c9c6;
}

.icon-message {
  color: #36a3f7;
}

.icon-money {
  color: #f4516c;
}

.icon-shoppingCard {
  color: #34bfa3;
}

.card-panel-icon-wrapper {
  float: left;
  margin: 14px 0 0 14px;
  padding: 16px;
  transition: all 0.38s ease-out;
  border-radius: 6px;
}

.card-panel-icon {
  float: left;
  font-size: 32px;
}

.card-panel-description {
  float: right;
  font-weight: bold;
  margin: 26px;
  margin-left: 0px;
}

.card-panel-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}
.card-panel-num {
  font-size: 20px;
}
</style>