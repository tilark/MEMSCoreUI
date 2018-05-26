import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import DeviceStatistics from '@/components/DeviceStatistics'
import RepairStatistics from '@/components/RepairStatistics'
import MaintanceStatistics from '@/components/MaintanceStatistics'
import MeasurementStatistics from '@/components/MeasurementStatistics'
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
    },
    {
      path: '/repairstatistics',
      name: 'repairstatistics',
      component: RepairStatistics
    },
    {
      path: '/maintancestatistics',
      name: 'maintancestatistics',
      component: MaintanceStatistics
    },
    {
      path: '/measurementstatistics',
      name: 'measurementstatistics',
      component: MeasurementStatistics
    }
  ]
})
