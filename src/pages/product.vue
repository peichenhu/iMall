<template>
  <div id="product" v-if="products">

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
    <Carousel :CarouselData="CarouselData"></Carousel>
    <!-- 产品简要 -->
    <el-row class="product_brief">
      <p>{{products.title}} {{product.color}} {{product.storage}}</p>
      <p>
        <small>{{product.sale}}</small>
      </p>
      <p class="color_peach">{{product.price+"元"}}
        <del>{{product.original_price+"元"}}</del>
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
      <el-radio-group v-model="radioColor.choose" size="mini">
        <!-- 循环输出所有颜色 -->
        <el-radio border  v-for="(item,index) in color" :key="index" :label="index">
            {{item}}
        </el-radio>
      </el-radio-group>
    </el-row>
    <!-- 产品参数 规格 -->
    <el-row class="product_parameter">
      <h3>规格</h3>
      <el-radio-group v-model="radioParams.choose" size="mini">
        <el-radio border v-for="(item, index) in storage" :key="index" :label="index">
            {{item}}
        </el-radio>
      </el-radio-group>

    </el-row>
    <!-- 产品参数 套装 -->
    <!-- <el-row class="product_suit">
      <h3>套装</h3>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <el-radio v-model="radio3" label=" 标准版" size="mini"></el-radio>
            ：2899，
            <del>3288</del>,省 200 元
            <i class="header-icon el-icon-info"></i>
          </template>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-radio v-model="radio3" label=" 套装版" size="mini"></el-radio>
            ：2899，
            <del>3288</del>,省 200 元
            <i class="header-icon el-icon-info"></i>
          </template>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-radio v-model="radio3" label=" 单机版" size="mini"></el-radio>
            ：2899，
            <del>3288</del>,省 200 元
          </template>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-row> -->
    <el-row class="product_poster">
      <h3>概述</h3>
      <div>
        <img v-for="(item, index) in products.products_poster" :key="index" :src="item" alt="Poster">
      </div>
    </el-row>

  </div>

</template>
<script>
  import Carousel from '../components/carousel'
  import Axios from 'axios'

  const DefaultIMg = 'https://git.io/vxPwn';
  const DefaultHalfIMg = 'https://git.io/vxPVy';

  export default {

    name: 'index',
    components: {
      Carousel,
    },
    data: function () {
      return {
        CarouselData:null,
        products:null,
        product:null,
        color:[],
        storage:[],
        radioColor: {},
        radioParams: {},
        radio3: '1'
      }
    },
    created(){
        this.getProductById(this.$route.params.id);
        this.$set(this.radioColor, 'choose', 0);
        this.$set(this.radioParams, 'choose', 0);
    },
    methods:{
        getProductById:function(id){
            let self = this;
            let tmp=new Set();
            let tmp2=new Set();
            Axios.get("/getProduct",{}) 
            .then(response=>{
                // 先存储完整数据
                self.products = response.data;
                // 再拿出第一条数据作为默认
                self.product = response.data.products_specifications[0];
                // 拿出第一条的焦点图
                self.CarouselData = self.product.product_images;
                // 拿出所得颜色(数组去重)
                response.data.products_specifications.forEach(item=>{
                    tmp.add(item.color);
                    tmp2.add(item.storage)
                })
                // 同上,拿出所有存储格式(数组去重)
                self.storage = Array.from(tmp2);
                self.color = Array.from(tmp);
            })
            .catch(function (error) {
                console.log(error);
            });

        }
    },
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';

  #product {
    margin-bottom: 60px;
    .el-row {
      padding: 10px;
    }
    h3 {
      border-bottom: 1px solid #FAFAFA;
    }
    .suit_list {
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 10px;
      p {
        &:first-child {
          width: 25%;
          margin: 0 10px;
          flex-grow: 0;
        }
        &:last-child {
          width: 25%;
          margin-left: 10px;
          flex-grow: 0;

        }
      }
    }
    .el-collapse-item.is-active {
      background-color: $peach;
    }

    .backBar {
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid $cloud;
      b {
        font-size: 18px;
      }
      .el-col-3{
        text-align: right ;
      }
    }

    .product_brief {
      margin-top: 2px;
      line-height: 18px;
    }

    .product_sale {
      margin-top: 2px;
      p {
        line-height: 24px;
        span {
          padding: 1px 2px;
          margin-right: 10px;
          border: 1px solid $peach;
        }
      }
    }

    .product_parameter {
      .el-radio.is-bordered {
        border-radius: 14px;
        margin: 10px 10px 0 0;
      }
    }
    .product_poster{
        padding: 0;
        h3{
            padding: 10px
        }
    }
  }

</style>
