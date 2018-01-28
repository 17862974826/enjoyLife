<template>
	<div class="attention">
		<div class="recomend">
			<div class="picture">
				<img class="picture-img" :src="user.pic" alt="">
			</div>
			<p class="recomend-desc">
				{{user.relaname || '匿名'}}
				<span class="recomend-detail">(热门圈主)</span>
			</p>
			<div class="attach" @click="handleAttClick">关注</div>
		</div>
		<div class="space border-topbottom"></div>
		<div ref="wrapper" class="wrapper">
			<ul>
				<router-link  :to="'/detail/' + item.uid"  
								class="container border-bottom" 
								v-for="item in dynamicData" 
								:key="item.yid"
								tag="li">
					<div class="container-top">
						<div class="picture container-img">
							<img class="picture-img" :src="item.pic1 || '/static/images/common/logo.jpg'" alt="">
						</div>
						<div class="container-title">
							<p class="user-name">{{item.name || '匿名'}}</p>
							<p class="user-date">{{item.sex === 0? '女': '男'}}</p>
						</div>
					</div>
					<p class="user-desc">{{item.content}}</p>
				<swiper :options="swiperOption">
					<swiper-slide class="slide" 
								  v-for="(product, index) in item.picAll" 
								  :key="product.key"> 
			          <div class="img-wrap">
			            <img class="user-img" :src="product.value">
			          </div>
		       		</swiper-slide>
		     	</swiper> 
					<div class="container-bottom">
						<p class="path-line">轨迹</p>
						<p class="user-like" @click.stop="handlelikeClick(item.yid)"><span class="iconfont user-des">&#xe733;</span>{{item.click}}</p>
						<p class="user-like" @click.stop="handleCollectionClick(item.yid)"><span class="iconfont user-des">&#xe66b;</span>{{item.gid}}</p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'dynamic-attention',
  props: ['dynamicData', 'user'],
  data () {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,
        initialSlide: 1,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        loopAdditionalSlides: 1
      },
      name: ''
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
    },
    handlelikeClick (id) {
      axios.post('/index/dyn/click', {yid: id})
           .then(this.handleClickLikeSucc.bind(this))
           .catch(this.handleClickLikeErr.bind(this))
    },
    handleClickLikeSucc (res) {
      res.data && (res = res.data)
      if (res.status === 0) {
        this.$emit('change', {
          msg: res.msg
        })
      } else {
        this.$emit('change', {
          msg: res.msg,
          flag: true
        })
      }
    },
    handleCollectionClick (id) {
      axios.post('/index/dyn/collect', {yid: id})
           .then(this.handleCollectionClickSucc.bind(this))
           .catch(this.handleCollectionClickErr.bind(this))
    },
    handleCollectionClickSucc (res) {
      res.data && (res = res.data)
      if (res.status === 0) {
        this.$emit('collect', {
          msg: res.msg
        })
      } else {
        this.$emit('collect', {
          msg: res.msg,
          flag: true
        })
      }
    },
    handleClickLikeErr () {},
    handleCollectionClickErr () {}
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
		height: 100%;
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