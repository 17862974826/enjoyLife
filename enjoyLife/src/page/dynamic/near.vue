<template>
	<div class="near">
		<div class="near-people border-topbottom">附近的人</div>
		<div class="white-space border-bottom"></div>
		<div class="box" ref="box">
			<ul>
				<li
					class="items border-bottom" 
					v-for="item in nearData" 
					:key="item.uid"
					tag="li">
					<div class="img-wrap">
						<img class="user-img" :src="item.pic" alt="">
					</div>
					<div class="userInfo">
						<p>{{item.relaname || '匿名'}}</p>
						<p class="user-case">{{item.content}}</p>
					</div>
					<div class="attach" @click.stop="handleAttClick($event, item.uid)">关注</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'dynamic-near',
  props: {
    nearData: Array
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.box, {
        click: true
      })
    })
  },
  methods: {
    handleAttentionClick (e, id) {
      axios.post('/index/index/guanz', {uid: id})
           .then(this.handleAttentionClickSucc.bind(this, e))
           .catch(this.handleAttentionClickErr.bind(this))
    },
    handleAttentionClickSucc (e, res) {
      res.data && (res = res.data)
      if (res.status === 0) {
        this.$emit('change', {
          msg: res.msg
        })
        e.target.innerHTML = '已关注'
      } else {
        e.target.innerHTML = '已关注'
        this.$emit('change')
      }
    },
    handleAttentionClickErr () {},
    handleAttClick (e, id) {
      this.handleAttentionClick(e, id)
    }
  }
}
</script>
<style scoped>
	.near{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.near-people{
		line-height: 1rem;
		font-size: .28rem;
		color: #333333;
		padding-left: .42rem;
	}
	.white-space{
		height: .14rem;
		background: #ccc;
	}
	.box{
		flex: 1;
		overflow: hidden;
	}
	.items{
		height: 1.5rem;
		display: flex;
	}
	.img-wrap{
		width: .8rem;
		height: .8rem;
		margin: .4rem 0 0 .54rem;
	}
	.user-img{
		width: 100%;
		border-radius: .8rem;
	}
	.userInfo{
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: .28rem;
		font-weight: bold;
		color: #333333;
		margin: .5rem .24rem 0 .3rem;
	}
	.user-case{
		font-size: .24rem;
		color: #999999;
		margin-top: .18rem;
	}
	.attach{
		width: 1.14rem;
		height: .5rem;
		margin: .55rem .54rem 0 0;
		border-radius: .45rem;
		background: #60adfe;
		color: #fff;
		text-align: center;
		line-height: .5rem
	}
</style>