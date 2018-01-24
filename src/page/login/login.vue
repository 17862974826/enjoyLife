<template>
  <div class="main">
    <div class="logo">
      <img src="/static/images/common/logo.jpg" class="pic">
      <p class="enjoy">享生活</p>
    </div>
    <div class="content">
      <p class="hint">{{show}}</p>
      <div class="wrapper">
        <span class="iconfont icon_user">&#xe796;</span>
        <input type="text" class="username" placeholder="请输入手机号" v-model.number="username"></input>
      </div>
      <div class="wrapper pwd_wrap">
        <span class="iconfont icon_pwd">&#xe620;</span>
        <input type="password" class="password" placeholder="请输入密码" v-model="password"></input>
      </div>
      <div class="select">
        <div class="remember">
          <div class="pwd"  @click="handleRemeberClick">
            <img src="/static/images/common/change.jpg" class="pic" ref="pwd">
          </div>
          <span>记住密码</span>
        </div>
        <div class="auto">
          <div class="auto_login" @click="handleAutoClick">
            <img src="/static/images/common/login.jpg" class="pic" ref="login">
          </div>
          <span>自动登录</span>
        </div>
      </div>
      <div class="wrapper login" @click="handleLoginClick">登录</div>
      <div class="wrapper more">
        <p class="forget">忘记密码? </p>
        <router-link to="/register" class="register" tag="p">立即注册</router-link>
      </div>
      <div class="division">
        <p class="other_login">第三方登录</p>
        <div class="icon">
          <span class="iconfont inner" id="hzy_fast_login"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      pwdFlag: true,
      loginFlag: false,
      username: '',
      password: '',
      show: ''
    }
  },
  methods: {
    handleRemeberClick () {
      if (this.pwdFlag) {
        this.$refs.pwd.src = '/static/images/common/login.jpg'
        this.pwdFlag = !this.pwdFlag
      } else {
        this.$refs.pwd.src = '/static/images/common/change.jpg'
        this.pwdFlag = !this.pwdFlag
      }
    },
    handleAutoClick () {
      if (this.loginFlag) {
        this.$refs.login.src = '/static/images/common/login.jpg'
        this.loginFlag = !this.loginFlag
      } else {
        this.$refs.login.src = '/static/images/common/change.jpg'
        this.loginFlag = !this.loginFlag
      }
    },
    handleLoginClick () {
      if (this.username && this.username !== '') {
        if (this.password && this.password !== '') {
          axios.post('/index/index/login', {phone: this.username, password: this.password}).then(this.handleRegisterSucc.bind(this))
        }
      }
    },
    handleRegisterSucc (res) {
      if (res.data.status) {
        this.addlocalStorage()
        this.$router.push('/index')
      } else {
        this.show = res.data.msg
      }
    },
    addlocalStorage () {
      if (this.pwdFlag || this.loginFlag) {
        const user = {
          username: this.username,
          password: this.password
        }
        window.localStorage.user = JSON.stringify(user)
      }
    },
    beforeRouteEnter (to, from, next) {
      console.log(from)
    }
  },
  mounted () {
    let script = document.createElement('script')
    script.src = 'http://open.51094.com/user/myscript/15a661964971d2.html'
    document.body.appendChild(script)
    if (window.localStorage.user) {
      const user = JSON.parse(window.localStorage.user)
      this.username = user.username
      this.password = user.password
    }
  }
}
</script>

<style scoped>
  .content {
    width: 100%;
    height: 6rem;
    background: #a0cefb;
  }
  .hint {
    width: 5rem;
    margin: 0 auto 0.1rem;
    font-size: 0.22rem;
    text-align: left;
    color: #da6779;
  }
  input {
    border: none
  }
  input:checkbox {
    -webkit-appearance:none;
    background-color: #fff;
  }
  ::-webkit-input-placeholder {
    color: #b4b4b4;
  }
  .icon_user, .icon_pwd {
    position: absolute;
    top: 50%;
    margin-left: 0.2rem;
    transform: translateY(-50%);
    font-size: .44rem;
    color: #72b6fe;
  }
  .main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0.3rem 0 0;
    background: #a0cefb;
  }
  .logo {
    width: 1.58rem;
    margin: 0.62rem auto 0.8rem;
  }
  .pic {
    width: 100%;
  }
  .enjoy {
    margin-top: 0.2rem;
    font-size: 0.44rem;
    color: #fff;
    text-align: center;
  }
  .wrapper {
    width: 5rem;
    position: relative;
    height: 0.88rem;
    margin: 0 auto;
    background: #fff;
  }
  .username, .password {
    width: 100%;
    line-height: 0.88rem;
    padding-left: .84rem;
    border-radius: 0.1rem;
    box-sizing: border-box;
  }
  .pwd_wrap {
    margin: 0.32rem auto 0.12rem;
  }
  .checkboxPwd {
    border: none;
    color: #fff;
  }
  .select {
    display: flex;
    width: 5rem;
    margin: 0 auto 0.36rem;
  }
  .remember, .auto {
    flex: 1;
    display: flex;
    text-align: left;
    font-size: 0.2rem;
    color: #fff;
  }
  .auto {
    display: flex;
    justify-content: flex-end;
    text-align: right;
  }
  .pwd, .auto_login {
    width: 0.26rem;
    height: 0.26rem;
    margin-right: 0.1rem;
  }
  .pic {
    width: 100%;
    height: 100%;
  }
  .login {
    line-height: 0.88rem;
    text-align: center;
    color: #87c1fe;
    font-size: 0.32rem;
    font-weight: bold;
  }
  .more {
    display: flex;
    justify-content: space-between;
    line-height: 0.23rem;
    height: 0.23rem;
    margin-top: 0.12rem;
    font-size: 0.23rem;
    color: #fff;
    background: #a0cefb;
  }
  .division {
    margin: 0.83rem 0 0 ;
    height: 0.5rem;
    position: relative;
  }
  .division::after {
    content: "";
    height: 1px;
    width: 100%;
    position: absolute;
    top: 0;
    background: #fff;
  }
  .other_login {
    position: absolute;
    z-index: 2;
    width: 1.56rem;
    font-size: 0.26rem;
    color: #fff;
    left: 50%;
    margin-left: -0.78rem;
    transform: translateY(-50%);
    background: #a0cefb;
    text-align: center;
  }
  .icon {
    text-align: center;
    padding: 0.5rem 0 0;
  }
  .inner {
    color: #fff;
    text-align: center;
  }
  .inner a {
    float: left;
  }
  .last {
    margin-right: 0rem;
  }
</style>

