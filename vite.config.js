import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:9710,
    proxy: {
      '/api': {
        target: 'http://localhost:9630',
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'src'),
      '@components':path.resolve(__dirname,'src/components'),
      '@p-components':path.resolve(__dirname,'src/components/public'),
      '@pr-components':path.resolve(__dirname,'src/components/private'),
      '@pages':path.resolve(__dirname,'src/pages'),
      '@p-pages':path.resolve(__dirname,'src/pages/public'),
      '@pr-employe-pages':path.resolve(__dirname,'src/pages/private/employe'),
      '@pr-employeur-pages':path.resolve(__dirname,'src/pages/private/employeur'),
      '@pr-moderateur-pages':path.resolve(__dirname,'src/pages/private/moderateur'),
      '@utils':path.resolve(__dirname,'src/utils'),
      '@service':path.resolve(__dirname,'src/service'),
      '@helper':path.resolve(__dirname,'src/helper'),
      '@style': path.resolve(__dirname,'src/styles'),
      '@langue': path.resolve(__dirname,'src/lang'),
      '@context': path.resolve(__dirname,'src/context'),
      '@image':path.resolve(__dirname,'src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/color.scss";`,
      }
    }
  },
})
