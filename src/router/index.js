import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 首页
// 分类
// 服务
// 账户
// 购物车

// 1. 定义（路由）组件。可以从其他文件 import 进来

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
    routes // （缩写）相当于 routes: routes
})