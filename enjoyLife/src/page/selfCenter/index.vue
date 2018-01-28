<template>
  <div class="main">
   <div class="header"><span class="back iconfont" @click="handleBackHistory">&#xe65b;</span>设置</div>
   <div class="content">
     <div class="wrapper">
       <router-link :to="{path: '/updateSelf', query: {id: id}}" class="title" tag="p">个人资料</router-link>
     </div>
     <div class="wrapper">
       <p class="title">账号管理于绑定</p>
     </div>
     <div class="wrapper bottom">
       <p class="title">隐私设置</p>
     </div>
      <div class="wrapper">
       <p class="title">运动权限设置</p>
     </div>
     <div class="wrapper">
       <p class="title">隐私设置</p>
     </div>
     <div class="wrapper bottom">
       <p class="title">离线地图</p>
     </div>
     <div class="wrapper">
       <p class="title">消息推送</p>
     </div>
     <div class="wrapper bottom">
       <p class="title">缓存管理</p>
     </div>
     <div class="wrapper">
       <p class="title">关于</p>
     </div>
     <div class="wrapper">
       <p class="title">传感器诊断</p>
     </div>
     <div class="wrapper">
       <p class="title">帮助与反馈</p>
     </div>
     <div class="wrapper">
       <p class="title">检查更新</p>
     </div>
   </div>
   <div class="footer">
     <div class="inner" @click="handleStatusClick">{{status}}</div>
   </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'selfCenter',
  data () {
    return {
      status: '退出',
      flag: 1,
      id: ''
    }
  },
  methods: {
    handleBackHistory () {
      this.$router.go(-1)
    },
    handleStatusClick () {
      this.$router.push('/login')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.id = to.query.id
    })
  }
}
</script>
<style scoped>
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .header {
    position: relative;
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0.44rem 0.2rem 0;
    font-size: 0.3rem;
    color: #fff;
    text-align: center;
    background: #60adfe;
  }
  .back {
    font-size: 0.32rem;
    position: absolute;
    left: 0.2rem;
  }
  .header::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: scaleY(0.5);
    background: #bfd8f3;
  }
  .wrapper {
    position: relative;
    font-size: 0.28rem;
    line-height: 0.88rem;
    color: #777;
  }
  .wrapper::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #f4f4f4;
  }
  .bottom {
    border-bottom: 0.1rem solid #dddddd;
  }
  .title {
    padding: 0 0.2rem;
  }
  .footer {
    display: flex;
    align-items: center;
    line-height: 1.11rem;
    height: 1.11rem;
  }
  .inner {
    width: 94.6%;
    line-height: 0.81rem;
    height: 0.81rem;
    margin: 0 auto;
    text-align: center;
    font-size: 0.32rem;
    color: #fff;
    background: red;
  }
</style>