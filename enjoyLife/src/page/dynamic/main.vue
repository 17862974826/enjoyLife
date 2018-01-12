<template>
	<div class="mainWrap" ref="mainWrap">
		<ul>
			<li class="main-con border-bottom" v-for="item in hotData" :key="item.id">
			 	<div class="img-wrap">
			 		<img class="img-img" :src="item.imgUrl" alt="">
			 	</div>
			 	<div class="main-right">
			 		<p class="main-desc">{{item.desc}}</p>
			 		<p class="name-desc">
			 		  {{item.name}}
			 		  <span class="like-num"><i class="iconfont">&#xe733;</i>{{item.num}}</span>
			 		</p>
			 	</div>
			 </li>
		 </ul>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
	  name: 'dynamic-main',
	  props: {
	    hotData: Array
	  },
	  mounted () {
	    this.$nextTick(() => {
	      this.scroll = new BScroll(this.$refs.mainWrap)
	    })
	  }
	}
</script>
<style scoped>
	 .mainWrap{
	 	flex: 1;
	 	overflow: hidden;
	 }
	 .main-con{
	 	display: flex;
	 	width: 100%;
	 	height: 2.26rem;
	 }
	 .img-wrap{
	 	width: 2.14rem;
	 	height: 1.78rem;
	 	margin: .22rem .16rem 0 .7rem;
	 }
	 .img-img{
	 	width: 100%;
	 	height: 100%;
	 }
	 .main-right{
	 	flex: 1;
	 }
	 .main-desc{
	 	font-size: .28rem;
	 	color: #333333;
	 	margin-top: .22rem;
	 }
	 .name-desc{
	 	font-size: .24rem;
	 	color: #333333;
	 	margin-top: 1.1rem;
	 }
	 .like-num{
	 	float: right;
	 	margin-right: .5rem;
	 }
</style>