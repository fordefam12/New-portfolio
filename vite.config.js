import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // Set the target to 'es5' for legacy browser support
  build: {
    target: 'es5', // Change this to 'esnext' for modern browsers
  },
  // Add this resolve alias for jQuery
  resolve: {
    alias: {
      // ... other aliases
      jquery: 'jquery/dist/jquery.min.js',
    },
  },
});
