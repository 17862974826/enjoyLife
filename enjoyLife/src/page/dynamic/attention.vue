<template>
	<div class="attention">
		<div class="recomend">
			<div class="picture">
				<img class="picture-img" src="http://static1.keepcdn.com/avatar/2016/09/08/14/09cccf8813ec5dfb088dcbc6a77e44bbf9efc091.jpg?imageMogr2/thumbnail/96x" alt="">
			</div>
			<p class="recomend-desc">
				BeckG
				<span class="recomend-detail">(热门圈主)</span>
			</p>
			<div class="attach" @click="handleAttClick">关注</div>
		</div>
		<div class="space border-topbottom"></div>
		<div ref="wrapper" class="wrapper">
			<ul>
				<router-link  :to="'/detail/' + item.id"  
								class="container border-bottom" 
								v-for="item in dynamicData" 
								:key="item.id"
								tag="li">
					<div class="container-top">
						<div class="picture container-img">
							<img class="picture-img" :src="item.headerImg" alt="">
						</div>
						<div class="container-title">
							<p class="user-name">{{item.name}}</p>
							<p class="user-date">{{item.date}}</p>
						</div>
					</div>
					<p class="user-desc">{{item.desc}}</p>
				<swiper :options="swiperOption">
					<swiper-slide class="slide" 
								  v-for="product in item.imgUrl" 
								  :key="product.id"> 
			          <div class="img-wrap">
			            <img class="user-img" :src="product.imgurl">
			          </div>
		       		</swiper-slide>
		     	</swiper> 
					<div class="container-bottom">
						<p class="path-line">轨迹</p>
						<p class="user-like"><span class="iconfont user-des">&#xe733;</span>132</p>
						<p class="user-like"><span class="iconfont user-des">&#xe66b;</span>0</p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
	  name: 'dynamic-attention',
	  props: {
	    dynamicData: Array
	  },
	  data () {
	    return {
	      swiperOption: {
	        loop: true,
	        slidesPerView: 2.5,
	        spaceBetween: 30,
	        observer: true,
	        observeParents: true,
	        centeredSlides: true
	      }
	    }
	  },
	  mounted () {
	    this.$nextTick(() => {
	      this.scroll = new BScroll(this.$refs.wrapper)
	    })
	  },
	  methods: {
	    handleAttClick (e) {
	      e.target.innerHTML = '已关注'
	    }
	  }
	}
</script>
<style scoped>
	.slide{
		overflow: hidden;
	}
	.attention{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.recomend{
		display: flex;
		height: 1.22rem;
	}
	.picture{
		width: .8rem;
		height: .8rem;
		margin-top: .2rem;
		margin-left: .4rem;
		border-radius: .8rem;
		border: 1px solid #ccc;
	}
	.picture-img{
		width: 100%;
		border-radius: .8rem;
	}
	.recomend-desc{
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: .28rem;
		margin: .64rem 0 0 .28rem;
		font-weight: bold;
		color: #333333;
	}
	.recomend-detail{
		font-weight: normal;
	}
	.attach{
		width: 1.14rem;
		height: .5rem;
		margin: .4rem .3rem 0 0;
		border-radius: .45rem;
		background: #999999;
		color: #fff;
		text-align: center;
		line-height: .5rem
	}
	.space{
		height: .14rem;
		width: 100%;
		background: #cccccc;
	}
	.wrapper{
		flex: 1;
		overflow: hidden;
	}
	.container{
		height: 5.24rem;
		width: 100%;
	}
	.container-top{
		display: flex;
		height: .95rem;
		padding-top: .35rem;
	}
	.container-img{
		margin-top: 0;
	}
	.container-title{
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: .28rem;
		color: #333333;
		margin-left: .28rem;
	}
	.user-name{
		margin-bottom: .2rem;
	}
	.user-desc{
		font-size: .24rem;
		color: #999999;
		line-height: .68rem;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.img-wrap{
		width: 2.86rem;
		height: 2.28rem;
	}
	.user-img{
		width: 100%;
		height: 100%;
	}
	.container-bottom{
		display: flex;
		font-size: .24rem;
		padding-top: .48rem;
		color: #6e6e6e;
	}
	.path-line{
		flex: 1;
		margin-left: .36rem;
	}
	.user-like{
		width: 1rem;
	}
	.user-des{
		margin-right: .12rem;
	}
</style>