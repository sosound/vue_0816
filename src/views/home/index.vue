<template>
  <div id="main" style="width: 100%; height: 80vh"></div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, onMounted } from 'vue'
import china from '../../assets/china.json'

const myUser = () => {
  let internalInstance: any = getCurrentInstance()
  let echarts = internalInstance.appContext.config.globalProperties.$echarts
  let d3 = internalInstance.appContext.config.globalProperties.$d3
  const projection = d3.geoConicEqualArea()
  let chartDom = document.getElementById('main')
  var myChart = echarts.init(chartDom)
  echarts.registerMap('china', china)

  const option = {
    tooltip: {
      backgroundColor: 'rgba(21, 24, 45, 0.9)', // 提示框浮层的背景颜色。
      textStyle: {
        // 提示框浮层的文本样式。
        color: '#fff',
        fontSize: 14
      },
      extraCssText: 'border-color: rgba(21, 24, 45, 0.9);'
    },
    geo: {
      map: 'china',
      roam: false, //不开启缩放和平移
      zoom: 1.23, //视角缩放比例
      label: {
        normal: {
          show: true,
          fontSize: '10',
          color: 'rgba(255,255,255)'
        }
      },
      itemStyle: {
        normal: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          areaColor: '#13547a'
        },
        emphasis: {
          areaColor: '#fee140', //鼠标选择区域颜色
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      series: {
        type: 'map',
        projection: {
          project: (point: any) => projection(point),
          unproject: (point: any) => projection.invert(point)
        }
      }
    }
  }
  myChart.setOption(option)
}
onMounted(() => {
  myUser()
})
</script>
