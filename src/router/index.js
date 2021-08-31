import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue')
    }, {
      path: '/lazyLoad',
      name: 'LazyLoad',
      component: () => import('../views/LazyLoad.vue')
    }, {
      path: '/testCopy',
      name: 'TestCopy',
      component: () => import('../views/TestCopy.vue')
    }, {
      path: '/waterMarker',
      name: 'WaterMarker',
      component: () => import('../views/WaterMarker.vue')
    }
  ]
})

export default router