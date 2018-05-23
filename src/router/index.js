import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DeviceStatistics from '@/components/DeviceStatistics'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home1',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/devicestatistics',
      name: 'devicestatistics',
      component: DeviceStatistics
    }
  ]
})
