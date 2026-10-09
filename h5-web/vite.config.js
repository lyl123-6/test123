import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import pxToViewport from 'postcss-px-to-viewport'

// 用户端 H5 工程配置
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ 指向 src 目录，方便 import
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        // 移动端适配：写 px 自动换算成 vw，以 iPhone 375 宽度为基准
        pxToViewport({
          viewportWidth: 375,
          unitPrecision: 5,
          viewportUnit: 'vw',
          selectorBlackList: ['.ignore-'],
          minPixelValue: 1,
          mediaQuery: false
        })
      ]
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      // 开发时把 /api 开头的请求转发到后端 Java 服务
      '/api': {
        target: 'http://localhost:8080', // 后端地址，联调时按实际修改
        changeOrigin: true
      }
    }
  }
})
