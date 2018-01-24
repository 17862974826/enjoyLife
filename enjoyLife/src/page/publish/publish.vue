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
					<img src="/static/images/publish/video.jpg">
					<p class="title">视频动态</p>
				</div>
			</div>
		</div>
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
      show: false
    }
  },
  components: {
    toast
  },
  methods: {
    handlePublishClick () {
      let param = new FormData()
      this.files.forEach((val, index) => {
        if (val !== null) {
          param.append('pic' + (index + 1), val)
        }
      })
      axios.post('/index/dyn/dopost', {pic: param, content: ''}).then(this.handlePublishSucc.bind(this))
    },
    handlePublishSucc (res) {
      this.msg = res.data.msg
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 1200)
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
        images.style.border = '1px dashed #000'
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
			justify-content: space-around;
			height: 2rem;
			margin-top: 0.8rem;
		}
		.main {
			display: flex;
			flex-direction: column;
			padding-top: 0.4rem;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			overflow: hidden;
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
			flex: 1;
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
</style>