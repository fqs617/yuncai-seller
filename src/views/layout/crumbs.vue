<template>
<div class="crumbs">
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
  <ul>
    <li v-for="item in crumbslist">
      <i v-if="item.go === 0">{{ item.name }}</i>
      <a v-else @click="gopath(item.go)">{{ item.name }}</a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      crumbslist: [],
      lastLoginTime: ''
    }
  },
  props: ['crumbs_info'],
  events: {
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init () {
      this.crumbslist = this.crumbs_info.list
      this.lastLoginTime = this.crumbs_info.lastLoginTime
    },
    gopath (e) {
      this.$router.go(e)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variables.less';
.crumbs {
    width: 100%;
    height: 58px;
    padding-top: 2px;
    background: #f4f4f4;
    overflow: hidden;
    ul {
        display: block;
        overflow: hidden;
        // padding: 0 20px;
        float: left;
        li {
            display: block;
            height: 56px;
            line-height: 56px;
            padding-right: 25px;
            position: relative;
            font-size: 14px;
            color: #999999;
            letter-spacing: 0.52px;
            line-height: 56px;
            float: left;
        }
        li:first-child {
            font-size: 16px;
            color: #555555;
            letter-spacing: 0.6px;
        }
        li:after {
            content: "";
            display: block;
            position: absolute;
            width: 8px;
            height: 13px;
            background: url("../../assets/icon-next.png") no-repeat center;
            background-size: 8px;
            top: 50%;
            margin-top: -6px;
            right: 8px;
        }
        li:last-child:after {
            background: none;
        }
    }
    .last-login-time{
      letter-spacing: 0.52px;
      line-height: 56px;
      color: #999;
    }
}
</style>
