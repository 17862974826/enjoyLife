<template>
   <div class="main">
     <div class="wrapper" ref="wrapper">
       <div class="content">
          <div class="img_wrap" :style="pic"></div>
          <div class="container">
            <h2 class="container-title">{{title}}</h2>
            {{content}}
          </div>
       </div>
     </div>
   </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'articles',
  data () {
    return {
      id: '',
      content: '',
      pic: '',
      title: ''
    }
  },
  methods: {
    getArticleData () {
      axios.post('index/index/list', {id: this.id})
           .then(this.getArticleDataSucc.bind(this))
           .catch(this.getArticleDataErr.bind(this))
    },
    getArticleDataSucc (res) {
      res.data && (res = res.data)
      this.content = res.msg[0].content
      this.title = res.msg[0].title
      this.pic = 'background: url(' + res.msg[0].pic + ') no-repeat center; background-size: 100% 100%'
    },
    getArticleDataErr () {}
  },
  activated () {
    this.id = this.$route.query.id
    this.getArticleData()
  },
  updated () {
    this.scroll.refresh()
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
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
    overflow: hidden;
  }
  .wrapper {
    flex: 1;
    overflow: hidden;
  }
  .img_wrap {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  .container {
    margin: .3rem auto;
    width: 88%;
    min-height: 3rem;
    padding: .2rem;
    position:relative;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#f3f3f3), to(#fff), color-stop(.1,#f3f3f3));
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    -webkit-border-bottom-right-radius: 60px 60px;
    -webkit-box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.2);
  }
  .container:after {
    content: "";
    z-index: -1;
    width: 100px;
    height: 100px;
    position:absolute;
    bottom:0;
    right:0;
    background: rgba(0, 0, 0, 0.2);
    display: inline-block;
    -webkit-box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(0deg) translate(-45px,-20px) skew(20deg);
  }
  .container:before {
    content: "";
    width: 25px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    -webkit-border-bottom-right-radius: 30px;
    -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    -webkit-transform: rotate(-20deg) skew(-40deg,-3deg) translate(-13px,-13px);
  }
  .container-title {
    font-size: .3rem;
    font-weight: bold;
    color: #666;
  }
</style>
