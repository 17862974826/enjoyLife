<template>
   <div class="main">
    <div class="wrap" ref="wrapper">
      <div class="content">
        <header class="header">
          <router-link to="/" tag="div" class="run sport">跑步</router-link>
          <router-link to="walk" tag="div" class="talk sport" @click.native="handleRouterClick">健走</router-link>
          <router-link to="ride" tag="div" class="ride sport" @click.native="handleRouterClick">骑行</router-link>
        </header>
        <transition  
          enter-active-class="animated rollIn"
          leave-active-class="animated rollOut">
          <router-view></router-view>
        </transition>
        <div class="container">
          <div class="start_run">
            <div class="running">
              <p class="target">{{running}}</p>
              <p class="meter">KM</p>
                <div class="mask">RUNNING</div>
            </div>
            <div class="hint">请正确佩戴手机</div>
          </div>

          <div class="btn_wrap">
            <div class="img_wrap">
              <img src="/static/images/indexImg/sport_left.jpg">
              <img src="/static/images/indexImg/sport_right.jpg">
            </div>
            <div class="btn">开始跑步</div>
          </div>
        </div>

      <slider :sport="sport"></slider>
      </div>
    </div>

    <foot></foot>
   </div>
</template>

<script>
import foot from 'components/common/footer'
import slider from './slider'
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  name: 'Index',
  components: {
    foot,
    slider
  },
  data () {
    return {
      running: '',
      sport: []
    }
  },
  methods: {
    getHomeDataSucc (res) {
      res.data.data && (res = res.data.data)
      res.running && (this.running = res.running)
      res.sport && (this.sport = res.sport)
    },
    getHomeDataErr () {},
    handleRouterClick () {
      setTimeout(() => {
        this.$router.push('/')
      }, 1300)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  },
  created () {
    axios.get('/static/home.json').then(this.getHomeDataSucc.bind(this))
                                   .then(this.getHomeDataErr.bind(this))
  },
  activated () {
    this.scroll.scrollTo(0, 0)
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
    bottom: 0;
    left: 0;
    background: #ddd;
  }
  .wrap {
    flex: 1;
    overflow: hidden;
  }
  .header {
    display: flex;
    position: relative;
    height: 1.3rem;
    padding: 0.4rem 0.2rem 0;
    box-sizing: border-box;
    background: #fff;
  }
  .header::after {
    content: "";
    height: 1px;
    position: absolute;
    width: 100%;
    bottom: 0;
    background: #f4f4f4;
  }
  .sport {
    flex: 1;
    margin: 0 0.3rem;
    line-height: 0.9rem;
    font-size: 0.3rem;
    text-align: center;
    color: #5c5c5c;
    font-weight: 700;
    box-sizing: border-box;
  }
  .container {
    height: 8.68rem;
    background: #fff;
  }
  .start_run {
    position: relative;
    height: 6.09rem;
    padding-top: 2rem;
    box-sizing: border-box;
  }
  .start_run::after {
    content: "";
    height: 1px;
    position: absolute;
    width: 100%;
    bottom: 0;
    background: #f4f4f4;
  }
  .running {
    position: relative;
    width: 4.5rem;
    height: 2.4rem;
    border: 1px solid #95c8fe;
    border-radius: 5px;
    margin: 0 auto ;
  }
  .mask {
    position: absolute;
    line-height: 0.35rem;
    width: 2.8rem;
    left: 50%;
    margin-left: -1.4rem;
    bottom: -0.15rem;
    text-align: center;
    background: #fff;
    color: #60adfe;
    font-size: 0.35rem;
  }
  .target {
    font-size: 0.52rem;
    margin: 0.78rem auto 0;
    text-align: center;
  }
  .meter {
    margin-top: 0.3rem;
    text-align: center;
    font-size: 0.18rem;
    color: #929292;
  }
  .hint {
    margin-top: 1.18rem;
    font-size: 0.22rem;
    text-align: center;
    columns: #888;
  }
  .btn_wrap {
    height: 2.08rem;
    padding-top: 0.5rem;
  }
  .img_wrap {
    display: flex;
    width: 3rem;
    height: 0.5rem;
    margin: 0 auto 0.3rem;
    justify-content: space-between;
  }
  .img_wrap img {
    width: 0.5rem;
    height: 0.5rem;
  }
  .btn {
    width: 4rem;
    line-height: 0.88rem;
    margin: auto;
    border-right: 0.1rem;
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
    background: #60adfe;
  }
  .router-link-exact-active {
    color: #7cbcfe;
    border-bottom: 2px solid #8abdf3;
  }
</style>
