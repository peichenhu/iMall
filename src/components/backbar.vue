<template>
  <div @click="goback" class="backbar border_bottom">
    <i class="iconfont icon-left" :span="18"></i>
    <span>
      <b>{{title||this.$route.query.title}}</b>
    </span>
  </div>
</template>

<script>
  export default {
      props:["title"],
    data() {
      return {};
    },
    methods: {

      goback: function () {
        // window.history.go(-1)
        this.$router.back();
      },
    }
  }

</script>
<style lang="scss" scoped>
  .backbar {
    height: 50px;
    display: block;
    padding: 0 15px;
    line-height: 50px;
    background-color: white;
    font-size: 18px;
  }

</style>
