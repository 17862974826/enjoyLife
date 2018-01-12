<template>
	<div class="wrap">
		<div class="header">
			<div class="back iconfont">&#xe65b;</div>
			<div class="header-con" @click="handleHotComClick">热门</div>
			<div class="header-con" @click="handleAttentionClick">关注</div>
			<div class="header-con" @click="handleNearClick">附近</div>
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
	      nearShow: false
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
	      this.attentionShow = false
	      this.nearShow = false
	    },
	    handleAttentionClick () {
	      this.show = false
	      this.attentionShow = true
	      this.nearShow = false
	    },
	    handleNearClick () {
	      this.show = false
	      this.attentionShow = false
	      this.nearShow = true
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
		height: 1rem;
		color: #fff;
		background: #24c789;
	}
	.back{
		width: 1rem;
		text-align: center;
		line-height: 1rem;
	}
	.header-con{
		flex: 1;
		line-height: 1rem;
		width: .8rem;
		text-align: center;
		font-size: .32rem;
	}
	.search{
		width: 1.2rem;
		text-align: center;
		line-height: 1rem;
	}
	 
</style>