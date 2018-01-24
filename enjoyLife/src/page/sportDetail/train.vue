<template>
  <div class="content">
    <h2 class="title">{{train.classname}}</h2>
    <p class="des">{{train.des}}</p>
    <div class="wrapper">
      <em class="strength">强度</em>
      <span class="iconfont icon-aixin active" v-for="item in train.parent"></span>
      <span class="iconfont icon-aixin" v-for="item in num"></span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'train',
  props: ['train'],
  data () {
    return {
      num: ''
    }
  },
  methods: {
    handleVideoClick (id) {
      this.$router.push({
        name: 'action',
        params: {id: id}
      })
    }
  },
  watch: {
    train () {
      if (this.train.parent) {
        this.num = 5 - this.train.parent
      }
    }
  }
}
</script>

<style scoped>
  .content {
    background: #fff;
    padding: 0 0.2rem;
  }
  .list {
    padding-bottom: 0.1rem;
  }
  .title {
    font-size: 0.32rem;
    margin-bottom: 0.2rem;
    padding-top: 0.3rem;
    color: #636363;
  }
  .des {
    font-size: 0.22rem;
    line-height: 0.28rem;
    color: #8f8f8f;
  }
  .wrapper {
    padding: 0.2rem 0 0.3rem;
    font-size: 0;
  }
  .strength {
    font-size: 0.18rem;
    color: #a1a1a1;
    padding-right: 0.02rem;
  }
  .iconfont {
    margin-left: 0.08rem;
    font-size: 0.18rem;
    color: #6a6a6a;
  }
  .active {
    color: #6fb5fe;
  }
</style>

