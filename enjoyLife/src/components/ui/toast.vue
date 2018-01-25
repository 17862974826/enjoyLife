<template>
   <div class="toast">{{msg}}</div>
</template>

<script>

export default {
  name: 'toast',
  props: ['msg']
}
</script>


<style scoped>
	.toast {
		position: fixed;
		left: 50%;
		top: 50%;
		z-index: 2;
		width: 4rem;
		margin-left: -1.5rem;
		margin-top: -0.44rem;
		line-height: 0.88rem;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #fff;
		background: #60adfe;
	}
</style>