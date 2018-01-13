<template>
  <div class="content">
    <h2 class="title">训练计划</h2>
    <div class="list">
      <div class="inner_wrap" v-for="item in transItem" :key="item.id" @click.stopPropagation="handleVideoClick(item.id)">
        <div class="img_wrap">
          <img :src="item.imgUrl">
        </div>
        <div class="inner">
          <p class="sport">{{item.title}}</p>
          <p class="classTime">{{item.classTime}}</p>
        </div>
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
      transItem: null
    }
  },
  watch: {
    train () {
      if (!Array.isArray(this.train)) {
        this.transItem = 6
      } else {
        this.transItem = this.train
      }
    }
  },
  methods: {
    handleVideoClick (id) {
      this.$router.push({
        name: 'action',
        params: {id: id}
      })
    }
  }
}
</script>

<style scoped>
  .content {
    background: #fff;
    padding: 0 0.3rem;
  }
  .list {
    padding-bottom: 0.1rem;
  }
  .title {
    font-size: 0.36rem;
    margin: 0.3rem 0;
    text-align: center;
  }
  .inner_wrap {
    display: flex;
    margin: 0.3rem 0;
  }
  .img_wrap {
    width: 45%;
    height: 0;
    padding-bottom: 29%;
    background: #ccc
  }
  .img_wrap img {
    width: 100%;
  }
  .inner {
    flex: 1;
    margin-left: 0.3rem;
    overflow: hidden;
  }
  .sport {
    margin: 0.4rem 0;
    color: #584f60;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .classTime {
    padding: 0.3rem 0;
    color: #999;
  }
</style>

