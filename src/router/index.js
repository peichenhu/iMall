import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 首页
import Index from '../pages/index'
// 分类
import Types from '../pages/types'
// 购物车
import Cart from '../pages/cart'
// 账户
import Account from '../pages/account'
// 产品
import Product from '../pages/product'
// 注册
import Register from '../pages/register'

// 2. 定义路由
const routes = [{
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/types',
    name: 'types',
    component: Types
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/product/:id/',
    name: 'product',
    component: Product
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  // mode: 'history',
  routes // （缩写）相当于 routes: routes
})
