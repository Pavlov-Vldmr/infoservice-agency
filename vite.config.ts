import react from '@vitejs/plugin-react'
import path from 'path';
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/infoservice-agency',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    },
    cors: true,
  }
})

