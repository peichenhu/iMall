// vue
import Vue from 'vue'
// vue-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// component
import App from './App.vue'
// vue-router
import router from './router'


import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'


Vue.use(ElementUI,VueAwesomeSwiper)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

