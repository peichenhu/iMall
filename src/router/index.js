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
    { path: '/', component: Index },
    { path: '/types', component: Types },
    { path: '/shoppingcart', component: ShoppingCart },
    { path: '/account', component: Account },
    { path: '/product/:id/', component: Product }
]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    routes // （缩写）相当于 routes: routes
})