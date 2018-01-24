<template>
  <div>
  	<div class="container">
      <toast :msg="msg" v-show="toast"></toast>
  		<div class="banner">
        <img :src="train.pic">
        <router-link to="/course" class="back iconfont" tag="span">&#xe65b;</router-link>
  	 </div>
			<train :train="train"></train>
      <show-self :showSelf="showSelf" :title="title"></show-self>
      <comment :comment="comment"></comment>
      <div class="footer">
        <input class="publish" type="text" placeholder="说些什么吧" v-model="publish"/>
        <p class="des" @click="handlePublishSubmit">发布</p>
        <p class="sign iconfont">&#xe733;</p>
      </div>
      <div class="up"></div>
  	</div>
  </div>
</template>

<script>
import toast from 'components/ui/toast'
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
      publish: '',
      showSelf: [],
      show: [],
      banner: '',
      title: '',
      comment: [],
      cid: '',
      toast: true,
      msg: ''
    }
  },
  components: {
    train,
    showSelf,
    comment,
    toast
  },
  methods: {
    getTrainDataSucc (res) {
      res.data && (res = res.data)
      this.comment = res.msg
      this.cid = res.res[0].cid
      this.$nextTick(() => {
        this.train = res.res[0]
      })
    },
    getSportData () {
      axios.post('/index/cage/comment', {cid: this.$route.params})
          .then(this.getTrainDataSucc.bind(this))
           .then(this.getTrainDataErr.bind(this))
    },
    handlePublishSubmit () {
      axios.post('/index/cage/dopost', {cid: this.cid, content: this.publish})
            .then(this.handlePublishSubmitSucc.bind(this))
            .then(this.handlePublishSubmitErr.bind(this))
    },
    handlePublishSubmitSucc (res) {
      if (res.data.status) {
        this.publish = ''
        this.msg = res.data.msg
        this.toast = true
        setTimeout(() => {
          this.toast = false
          this.getSportData()
        }, 1200)
      } else {
        this.msg = res.data.msg
        this.toast = true
        setTimeout(() => {
          this.toast = false
        }, 1200)
      }
    },
    getTrainDataErr () {},
    handlePublishSubmitErr () {}
  },
  activated () {
    this.getSportData()
  }
}
</script>

<style scoped>
	.container {
		background: #ebf0f2;
	}
  .up {
    width: 100%;
    height: 0.96rem;
    background: #fff;
  }
	.banner {
    width: 100%;
    position: relative;
    height:0;
    padding-bottom: 52%;
    overflow: hidden;
    background-size: cover;
	}
  .banner img {
    width: 100%;
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

