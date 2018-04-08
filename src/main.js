// vue
import Vue from 'vue'
// vue-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// component
import App from './App.vue'
// vue-router
import router from './router'
// 模拟数据
import './mock'
// 替代element原生swiper,因为原生的有bug
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'


Vue.use(ElementUI,VueAwesomeSwiper)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

