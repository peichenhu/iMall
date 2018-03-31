<template>
  
    <!-- 一带四叶草布局 -->
    <el-row class="clover4">
      <h5>分类标题
        <i class="el-icon-d-arrow-right"></i>
      </h5>
      <ul>
        <li v-for="(item, index) in 4" :key="index">
          <p>标题</p>
          <p>
            <span>
              <small>价格</small>
              <small>
                <el-tag size="mini">标签</el-tag>
              </small>
            </span>
            <span>
              <img src="/images/default.jpg" alt="default.jpg">
            </span>
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
  .clover4 {
    background-color: $snow;
    h5 {
      background-color: $ink;
      color: white;
      width: 100%;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-bottom: 1px solid $snow;
      margin-bottom: 1px;
    }
    ul {
      display: flex;
      flex-flow: row wrap;
      li {
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
          display: flex;
          flex-flow: row nowrap;
          text-align: left;
          >span {
            width: 50%;
            flex-grow: 0;
            small {
              display: block;
            }
          }
        }
      }
    }
  }
</style>