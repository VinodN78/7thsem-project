import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import d from "dotenv";
d.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: { '/foo': 'http://localhost:5173',
      '/api': {
        target: 'https://seventhsem-project1.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
    
    open: true,
  },
});
