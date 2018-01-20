<template>
  <div class="main">
  	<div class="logo">
  		<img src="/static/images/common/logo.jpg" class="pic">
  		<p class="enjoy">享生活</p>
  	</div>
  	<div class="content">
  		<select v-model="selected" class="select wrapper">
		    <option  disabled  value="" >请选择地区</option>
		    <option>中国大陆</option>
		    <option>香港</option>
		    <option>澳门</option>
		    <option>台湾</option>
 			</select>
 			<div class="wrapper">
 				<input type="text" class="username" placeholder="请输入手机号" v-model.trim.number="username" @blur="handleUserBlur"></input>
 				<span class="pre">+86</span>
 			</div>
 			<div class="wrapper code">
 				<input type="text" class="output" v-model="validate" placeholder="验证码">
 				<div class="validate" @click="handleValidateClick">{{time}}</div>
 			</div>
 			<div class="wrapper pwd_wrapper">
 				<input type="password" class="password" v-model="password" placeholder="请设置您的密码"></input>
 			</div>
 			<div class="hint">输入6-16位数字或字母, 小数点“.”或下划线“_”的结合</div>
 			<div class="wrapper regist" @click="handleRegisterClick">注册</div>
 			<p class="login" @click="handleLoginClick">已经注册？ 马上登录</p>
 			<p class="copyright">注册即代表同意享生活<a>服务条款</a>和<a>隐私条款</a></p>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      selected: '',
      username: '',
      validate: '',
      password: '',
      time: '获取验证码',
      flag: false
    }
  },
  methods: {
    handleValidateClick () {
      const reg = /^1[3578]\d{9}$/
      if (reg.test(this.username) && this.flag) {
        this.flag = false
        this.time = 60
        this.clear = setInterval(this.timeSlot, 1000)
      }
    },
    timeSlot () {
      this.time--
      if (this.time === 0) {
        clearInterval(this.clear)
        this.flag = true
        this.time = '获取验证码'
      }
    },
    handleRegisterClick () {
      this.$router.push({path: '/login'})
    },
    handleLoginClick () {
      this.$router.push({path: '/login'})
    },
    handleUserBlur () {
      axios.post('/index/index/register', {
        phone: this.username
      }).then(this.validateUsername.bind(this))
    },
    validateUsername (res) {
    	console.log(res)	
    }
  },
  activated () {
    this.username = ''
    this.password = ''
  }
}
</script>

<style scoped>
	input {
		border: none
	}
	.main {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding-top: 0.3rem;
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
	.content {
		height: 9rem;
		width: 100%;
		text-align: center;
		background: #a0cefb;
	}
	.select {
		box-sizing: border-box;	
		color: #83bffe;
		border: none;
		border-radius: 0.1rem;
		background: #fff;
	}
	.wrapper {
		position: relative;
		width: 5rem;
		height: 0.9rem;
		margin: 0 auto 0.32rem;
		text-align: center;
	}
	::-webkit-input-placeholder {
		color: #b4b4b4;
	}
	.username {
		width: 100%;
		height: 100%;
		padding-left: 1rem;
		box-sizing: border-box;
		font-size: 0.28rem;
		border-radius: 0.1rem;
	}
	.pre {
		position: absolute;
		left: 0;
		top: 50%;
		line-height: 0.3rem;
		margin-top: -0.15rem;
		width: 0.95rem;
		font-size: 0.24rem;
		color: #83bffe;
		border-right: 1px solid #83bffe;
	}
	.code {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	.output {
		width: 2.4rem;
		padding-left: 0.2rem;
		height: 0.88rem;
		border-radius: 0.1rem;
		background: #fff;
	}
	.validate {
		width: 1.9rem;
		line-height: 0.88rem;
		text-align: center;
		font-size: 0.28rem;
		border-radius: 0.1rem;
		background: #60adfe;
		color: #fff;
	}
	.password {
		width: 100%;
		height: 100%;
		padding-left: 0.2rem;
		box-sizing: border-box;
		border-radius: 0.1rem;
	}
	.pwd_wrapper {
		margin-bottom: 0.13rem;
	}
	.hint {
		width: 5rem;
		margin: 0 auto 0.17rem;
		line-height: 0.26rem;
		font-size: 0.2rem;
		text-align: left;
		color: #fff;
	}
	.regist {
		font-size: 0.3rem;
		line-height: 0.88rem;
		font-weight: bold;
		background: #fff;
		border-radius: 0.1rem;
		color: #6eb4fe;
	}
	.login {
		margin-bottom: 1rem;
		font-size: 0.22rem;
		color: #fff;
	}
	.copyright {
		font-size: 0.22rem;
		color: #fff;
	}
	.copyright a {
		text-decoration: underline;
		color: #65a5f7; 
	}
</style>

