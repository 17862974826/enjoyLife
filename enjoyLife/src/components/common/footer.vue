<template>
   <div class="wrapper">
		<ul class="list">
			<li>运动</li>
			<li>课程</li>
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
		height: 0.8rem;
		background: #fff;
	}
	.list {
		display: flex;
	}
	.list li {
		flex: 1;
		line-height: 0.8rem;
		font-size: 0.3rem;
		text-align: center;
		color: #666;
	}
</style>
