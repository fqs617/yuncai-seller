// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/common.less'
import './style/variables.less'
import Element from 'element-ui'

Vue.use(Element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: {
  },
  ...App
}).$mount('#app')
