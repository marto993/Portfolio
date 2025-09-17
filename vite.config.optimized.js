import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  
  // Optimizaciones de build
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    
    // Optimizaciones de rollup
    rollupOptions: {
      output: {
        // Separar chunks para mejor caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          blog: ['./src/blog'],
          utils: ['date-fns', 'gray-matter', 'remark']
        },
        
        // Optimizar nombres de archivos
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    
    // Optimizaciones de minificación
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info']
      }
    },
    
    // Límites de tamaño
    chunkSizeWarningLimit: 1000
  },
  
  // Optimizaciones de desarrollo
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
  },
  
  // Optimizaciones de CSS
  css: {
    devSourcemap: false
  },
  
  // Optimizaciones de dependencias
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
      'date-fns',
      'gray-matter',
      'remark',
      'remark-html',
      'remark-gfm'
    ],
    exclude: ['@mdx-js/react', '@mdx-js/rollup']
  },
  
  // Configuración de preview
  preview: {
    port: 4173,
    open: true
  }
})
