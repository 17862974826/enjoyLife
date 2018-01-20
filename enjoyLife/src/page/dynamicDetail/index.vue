<template>
	<div class="main">
		<header class="header">
			动态详情
			<span class="iconfont back">&#xe65b;</span>
		</header>
		<div class="wrapper" ref="wrapper">
			<div class="content"></div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default {
	  name: 'dynamicDetail',
	  mounted () {
	    this.$nextTick(() => {
	      this.scroll = new BScroll(this.$refs.wrapper)
	    })
	  }
	}
</script>
<style scoped>
	.main {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.header {
		position: relative;
		height: 0.88rem;
		text-align: center;
		line-height: 0.88rem;
		font-size: 0.3rem;
		color: #fff;
		background: #60adfe;
	}
	.back {
		position: absolute;
		left: 0.2rem;
		font-size: 0.32rem;
	}
	.wrapper {
		flex: 1;
		padding: 0 0.2rem;
		background: #dddddd;
	}
</style>