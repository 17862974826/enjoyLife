<template>
   <div class="main">
     <header class="header">课程</header>
     <div>
      <swiper :options="swiperOption" class="img_wrap">
        <swiper-slide v-for="item in slider" :key="item.id">
          <div>
            <img :src="item.imgUrl">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

    <scroller class="scroll" :sport="sport"></scroller>

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
      sport: [],
      swiperOption: {
        initialSlide: 1,
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 8000,
        observer: true,
        observeParents: true
      }
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
        this.sport = res.data.sport
      } else {
        this.getCourseDataErr()
      }
    },
    getCourseDataErr () {}
  },

  created () {
    axios.get('/static/index.json').then(this.getCourseDataSucc.bind(this))
                                   .then(this.getCourseDataErr.bind(this))
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
    background: #ebf0f2;
  }
  .header {
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #f5f5f5;
    text-align: center;
    font-size: 0.4rem;
    color: #333;
    background: #fff;
  }
  .img_wrap {
    width: 100%;
    height: 0;
    padding-bottom: 53.3%;
  }
  .img_wrap img {
    width: 100%;
  }
  .scroll {
    flex: 1;
    overflow: hidden;
    margin-top: 0.2rem;
  }
  .swiper-pagination >>> span {
    background: #fff;
  }
</style>
