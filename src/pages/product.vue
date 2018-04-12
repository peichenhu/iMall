<template>
  <div id="product" v-if="products">
    <!-- 返回状态栏 -->
    <el-row class="backBar">
      <el-col :span="18" @click.native="goback">
        <i class="iconfont icon-left" :span="18"></i>
        <span>
          <b>{{products.title}}</b>
        </span>
      </el-col>
      <el-col :span="3">

        <router-link to="/shoppingcart">
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
    <!-- 底部状态栏 -->
    <el-row class="bottom_bar">
      <el-col :span="4">
        <i class="iconfont" :class="isCollections ? 'icon-biaoxingfill' : 'icon-biaoxing'" @click="changeCollections"></i>
      </el-col>
      <el-col :span="10">
        <el-button round size="mini" @click="addToCart">加入购物车</el-button>
      </el-col>
      <el-col :span="10">
        <el-button type="danger" round size="mini">立即购买</el-button>
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
      <el-radio-group v-model="radioColor.choose" size="mini" @change="selectColor">
        <!-- 循环输出所有颜色 -->
        <el-radio border v-for="(item,index) in color" :key="index" :label="index">
          {{item}}
        </el-radio>
      </el-radio-group>
    </el-row>
    <!-- 产品参数 规格 -->
    <el-row class="product_parameter">
      <h3>规格</h3>
      <el-radio-group v-model="radioStorage.choose" size="mini" @change="selectStorage">
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
  import {
    getProductById
  } from "../api/product"
  import Carousel from '../components/carousel'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'index',
    components: {
      Carousel,
    },
    data: function () {
      return {
        CarouselData: null, // 某个产品焦点图
        products: null, // 该型号产品的类型属性和产品列表
        product_list: [], // 筛选后的同型号产品列表
        product: null, // 某个产品
        color: [], // 去重后的产品颜色表
        storage: [], // 去重后的产品存储表
        radioColor: {}, // 颜色单选按钮模型
        radioStorage: {}, // 存储单选按钮模型
        radioSuit: {}, // 套装单选按钮模型（未开启）
        product_id: this.$route.params.id,
        select_product: {
          color: null,
          storage: null
        }
      }
    },
    computed: {
      ...mapState({
        isCollections(state) {
          return state.collections.includes(this.product_id)
        }
      }),
    },
    created() {
      let _this = this;
      let params = {
        'product_id': this.$route.params.id
      };

      let self = this;
      let tmp = new Set();
      let tmp2 = new Set();
      getProductById(params)
        .then(function (response) {
          // 先存储完整数据
          self.products = response.data;
          // 再拿出第一条数据作为默认
          self.product = response.data.products_specifications[0];
          // 拿出第一条的焦点图
          self.CarouselData = self.product.product_images;
          // 拿出所得颜色(数组去重)
          response.data.products_specifications.forEach(item => {
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
    },
    methods: {
      ...mapActions([
        'addCollections',
        'deletCollections',
        'addCart',
        'deletCart'
      ]),
      goback: function () {
        window.history.go(-1)
      },
      getProductById: function (id) {
        let self = this;
        let tmp = new Set();
        let tmp2 = new Set();
        Axios.get("/getProduct", {})
          .then(response => {
            // 先存储完整数据
            self.products = response.data;
            // 再拿出第一条数据作为默认
            self.product = response.data.products_specifications[0];
            // 拿出第一条的焦点图
            self.CarouselData = self.product.product_images;
            // 拿出所得颜色(数组去重)
            response.data.products_specifications.forEach(item => {
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

      },
      selectColor: function (value) {
        // 根据 value 获取 符合条件的 product
        let _this = this;
        let tmp = new Set();
        let product_list = [];
        this.products.products_specifications.forEach(function (item) {
          if (item.color === _this.color[value]) {
            // 符合条件的拿出来去重
            tmp.add(item.storage);
            product_list.push(item)
          }
        })
        // 更新存储选项列表
        this.storage = Array.from(tmp);
        // 更新当前产品信息
        this.product = product_list[0];
        // 默认存储选择第一个
        this.$set(this.radioStorage, 'choose', 0);

        this.select_product.storage = this.storage[0];
        this.select_product.color = this.color[value];
        console.log('改变之后的值是:' + JSON.stringify(this.select_product))

      },
      selectStorage: function (value) {
        // 根据 value 获取 符合条件的 product
        let _this = this;
        let tmp = new Set();
        let product_list = [];
        this.products.products_specifications.forEach(function (item) {
          if (item.storage === _this.storage[value]) {
            // 符合条件的拿出来去重
            tmp.add(item.color);
            product_list.push(item)
          }
        })
        // 更新存储选项列表
        this.color = Array.from(tmp);
        // 更新当前产品信息
        this.product = product_list[0];
        // 默认存储选择第一个
        this.$set(this.radioColor, 'choose', 0);

        this.select_product.color = this.color[0];
        this.select_product.storage = this.storage[value];
        console.log('改变之后的值是:' + JSON.stringify(this.select_product))
      },
      changeCollections: function () {
        if (this.isCollections === true) {
          this.deletCollections(this.product_id)
        } else {
          this.addCollections(this.product_id)
        }
      },
      addToCart: function () {
        if (!this.select_product.color || !this.select_product.storage) {
          alert("选择先一款产品!")
        }else{
            let _this = this;
            let color = this.select_product.color;
            let storage = this.select_product.storage;
            let product = this.products.products_specifications.find( item=> item.color === color && item.storage === storage) 
            console.log(product.id)
            _this.addCart(product.id)
        }
      }
    },
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';

  #product {
    padding: 50px 0;
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

    .bottom_bar {
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 9999+1;
      width: 100%;
      border-top: 1px solid $snow;
      text-align: center;
      button {
        width: 80%;
        margin: 0 auto;
        display: block;
      }
      .iconfont {
        font-size: 24px;
      }
    }
    .backBar {
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
    .product_poster {
      padding: 0;
      h3 {
        padding: 10px
      }
    }
  }

</style>
