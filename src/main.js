// vue
import Vue from 'vue'
// vue-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// component
import App from './App.vue'
// vue-router
import router from './router'

// import './assets/css/reset'

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

