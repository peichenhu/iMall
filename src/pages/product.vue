<template>
  <div id="product">
    <!-- 返回状态栏 -->
    <Backbar :title="product.model" v-if="product"></Backbar>
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

    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div v-if="product">

          <!-- 轮播图组件 -->
          <Carousel :CarouselData="product.product_images"></Carousel>
          <!-- 产品简要 -->
          <el-row class="product_brief">
            <h4>{{product.title}}</h4>
            <p>
              <small>{{product.sale}}</small>
            </p>
            <p class="color_peach">￥{{product.price+"元"}}
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
            <el-radio-group v-model="radio_model_color.choose" size="mini" @change="handlerChangeColor">
              <!-- 循环输出所有颜色 -->
              <el-radio border v-for="(item,index) in color_arr" :key="index" :label="item">
                {{item}}
              </el-radio>
            </el-radio-group>
          </el-row>
          <!-- 产品参数 规格 -->
          <el-row class="product_parameter">
            <h3>规格</h3>
            <el-radio-group v-model="radio_model_storage.choose" size="mini" @change="handlerChangeStorage">
              <el-radio border v-for="(item, index) in storage_arr" :key="index" :label="item">
                {{item}}
              </el-radio>
            </el-radio-group>

          </el-row>
          <!-- 产品参数 套装 -->
          <!-- <Suit></Suit> -->
          <!-- 产品海报 -->
          <div v-html="poster"></div>
        </div>
      </div>
      <div class="fix">
        <a class="active">概述</a>
        <a>参数</a>
      </div>
    </div>

  </div>
</template>
<script>
import { getProductById } from "../api/product";
import Carousel from "../components/carousel";
import Backbar from "./product/backbar";
import Suit from "./product/suit";
import { mapState, mapGetters, mapActions } from "vuex";
import BScroll from "better-scroll";

import Axios from "axios";
export default {
  name: "index",
  components: {
    Carousel,
    Backbar,
    Suit
  },
  data: function() {
    return {
      product_id: this.$route.params.id, // 初始化页面时产品ID（后期使用 product.id）
      products_all: null, // 同类产品数据
      products_some: [], // 同参数产品数据
      product: null, // 当前产品数据
      isCollections: false, // 当前产品收藏数据
      color_arr: [], // 去重后的产品颜色表
      storage_arr: [], // 去重后的产品存储表
      radio_model_color: {}, // 颜色单选按钮模型
      radio_model_storage: {}, // 存储单选按钮模型
      radio_change: {
        // 单选配置事件监听
        color: null,
        storage: null
      },
      poster: null
    };
  },
  computed: {
    ...mapState(["collections"])
  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(function() {
      let _this = this;
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true,
        mouseWheel: true,
        probeType: 3
      });

      let wap_content;
      let wap_content_title;
      let fix_content_title;
      let wap_content_params;
      this.scroll.on("scrollStart", function(ops) {
        wap_content = document.querySelector(".wap_content");
        wap_content_title = document.querySelector(".wap_content_title");
        fix_content_title = document.querySelector(".fix");
        wap_content_params = document.querySelector(".wap_content_params");
      });
      this.scroll.on("scroll", function(ops) {
          console.log(wap_content_title.offsetTop)
        if (Math.abs(ops.y) > wap_content_title.offsetTop) {
          if (fix_content_title.style.display !== "flex")
            fix_content_title.style.display = "flex";
        } else {
          if (fix_content_title.style.display !== "none")
            fix_content_title.style.display = "none";
        }

        if (Math.abs(ops.y) > wap_content_params.offsetTop - 50) {
          if (fix_content_title.children[0].className !== "") {
            fix_content_title.children[0].className = "";
            wap_content_title.children[0].className = "";
            fix_content_title.children[1].className = "active";
            wap_content_title.children[1].className = "active";
          }
        } else {
          if (fix_content_title.children[0].className !== "active") {
            fix_content_title.children[0].className = "active";
            wap_content_title.children[0].className = "active";
            fix_content_title.children[1].className = "";
            wap_content_title.children[1].className = "";
          }
        }
      });
      document.addEventListener("click", function(e) {
        if (
          ["wap_content_title", "fix"].includes(e.target.parentNode.className)
        ) {
          e.target.parentNode.children[0].className = "";
          e.target.parentNode.children[1].className = "";
          e.target.className = "active";

          if (e.target.innerText === "概述") {
            _this.scroll.scrollToElement(".wap_content_summary", 1000);
          }
          if (e.target.innerText === "参数") {
            _this.scroll.scrollToElement(".wap_content_params", 1000);
          }
        }
      });
    });
  },
  methods: {
    ...mapActions(["addCollections", "deletCollections", "addCart"]),
    refreshCollections: function() {
      this.isCollections = this.collections.includes(this.product.id);
    },
    init: function() {
      let _this = this;
    //   let _path = "/demo/iMall/html"; // iHexo
    //   let _path = "/iMall/html"; // cooding
      let _path = "/html"; // cooding
      getProductById({
        product_id: _this.product_id
      })
        .then(function(response) {
          Axios.get(_path + response.data.products_poster, {
            //   Axios.get(response.data.products_poster, {
            headers: {
              "Access-Control-Allow-Origin": "*"
            }
          }).then(el => (_this.poster = el.data));
          _this.products_all = response.data;
          _this.products_some = _this.products_all.products_specifications;
          _this.product = _this.products_some.find(
            i => i.id == _this.product_id
          );

          // 拿出当前 id 对应的数据 + 拿出所得颜色(数组去重)
          let tmp_color = new Set();
          let tmp_storage = new Set();
          _this.products_some.forEach(item => {
            tmp_color.add(item.color);
            tmp_storage.add(item.storage);
          });
          // 颜色存储(数组去重)
          _this.color_arr = Array.from(tmp_color);
          _this.storage_arr = Array.from(tmp_storage);
          // 依据当前产品 添加颜色存储默认勾选
          _this.$set(_this.radio_model_color, "choose", _this.product.color);
          _this.$set(
            _this.radio_model_storage,
            "choose",
            _this.product.storage
          );

          _this.refreshCollections();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 选择颜色
    handlerChangeColor: function(value) {
      let _this = this;
      // 根据 value 重新生成 可用的存储列表，并默认勾选第一个
      let tmp_storage = new Set(); // 用于去重
      this.products_all.products_specifications.forEach(function(item) {
        if (item.color === value) {
          tmp_storage.add(item.storage);
        }
      });
      this.storage_arr = Array.from(tmp_storage);
      this.$set(this.radio_model_storage, "choose", this.storage_arr[0]);
      this.product = this.products_all.products_specifications.find(
        i => i.color === value && i.storage === this.storage_arr[0]
      );

      this.refreshCollections();
    },
    // 选择存储
    handlerChangeStorage: function(value) {
      let _this = this;
      // 根据 storage 重新生成 可用的 color 列表，并默认勾选第一个
      let tmp_color = new Set(); // 用于去重
      this.products_all.products_specifications.forEach(function(item) {
        if (item.storage === value) {
          tmp_color.add(item.color);
        }
      });
      this.color_arr = Array.from(tmp_color);
      this.$set(this.radio_model_color, "choose", this.color_arr[0]);
      this.product = this.products_all.products_specifications.find(
        i => i.color === this.color_arr[0] && i.storage === value
      );

      this.refreshCollections();
    },
    // 选择收藏
    changeCollections: function() {
      if (this.isCollections === true) {
        this.deletCollections(this.product.id);
      } else {
        this.addCollections(this.product.id);
      }
      this.refreshCollections();
    },
    addToCart: function() {
      this.addCart(this.product.id);
    }
  }
};
</script>
<style lang="scss">
.wap_content_title {
  display: flex;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background: #fff;
  color: #000;
  width: 100%;
  border-bottom: 1px solid #ccc;
  a {
    display: inline-block;
    width: 50%;
    height: 100%;
    font-size: 1rem;
    color: #000;
    border-bottom: 1px solid #ccc;
    &.active {
      color: #ff4d4d;
      border-bottom: 1px solid #ff4d4d;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "../assets/css/config.scss";
.wrapper {
  position: absolute;
  top: 50px;
  height: calc(100% - 100px);
  width: 100%;
  overflow: hidden;
  .fix {
    position: absolute; // display: flex;
    display: none;
    top: 0;
    left: 0;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background: #fff;
    color: #000;
    width: 100%;
    a {
      display: inline-block;
      width: 50%;
      height: 100%;
      font-size: 1rem;
      color: #000;
      border-bottom: 1px solid #ccc;
      &.active {
        color: #ff4d4d;
        border-bottom: 1px solid #ff4d4d;
      }
    }
  }
}

#product {
  position: relative;
  height: 100%;
  background: #fff;
  h3 {
    border-bottom: 1px solid #fafafa;
  }
  h4 {
    font-size: 18px;
  }
  .product_brief,
  .product_sale,
  .product_parameter,
  .bottom_bar {
    padding: 10px;
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

  .product_brief {
    margin-top: 2px;
    line-height: 18px;
    line-height: 24px;
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
      padding: 10px;
    }
  }
}
</style>
