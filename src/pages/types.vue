<template>
  <better-scroll>
    <!-- 搜索消息栏组件 -->
    <top-bar slot="header"></top-bar>

    <div id="types" slot="section">
        <h3 class="bg_white border_bottom">手机</h3>
        <InlineBox :InlineBoxData="TypesPhoneData" :InlineBoxCount=4></InlineBox>
        
    </div>
    <!-- 导航组件 -->
    <navigation slot="footer"></navigation>
  </better-scroll>

</template>

<script>
  import {
    getTypesData
  } from "../api/types"

  // 引入组件
  import TopBar from '../components/topBar'
  import InlineBox from '../components/InlineBox'

  export default {
    data:function(){
      return{
          TypesPhoneData: null
      }
    },
    // 初始化组件
    components: {
      TopBar,
      InlineBox
    },
    created() {
      this.init();
    },
    methods: {
      init: function () {
        let _this = this;
        getTypesData() // 传参数会导致Mock 报错，所以暂时为空
          .then( ({data}) =>_this.TypesPhoneData = data.phone)
          .catch(error=> console.log(error));
      }
    }
    
    

  }

</script>

<style lang="scss" scoped>
  h3{
    text-indent: 10px;
  }
</style>
