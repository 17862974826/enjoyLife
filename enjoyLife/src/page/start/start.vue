<template>
  <div class="main">
   <img src="/static/images/start/start.jpg" class="pic">
  </div>
</template>

<script>
export default {
  name: 'start',
  methods: {
    refresh () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000)
    }
  },
  activated () {
    this.refresh()
  }
}
</script>

<style scoped>
  .main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .pic {
    width: 100%;
    height: 100%;
  }
</style>

