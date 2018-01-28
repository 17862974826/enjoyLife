<template>
  <div class="content" @click="handleShowVideo">
   <h2 class="title">{{info.title}}</h2>
   <div class="show_self">
      <div class="img_wrapper" v-show="imgStatus">
        <img class="wrapper" :src="info.picture" />
      </div>
      <video :src='info.url' class="video" v-if="videoStatus" ref="video" controls></video>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'showSelf',
  props: ['video'],
  data () {
    return {
      info: {},
      videoStatus: false,
      imgStatus: true
    }
  },
  methods: {
    getVideoData () {
      axios.post('/index/cage/video', {cid: this.video})
            .then(this.getVideoDataSucc.bind())
            .then(this.getVideoDataErr.bind())
    },
    handleShowVideo () {
      this.imgStatus = false
      this.videoStatus = true
      this.$nextTick(() => {
        this.$refs.video.play()
      })
    },
    getVideoDataSucc (res) {
      res.data && (res = res.data)
      if (res.status === 1) {
        this.info = res.msg[0]
      }
    },
    getVideoDataErr () {}
  },
  activated () {
    this.videoStatus = false
    this.imgStatus = true
  },
  watch: {
    video () {
      this.getVideoData()
    }
  }
}
</script>

<style scoped>
  .content {
    padding: 0.3rem 0.2rem 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin-top: 0.1rem;
  }
  .title {
    font-size: 0.28rem;
    color: #777;
  }
  .show_self {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.3rem;
  }
  .img_wrapper {
    width: 100%;
    height: 47vw;
  }
  .wrapper {
    width: 100%;
    height: 100%; 
  }
  .video {
    width: 100%;
    height: 50%;
  }
</style>

