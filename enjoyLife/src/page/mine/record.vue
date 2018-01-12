<template>
	<div class="record-wrap">
		 <div class="item-wrap">
		 	<i class="iconfont record-icon">&#xe66b;</i>
		 	<p class="record-desc">身体记录</p>
		 </div>
		 <div class="item-wrap">
		 	<i class="iconfont record-icon">&#xe601;</i>
		 	<p class="record-desc">数据中心</p>
		 </div>
		 <div class="item-wrap">
		 	<i class="iconfont record-icon">&#xe62e;</i>
		 	<p class="record-desc">每周目标</p>
		 </div>
	</div>
</template>
<script>
	export default {
	  name: 'record'
	}
</script>
<style scoped>
	.record-wrap{
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: .3rem;
	}
	.item-wrap{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.record-icon{
		font-size: .58rem;
		margin-bottom: .24rem;
	}
</style>