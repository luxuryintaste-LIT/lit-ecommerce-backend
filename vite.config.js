import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

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
      // Polyfills
      buffer: 'buffer',
      process: 'process/browser',
      stream: 'stream-browserify',
      util: 'util',
      assert: 'assert',
      events: 'events',
      crypto: 'crypto-browserify',
      url: 'url-browserify',
      querystring: 'querystring-es3',
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify/browser',
      path: 'path-browserify',
      fs: 'browserify-fs',
      zlib: 'browserify-zlib',
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
  build: {
    rollupOptions: {
      plugins: [],
      output: {
        manualChunks: undefined,
      },
    },
  },
})
