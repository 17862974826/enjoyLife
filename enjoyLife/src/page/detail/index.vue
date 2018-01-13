<template>
  <div>
	<div class="header border-bottom">
		<div class="iconfont icons" @click="handleBackClick">&#xe65b;</div>
		<div class="mine">个人资料</div>
		<div class="search iconfont">&#xe628;</div>
	</div>
	<div class="user-info">
		<ul>
			<li class="user-name">昵称<span class="user-span">{{detailInfo.name}}
			</span></li>
			<li class="user-name">性别<span class="user-span">{{detailInfo.sex}}
			</span></li>
			<li class="user-name">年龄<span class="user-span">{{detailInfo.age}}
			</span></li>
			<div class="space"></div>
			<li class="user-name">出生日期<span class="user-span">{{detailInfo.birth}}</span></li>
			<li class="user-name">所在城市<span class="user-span">{{detailInfo.city}}</span></li>
			<li class="user-name">运动年限<span class="user-span">{{detailInfo.year}}</span></li>
			<div class="space"></div>
			<li class="user-name">简介</li>
			<div class="user-detail">{{detailInfo.desc}}</div>
		</ul>
	</div>
  </div>
</template>
<script>
	import axios from 'axios'
	export default {
	  name: 'detail',
	  props: {
	    sightId: [Number, String]
	  },
	  data () {
	    return {
	      detailInfo: []
	    }
	  },
	  created () {
	    this.getDetailData()
	  },
	  watch: {
	    'sightId' () {
	      if (this.sightId) {
	        this.getDetailData()
	      }
	    }
	  },
	  methods: {
	    getDetailData () {
	      axios.get('/static/detail.json', {
	        params: {
	          id: this.sightId
	        }
	      }).then(this.handleGetDetailSucc.bind(this))
	        .catch(this.handleGetDetailErr.bind(this))
	    },
	    handleGetDetailSucc (res) {
	      res && (res = res.data)
	      if (res) {
	        this.detailInfo = res.data
	      }
	    },
	    handleGetDetailErr () {
	      console.log('Error')
	    },
	    handleBackClick () {
	      this.$router.go(-1)
	    }
	  }
	}
</script>
<style scoped>
	.header{
			display: flex;
			line-height: 1rem;
			font-size: .34rem;
			color: #60adfe;
			background: #fff;
		}
		.icons{
			width: 1.2rem;
			text-align: center;
		}
		.mine{
			flex: 1;
			text-align: center;
		}
		.search{
			width: 1.2rem;
			text-align: center;
			line-height: 1rem;
		}
		.user-info{
			display: flex;
			position: absolute;
			left: 0;
			top: 1rem;
			right: 0;
			bottom: 0;
			background: #ccc;
			flex-direction: column;
		}
		.user-name{
			line-height: 1.2rem;
			font-size: .28rem;
			margin:0 1rem;
			border-bottom: 1px solid black;
		}
		.user-span{
			float: right;
		}
		.space{
			height: .16rem;
			background: #fff;
		}
		.user-detail{
			flex: 1;
			margin: .42rem 1rem 0;
			line-height: .6rem;
			font-size: .28rem;
		}

</style>