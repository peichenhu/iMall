<template>
  <!-- 小火车布局 -->
  <el-row class="train" v-if="LayoutTrainData">

    <h3 class="bg_white color_ink">{{LayoutTrainData.title}} </h3>
    <div class="recommend">
        <img :src="LayoutTrainData.recommend.image_url" :alt="LayoutTrainData.recommend.title">
    </div>
    <ul>
      <li v-for="(item, index) in LayoutTrainData.products_list" :key="index">
        <p>
          <img :src="item.product_images[0].imageUrl" :alt="item.title">
        </p>
        <p>
          <span>{{item.title}}</span>
          <span v-if="item.sale!==''">{{item.sale}}</span>
          <span>{{item.price+"元"}}
            <small v-if="item.original_price!==''">
              <del> {{item.original_price+"元"}}</del>
            </small>
          </span>
        </p>
        <div class="float_tag" v-if="item.sale_tag.is_need">
          <span>{{item.sale_tag.text}}</span>
        </div>
      </li>
    </ul>
    <div class="more">
      <router-link to="/types">
        查看更多 <i class="iconfont icon-right"></i> 
      </router-link>
    </div>
  </el-row>
</template>
<script>
  export default {
    props: ['LayoutTrainData']
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';
  .train {
    background-color: $snow;
    h3{
        padding: 10px;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      li {
        position: relative;
        background-color: white;
        width: calc(50% - 21px);
        margin-bottom: 2px;
        padding: 10px;
        &:nth-child() {
          margin-right: 1px;
        }
        &:nth-child(even) {
          margin-left: 1px;
        }
        >p {
          text-align: left;
          >span {
            display: block;
            line-height: 24px;
            &:last-child {
              color: red;
              small {
                color: gray;
              }
            }
          }
        }
        .float_tag {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          position: absolute;
          width: 40px;
          height: 40px;
          background-color: red;
          border-radius: 50%;
          color: white;
          text-align: center;
          top: 20px;
          left: 20px;
        }
      }
    }
    .more{
        text-align: center;
    height: 30px;
    line-height: 30px;
    }
  }

</style>
