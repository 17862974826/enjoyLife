import Vue from 'vue'
import Router from 'vue-router'
import courseIndex from '@/page/course/index'
import dynamic from '@/page/dynamic/index'
import mine from '@/page/mine/index'
import detailIndex from '@/page/detail/index'
import Index from '@/page/index/index'
import detail from '@/page/sportDetail/detail'
import action from '@/page/actionVideo/action'
import toast from '../components/ui/toast'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
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
      path: '/index',
      name: 'Index',
      component: Index,
      children: [{
        path: 'ride',
        component: toast
      }, {
        path: 'walk',
        component: toast
      }]
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      props: true,
      meta: { scrollToTop: true }
    }, {
      path: '/action/:id',
      name: 'action',
      component: action,
      props: true
    }]
})
export default router

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  next()
})
