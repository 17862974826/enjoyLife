<template>
   <div class="main">
      <header class="header">课程</header>
      <scroller class="scroll" :classify="classify" :slider="slider" ref="scroller"></scroller>
      <course-footer></course-footer>
   </div>
</template>

<script>
import axios from 'axios'
import scroller from './scroller'
import courseFooter from 'components/common/footer'

export default {
  name: 'courseIndex',
  data () {
    return {
      slider: [],
      classify: []
    }
  },
  components: {
    scroller,
    courseFooter
  },
  methods: {
    getCourseDataSucc (res) {
      res.data && (res = res.data)
      if (res) {
        this.slider = res.data.slider
        this.classify = res.data.classify
      } else {
        this.getCourseDataErr()
      }
    },
    getCourseDataErr () {}
  },

  created () {
    axios.get('/static/index.json').then(this.getCourseDataSucc.bind(this))
                                   .then(this.getCourseDataErr.bind(this))
  },

  beforeRouteLeave (to, from, next) {
    if (to.name !== 'detail') {
      this.$refs.scroller.refreshSwiper()
    }
    this.scroll && this.scroll.scrollTo(0, 0)
    next()
  }
}
</script>


<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #ddd;
  }
  .header {
    height: 1.29rem;
    line-height: 0.89rem;
    border-bottom: 1px solid #a5a5a6;
    padding-top: 0.4rem;
    text-align: center;
    font-size: 0.3rem;
    color: #b5b5b6;
    background: #fff;
    box-sizing: border-box;
  }
  .scroll {
    flex: 1;
    overflow: hidden;
  }
</style>
