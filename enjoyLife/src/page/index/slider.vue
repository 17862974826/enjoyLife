<template>
   <div class="slider">
     <div class="spot_wrap" v-for="(items, key) of sport">
      <h2 class="title">{{key}}</h2>
      <swiper :options="swiperOption" ref="swiper">
        <swiper-slide v-for="item in items" :key="item.id">
          <div class="img_wrap" @click="handleArricleClick(item.id)">
            <img :src="item.pic" class="pic">
          </div>
          <div class="des_wrap">
            <h4 class="guide common">{{item.title}}</h4>
            <p class="des common">{{item.title}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
   </div>
</template>

<script>
export default {
  name: 'index-slider',
  props: ['sport'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 1.5,
        spaceBetween: 8,
        initialSlide: 0,
        observer: true,
        observerParens: true
      }
    }
  },
  methods: {
    handleArricleClick (id) {
      this.$router.push({
        path: '/article',
        query: {id: id}
      })
    }
  },
  activated () {
    this.$refs.swiper && this.$refs.swiper.forEach((value) => {
      value.swiper.slideTo(0)
    })
  }
}
</script>


<style scoped>
  .slider {
    display: flex;
    flex-direction: column;
  }
  .spot_wrap {
    margin-top: .1rem;
    padding-left: 0.2rem;
    background: #fff;
  }
  .title {
    line-height: 0.8rem;
  }
  .img_wrap {
    width: 100%;
    height: 50vw;
    overflow: hidden;
  }
  .pic {
    width: 100%;
    height: 100%;
  }
  .des_wrap {
    height: 1.1rem;
  }
  .common {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  .guide {
    margin: 0.2rem 0 0.1rem 0;
    font-size: 0.28rem;
    color: #656565;
  }
  .des {
    font-size: 0.23rem;
    color: #afafaf;
  }
</style>
