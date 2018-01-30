<template>
	<div class="main">
	<toast :msg="msg" v-show="show"></toast>
		<div class="content">
			<router-link to="/dynamic" class="iconfont back" tag="span">&#xe65b;</router-link>
			<div class="box" ref="box" @click="handleDeleteImages"></div>
			<div class="publish">
				<div class="picture">
					<input type="file" class="file" ref="file" required @change="handleUploadFin" />
					<img src="/static/images/publish/picture.jpg">
					<p class="title">发布动态</p>
				</div>
				<div class="video">
					<input type="file" class="file" ref="portrait" required @change="handlePortraitUp" />
					<img src="/static/images/publish/video.jpg">
					<p class="title">头像上传</p>
				</div>
			</div>
		</div>
		<textarea class="area" placeholder="~说点什么" v-model="textValue"></textarea>
		<div class="status" @click="handlePublishClick">发表</div>
	</div>
</template>

<script>
import axios from 'axios'
import toast from 'components/ui/toast'
export default {
  name: 'publish',
  data () {
    return {
      files: [],
      count: 0,
      msg: '',
      show: false,
      textValue: ''
    }
  },
  components: {
    toast
  },
  methods: {
    handlePublishClick () {
      if (this.files.length < 4) {
        this.msg = '至少上传四张'
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 1200)
        return false
      }
      let pic = new FormData()
      this.files.forEach((val, index) => {
        if (val !== null) {
          pic.append('pic' + (index + 1), val)
        }
      })
      if (this.textValue !== '') {
        pic.append('content', this.textValue)
      }
      axios.post('/index/dyn/dopost', pic, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(this.handlePublishSucc.bind(this))
    },
    handlePortraitUp () {
      const pic = new FormData()
      pic.append('pic', this.$refs.portrait.files[0])
      axios.post('/index/dyn/updtx', pic, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(this.handlePortraitUpSucc.bind(this))
    },
    handlePortraitUpSucc (res) {
      res.data && (res = res.data)
      if (res.status) {
        this.msg = res.msg
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 1200)
      }
    },
    handlePublishSucc (res) {
      if (res.data) {
        this.msg = res.data.msg
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 1200)
      }
      if (res.data.status === 1) {
        this.textValue = ''
        this.files = []
        for (var i = 0; i < this.$refs.box.children.length; i++) {
          this.$refs.box.children[i].remove()
          i--
        }
        this.$router.push('/dynamic')
      }
    },
    handleUploadFin () {
      let file = this.$refs.file.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      this.files.push(file)
      reader.onload = (evt) => {
        let images = document.createElement('img')
        images.src = evt.target.result
        images.style.width = '20%'
        images.style.height = '60px'
        images.style.border = '1px dashed #000'
        images.style.marginTop = '0.2rem'
        images.index = this.count
        this.count++
        this.$refs.box.appendChild(images)
      }
    },
    handleDeleteImages (e) {
      let index = e.target.index
      e.target.remove()
      this.files[index] = null
    }
  }
}
</script>
<style scoped>
		.box {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			height: 2rem;
			margin-top: 0.8rem;
		}
		.main {
			display: flex;
			flex-direction: column;
			padding-top: 0.4rem;
		}
		.publish {
			display: flex;
			justify-content: space-between;
			position: absolute;
			top: 50%;
			margin-top: -0.79rem;
			left: 50%;
			margin-left: -1.95rem;
			width: 3.9rem;
			height: 1.58rem;
		}
		.picture, .video {
			overflow: hidden;
		}
		.picture img, .video img{
			width: 1.1rem;
			height: 1.1rem;
		}
		.content {
			position: relative;
			height: 10rem;
		}
		.file {
			position: absolute;
			opacity: 0;
			height: 1.1rem;
			width: 1.1rem;
		}
		.status {
			position: relative;
			height: 0.98rem;
			line-height: 0.98rem;
			font-size: 0.2rem;
			text-align: center;
			color: #fff;
			background: #60adfe;
		}
		.title {
			margin-top: 0.24rem;
			font-size: 0.23rem;
			text-align: center;
			color: #595959;
		}
		.status::after {
			content: "";
			position: absolute;
			top: 0;
			height: 1px;
			width: 100%;
			transform: scaleY(0.5);
			background: #f4f4f4;
		}
		.back {
			position: absolute;
			left: 0.2rem;
			top: 0.3rem;
			font-size: 0.3rem;
			color: #666666;
		}
		.area {
			height: 2rem;
			border: none;
			border: 1px solid #000;
			resize: none;
		}
</style>