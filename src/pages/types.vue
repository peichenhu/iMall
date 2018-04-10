<template>
  <div id="types">

    <TopBar class="fixed_top"></TopBar>
    <hr>
    <h3 class="bg_white">手机</h3>
    <InlineBox :InlineBoxData="TypesPhoneData" :InlineBoxCount=4></InlineBox>
  </div>

</template>

<script>
  // 引入插件
  import Axios from "axios"
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
    created(){
      this.getTypesPhoneData();
    },
    methods: {
      getTypesPhoneData: function () {
        let types = this;
        Axios.get("/getTypesPhoneData", {
            cookie: "getTypesPhoneData"
          }) // localhost-mock or 使用在线版easy-mock
          .then(function (response) {
            types.TypesPhoneData = response.data;
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    }
    
    

  }

</script>

<style lang="scss" scoped>

    
#types{
  margin-top: 50px;
  margin-bottom: 50px;
  h3{
    text-indent: 10px;
  }
}

</style>
