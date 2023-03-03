import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:9710,
  },
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'src'),
      '@components':path.resolve(__dirname,'src/components'),
      '@p-components':path.resolve(__dirname,'src/components/public'),
      '@pages':path.resolve(__dirname,'src/pages'),
      '@p-pages':path.resolve(__dirname,'src/pages/public'),
      '@utils':path.resolve(__dirname,'src/utils'),
      '@service':path.resolve(__dirname,'src/service'),
      '@style': path.resolve(__dirname,'src/styles'),
      '@langue': path.resolve(__dirname,'src/lang'),
      '@context': path.resolve(__dirname,'src/context'),
      '@image':path.resolve(__dirname,'assets'),
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
