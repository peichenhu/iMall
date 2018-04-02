<template>
  <div id="product">

    <el-row class="backBar">
      <el-col :span="18">
        <i class="iconfont icon-left"></i>
        <span>
          <b>产品名称</b>
        </span>
      </el-col>
      <el-col :span="3">
        <el-button circle size="mini" :style="{padding:'5px'}">
          <i class="iconfont icon-cart"></i>
        </el-button>
      </el-col>
      <el-col :span="3">
        <el-button circle size="mini" :style="{padding:'5px'}">
          <i class="iconfont icon-msg"></i>
        </el-button>
      </el-col>
    </el-row>

    <!-- 轮播图组件 -->
    <carousel :carouselData="carouselData"></carousel>
    <!-- 产品简要 -->
    <el-row class="product_brief">
      <p>标题简要标题简要标题简要标题简</p>
      <p>
        <small>信息简要信息简要信息简要信息简要信息简要信息简要</small>
      </p>
      <p class="color_peach">￥1399
        <del>￥1599</del>
      </p>
    </el-row>
    <!-- 促销信息 -->
    <el-row class="product_sale">
      <h3>促销</h3>
      <p>
        <span>赠豆豆</span>购买完成可获赠与支付额相同的数目的豆豆</p>
      <p>
        <span>包邮</span>会员满99包邮，普通客户满899包邮。</p>
    </el-row>
    <!-- 产品参数 颜色 -->
    <el-row class="product_parameter">
      <h3>颜色</h3>
      <el-radio-group v-model="radio" size="mini">
          <el-radio border label="1" dotcolor="#555">墨色</el-radio>
          <el-radio border label="2">桃色</el-radio>
          <el-radio border label="3">桃色</el-radio>
          <el-radio border label="4">桃色</el-radio>
          <el-radio border label="5">桃色</el-radio>
          <el-radio border label="6">桃色</el-radio>
      </el-radio-group>
    </el-row>
    <!-- 产品参数 规格 -->

    <el-row>
      
    </el-row>

  </div>

</template>
<script>
  import Carousel from '../components/carousel'

  const carouselDataExample = {
    name: 'name',
    info: 'info',
    imageUrl: '/images/default-half.jpg',
    imageAlt: 'default.jpg',
  }
  export default {

    name: 'index',
    data: function () {
      return {
        carouselData: [
          carouselDataExample, carouselDataExample, carouselDataExample, carouselDataExample
        ],
        radio: '1'
      }
    },

    components: {
      Carousel,
    }
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';
  .backBar {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid $cloud;
    b {
      font-size: 18px;
    }
  }

  .product_brief {
    padding: 15px;
    margin-top: 2px;
    line-height: 18px;
  }

  .product_sale {
    margin-top: 2px;
    h3 {
      border-bottom: 1px solid $snow;
      border-top: 1px solid $snow;
    }
    p {
      line-height: 24px;
      padding: 0 15px;
      span {
        padding: 1px 2px;
        margin-right: 10px;
        border: 1px solid $peach ;
      }
    }
  }
  .product_parameter{
    .el-radio-group{
      padding: 0 15px;
    }
    .el-radio.is-bordered {
      border-radius: 14px;
      margin: 10px 10px 0 0;
    }


  }
</style>
