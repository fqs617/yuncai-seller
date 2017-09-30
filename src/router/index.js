import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Seller from '../views/seller'
import Home from '../views/seller/home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      component: Seller,
      children: [
        { path: '/', component: Home },
        { path: '/home', component: Home }
      ]
    }
  ]
})
export default router
