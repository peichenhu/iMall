<template>
  <!-- 小火车布局 -->
  <el-row class="train">

    <!-- <h5 class="bg_white color_ink">分类标题 <i class="icon-right"></i> </h5> -->
    <ul>
      <li v-for="(item, index) in trainData" :key="index">
        <p>
          <img :src="item.imageUrl" :alt="item.imageAlt">
        </p>
        <p>
          <span>{{item.name}}</span>
          <span v-if="item.info!==''">{{item.info}}</span>
          <span>{{item.newPrice}}
            <small>
              <del> {{item.oldPrice}}</del>
            </small>
          </span>
        </p>
        <div class="float_tag" v-if="item.tag!==''">
          <span>{{item.tag}}</span>
        </div>
      </li>
    </ul>
  </el-row>
</template>
<script>
  export default {
    props: ['trainData']

  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';
  .train {
    background-color: $snow;
    ul {
      display: flex;
      flex-flow: row wrap;
      li {
        position: relative;
        background-color: white;
        width: calc(50% - 31px);
        margin-bottom: 2px;
        padding: 15px;
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
  }

</style>
