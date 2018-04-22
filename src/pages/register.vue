<template>

  <better-scroll>
    <back-bar title="登录" slot="header"></back-bar>

    <el-form ref="form" :model="form" slot="section">
      <el-input type="text" v-model="form.name" name="activity_name" placeholder="手机/用户名/邮箱"></el-input>
      <el-input type="password" v-model="form.password" name="activity_name" placeholder="请输入密码"></el-input>
      <br>
      <br>
      <el-button type="primary" @click="onSubmit" size="mini">立即登录</el-button>
      <ul class="otherOption">
          <router-link tag="li" :to="{ path: '/other', query: { title: '注册' }}">注册 </router-link>
          <router-link tag="li" :to="{ path: '/other', query: { title: '找回密码' }}">忘记密码？ </router-link>
      </ul>
    </el-form>

  </better-scroll>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        form: {
          name: "",
          password: ""
        }
      };
    },
    methods: {
      onSubmit() {
        console.log(this.form);
        console.log("submit!");
      }
    }
  };

</script>
<style lang="scss">
  .el-form {
    input {
      border-width: 0 0 1px 0;
      background-color: transparent;
    }
    button {
      border-radius: 0;
      width: 100%;
      margin-top: 30px;
      margin-bottom: 15px;
    }
    .otherOption{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        background-color: transparent;
        li{
            padding: 5px 0;
        }

    }
  }

</style>
<style lang="scss" scoped>
  .el-form {
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;
  }

</style>
