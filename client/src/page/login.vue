<template>
  <div class="login-container">
    <h1>登录</h1>
    <el-input class="login-input" v-model="userInfo.user" placeholder="请输入用户名"></el-input>
    <el-input class="login-input" v-model="userInfo.pwd" placeholder="请输入密码" type="password"></el-input>
    <div class="btn-box">
      <el-button type="primary" class="login-btn" @click="submit">登录</el-button>
      <el-button type="primary" class="login-btn" @click="toReg">注册</el-button>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      userInfo: {
        user: '',
        pwd: ''
      }
    }
  },
  methods: {
    submit(){
      this.$store.dispatch('Login', this.userInfo).then((content) => {
        this.$message({
          message: content,
          type: 'success'
        })
        if (this.$store.getters.role === 'stu'){
          this.$router.push('/layout/selectcourse')
        } else if (this.$store.getters.role === 'admin'){
          this.$router.push('/layout/adminaddcourse')
        } else if (this.$store.getters.role === 'teacher'){
          this.$router.push('/layout/grade')
        }
      }).catch((content) => {
        this.$message.error(content)
      })
    },
    toReg() {
      this.$router.push('/register')
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
