<template>
  <div class="content">
    <h2 class="title">评论</h2>
    <div class="wrapper" v-for="item in comment" :key="item.id">
      <div class="comment">
        <div class="icon">
          <img :src="item.pic">
        </div>
        <div class="des_wrap">
          <p class="username">{{item.relaname || '匿名'}}</p>
          <p class="time">{{item.time}}</p>
          <p class="status">{{item.content || '打卡成功'}}</p>
        </div>
        <span class="iconfont">&#xe733;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: ['comment']
}
</script>

<style scoped>
  .content {
    margin-top: 0.1rem;
    background: #fff;
  }
  .title {
    padding: 0.3rem 0 0.1rem 0.2rem;
    font-size: 0.28rem;
    color: #5a5a5a;
  }
  .comment {
    position: relative;
    display: flex;
    height: 1.27rem;
    width: 100%;
    padding: 0.2rem 0 0 0.2rem;
    box-sizing: border-box;
  }
  .wrapper {
    position: relative;
  }
  .wrapper::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: 0;
    transform: scaleY(.5);
    background: #f4f4f4;
  }
  .icon {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.1rem;
    border-radius: 50%;
  }
  .icon img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .username {
    font-size: 0.24rem;
    color: #91c7fe;
  }
  .time {
    margin: 0.1rem 0 0.2rem;
    font-size: 0.2rem;
    color: #b9b9b9;
  }
  .status {
    font-size: 0.23rem;
    color: #7a7a7a;
  }
  .iconfont {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
  }
</style>

