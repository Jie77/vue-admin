<template>
  <div class="login-container">
    <h1>登录</h1>
    <el-input class="login-input" v-model="user" placeholder="请输入用户名"></el-input>
    <el-input class="login-input" v-model="pwd" placeholder="请输入密码"></el-input>
    <div class="btn-box">
      <el-button type="primary" class="login-btn" @click="submit">登录</el-button>
      <el-button type="primary" class="login-btn">注册</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    submit(){
      this.$router.push('/layout/studoc')
    }
  }
}
</script>
<style lang='scss'>
  .login-container {
    text-align: center;
    width: 500px;
    margin: 0 auto;
    margin-top: 150px;
    box-sizing: border-box;
    padding: 30px;
    .login-input {
      margin-bottom: 20px;
    }
    .btn-box {
      margin: 0 auto;
      width: 230px;
      .login-btn {
        width: 100px;
      }
      .el-button+.el-button {
        margin-left: 20px;
      }
    }  
  }
</style>
