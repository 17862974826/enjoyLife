import Vue from 'vue'
import Router from 'vue-router'
import courseIndex from '@/page/course/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'courseIndex',
      component: courseIndex
    }
  ]
})
