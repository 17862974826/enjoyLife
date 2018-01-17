<template>
  <div class="main">
  	<header class="header">设置<router-link to="/mine" class="back iconfont">&#xe65b;</router-link></header>
  	<div class="container">
  		<div class="list" v-for="(item, index) in list" :key="index">
  			<div v-for="inner in item" class="inner">{{inner}}</div>
  		</div>
  		<div class="header_icon">
  			<img :src="headerIcon">
  		</div>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setting',
  data () {
    return {
      list: {},
      headerIcon: ''
    }
  },
  methods: {
    getCourseDataSucc (res) {
      res.data.data && (res = res.data.data)
      this.list = res.list
      this.headerIcon = res.mine.imgUrl
    },
    getCourseDataErr () {}
  },
  created () {
    axios.get('/static/setting.json').then(this.getCourseDataSucc.bind(this))
                                   .then(this.getCourseDataErr.bind(this))
  }
}
</script>

<style scoped>
	.main {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #dddddd;
	}
	.header {
		position: relative;
		padding: 0 0.2rem;
		height: .88rem;
		font-size: 0.3rem;
		line-height: 0.88rem;
		text-align: center;
		color: #fff;
		background: #53a6fe;
	}
	.header::after {
		content: "";
		position: absolute;
		height: 1px;
		width: 100%;
		left: 0;
		bottom: 0;
		transform: scaleY(0.5);
		background: #bfd8f3;
	}
	.back {
		position: absolute;
		font-size: 0.32rem;
		left: 0.2rem;
		top: 50%;
		transform: translateY(-50%);
		color: #fff;
	}
	.container {
		flex: 1;
		display: flex;
		position: relative;
		flex-direction: column;
		background: #fff;
	}
	.list {
		margin-bottom: 0.1rem;
		background: #fff;
	}
	.inner {
		position: relative;
		height: 0.88rem;
		line-height: 0.88rem;
		padding:0 0.2rem;
		font-size: 0.28rem;
		color: #777;
	}
	.inner::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 1px;
		width: 100%;
		transform: scaleY(0.5);
		background: #f4f4f4;
	}
	.header_icon {
		position: absolute;
		right: 0.2rem;
		width: 0.5rem;
		height: 0.5rem;
		top: 0.2rem;
		border-radius: 50%;
	}
	.header_icon img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
</style>

