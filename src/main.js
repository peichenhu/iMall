// main
import Vue from 'vue'

// 视图UI
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper' // 替代element原生swiper,因为原生的有bug
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/iconfont.css';

//全局注册组件
import Navigation from './components/navigation'
import BetterScroll from './components/betterScroll'
import TopBar from './components/topBar'
import Carousel from './components/carousel'
import BackBar from './components/backbar'

Vue.component('back-bar', BackBar);
Vue.component('top-bar', TopBar);
Vue.component('carousel', Carousel);
Vue.component('navigation', Navigation);
Vue.component('better-scroll', BetterScroll);

// 模拟数据
import './mock'

// 在移动浏览器中单击事件时，将会等待大约300ms的时间。浏览器是等着看，如果你是真正执行双击
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}


Vue.use(ElementUI, VueAwesomeSwiper)

import App from './App'
import router from './router'
import store from './store'

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
