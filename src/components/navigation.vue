<template>
  <!-- 旅游导航条 -->
  <nav>
    <el-row :gutter="20">
      <el-col :span="6">
        <router-link to="/">
          <div class="grid-content bg-purple nav_btn">
            
            <i class="iconfont" v-if="'/' === currentRouter" v-bind:class="{'icon-home-fill' : true}"></i>
            <i class="iconfont" v-else v-bind:class="{'icon-home' : true}"></i>
            <span>首页</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="/types">
          <div class="grid-content bg-purple nav_btn">
            <i class="iconfont" v-if="'/types' === currentRouter" v-bind:class="{'icon-th-fill' : true}"></i>
            <i class="iconfont" v-else v-bind:class="{'icon-th' : true}"></i>
            <span>分类</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="/shoppingcart">
          <div class="grid-content bg-purple nav_btn">
            <i class="iconfont" v-if="'/shoppingcart' === currentRouter" v-bind:class="{'icon-cart-fill' : true}"></i>
            <i class="iconfont" v-else v-bind:class="{'icon-cart' : true}"></i>
            <span>购物车</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">

        <router-link to="/account">
          <div class="grid-content bg-purple nav_btn">
            <i class="iconfont" v-if="'/account' === currentRouter" v-bind:class="{'icon-me-fill' : true}"></i>
            <i class="iconfont" v-else v-bind:class="{'icon-me' : true}"></i>
            <span>账户</span>
          </div>
        </router-link>

      </el-col>
    </el-row>
  </nav>
</template>
<script>
  export default {

    data(){
      return{
        
      }
    },
    computed:{
      currentRouter: function(){
        console.log(this.$route.path)
        return this.$route.path
      } 
    }
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';

  .el-row {
    background-color: $snow;
  }

  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: gray;
    border-top: 1px solid $snow/1.05;
  }

  .nav_btn {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 50px;
  }

</style>
