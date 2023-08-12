import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from "echarts"
import * as d3 from 'd3';
import * as geo from 'd3-geo';
import * as d3Color from 'd3-scale-chromatic'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$d3 = d3
app.config.globalProperties.$geo = geo
app.config.globalProperties.$d3Color = d3Color
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
