<template>

    <better-scroll>
        <div class="backbar" slot="header">
            <i class="iconfont icon-left" :span="18"></i>
            <span> <b>注册</b> </span>
        </div>
        <el-form ref="form" :model="form" slot="section">
            <el-input v-model="form.name" name="activity_name"  placeholder="请输入用户名"></el-input>
            <el-input v-model="form.name" name="activity_name"  placeholder="请输入用户名"></el-input>
            <el-input v-model="form.name" name="activity_name"  placeholder="请输入用户名"></el-input>
            <el-input v-model="form.name" name="activity_name"  placeholder="请输入用户名"></el-input>
            <el-input v-model="form.name" name="activity_name"  placeholder="请输入用户名"></el-input>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form>
    </better-scroll>
</template>
<script>
  export default {
    components: {
    },
    data() {
      return {
        form: {
          name: ""
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
<style lang="scss" scoped>
  .backbar {
    height: 50px;
    background-color: white;
    line-height: 50px;
    padding: 0 15px;
    font-size: 18px;
    border-bottom: 1px solid #acacac;
  }

  .el-form {
    background-color: white;
    padding: 15px;
  }

</style>
