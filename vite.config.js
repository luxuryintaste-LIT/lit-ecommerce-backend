import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Add Buffer polyfill
    'process.env': {},
    'global': {},
    'Buffer': ['buffer', 'Buffer'],
  },
  resolve: {
    alias: {
      // Add buffer polyfill
      'buffer': 'buffer/',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
})
