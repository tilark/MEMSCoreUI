<template>
  <section>
    <el-col :span="12">
       <div id="scrapEquipment" style="width:100%; height:400px;"></div>
    </el-col>
    <el-col :span="12">
       <div id="scrapEquipmentReason" style="width:100%; height:400px;"></div>
    </el-col>
  </section>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      charPie: null
    }
  },
  methods: {
    drawScrapReasonPieCharts () {
      var pieChart = echarts.init(document.getElementById('scrapEquipmentReason'))
      var option = {
        title: {
          text: '设备报废原因统计',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: 10,
          top: 20,
          bottom: 20,
          data: ['老化严重', '故障严重', '维修成本高', '技术淘汰']
        },
        series: [
          {
            name: '设备报废原因统计',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 30, name: '老化严重'},
              {value: 8, name: '故障严重'},
              {value: 5, name: '维修成本高'},
              {value: 7, name: '技术淘汰'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      pieChart.setOption(option)
    },
    drawPieCharts () {
      var pieChart = echarts.init(document.getElementById('scrapEquipment'))
      var option = {
        title: {
          text: '报废设备使用年限统计',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: 10,
          top: 20,
          bottom: 20,
          data: ['4年', '5年', '6年', '7年', '8年', '9年']
        },
        series: [
          {
            name: '报废设备使用年限统计',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 1, name: '4年'},
              {value: 6, name: '5年'},
              {value: 6, name: '6年'},
              {value: 3, name: '7年'},
              {value: 24, name: '8年'},
              {value: 10, name: '9年'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      pieChart.setOption(option)
    },
    drawCharts () {
      this.drawPieCharts()
      this.drawScrapReasonPieCharts()
    }
  },
  mounted: function () {
    this.drawCharts()
  },
  updated: function () {
    this.drawCharts()
  }
}
</script>
