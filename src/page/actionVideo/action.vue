<template>
   <div class="main">
      <div class="wrapper" v-show="wrapper">
       <div class="mask" ref="mask" v-show="maskShow" :style="list.imgUrl">
        <img  src="https://staticweb.keepcdn.com/show/images/homepage/play-1a7aadd99d.png" class="playBtn" @click.stop="handlePlayClick"/>
       </div>
       <video :src="list.videoUrl" v-show="videoShow" @click="handlePauseClick"
         @ended="handleVideoEnd" ref="video" class="video"></video>
      </div>

      <div class="container" v-show="container">
          <h2 class="title">{{list.title}}</h2>
          <div class="step">
            <h5 class="step_inner">步骤</h5>
            <ul>
              <li v-for="(item, index) in list.step" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="step">
            <h5 class="step_inner">呼吸</h5>
            <ul>
              <li v-for="(item, index) in list.breathe" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="step">
            <h5 class="step_inner">动作感觉</h5>
            <ul>
              <li v-for="(item, index) in list.feel" :key="index">{{item}}</li>
            </ul>
          </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'action',
  props: ['id'],
  data () {
    return {
      videoShow: false,
      maskShow: true,
      container: true,
      list: {},
      original: {},
      wrapper: true
    }
  },
  watch: {
    '$route' () {
      this.disposeData()
    }
  },
  methods: {
    handlePauseClick () {
      this.maskShow = true
      this.$refs.video.pause()
    },
    handlePlayClick () {
      this.videoShow = true
      this.maskShow = false
      this.$refs.video.play()
    },
    handleVideoEnd () {
      this.maskShow = true
    },
    getActionDataSucc (res) {
      res.data.data && (this.original = res.data.data)
      this.disposeData()
    },
    disposeData () {
      for (let key in this.original) {
        if (key === this.id) {
          this.list = this.original[key]
        }
      }
    },
    getActionDataErr () {}
  },
  beforeRouteLeave (to, from, next) {
    this.videoShow = false
    this.container = false
    this.wrapper = false
    next()
  },
  activated () {
    this.maskShow = true
    this.videoShow = false
    this.container = true
    this.wrapper = true
    this.disposeData()
  },
  created () {
    axios.get('/static/action.json').then(this.getActionDataSucc.bind(this))
                                   .then(this.getActionDataErr.bind(this))
  }
}
</script>


<style scoped>
  .main {
    position: relative;
  }
  .wrapper {
    position: relative;
    height: 0;
    padding-bottom: 100%;
  }
  .video {
    width: 100%;
  }
  .mask {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .playBtn {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin-left: -0.375rem;
    margin-top: -0.375rem;
  }
  .container {
    margin: 0 0.2rem;
  }
  .title {
    font-size: 0.4rem;
    font-weight: 700;
    margin: 0.5rem 0 0.3rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #efefef;
  }
  .step {
    margin-top: 0.3rem;
  }
  .step_inner {
    color: #000;
    font-size: 0.3rem;
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
  li {
    line-height: 0.45rem;
    text-indent: .25rem;
  }
</style>
