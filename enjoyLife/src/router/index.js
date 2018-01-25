import Vue from 'vue'
import Router from 'vue-router'
import courseIndex from '@/page/course/index'
import dynamic from '@/page/dynamic/index'
import mine from '@/page/mine/index'
import detailIndex from '@/page/detail/index'
import Index from '@/page/index/index'
import detail from '@/page/sportDetail/detail'
import action from '@/page/actionVideo/action'
import register from '@/page/register/register'
import login from '@/page/login/login'
import start from '@/page/start/start'
import publish from '@/page/publish/publish'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/course',
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
      component: detailIndex
    }, {
      path: '/sportDetail/:id',
      name: 'sportDetail',
      component: detail,
      props: true
    }, {
      path: '/action/:id',
      name: 'action',
      component: action,
      props: true
    }, {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/',
      name: 'start',
      component: start
    }, {
      path: '/publish',
      name: 'publish',
      component: publish
    }
  ]
})
export default router

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  next()
})
