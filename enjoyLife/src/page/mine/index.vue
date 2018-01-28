<template>
  <div class="mine-box">
    <div class="header border-bottom">
      <div class="iconfont icons" @click="handleBackClick">&#xe65b;</div>
      <div class="mine">我的</div>
      <router-link :to="{path: '/selfCenter', query: {id: userInfo.uid}}">
        <div class="iconfont icons">&#xe628;</div>
      </router-link>
    </div>

    <div class="mainWrap" ref="mainWrap">
      <ul>
      <div class="info">
        <div class="info-wrap">
          <div class="header-img">
            <img class="user-img" :src="userInfo.pic || '/static/images/common/logo.jpg'">
          </div>
          <p class="user-name">{{userInfo.relaname || "匿名"}}</p>
        </div>
        <div class="user-baseInfo">
          <div>关注：{{follow}}</div>
          <div>粉丝：{{fans}}</div>
          <div>动态：{{dynamic}}</div>
        </div>
      </div>
      <div class="white-space"></div>
      <main-class :grade="userInfo.grade" :playTime="userInfo.play_time"></main-class>
      <div class="white-space"></div>
      <main-record></main-record>
      </ul>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import MainClass from './class'
  import MainRecord from './record'
  import MainFooter from 'components/common/footer'
  import axios from 'axios'
  export default {
    name: 'mine',
    components: {
      MainClass,
      MainRecord,
      MainFooter
    },
    data () {
      return {
        userInfo: {},
        dynamic: '0',
        fans: '0',
        follow: '0',
        classify: {}
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.mainWrap, {
          click: true
        })
      })
    },
    activated () {
      axios.get('/index/info/list').then(this.handleGetInfoSucc.bind(this))
                                    .catch(this.handleGetInfoErr.bind(this))
    },
    methods: {
      handleGetInfoSucc (res) {
        res && res.data && (res = res.data)
        res.data[0] && (this.userInfo = res.data[0])
        !!res.dynamic && (this.dynamic = res.dynamic)
        !!res.fans && (this.fans = res.fans)
        !!res.follow && (this.follow = res.follow)
        !!res.grade && (this.userInfo.grade = res.grade)
        !!res.play_time && (this.userInfo.play_time = res.play_time)
      },
      handleGetInfoErr () {
        console.log('Error')
      },
      handleBackClick () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  .mainWrap{
    flex: 1;
    overflow: hidden;
   }
  .mine-box{
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    flex-direction: column;
  }
  .header{
    display: flex;
    line-height: 0.88rem;
    padding-top: 0.44rem;
    font-size: .2rem;
    color: #333;
    background: #fff;
  }
  .icons{
    width: 1.2rem;
    text-align: center;
  }
  .mine{
    flex: 1;
    text-align: center;
  }
  .info{
    height: 3.23rem;
    padding-top: .5rem;
  }
  .info-wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header-img{
    width: 1.36rem;
    height: 1.36rem;
  }
  .user-img{
    width: 1.36rem;
    height: 1.36rem;
    border-radius: .68rem;
  }
  .user-name{
    font-size: .3rem;
    color: #333333;
    line-height: 1.2rem;
  }
  .user-baseInfo{
    display: flex;
    justify-content: space-around;
  }
  .white-space{
    height: .14rem;
    background: #ccc;
  }
</style>