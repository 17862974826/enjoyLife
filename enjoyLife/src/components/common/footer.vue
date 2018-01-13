<template>
   <div class="wrapper">
			<ul class="list">
				<router-link to="/"  tag="li">运动</router-link>
				<router-link to="/course" tag="li">课程</router-link>
				<li>动态</li>
				<li>我</li>
			</ul>
   </div>
</template>

<script>
export default {
  name: 'course-footer'
}
</script>


<style scoped>
	.wrapper {
		height: 0.98rem;
		background: #fff;
		position: relative;
	}
	.wrapper::after {
		content: "";
		height: 1px;
		width:100%;
		position: absolute;
		top: 0;
		background: #f4f4f4;
		transform: scaleY(0.5);
	}
	.list {
		display: flex;
	}
	li {
		flex: 1;
		line-height: 0.98rem;
		font-size: 0.3rem;
		text-align: center;
		color: #666;
	}
	.router-link-exact-active {
		color: #7cbcfe;
	}
</style>
