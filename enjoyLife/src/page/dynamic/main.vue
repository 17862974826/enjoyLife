<template>
	<div class="mainWrap" ref="mainWrap">
		<ul>
			<li 
				class="main-con border-bottom" 
				v-for="(item, index) in hotData" 
				:key="item.yid" >
			 	<div class="img-wrap">
			 		<img class="img-img" :src="item.pic1 || '/static/images/common/logo.jpg'" alt="">
			 	</div>
			 	<div class="main-right">
			 		<p class="main-desc">{{item.content}}</p>
			 		<p class="name-desc">
			 		  <span>{{item.relaname}}</span>
			 		  <span class="like-num">
				 		  <i class="iconfont icon-aixin"  @click.stop="handleLoveClick($event, item.yid)" ref="icon">
				 		  </i>
				 		  {{item.click}}
			 		  </span>
			 		   <span class="like-num">
				 		  <i class="iconfont "  @click.stop="handleCollectClick($event, item.yid)" ref="icon">&#xe66b;
				 		  </i>
			 		  </span>
			 		</p>
			 	</div>
			 </li>
		 </ul>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'dynamic-main',
  data () {
    return {
      msg: ''
    }
  },
  props: {
    hotData: Array
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.mainWrap, {
        click: true
      })
    })
  },
  methods: {
    handleLoveClick (e, id) {
      axios.post('/index/dyn/click', {yid: id})
           .then(this.handleClickLoveSucc.bind(this))
           .catch(this.handleClickLoveErr.bind(this))
    },
    handleCollectClick (e, id) {
      axios.post('/index/dyn/collect', {yid: id})
           .then(this.handleCollectionClickSucc.bind(this))
           .catch(this.handleCollectionClickErr.bind(this))
    },
    handleCollectionClickSucc (res) {
      res.data && (res = res.data)
      this.$emit('collect', {
        msg: res.msg
      })
    },
    handleCollectionClickErr () {},
    handleClickLoveSucc (res) {
      res.data && (res = res.data)
      if (res.status === 0) {
        this.msg = res.msg
        this.$emit('change', {
          msg: this.msg
        })
      } else {
        this.msg = '首次点赞成功'
        this.$emit('change', {
          msg: this.msg,
          flag: true
        })
      }
    },
    handleClickLoveErr () {}
  },
  activated () {
    this.scroll && this.scroll.refresh()
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
	 	overflow: hidden;
	 }
	 .main-desc{
	 	width: 100%;
	 	line-height: .4rem;
	 	height: 1.2rem;
	 	overflow: hidden;
	 	color: #000;
	 	word-break:break-all;
	 	font-size: .28rem;
	 	margin-top: .22rem;
	 }
	 .name-desc{
	 	font-size: .24rem;
	 	color: #333333;
	 	margin-top: 0.3rem;
	 }
	 .like-num{
	 	display: inline-block;
	 	width: 1rem;
	 	float: right;
	 	margin-right: .2rem;
	 }
	 .hot-icons{
	 	color: red;
	 }
</style>