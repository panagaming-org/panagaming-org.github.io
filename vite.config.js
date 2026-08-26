import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: 'https://panagaming-org.github.io/',
  server: {
    proxy: {
      '/api': {
        target: 'https://pg-backend-navy.vercel.app',
        changeOrigin: true,      
      }
    }
  }
})
/**https://pg-backend-navy.vercel.app */