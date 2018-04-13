<template>

  <el-row id="backbar">
    <el-col :span="18" @click.native="goback">
      <i class="iconfont icon-left" :span="18"></i>
      <span>
        <b>{{title}}</b>
      </span>
    </el-col>
    <el-col :span="3">

      <router-link to="/cart">
        <el-button circle size="mini" :style="{padding:'5px'}">
          <i class="iconfont icon-cart"></i>
        </el-button>
      </router-link>

    </el-col>
    <el-col :span="3">
      <el-button circle size="mini" :style="{padding:'5px'}">
        <i class="iconfont icon-msg"></i>
      </el-button>
    </el-col>
  </el-row>

</template>
<script>
  export default {
    name: 'backbar',
    props: ['title'],
    methods:{
        
      goback: function () {
        window.history.go(-1)
      },
    }
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';
  #backbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid $cloud;
    b {
      font-size: 18px;
    }
    .el-col-3 {
      text-align: right;
    }
  }

</style>
