import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'three',
      '@react-three/fiber',
      '@react-three/drei'
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('@react-three')) return 'react-three-vendor';
            if (id.includes('three')) return 'three-core';
            if (id.includes('react-icons') || id.includes('@fortawesome')) return 'icons-vendor';
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  server: {
    fs: {
      allow: ['node_modules'],
      strict: false
    },
    watch: {
      usePolling: true
    }
  }
});
