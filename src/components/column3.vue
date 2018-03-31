<template>
  
    <!-- 一带三栏布局 -->
    <el-row class="column3">
      <h5>横幅</h5>
      <ul>
        <li v-for="(item, index) in 3" :key="index">
          <p>
            <span>标题</span>
            <small>介绍</small>
          </p>
          <p>
              <img src="/images/default.jpg" alt="default.jpg">
          </p>
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
  .column3 {
    background-color: $snow;
    h5 {
      // background-color: $ink;
      background-image: url('/images/default.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      color: white;
      width: 100%;
      height: 80px;
      text-align: center;
      line-height: 80px;
      margin-bottom: 2px;
    }
    ul {
      display: flex;
      flex-flow: row nowrap;
      li {
        flex-grow: 1;
        background-color: white;
        padding: 10px;
        margin: 0 1px;
        span,
        small {
          display: block;
        }
        img {
          display: block;
          width: 80%;
          margin: 0 auto;
        }

        &:frist-child,
        &:last-child {
          margin: 0;
        }
      }

    }
  }

</style>