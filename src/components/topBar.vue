<template>
  
    <!-- 搜索消息栏 -->
    <el-row class="top_bar border_bottom">
      <!--搜索-->
      <div class="top_search">
        <el-input size="mini" placeholder="请输入内容" prefix-icon="el-icon-search">
        </el-input>
      </div>
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
<style lang="scss" scoped>

  .top_bar {
    background-color: white;
    display: flex;
    flex-direction: row;
    margin-top: 0;
    >div {
      width: 30px;
      line-height: 30px;
      margin: 10px;
      flex-grow: 0;
    }
    .top_search {
      flex-grow: 1;
    }
  }

</style>
