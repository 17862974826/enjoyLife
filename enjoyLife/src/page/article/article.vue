<template>
   <div class="main">
   <toast :msg="msg" v-show="hint"></toast>
     <div class="wrapper" ref="wrapper">
       <div class="content">
          <div class="img_wrap" :style="pic"></div>
          <div class="container">
            <h2 class="container-title">{{title}}</h2>
            <p class="container-text">{{content}}</p>
          </div>
          <div class="comment_wrapper">
            <h2 class="title">评论</h2>
            <div v-show="show" class="empty">暂无评论</div>
            <div class="wrapper" v-for="items in comment" :key="items.id">
              <div class="comment">
                <div class="pic_wrap">
                  <img :src="items.pic || '/static/images/common/logo.jpg'" class="pic" />
                </div>
                <div class="des">
                  <p class="relaname over">{{items.relaname || '匿名'}}</p>
                  <p class="timer over">{{items.ctime}}</p>
                  <p class="des_content over">{{items.content}}</p>
                </div>
              </div>
            </div>
          </div>
       </div>
     </div>
     <div class="footer">
       <input type="text" class="text" placeholder="~说些什么吧" v-model="publish"/>
       <p class="publish" @click="handlePublishClick">评论</p>
     </div>
   </div>
</template>

<script>
import toast from 'components/ui/toast'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'articles',
  data () {
    return {
      id: '',
      content: '',
      pic: '',
      title: '',
      comment: [],
      show: false,
      publish: '',
      classid: '',
      msg: '',
      hint: false
    }
  },
  components: {
    toast
  },
  methods: {
    handlePublishClick () {
      axios.post('/index/index/pl', {id: this.id, classid: this.classid, content: this.publish}).then(this.handlePublishClickSucc.bind(this))
    },
    handlePublishClickSucc (res) {
      res.data && (res = res.data)
      if (res.status) {
        this.hint = true
        this.msg = res.msg
        setTimeout(() => {
          this.hint = false
        }, 1200)
        this.getCommentData()
        this.publish = ''
      }
    },
    getArticleData () {
      axios.post('index/index/list', {id: this.id})
           .then(this.getArticleDataSucc.bind(this))
           .catch(this.getArticleDataErr.bind(this))
    },
    getCommentData () {
      axios.post('/index/index/pllist', {id: this.id})
            .then(this.getCommentDataSucc.bind(this))
    },
    getCommentDataSucc (res) {
      res.data && (res = res.data)
      if (res.status) {
        this.comment = res.msg
        if (this.comment.length === 0) {
          this.show = true
        } else {
          this.show = false
        }
      }
    },
    getArticleDataSucc (res) {
      res.data && (res = res.data)
      this.content = res.msg[0].content
      this.title = res.msg[0].title
      this.pic = 'background: url(' + res.msg[0].pic + ') no-repeat center; background-size: 100% '
    },
    getArticleDataErr () {}
  },
  activated () {
    this.id = this.$route.query.id
    this.classid = this.$route.query.classid
    this.getArticleData()
    this.getCommentData()
    this.scroll.scrollTo(0, 0)
    this.show = false
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
    padding-bottom: 60%;
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
    margin-bottom: 0.2rem;
    font-size: .4rem;
    font-weight: bold;
    color: #666;
    text-align: center;
  }
  .container-text {
    min-height: 8rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
    text-indent: 0.6rem;
  }
  .title {
    padding: 0 0 0.1rem 0.2rem;
    font-size: 0.28rem;
    color: #5a5a5a;
  }
  .wrapper {
    border-bottom: 1px solid #f4f4f4;
  }
  .comment {
    display: flex;
    padding: 0 0.2rem;
    height: 1.27rem;
    overflow: hidden;
  }
  .pic_wrap {
    width: 0.6rem;
    height: 0.6rem;
    margin-right: 0.1rem;
    border-radius: 50%;
  }
  .pic {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .des {
    flex: 1;
    overflow: hidden;
  }
  .over {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .timer {
    margin: 0.1rem 0 0.2rem;
    font-size: 0.2rem;
    color: #b9b9b9;
  }
  .relaname {
    font-size: 0.24rem;
    color: #91c7fe;
  }
  .des_content {
    font-size: 0.23rem;
    color: #7a7a7a;
  }
  .empty {
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
  }
  .footer {
    display: flex;
    align-items: center;
    height: 0.98rem;
    line-height: 0.98rem;
    background: #60adfe;
    padding: 0 0.2rem 0;
    box-sizing: border-box;
  }
  .text {
    border: none;
    outline: none;
    width: 77.3%;
    line-height: 0.6rem;
    height: 0.6rem;
    padding-left: 0.1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.28rem;
  }
  .publish {
    margin: 0rem 0.14rem 0 0.2rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    color: #fff;
  }
</style>
