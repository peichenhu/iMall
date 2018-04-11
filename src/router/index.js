import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 首页
import Index from '../pages/index'
// 分类
import Types from '../pages/types'
// 购物车
import ShoppingCart from '../pages/shoppingcart'
// 账户
import Account from '../pages/account'
// 产品
import Product from '../pages/product'

// 2. 定义路由
const routes = [
    { path: '/', component: Index , meta: {keepAlive: true}},
    { path: '/types', component: Types , meta: {keepAlive: true}},
    { path: '/shoppingcart', component: ShoppingCart , meta: {keepAlive: true}},
    { path: '/account', component: Account , meta: {keepAlive: true}},
    { path: '/product/:id/', name:'product',component: Product , meta: {keepAlive: false}}
]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    
    // mode: 'history',
    routes // （缩写）相当于 routes: routes
})