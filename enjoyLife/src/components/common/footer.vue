<template>
   <div class="wrapper">
		<router-link to="index" class="link">
			<div class="footer">
				<i class="iconfont footer-icons">&#xe61a;</i>
				<div class="footer-item">运动</div>
			</div>
		</router-link>

		<router-link to="course" class="link">
			<div class="footer">
				<i class="iconfont footer-icons">&#xe614;</i>
				<div class="footer-item">课程</div>
			</div>
		</router-link>
		
		<router-link to="dynamic" class="link">
			<div class="footer">
				<i class="iconfont footer-icons">&#xe66b;</i>
				<div class="footer-item">动态</div>
			</div>
		</router-link>
		<router-link to="mine" class="link">
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
		height: 0.98rem;
		background: #fff;
		justify-content: space-around;
		align-items: center;
	}
	.footer{
		display: flex;
		flex-direction: column;
		text-align: center;
		color: #666;
	}
	.footer-icons{
		font-size: .2rem;
	}
	.footer-item {
		font-size: 0.2rem;
	}
	.router-link-active .footer {
		color: #60adfe;
	}
</style>
