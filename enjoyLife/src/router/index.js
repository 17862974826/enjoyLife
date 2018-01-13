import Vue from 'vue'
import Router from 'vue-router'
import courseIndex from '@/page/course/index'
import dynamic from '@/page/dynamic/index'
import mine from '@/page/mine/index'
import detail from '@/page/detail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'courseIndex',
      component: courseIndex
    }, {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    }, {
      path: '/mine',
      name: 'mine',
      component: mine
    }, {
      path: '/detail/:sightId',
      name: 'detail',
      component: detail,
      props: true
    }
  ]
})
