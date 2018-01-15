<template>
  <div>
  	<div class="container">
  		<div class="banner" :style="bannerShow.imgUrl">
        <router-link to="/course" class="back iconfont" tag="span">&#xe65b;</router-link>
  	 </div>
			<train :train="train"></train>
      <show-self :showSelf="showSelf" :title="title"></show-self>
      <comment></comment>
      <div class="footer">
        <input class="publish" type="text" placeholder="说些什么吧" />
        <p class="des">发布</p>
        <p class="sign iconfont">&#xe733;</p>
      </div>
  	</div>
  </div>
</template>

<script>
import train from './train'
import showSelf from './showSelf'
import comment from './comment'
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
      bannerShow: {},
      title: ''
    }
  },
  components: {
    train,
    showSelf,
    comment
  },
  watch: {
    '$route' () {
      this.train = this.disposeData({}, this.list)
      this.showSelf = this.disposeData({}, this.show.content)
      this.bannerShow = this.disposeData({}, this.banner)
    }
  },
  methods: {
    getTrainDataSucc (res) {
      res.data.data && (res = res.data.data)
      res.banner && (this.banner = res.banner)
      res.train && (this.list = res.train)
      res.show && (this.show = res.show)
      this.title = this.show.title
      this.train = this.disposeData({}, this.list)
      this.showSelf = this.disposeData({}, this.show.content)
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
    this.showSelf = this.disposeData({}, this.show.content)
    this.bannerShow = this.disposeData({}, this.banner)
  }
}
</script>

<style scoped>
	.container {
		background: #ebf0f2;
    padding-bottom: 0.98rem;
	}
	.banner {
    width: 100%;
    position: relative;
    height:0;
    padding-bottom: 43%;
    overflow: hidden;
    background-size: cover;
	}
  .back {
    font-size: 0.33rem;
    position: absolute;
    top: 0.28rem;
    left: 0.2rem;
    color: #fff;
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
  .footer {
    display: flex;
    position: fixed;
    bottom: 0;
    align-items: center;
    padding-left: 0.2rem;
    box-sizing: border-box;
    width: 100%;
    height: 0.98rem;
    background: #60adfe;
  }
  .publish {
    border: none;
    outline: none;
    width: 77.3%;
    line-height: 0.6rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
    font-size: 0.28rem;
  }
  .des {
    margin: 0rem 0.14rem 0 0.2rem;
    font-size: 0.3rem;
    color: #fff;
  }
  .sign {
    font-size: 0.3rem;
   color: #fff;
  }
</style>

