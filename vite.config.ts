import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig = {
    base: '/favQs-react/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
  }

  if (command === 'serve') {
    return {
      ...baseConfig,
      server: {
        proxy: {
          '/api': {
            target: 'https://favqs.com/api',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      }
    }
  } else {
    return baseConfig
  }
})
