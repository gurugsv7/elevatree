import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/elevatree/", // Ensure correct asset paths for GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
