<template>
	<div class="wrap">
		<toast :msg="errMsg" v-show="toast"></toast>
		<transition 
      enter-active-class="animated hinge"
    >
		<div v-if="hint" class="hint">{{msg}}</div>
		</transition>
		<div class="header">
			<div class="back iconfont" @click="handleBackClick">&#xe65b;</div>
			<div class="header-con" :class="{'header-active': isError}" 
				@click="handleHotComClick">热门</div>
			<div class="header-con" :class="{'header-active': isActive}"
				 @click="handleAttentionClick">关注</div>
			<div class="header-con" :class="{'header-active': isBorder}"
				 @click="handleNearClick">附近</div>
			<router-link to="/publish">
				<div class="search iconfont">&#xe628;</div>
			</router-link>
		</div>
		 
		  <dynamic-main  :hotData="hotData" v-show="show" 
		  @change="handleClickLoveChange"
		  @collect="hanleCollectClick"
		  ></dynamic-main>
		  <dynamic-attention :dynamicData="dynamicData" 
		  					 v-show="attentionShow"
		  					 :user="user"
		  					 @change="handleLikeClick"
		  					 @collect="hanleCollectClick">
		  </dynamic-attention>
		  <dynamic-near :nearData="nearData" v-show="nearShow" @change="handleClickAttention"></dynamic-near>
		 
	  <dynamic-footer></dynamic-footer>
	</div>
</template>

<script>
	import dynamicMain from './main'
	import dynamicAttention from './attention'
	import dynamicNear from './near'
	import dynamicFooter from 'components/common/footer'
	import axios from 'axios'
	import toast from 'components/ui/toast'
	export default {
	  name: 'dynamic',
	  components: {
	    dynamicMain,
	    dynamicAttention,
	    dynamicNear,
	    dynamicFooter,
	    toast
	  },
	  data () {
	    return {
	      hint: false,
	      toast: false,
	      hotData: [],
	      dynamic: [],
	      nearData: [],
	      user: [],
	      show: true,
	      msg: '',
	      errMsg: '',
	      attentionShow: false,
	      nearShow: false,
	      isError: true,
	      isActive: false,
	      isBorder: false
	    }
	  },
	  activated () {
	    this.getDynamicData()
	  },
	  computed: {
	    dynamicData () {
	      let arr = []
	      this.dynamic && this.dynamic.forEach((val) => {
	        for (let key in val) {
	          if (!key.indexOf('pic')) {
	            arr.push({
	              key: key,
	              value: val[key]
	            })
	            val.picAll = arr
	            if (arr.length % 4 < 1) {
	              arr = []
	            }
	          }
	        }
	      })
	      return this.dynamic
	    }
	  },
	  methods: {
	    handleGetDataSucc (res) {
	      res.data && (res = res.data)
	      if (res.status === 0) {
        this.msg = res.msg
	        this.hint = true
	        setTimeout(() => {
	          this.$router.push('/login')
	          this.hint = false
	        }, 1800)
	      } else if (res.status === 'undefined') {
	        this.errMsg = '请重新登录'
	      } else {
	        this.user = res.user
	        this.hotData = res.hot
	        this.dynamic = res.dynamic
	        this.nearData = res.near
      }
	    },
	    getDynamicData () {
	      axios.get('/index/dyn/dynamic').then(this.handleGetDataSucc.bind(this))
	                                     .catch(this.handleGetDataErr.bind(this))
	    },
	    getPictureAll (dynamic) {
	    },
	    handleGetDataErr () {
	    },
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
	    },
	    handleClickLoveChange (res) {
	      if (!res.flag) {
	        this.errMsg = res.msg
	        this.toast = true
	        setTimeout(() => {
	          this.toast = false
	        }, 1200)
	      } else {
	        this.errMsg = res.msg
	        this.toast = true
	        setTimeout(() => {
	          this.toast = false
	        }, 1200)
	        this.getDynamicData()
	      }
	    },
	    handleClickAttention (res) {
	      if (!res.flag) {
	        this.errMsg = res.msg
	        this.toast = true
	        setTimeout(() => {
	          this.toast = false
	        }, 1200)
	        this.getDynamicData()
	      } else {
	        this.errMsg = res.msg
	        this.toast = true
	        setTimeout(() => {
	          this.toast = false
	        }, 1200)
	        this.getDynamicData()
	      }
	    },
	    handleLikeClick (res) {
	      if (res && res.flag) {
	        this.getDynamicData()
	      } else {
	        this.errMsg = res.msg
	        this.toast = true
	        setTimeout(() => {
	          this.toast = false
	        }, 1200)
	      }
	    },
	    hanleCollectClick (res) {
	      if (res && res.flag) {
	        this.getDynamicData()
	      } else {
	        this.errMsg = res.msg
	        this.toast = true
	        setTimeout(() => {
	          this.toast = false
	        }, 1200)
	      }
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
		height: 0.88rem;
		padding-top: 0.4rem;
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
		line-height: 0.88rem;
		width: .8rem;
		text-align: center;
		font-size: .2rem;
	}
	.header-active{
		border-bottom: 3px solid #60adfe;
	}
	.search{
		width: 1.2rem;
		text-align: center;
		line-height: 1rem;
	}
	.hint {
		width: 1.5rem;
		height: 0.8rem;
		line-height: 0.8rem;
		text-align: center;
		position: absolute;
		top: 50%;
		margin-top: -0.75rem;
		left: 50%;
		margin-left: -0.4rem;
		background: rgba(0, 0, 0, .5);
		color: #fff;
	}
	 
</style>