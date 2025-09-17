import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/martin-digeronimo-portfolio/', // Base path para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: [
      'date-fns',
      'date-fns/locale'
    ]
  }
})