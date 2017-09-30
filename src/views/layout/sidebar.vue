<template>
<div class="side-bar">
  <div class="logo"></div>
  <ul>
    <li v-for="item,index in list" :class="{active: item.style === toPath}" v-if="item.show">
      <div v-if="index==0">
        <router-link to="/home">
          <div class="img " v-bind:class="item.style"></div>
          <h4>{{ item.name }}</h4>
        </router-link>
      </div>
      <div v-else>
        <div class="img " v-bind:class="item.style"></div>
        <h4>{{ item.name }}</h4>
        <div class="tags">
          <span v-for="tag in item.tags" v-if="tag.show"><router-link :to="tag.url" >{{ tag.tagname }}</router-link></span>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      toPath: '',
      list: [{
        name: '我是卖家',
        style: 'seller',
        url: '/home',
        active: true,
        show: false,
        id: 1,
        tags: []
      }, {
        name: '商品管理',
        style: 'product',
        url: '/product',
        active: false,
        show: false,
        id: 2,
        tags: [{
          tagname: '我要供货',
          url: '/product/goprovide',
          show: false,
          id: 3
        }]
      }]
    }
  },
  mounted: function () {
    this.init()
    this.menu()
  },
  methods: {
    init () {
      this.toPath = window.location.pathname.substr(1).split('/')[0].replace(/\?\S+/, '')
    },
    menu () {
      var self = this
      for (var i in self.list) {
        // self.list[i].show = myAuth(self.list[i].id)
        self.list[i].show = true
        if (!self.list[i].show) {
          continue
        }
        for (var j in self.list[i].tags) {
          // self.list[i].tags[j].show = myAuth(self.list[i].tags[j].id)
          self.list[i].tags[j].show = true
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.toPath = to.path.substr(1).split('/')[0].replace(/\?\S+/, '')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variables.less';
.side-bar {
    height: 100%;
    width: @sidebar-w;
    background-color: @blue;
    position: absolute;
    left: 0;
    // overflow-y: auto;
    padding-top: @top-h;
    .logo{
      width: 100%;
      position: absolute;
      top:0;
      width: 100%;
      height: 60px;
      background: url("../../assets/logo-rc.png") no-repeat center;
      background-size: 60px;
    }

    ul {
        display: block;
        width:100%;
        li {
            display: block;
            width: 100%;
            text-align: center;
            height: 100px;
            padding-top: 20px;
            color: #fff;
            position: relative;
            overflow: visible;
            .tags {
                position: absolute;
                top: 0;
                width: 105px;
                background: #fff;
                left: 100px;
                z-index: 3;
                font-weight: 300;

                span {
                    display: none;
                    width: 100%;
                    text-align: center;
                    height: 30px;
                    margin-bottom: 1px;
                    background: @blue;
                    font-size: 16px;
                    letter-spacing: 0.6px;
                    color: #fff;
                    line-height: 30px;
                    position: relative;
                }
                span.active,
                span:hover {
                    background: #55C6CF;
                }
                span.active:after,span:hover:after{
                  content: "";
                  position: absolute;
                  display: block;
                  width: 6px;
                  height: 6px;
                  background: #55C6CF;
                  .transform(45deg);
                  left: -2px;
                  top:13px;
                }
            }
            .img {
                width: 34px;
                height: 34px;
                margin: 0 auto;
            }
            .seller {
                background: url("../../assets/seller.png") no-repeat center;
                background-size: contain;
            }
            .activity{
              background: url("../../assets/activity.png") no-repeat center;
              background-size: contain;
            }
            .product {
                background: url("../../assets/product.png") no-repeat center;
                background-size: contain;
            }
            h4 {
                font-size: 16px;
                text-align: center;
                line-height: 32px;
                letter-spacing: 0.6px;
                font-weight: 300;
            }
        }
        li:hover {
            background: @blue-h;
            span {
                display: block;
            }
        }
        li.active {
            background: @blue-h;
        }
    }
}
</style>
