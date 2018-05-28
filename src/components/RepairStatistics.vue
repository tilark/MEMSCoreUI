<template>
  <section>
    <el-col :span="24">
      <div id="chartColumn" style="width:100%; height:400px;"></div>
    </el-col>
    <el-col :span="24">
      <div id="charBar" style="width:100%; height:400px;"></div>
    </el-col>
  </section>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      charBar: null
    }
  },
  methods: {
    drawBarCharts () {
      var dom = document.getElementById('charBar')
      var myChart = echarts.init(dom)
      var app = {}
      var option = null
      var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
      ]
      app.configParameters = {
        rotate: {
          min: -90,
          max: 90
        },
        align: {
          options: {
            left: 'left',
            center: 'center',
            right: 'right'
          }
        },
        verticalAlign: {
          options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
          }
        },
        position: {
          options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos
            return map
          }, {})
        },
        distance: {
          min: 0,
          max: 100
        }
      }

      app.config = {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
          var labelOption = {
            normal: {
              rotate: app.config.rotate,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              position: app.config.position,
              distance: app.config.distance
            }
          }
          myChart.setOption({
            series: [{
              label: labelOption
            }, {
              label: labelOption
            }, {
              label: labelOption
            }, {
              label: labelOption
            }]
          })
        }
      }

      var labelOption = {
        normal: {
          show: true,
          position: app.config.position,
          distance: app.config.distance,
          align: app.config.align,
          verticalAlign: app.config.verticalAlign,
          rotate: app.config.rotate,
          formatter: '{c}  {name|{a}}',
          fontSize: 16,
          rich: {
            name: {
              textBorderColor: '#fff'
            }
          }
        }
      }

      option = {
        title: {
          text: '设备维修量统计',
          subtext: '2017年12月',
          y: 'top',
          x: 'center'
        },
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2018年第一季度', '2017年第四季度', '2017年第一季度'],
          x: 'center',
          y: 'bottom'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisTick: {show: false},
            data: ['第一个月', '第二个月', '第三个月', '合计']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '2018年第一季度',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [322, 233, 316, 871]
          },
          {
            name: '2017年第四季度',
            type: 'bar',
            label: labelOption,
            data: [378, 378, 319, 1075]
          },
          {
            name: '2017年第一季度',
            type: 'bar',
            label: labelOption,
            data: [307, 225, 341, 873]
          }
        ]
      }
      if (option && typeof option === 'object') {
        myChart.setOption(option, true)
      }
    },
    drawColumnChart () {
      this.chartColumn = echarts.init(document.getElementById('chartColumn'))
      this.chartColumn.setOption({
        title: { text: '设备类型维修统计' },
        tooltip: {},
        xAxis: {
          data: ['医用电子类', '检验、实验室类', '车床类', '非医用', '急救类', '血液透析类', '放射', '净化消毒', '负压氧气', '手术器械类', '光学内镜', '超声诊断类', '计量检定类', '其他医用'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            showMaxLabel: true,
            rotate: 35
          }
        },
        yAxis: {},
        series: [{
          name: '设备类型维修统计',
          type: 'bar',
          data: [540, 425, 389, 312, 306, 263, 255, 241, 209, 161, 151, 84, 60, 217],
          label: {
            show: true,
            rotate: -90
          }
        }]
      })
    },
    drawCharts () {
      this.drawBarCharts()
      this.drawColumnChart()
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
