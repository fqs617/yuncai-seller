<template>
<div class="top-bar">
  <div class="left">
    <div class="name">{{ user.storeName }}
    </div>
  </div>
  <div class="right">
    <div class="img fl-left">
    </div>
    <div class="fl-left user">
      <!-- <span class="first">{{ user.uname }} </span> -->
      <span>{{ user.uname }} </span>
    </div>
    <!-- <div class="fl-left settings">
    </div> -->
    <div class="fl-left login-out">
    </div>
    <div class="clearfix">
    </div>
  </div>
  <div class="clearfix">
  </div>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      user: {
        storeName: '',
        uname: ''
      }
    }
  },
  mounted: function () {
  },
  computed: {
  },
  methods: {
  },
  components: {},
  watch: {
    '$route' (to, from) {
      if (to.path === '/yuncai/info') {
        this.init()
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variables.less';
.top-bar {
    height: @top-h;
    color: #666;
    background: #fff;
    border-bottom: 1px solid @border-color;
    position: absolute;
    top: 0;
    width: 100%;
    background: red;
    .left {
        padding: 16px 20px;
        float: left;
        height: 100%;
        .name {
            line-height: 28px;
            color: #333;
            letter-spacing: 0.75px;
            font-size: 20px;
        }
    }
    .right {
        padding-right: 20px;
        float: right;
        height: 100%;
        .img {
            margin: 8px;
            width: 44px;
            height: 44px;
            border-radius: 22px;
            // border: 1px solid @blue;
            background: url(../../assets/avatar.png) no-repeat;
            background-size: 44px;
        }
        .user {
            padding: 20px 0;
            span {
                display: inline-block;
                line-height: 16px;
                font-size: 16px;
                color: @blue;
                padding: 0 9px;
            }
            span.first {
                border-right: 1px solid @border-color;
            }
        }
        .settings {
            width: 86px;
            height: 100%;
            background: url("../../assets/settings.png") no-repeat center center;
            background-size: 26px;
            border-right: 1px solid @border-color;
        }
        .login-out {
            border-left: 1px solid @border-color;
            width: 86px;
            height: 100%;
            background: url("../../assets/login-out.png") no-repeat center center;
            background-size: 26px;
        }
    }
}
</style>
