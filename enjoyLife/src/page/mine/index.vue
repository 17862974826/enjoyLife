<template>
	<div class="mine-box">
		<div class="header border-bottom">
			<div class="iconfont icons" @click="handleBackClick">&#xe65b;</div>
			<div class="mine">我的</div>
			<router-link to="/register">
				<div class="iconfont icons">&#xe628;</div>
			</router-link>
		</div>

		<div class="mainWrap" ref="mainWrap">
		  <ul>
			<div class="info">
				<div class="info-wrap">
					<div class="header-img">
						<img class="user-img" :src="userInfo.imgUrl" alt="">
					</div>
					<p class="user-name">{{userInfo.name}}</p>
				</div>
				<div class="user-baseInfo">
					<div>关注：{{userInfo.about}}</div>
					<div>粉丝：{{userInfo.fin}}</div>
					<div>动态：{{userInfo.dyn}}</div>
				</div>
			</div>
			<div class="white-space"></div>
			<main-class :classify="classify"></main-class>
			<div class="white-space"></div>
			<main-record></main-record>
		  </ul>
		</div>
		<main-footer></main-footer>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import MainClass from './class'
	import MainRecord from './record'
	import MainFooter from 'components/common/footer'
	import axios from 'axios'
	export default {
	  name: 'mine',
	  components: {
	    MainClass,
	    MainRecord,
	    MainFooter
	  },
	  data () {
	    return {
	      userInfo: {},
	      classify: {}
	    }
	  },
	  mounted () {
	    this.$nextTick(() => {
	      this.scroll = new BScroll(this.$refs.mainWrap, {
	        click: true
	      })
	    })
	  },
	  created () {
	    axios.get('/static/mine.json').then(this.handleGetInfoSucc.bind(this))
	                                  .catch(this.handleGetInfoErr.bind(this))
	  },
	  methods: {
	    handleGetInfoSucc (res) {
	      res.data && (res = res.data.data)
	      if (res && res.userInfo && res.classify) {
	        this.classify = res.classify
	        this.userInfo = res.userInfo
	      }
	    },
	    handleGetInfoErr () {
	      console.log('Error')
	    },
	    handleBackClick () {
	      this.$router.go(-1)
	    }
	  }
	}
</script>
<style scoped>
		.mainWrap{
		 	flex: 1;
		 	overflow: hidden;
		 }
		.mine-box{
			display: flex;
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			flex-direction: column;
		}
		.header{
			display: flex;
			line-height: 1.2rem;
			font-size: .34rem;
			color: #333;
			background: #fff;
		}
		.icons{
			width: 1.2rem;
			text-align: center;
		}
		.mine{
			flex: 1;
			text-align: center;
		}
		.info{
			height: 3.23rem;
			padding-top: .5rem;
		}
		.info-wrap{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.header-img{
			width: 1.35rem;
			height: 1.35rem;
		}
		.user-img{
			width: 100%;
			border-radius: 1.35rem;
		}
		.user-name{
			font-size: .3rem;
			color: #333333;
			line-height: 1.2rem;
		}
		.user-baseInfo{
			display: flex;
			justify-content: space-around;
		}
		.white-space{
			height: .14rem;
			background: #ccc;
		}
</style>