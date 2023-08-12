import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
    // 配置代理
    proxy: {
      // 请求的路径前缀只要是 /api 就会被拦截走这个代理
      '/api': {
        /**
         *  请求的目标资源再经过替换成 /httphwm/getList 后，
         *  会加上 http://127.0.0.1:9693 这个前缀，
         *  最后请求的URL为: http://127.0.0.1:9693/httphwm/getList
         */
        target: 'http://127.0.0.1:9693',
        ws: true,
        secure: true,
        changeOrigin: true,
        // 拦截到的请求路径 api/httphwm/getList，/api会被替换成空
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
