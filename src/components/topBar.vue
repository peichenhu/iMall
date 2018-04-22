<template>

  <!-- 搜索消息栏 -->
  <el-row class="top_bar border_bottom">
    <!--搜索-->
    <router-link :to="{ path: '/other', query: { title: '搜索' }}" tag="div" class="top_search">
      <el-input size="mini" placeholder="请输入内容" prefix-icon="el-icon-search">
      </el-input>
    </router-link>
    <!--消息-->

    <router-link :to="{ path: '/other', query: { title: '消息通知' }}" tag="div" class="top_msg">
      <el-badge is-dot class="item">
        <i class="iconfont icon-msg"></i>
      </el-badge>
    </router-link>
  </el-row>

</template>
<script>
  export default {};

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
