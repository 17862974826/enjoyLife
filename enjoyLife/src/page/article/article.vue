<template>
   <div class="main">
   <img :src="content">
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'articles',
  data () {
    return {
      id: '',
      content: ''
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
      this.content = res.msg[0].pic
    },
    getArticleDataErr () {}
  },
  activated () {
    this.id = this.$route.query.id
    this.getArticleData()
  }
}
</script>


<style scoped>

</style>
