<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  .card {
    height: 340px;
    width: 32%;
    border-radius: 10px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: Center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .chart {
      width: 100%;
      height: 100%;
    }
  }
  .big-card {
    height: 500px;
    width: 99%;
    border-radius: 10px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: Center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    .chart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<template>
  <div class="home">
    <!-- <div class="top">
      <el-card class="card" shadow="always" v-for="(item, index) in 6" :key="index">{{index}}</el-card>
    </div>-->
    <div class="top">
      <div class="card">
        <div class="chart" id="first-chart"></div>
      </div>
      <div class="card">
        <div class="chart" id="second-chart"></div>
      </div>
      <div class="card">
        <div class="chart" id="third-chart"></div>
      </div>
      <div class="big-card">
        <div class="chart" id="big-chart"></div>
      </div>
    </div>
    <div class="mid">
      <!-- <div class="second-chart" id="second-chart" style="width: 1200px;height:600px;"></div> -->
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  data () {
    return {
      firstChart: null,
      sencondChart: null,
      thirdChart: null,
      bigChart: null
    };
  },
  mounted () {
    this.$nextTick(() => {
      this.firstInit();
      this.secondInit();
      this.thirdInit();
      this.bigInit();
    });
    setTimeout(() => {
      window.addEventListener('resize', () => {
        this.firstChart.resize();
        this.sencondChart.resize();
        this.thirdChart.resize();
        this.bigChart.resize();
      });
    }, 200);
  },
  methods: {
    firstInit () {
      // data数据
      var data = [
        [
          [28604, 77, 17096869, 'Australia', 1990],
          [31163, 77.4, 27662440, 'Canada', 1990],
          [1516, 68, 1154605773, 'China', 1990],
          [13670, 74.7, 10582082, 'Cuba', 1990],
          [28599, 75, 4986705, 'Finland', 1990],
          [29476, 77.1, 56943299, 'France', 1990],
          [31476, 75.4, 78958237, 'Germany', 1990],
          [28666, 78.1, 254830, 'Iceland', 1990],
          [1777, 57.7, 870601776, 'India', 1990],
          [29550, 79.1, 122249285, 'Japan', 1990],
          [2076, 67.9, 20194354, 'North Korea', 1990],
          [12087, 72, 42972254, 'South Korea', 1990],
          [24021, 75.4, 3397534, 'New Zealand', 1990],
          [43296, 76.8, 4240375, 'Norway', 1990],
          [10088, 70.8, 38195258, 'Poland', 1990],
          [19349, 69.6, 147568552, 'Russia', 1990],
          [10670, 67.3, 53994605, 'Turkey', 1990],
          [26424, 75.7, 57110117, 'United Kingdom', 1990],
          [37062, 75.4, 252847810, 'United States', 1990]
        ],
        [
          [44056, 81.8, 23968973, 'Australia', 2015],
          [43294, 81.7, 35939927, 'Canada', 2015],
          [13334, 76.9, 1376048943, 'China', 2015],
          [21291, 78.5, 11389562, 'Cuba', 2015],
          [38923, 80.8, 5503457, 'Finland', 2015],
          [37599, 81.9, 64395345, 'France', 2015],
          [44053, 81.1, 80688545, 'Germany', 2015],
          [42182, 82.8, 329425, 'Iceland', 2015],
          [5903, 66.8, 1311050527, 'India', 2015],
          [36162, 83.5, 126573481, 'Japan', 2015],
          [1390, 71.4, 25155317, 'North Korea', 2015],
          [34644, 80.7, 50293439, 'South Korea', 2015],
          [34186, 80.6, 4528526, 'New Zealand', 2015],
          [64304, 81.6, 5210967, 'Norway', 2015],
          [24787, 77.3, 38611794, 'Poland', 2015],
          [23038, 73.13, 143456918, 'Russia', 2015],
          [19360, 76.5, 78665830, 'Turkey', 2015],
          [38225, 81.4, 64715810, 'United Kingdom', 2015],
          [53354, 79.1, 321773631, 'United States', 2015]
        ]
      ];

      var option = {
        // backgroundColor: '#fff',
        borderRadius: 15,
        title: {
          // text: '1990、2018年各国家人均寿命与GDP'
          borderRadius: 5
        },
        legend: {
          right: 10,
          data: ['1990', '2015']
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true
        },
        series: [
          {
            name: '1990',
            data: data[0],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: '#77d5e4'
              }
            }
          },
          {
            name: '2015',
            data: data[1],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function (param) {
                  return param.data[3];
                },
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: '#e36c77'
              }
            }
          }
        ]
      };
      this.firstChart = echarts.init(document.getElementById('first-chart'));
      this.firstChart.setOption(option);
    },
    secondInit () {
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: [
            '直达',
            '营销广告',
            '搜索引擎',
            '邮件营销',
            '联盟广告',
            '视频广告',
            '百度',
            '谷歌',
            '必应',
            '其他'
          ]
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直达', selected: true },
              { value: 679, name: '营销广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],

            data: [
              { value: 335, name: '直达' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1048, name: '百度' },
              { value: 251, name: '谷歌' },
              { value: 147, name: '必应' },
              { value: 102, name: '其他' }
            ]
          }
        ]
      };
      this.sencondChart = echarts.init(document.getElementById('second-chart'));
      this.sencondChart.setOption(option);
    },
    thirdInit () {
      var data = [];

      for (var i = 0; i <= 360; i++) {
        var t = (i / 180) * Math.PI;
        var r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
      }

      var option = {
        // backgroundColor: '#fff',
        borderRadius: 15,
        title: {
          // text: '极坐标双数值轴'
        },
        legend: {
          data: ['line']
        },
        polar: {
          center: ['50%', '54%']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        angleAxis: {
          type: 'value',
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      };
      this.thirdChart = echarts.init(document.getElementById('third-chart'));
      this.thirdChart.setOption(option);
    },
    bigInit () {
      var option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params, ticket, callback) {
            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
              if (params[i].seriesType === 'line') {
                res +=
                  '<br/>' +
                  params[i].seriesName +
                  ' : ' +
                  (params[i].value ? params[i].value : '-') +
                  'h';
              } else {
                res +=
                  '<br/>' +
                  params[i].seriesName +
                  ' : ' +
                  (params[i].value ? params[i].value : '-') +
                  '个';
              }
            }
            return res;
          }
        },
        grid: {
          containLabel: true,
          left: 60
        },
        legend: {
          data: ['时间', '人均个数', '总体个数']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: [
              '一月',
              '二月',
              '三月',
              '四月',
              '五月',
              '六月',
              '七月',
              '八月',
              '九月',
              '十月',
              '十一月',
              '十二月'
            ]
          }
        ],
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            end: 100
          },
          {
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            end: 100
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '时间',
            min: 0,
            position: 'left',
            axisLabel: {
              formatter: '{value} h'
            }
          },
          {
            type: 'value',
            name: '个数',
            min: 0,
            position: 'right',
            axisLabel: {
              formatter: '{value} 个'
            }
          }
        ],
        series: [
          {
            name: '时间',
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            lineStyle: {
              normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
              }
            },
            data: [1, 13, 37, 35, 15, 13, 25, 21, 6, 45, 32, 2]
          },
          {
            name: '人均个数',
            type: 'bar',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [22, 22, 23, 77, 24, 55, 55, 89, 98, 164, 106, 224]
          },
          {
            name: '总体个数',
            type: 'bar',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [
              201,
              222,
              223,
              777,
              244,
              255,
              555,
              879,
              938,
              1364,
              1806,
              2324
            ]
          }
        ]
      };
      this.bigChart = echarts.init(document.getElementById('big-chart'));
      this.bigChart.setOption(option);
    }
  }
};
</script>


