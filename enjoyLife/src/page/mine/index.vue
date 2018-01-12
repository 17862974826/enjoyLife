<template>
	<div class="mine-box">
		<div class="header border-bottom">
			<div class="iconfont icons">&#xe603;</div>
			<div class="mine">我的</div>
			<div class="iconfont icons">&#xe628;</div>
		</div>
		<div class="info">
			<div class="info-wrap">
				<div class="header-img">
					<img class="user-img" src="http://static1.keepcdn.com/avatar/2017/08/25/12/34452536f2f60436510506dd2308a6dba8046e37.jpg?imageMogr2/thumbnail/96x" alt="">
				</div>
				<p class="user-name">昵昵称</p>
			</div>
			<div class="user-baseInfo">
				<div>关注：201</div>
				<div>粉丝：549</div>
				<div>动态：103</div>
			</div>
		</div>
		<div class="white-space"></div>
		<main-class></main-class>
		<div class="white-space"></div>
		<main-record></main-record>
		<main-footer></main-footer>
	</div>
</template>
<script>
	import MainClass from './class'
	import MainRecord from './record'
	import MainFooter from 'components/common/footer'
	export default {
	  name: 'mine',
	  components: {
	    MainClass,
	    MainRecord,
	    MainFooter
	  }
	}
</script>
<style scoped>
		.mine-box{
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
			line-height: 1rem;
			font-size: .3rem;
			color: #fff;
			background: #24c789;
		}
		.icons{
			width: 1.2rem;
			text-align: center;
		}
		.mine{
			flex: 1;
			text-align: center;
		}
		.info{
			height: 3.23rem;
			padding-top: .5rem;
		}
		.info-wrap{
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		.header-img{
			width: 1.35rem;
			height: 1.35rem;
		}
		.user-img{
			width: 100%;
			border-radius: 1.35rem;
		}
		.user-name{
			font-size: .3rem;
			color: #333333;
			line-height: 1.2rem;
		}
		.user-baseInfo{
			display: flex;
			justify-content: space-around;
		}
		.white-space{
			height: .14rem;
			background: #ccc;
		}
</style>