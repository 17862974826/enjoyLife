<template>
	<div class="wrap">
		<div class="header">
			<div class="back iconfont" @click="handleBackClick">&#xe65b;</div>
			<div class="header-con" :class="{'header-active': isError}" 
				@click="handleHotComClick">热门</div>
			<div class="header-con" :class="{'header-active': isActive}"
				 @click="handleAttentionClick">关注</div>
			<div class="header-con" :class="{'header-active': isBorder}"
				 @click="handleNearClick">附近</div>
			<div class="search iconfont">&#xe628;</div>
		</div>
		 
		  <dynamic-main  :hotData="hotData" v-show="show"></dynamic-main>
		  <dynamic-attention :dynamicData="dynamicData" 
		  					 v-show="attentionShow">
		  </dynamic-attention>
		  <dynamic-near :nearData="nearData" v-show="nearShow"></dynamic-near>
		 
	  <dynamic-footer></dynamic-footer>
	</div>
</template>

<script>
	import dynamicMain from './main'
	import dynamicAttention from './attention'
	import dynamicNear from './near'
	import dynamicFooter from 'components/common/footer'
	import axios from 'axios'
	export default {
	  name: 'dynamic',
	  components: {
	    dynamicMain,
	    dynamicAttention,
	    dynamicNear,
	    dynamicFooter
	  },
	  data () {
	    return {
	      hotData: [],
	      dynamicData: [],
	      nearData: [],
	      show: true,
	      attentionShow: false,
	      nearShow: false,
	      isError: true,
	      isActive: false,
	      isBorder: false
	    }
	  },
	  created () {
	    axios.get('/static/dynamic.json').then(this.handleGetDataSucc.bind(this))
	                                     .catch(this.handleGetDataErr.bind(this))
	  },
	  methods: {
	    handleGetDataSucc (res) {
	      res.data && (res = res.data)
	      if (res) {
	        this.hotData = res.data.hot
	        this.dynamicData = res.data.dynamic
	        this.nearData = res.data.near
	      } else {
	        this.handleGetDataErr()
	      }
	    },
	    handleGetDataErr () {},
	    handleHotComClick () {
	      this.show = true
	      this.isError = true
	      this.isActive = false
	      this.isBorder = false
	      this.attentionShow = false
	      this.nearShow = false
	    },
	    handleAttentionClick () {
	      this.show = false
	      this.isError = false
	      this.isActive = true
	      this.isBorder = false
	      this.attentionShow = true
	      this.nearShow = false
	    },
	    handleNearClick () {
	      this.show = false
	      this.isError = false
	      this.isActive = false
	      this.isBorder = true
	      this.attentionShow = false
	      this.nearShow = true
	    },
	    handleBackClick () {
	      this.$router.go(-1)
	    }
	  }
	}
</script>
<style scoped>
	.wrap{
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
		width: 100%;
		height: 1.2rem;
		color: #333;
		background: #fff;
	}
	.back{
		width: 1rem;
		text-align: center;
		line-height: 1.2rem;
	}
	.header-con{
		flex: 1;
		line-height: 1.2rem;
		width: .8rem;
		text-align: center;
		font-size: .34rem;
	}
	.header-active{
		border-bottom: 3px solid #60adfe;
	}
	.search{
		width: 1.2rem;
		text-align: center;
		line-height: 1rem;
	}
	 
</style>