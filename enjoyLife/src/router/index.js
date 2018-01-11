import Vue from 'vue'
import Router from 'vue-router'
import courseIndex from '@/page/course/index'
import Index from '@/page/index/index'
import ride from '@/page/index/children/ride'
import walk from '@/page/index/children/walk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course',
      name: 'courseIndex',
      component: courseIndex
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'ride',
          component: ride
        },
        {
          path: 'walk',
          component: walk
        }
      ]
    }
  ]
})
