<template>
  <div>
  	<div class="container">
  		<div class="banner" :style="bannerShow.imgUrl">
  			<div class="mask">
  				<div class="inner">
  					<div class="title">{{bannerShow.title}}</div>
  					<p class="star">K2</p>
  					<p class="pioneer">{{bannerShow.pioneer}}</p>
  				</div>
  			</div>
  		</div>
			<train :train="train"></train>
      <show-self :showSelf="showSelf"></show-self>
      <div class="more">查看更多</div>
  	</div>
  </div>
</template>

<script>
import train from './train'
import showSelf from './showSelf'
import axios from 'axios'
export default {
  name: 'detail',
  props: ['id'],
  data () {
    return {
      train: [],
      list: [],
      showSelf: [],
      show: [],
      banner: {},
      bannerShow: {}
    }
  },
  components: {
    train,
    showSelf
  },
  watch: {
    '$route' () {
      this.train = this.disposeData({}, this.list)
      this.showSelf = this.disposeData({}, this.show)
      this.bannerShow = this.disposeData({}, this.banner)
    }
  },
  methods: {
    getTrainDataSucc (res) {
      res.data.data && (res = res.data.data)
      res.banner && (this.banner = res.banner)
      res.train && (this.list = res.train)
      res.show && (this.show = res.show)
      this.train = this.disposeData({}, this.list)
      this.showSelf = this.disposeData({}, this.show)
      this.bannerShow = this.disposeData({}, this.banner)
    },
    disposeData (fresh, original) {
      for (let key in original) {
        if (key === this.id) {
          fresh = original[key]
        }
      }
      return fresh
    },
    getTrainDataErr () {}
  },
  created () {
    axios.get('/static/train.json').then(this.getTrainDataSucc.bind(this))
                                   .then(this.getTrainDataErr.bind(this))
  },
  activated () {
    this.train = this.disposeData({}, this.list)
    this.showSelf = this.disposeData({}, this.show)
    this.bannerShow = this.disposeData({}, this.banner)
  }
}
</script>

<style scoped>
	.container {
		background: #ebf0f2;
	}
	.banner {
    width: 100%;
    margin-bottom: 0.3rem;
    position: relative;
    height: 3.62rem;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
	}
	.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
	}
	.inner {
		z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    box-sizing: border-box;
    padding: 0.4rem 0.3rem;
    font-size: 0.28rem;
	}
	.title {
		font-size: 0.4rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
	}
	.star {
		position: absolute;
    bottom: 0.5rem;
    left: 0.3rem;
	}
	.pioneer {
		position: absolute;
		bottom: 0.5rem;
    right: 0.3rem;
	}
  .more {
    width: 100%;
    line-height: 1.2rem;
    margin-top: 0.5rem;
    color: #fff;
    text-align: center;
    font-size: 0.32rem;
    background-color: #584f60;
  }
</style>

