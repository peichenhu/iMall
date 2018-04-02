<template>
  
  <!-- 标题消息栏 -->
  <el-row class="title_bar clearFloat">
    <h3>
      购物车
    </h3>
    <!--消息-->
    <div class="top_msg">
      <el-badge is-dot class="item">
        <i class="iconfont icon-msg"></i>
      </el-badge>
    </div>
  </el-row>

</template>
<script>
export default {

}
</script>

<style lang='scss' scoped>

  @import '../assets/css/config.scss';
  .title_bar {
    height: 50px;
    position: relative;
    border-bottom: 1px solid $cloud;
    h3 {
      text-align: center;
      line-height: 50px;
    }
    .top_msg {
      height: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      top: 0;
      padding: 0 15px;
    }
  }


</style>

