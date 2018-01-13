<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
	     <div v-for="item in num" class="inner">
	     	<h2 class="title">增肌训练</h2>
			<swiper :options="swiperOption" class="img_wrap" ref="swiper">
		        <swiper-slide v-for="item in sport">
		          <div class="des_wrap" @click.preventDefault="handleClick(item.id)">
		            <img :src="item.imgUrl">
		            <div class="des">
		            	<div class="des_total">
		            		<div class="des_title">{{item.title}}</div>
		            		<div class="des_person">{{item.person}}人参与</div>
		            		<div class="des_active">{{item.active}}人正在训练</div>
		            	</div>
		            </div>
		          </div>
		        </swiper-slide>
	      	</swiper>
	     </div>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroller',
  props: {
    sport: Array
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 15,
        initialSlide: 1,
        observer: true,
        observerParents: true,
        passiveListeners: false
      }
    }
  },
  methods: {
    handleClick (id) {
      this.$router.push({
        name: 'detail',
        params: {id: id}
      })
    },
    refreshSwiper () {
      this.$refs.swiper.forEach((value) => {
        value.swiper.slideTo(1)
      })
    }
  },
  computed: {
    num () {
      return this.sport.length
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    })
  }
}
</script>


<style scoped>
	.inner {
		margin-top: 0.1rem;
		position: relative;
	}
	.title {
		line-height: 0.9rem;
		background: #fff;
		font-size: 0.3rem;
		color: #333;
		padding-left: 0.2rem;
	}
	.img_wrap{
		width: 100%;
		height: 53vw;
		overflow: hidden;
	}
	.start {
		position: absolute;
		left: -1.3rem;
		bottom: 0;
		width: 15%;
		height: 100%;
		background: #fff;
	}
	.des_wrap {
		position: relative;
		height: 100%;
		overflow: hidden;
	}
	.des {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}
	.des_total {
		position: absolute;
		width: 75%;
		text-align: center;
		left: 50%;
		margin-left: -37.5%;
		top: 0;
		color: #fff;
		top: 50%;
		transform: translateY(-50%);
	}
	.img_wrap img {
		width: 100%;
		height: 100%;
	}
	.des_title {
		font-size: 0.4rem;
		margin-bottom: 0.1rem;
	}
	.des_person {
		font-size: 0.3rem;
	}
</style>
