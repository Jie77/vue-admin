<template>
  <div class="login-container">
    <h1>注册</h1>
    <el-input class="login-input" v-model="user" placeholder="请输入用户名"></el-input>
    <el-input class="login-input" v-model="pwd" placeholder="请输入密码" type="password"></el-input>
    <div class="btn-box">
      <el-button type="primary" class="login-btn" @click="submit('stu')">学生注册</el-button>
      <el-button type="primary" class="login-btn" @click="submit('teacher')">教师注册</el-button>
    </div>
  </div>
</template>
<script>
import { registByName } from '@/api/login'
export default {
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    submit(role){
      if (this.user != '' && this.pwd != '') {
        registByName(this.user, this.pwd, role).then((res) => {
          if (res.data.state) {
            this.$message({
              message: res.data.content,
              type: 'success'
            })
            setTimeout(() => {
              this.$router.push('/login')
            }, 1000)
          } else {
            this.$message.error(res.data.content)
          }
        }).catch((error) => {
          this.$message.error('注册发生错误')
          // console.log('error' + error)
        })
      } else if (this.user === '') {
        this.$message.error('请输入用户名')
      } else if (this.pwd === '') {
        this.$message.error('请输入密码')
      }
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
