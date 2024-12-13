import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import d from "dotenv";
d.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://seventhsem-project1.onrender.com',  // Proxy all API requests to an external server
    },
    port: 10000,
    open: true,
  },
});
