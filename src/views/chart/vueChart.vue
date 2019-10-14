<template>
  <div class="vueChart">
    <ve-line height="16rem" :data="chartDataLine" :settings="chartSettingsLine"></ve-line>
    <ve-histogram height="16rem" :data="chartDataHistogram" :settings="chartSettingsHistogram"></ve-histogram>
    <ve-pie height="20rem" :data="chartDataPie" :settings="chartSettingsPie"></ve-pie>
    <ve-ring height="20rem" :data="chartDataRing" :settings="chartSettingsRing"></ve-ring>
    <ve-liquidfill height="16rem" :data="chartDataLiquidfill" :settings="chartSettingsLiquidfill"></ve-liquidfill>
    <ve-amap :settings="chartSettingsAmap" :series="chartSeriesAmap" :tooltip="chartTooltipAmap"></ve-amap>
  </div>
</template>
<script>
/**
 * 1、安装包npm i v-charts echarts -S
 * 2.按需引入（src/chart/vueChart.js）
 * 3.在main.js中引入
 * **/
export default {
  name: 'vueChart',
  data () {
    // 折线图设置
    this.chartSettingsLine = {
      axisSite: { right: ['下单率'] },
      yAxisType: ['KMB', 'percent'],
      yAxisName: ['数值', '比率']
    }
    // 柱状图设置
    this.chartSettingsHistogram = {
      labelMap: {
        PV: '访问用户',
        Order: '下单用户'
      },
      legendName: {
        访问用户: '访问用户 total: 10000'
      }
    }
    // 饼状图设置---限制显示条数饼图
    this.chartSettingsPie = {
      limitShowNum: 5
    }
    // 环装图设置---设置数据类型单位k
    this.chartSettingsRing = {
      dataType: 'KMB'
    }
    // 水球的设置
    this.chartSettingsLiquidfill = {
      seriesMap: {
        上海: {
          // waveLength: '60%',
          shape: 'circle',
          label: {
            formatter (options) {
              // const { seriesName, value } = options
              return `30/40`
            },
            fontSize: 20
          },
          outline: {
            show: true, // 水珠边框是否显示
            borderDistance: 2,
            itemStyle: {
              borderColor: '#66a3ff',
              borderWidth: 2
            }
          }
        }
      }
    }
    // 高德地图
    this.chartSettingsAmap = {
      key: '4b5f2cf2cba25200cc6b68c398468899',
      v: '1.4.3',
      amap: {
        resizeEnable: true,
        center: [120.14322240845, 30.236064370321],
        zoom: 10
      }
    }
    this.chartTooltipAmap = { show: true }

    return {
      // 折线图数据
      chartDataLine: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '10-1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '10-2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '10-3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '10-4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '10-5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '10-6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      // 柱状图数据
      chartDataHistogram: {
        columns: ['date', 'PV', 'Order', 'OrderRate'],
        rows: [
          { date: '1/1', PV: 1393, Order: 1093, OrderRate: 1320 },
          { date: '1/2', PV: 3530, Order: 3230, OrderRate: 1260 },
          { date: '1/3', PV: 2923, Order: 2623, OrderRate: 1760 },
          { date: '1/4', PV: 1723, Order: 1423, OrderRate: 1490 },
          { date: '1/5', PV: 3792, Order: 3492, OrderRate: 1320 },
          { date: '1/6', PV: 4593, Order: 4293, OrderRate: 1780 }
        ]
      },
      // 饼状图数据---限制显示条数饼图
      chartDataPie: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      // 环状图数据
      chartDataRing: {
        columns: ['日期', '访问用户'],
        rows: [
          { 日期: '1/1', 访问用户: 1393 },
          { 日期: '1/2', 访问用户: 3530 },
          { 日期: '1/3', 访问用户: 2923 },
          { 日期: '1/4', 访问用户: 1723 },
          { 日期: '1/5', 访问用户: 3792 },
          { 日期: '1/6', 访问用户: 4593 }
        ]
      },
      // 设置水球装
      chartDataLiquidfill: {
        columns: ['city', 'percent'],
        rows: [
          {
            city: '上海',
            percent: 0.6
          }
        ]
      },
      chartSeriesAmap: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [120, 30, 1] // 经度，维度，value，...
          ]
        }
      ]
    }
  }
}
</script>
