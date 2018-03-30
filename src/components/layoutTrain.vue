<template>
    <!-- 小火车布局 -->
    <el-row class="train">
      <h5>分类标题
        <i class="el-icon-d-arrow-right"></i>
      </h5>
      <ul>
        <li v-for="(item, index) in 7" :key="index">
          <p>
              <img src="../assets/images/default.jpg" alt="default.jpg">
          </p>
          <p>
            <span>标题</span>
            <span>介绍</span>
            <span>新价格
              <small>
                <del> 旧价格</del>
              </small>
            </span>
          </p>
          <div class="float_tag">
            <span>直降
              <br>700</span>
          </div>
        </li>
      </ul>
    </el-row>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>

  @import '../assets/css/config.scss';
  .train {
    background-color: $snow;
    h5 {
      background-color: $ink;
      color: white;
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
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
          top: 20px;
          left: 20px;
        }
      } 
    }
  }
</style>