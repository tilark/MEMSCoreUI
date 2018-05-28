<template>
  <section>
    <div id="charPie" style="width:100%; height:400px;"></div>
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
    drawPieCharts () {
      var pieChart = echarts.init(document.getElementById('charPie'))
      var option = {
        title: {
          text: '设备年限分布图',
          subtext: '截止至2018年12月',
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
          data: ['1年内', '1-2年', '2-3年', '3-4年', '4-5年', '5-6年', '6年以上']
        },
        series: [
          {
            name: '年限分布图',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 218, name: '1年内'},
              {value: 147, name: '1-2年'},
              {value: 217, name: '2-3年'},
              {value: 252, name: '3-4年'},
              {value: 198, name: '4-5年'},
              {value: 240, name: '5-6年'},
              {value: 1641, name: '6年以上'}
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
