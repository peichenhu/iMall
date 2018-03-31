<template>
  <div id="app">
    
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <Navigation class="fixed_bottom"></Navigation>

  </div>
</template>

<script>

  import Navigation from './components/navigation'
  export default {
    name: 'app',
    components: {
      Navigation
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<style lang="scss">
  @import './assets/css/config.scss';
  @import './assets/css/reset.scss';


  .el-row {
    background-color: white;
  }


</style>
