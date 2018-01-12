<template>
   <div class="wrapper">
		<div class="footer">
			<i class="iconfont footer-icons">&#xe61a;</i>
			<div class="footer-item">运动</div>
		</div>
		<div class="footer">
			<i class="iconfont footer-icons">&#xe614;</i>
			<div class="footer-item">课程</div>
		</div>
		<router-link to="/dynamic">
			<div class="footer">
				<i class="iconfont footer-icons">&#xe66b;</i>
				<div class="footer-item">动态</div>
			</div>
		</router-link>
		<router-link to="mine">
			<div class="footer">
				<i class="iconfont footer-icons">&#xe604;</i>
				<div class="footer-item">我</div>
			</div>
		</router-link>
   </div>
</template>

<script>
export default {
  name: 'course-footer'
}
</script>


<style scoped>
	.wrapper {
		display: flex;
		height: 1rem;
		background: #24c789;
		justify-content: space-around;
		align-items: center;
	}
	.footer{
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.footer-icons{
		font-size: .34rem;
		color: #666;
	}
	.footer-item {
		font-size: 0.28rem;
		color: #666;
	}
</style>
