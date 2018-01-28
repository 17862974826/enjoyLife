<template>
  <div class="main">
     <div class="header"><span class="back iconfont" @click="handleBackHistory">&#xe65b;</span>个人资料</div>
  </div>
</template>
<script>
export default {
  name: 'updateSelf',
  methods: {
    handleBackHistory () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .header {
    position: relative;
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0.44rem 0.2rem 0;
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
    background: #60adfe;
  }
  .back {
    font-size: 0.32rem;
    position: absolute;
    left: 0.2rem;
  }
  .header::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleY(0.5);
    background: #bfd8f3;
  }
</style>